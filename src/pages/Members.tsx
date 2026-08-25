import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import Navbar from "../components/Navbar";
import { memberData } from "../data/MemberData";
import { currentPositions, formatRole } from "../data/hr-system-types";
import type { Position, Role } from "../data/hr-system-types";

/* ------------------------------------------------------------------ layout */

const CARD_W = 168;
const CARD_H = 58;
const CARD_GAP_X = 10;
const CARD_GAP_Y = 8;
const CARDS_TOP_GAP = 16;

const HEADER_W = 216;
const HEADER_H = 48;

const V_GAP = 48;
const H_GAP = 40;

const MIN_SCALE = 0.04;
const MAX_SCALE = 2.5;

/* ------------------------------------------------------------------- model */

type Kind = "root" | "sector" | "department" | "cluster" | "team";

interface Leaf {
  id: string;
  title: string;
  name: string;
  rank: number;
}

interface TreeNode {
  id: string;
  label: string;
  kind: Kind;
  cards: Leaf[];
  children: TreeNode[];
  /* measured */
  cols: number;
  rows: number;
  blockW: number;
  blockH: number;
  subW: number;
  /* placed */
  x: number;
  y: number;
  cx: number;
  bottom: number;
}

const SECTOR_ORDER = [
  "Internal Operations",
  "External Operations",
  "Development Operations",
  "Passive Roster",
];

const DEPARTMENT_ORDER = [
  "Development",
  "Product",
  "Quality Assurance",
  "Analytics",
  "Finance",
  "Human Resources",
  "Resource Management",
  "Auditing",
  "Events",
  "Graphic Design",
  "Marketing",
  "Public Relations",
  "Recruitment",
  "Undergoing Processing",
  "Not In Discord",
  "BREAK",
  "INACTIVE",
];

const ROLE_ORDER: Role[] = [
  "President",
  "Vice President",
  "Head",
  "Primary Lead",
  "Secondary Lead",
  "Team Lead",
  "Advisor",
  "Product Manager",
  "QA Analyst",
  "Developer",
  "Designer",
  "Analyst",
  "Auditor",
  "Accountant",
  "Financial Analyst",
  "Fundraiser",
  "Resource Manager",
  "Human Resources Specialist",
  "Marketer",
  "Recruiter",
  "Public Relations Specialist",
  "Secretary",
  "Treasurer",
  "Assistant",
  "Member",
];

function orderIndex(list: readonly string[], value: string): number {
  const i = list.indexOf(value);
  return i === -1 ? list.length : i;
}

function segmentsOf(p: Position): { key: string; label: string; kind: Kind }[] {
  const segments: { key: string; label: string; kind: Kind }[] = [];
  if (p.operationsSector)
    segments.push({
      key: p.operationsSector,
      label: p.operationsSector,
      kind: "sector",
    });
  if (p.department)
    segments.push({
      key: p.department,
      label: p.department,
      kind: "department",
    });
  if (p.cluster)
    segments.push({
      key: p.cluster,
      label: `${p.cluster} Cluster`,
      kind: "cluster",
    });
  if (p.team)
    segments.push({ key: p.team, label: `Team ${p.team}`, kind: "team" });
  return segments;
}

function makeNode(id: string, label: string, kind: Kind): TreeNode {
  return {
    id,
    label,
    kind,
    cards: [],
    children: [],
    cols: 0,
    rows: 0,
    blockW: 0,
    blockH: 0,
    subW: 0,
    x: 0,
    y: 0,
    cx: 0,
    bottom: 0,
  };
}

function buildTree(): TreeNode {
  const root = makeNode("root", "Campus Coders Crew", "root");
  const index = new Map<string, TreeNode>([["root", root]]);

  memberData.forEach((member, mi) => {
    currentPositions(member).forEach((position, pi) => {
      let node = root;
      let path = "root";
      for (const segment of segmentsOf(position)) {
        path += `/${segment.key}`;
        let next = index.get(path);
        if (!next) {
          next = makeNode(path, segment.label, segment.kind);
          index.set(path, next);
          node.children.push(next);
        }
        node = next;
      }
      node.cards.push({
        id: `${mi}-${pi}`,
        title: formatRole(position.role, position.experienceLevel),
        name: member.name,
        rank: orderIndex(ROLE_ORDER, position.role),
      });
    });
  });

  const sortNode = (node: TreeNode) => {
    node.cards.sort((a, b) => a.rank - b.rank || a.name.localeCompare(b.name));
    node.children.sort((a, b) => {
      if (a.kind === "sector" && b.kind === "sector")
        return (
          orderIndex(SECTOR_ORDER, a.label) - orderIndex(SECTOR_ORDER, b.label)
        );
      if (a.kind === "department" && b.kind === "department")
        return (
          orderIndex(DEPARTMENT_ORDER, a.label) -
          orderIndex(DEPARTMENT_ORDER, b.label)
        );
      return a.label.localeCompare(b.label);
    });
    node.children.forEach(sortNode);
  };
  sortNode(root);
  return root;
}

/**
 * Column count for a group's card grid. Narrow blocks pack far better here:
 * the header width is the floor on a node's width, so a one- or two-column
 * roster costs nothing horizontally while siblings sit side by side. This
 * keeps the whole chart near the viewport's aspect ratio when zoomed to fit.
 */
function columnsFor(count: number): number {
  if (count === 0) return 0;
  return Math.min(5, Math.max(1, Math.round(Math.sqrt(0.12 * count))));
}

function measure(node: TreeNode): void {
  node.children.forEach(measure);

  node.cols = columnsFor(node.cards.length);
  node.rows = node.cols ? Math.ceil(node.cards.length / node.cols) : 0;

  const cardsW = node.cols
    ? node.cols * CARD_W + (node.cols - 1) * CARD_GAP_X
    : 0;
  node.blockW = Math.max(HEADER_W, cardsW);
  node.blockH =
    HEADER_H +
    (node.rows
      ? CARDS_TOP_GAP + node.rows * CARD_H + (node.rows - 1) * CARD_GAP_Y
      : 0);

  const childrenW = node.children.length
    ? node.children.reduce((sum, c) => sum + c.subW, 0) +
      H_GAP * (node.children.length - 1)
    : 0;
  node.subW = Math.max(node.blockW, childrenW);
}

function place(node: TreeNode, left: number, top: number): void {
  node.y = top;
  node.cx = left + node.subW / 2;
  node.x = node.cx - node.blockW / 2;
  node.bottom = top + node.blockH;

  const childrenW = node.children.length
    ? node.children.reduce((sum, c) => sum + c.subW, 0) +
      H_GAP * (node.children.length - 1)
    : 0;
  let cursor = node.cx - childrenW / 2;
  for (const child of node.children) {
    place(child, cursor, node.bottom + V_GAP);
    cursor += child.subW + H_GAP;
  }
}

function flatten(node: TreeNode, out: TreeNode[] = []): TreeNode[] {
  out.push(node);
  node.children.forEach((c) => flatten(c, out));
  return out;
}

/* ------------------------------------------------------------------ styling */

const SECTOR_ACCENT: Record<string, string> = {
  "Internal Operations": "hsl(204, 90%, 45%)",
  "External Operations": "hsl(160, 65%, 40%)",
  "Development Operations": "hsl(28, 90%, 52%)",
  "Passive Roster": "hsl(215, 15%, 55%)",
};

const KIND_STYLE: Record<Kind, { bg: string; fg: string; size: number }> = {
  root: { bg: "hsl(204, 98%, 15%)", fg: "#ffffff", size: 20 },
  sector: { bg: "hsl(204, 90%, 25%)", fg: "#ffffff", size: 17 },
  department: { bg: "hsl(195, 80%, 90%)", fg: "hsl(204, 98%, 15%)", size: 15 },
  cluster: { bg: "hsl(47, 80%, 95%)", fg: "hsl(204, 98%, 15%)", size: 14 },
  team: { bg: "#ffffff", fg: "hsl(204, 98%, 15%)", size: 14 },
};

/** Nearest enclosing sector, used to tint a node's cards. */
function accentOf(node: TreeNode): string {
  const sector = node.id.split("/")[1];
  return SECTOR_ACCENT[sector] ?? "hsl(204, 90%, 25%)";
}

/* --------------------------------------------------------------- component */

interface View {
  x: number;
  y: number;
  k: number;
}

const clamp = (value: number, lo: number, hi: number) =>
  Math.min(hi, Math.max(lo, value));

export default function Members() {
  const { root, nodes, width, height, total } = useMemo(() => {
    const tree = buildTree();
    measure(tree);
    place(tree, 0, 0);
    const all = flatten(tree);
    return {
      root: tree,
      nodes: all,
      width: tree.subW,
      height: Math.max(...all.map((n) => n.bottom)),
      total: all.reduce((sum, n) => sum + n.cards.length, 0),
    };
  }, []);

  const viewportRef = useRef<HTMLDivElement>(null);
  const [view, setView] = useState<View>({ x: 0, y: 0, k: MIN_SCALE });

  const fit = useCallback(() => {
    const element = viewportRef.current;
    if (!element) return;
    const { clientWidth: vw, clientHeight: vh } = element;
    /* leave room for the fixed navbar and the page title above the canvas */
    const inset = 150;
    const usableH = Math.max(120, vh - inset - 24);
    const k = clamp(
      Math.min(vw / (width || 1), usableH / (height || 1)) * 0.94,
      MIN_SCALE,
      MAX_SCALE
    );
    setView({
      x: (vw - width * k) / 2,
      y: inset + Math.max(0, (usableH - height * k) / 2),
      k,
    });
  }, [width, height]);

  useEffect(fit, [fit]);

  /* wheel zoom about the cursor (non-passive so preventDefault sticks) */
  useEffect(() => {
    const element = viewportRef.current;
    if (!element) return;
    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      const rect = element.getBoundingClientRect();
      const px = event.clientX - rect.left;
      const py = event.clientY - rect.top;
      setView((v) => {
        const k = clamp(
          v.k * Math.exp(-event.deltaY * 0.0018),
          MIN_SCALE,
          MAX_SCALE
        );
        const ratio = k / v.k;
        return { k, x: px - (px - v.x) * ratio, y: py - (py - v.y) * ratio };
      });
    };
    element.addEventListener("wheel", onWheel, { passive: false });
    return () => element.removeEventListener("wheel", onWheel);
  }, []);

  /* drag to pan, two fingers to pinch */
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const pinch = useRef<{ distance: number; x: number; y: number } | null>(null);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    (event.target as Element).setPointerCapture?.(event.pointerId);
    pointers.current.set(event.pointerId, {
      x: event.clientX,
      y: event.clientY,
    });
    pinch.current = null;
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const previous = pointers.current.get(event.pointerId);
    if (!previous) return;
    const current = { x: event.clientX, y: event.clientY };
    pointers.current.set(event.pointerId, current);

    const points = [...pointers.current.values()];
    if (points.length >= 2) {
      const [a, b] = points;
      const distance = Math.hypot(a.x - b.x, a.y - b.y);
      const midX = (a.x + b.x) / 2;
      const midY = (a.y + b.y) / 2;
      const rect = viewportRef.current?.getBoundingClientRect();
      const previousPinch = pinch.current;
      pinch.current = { distance, x: midX, y: midY };
      if (previousPinch && rect && previousPinch.distance > 0) {
        const px = midX - rect.left;
        const py = midY - rect.top;
        setView((v) => {
          const k = clamp(
            (v.k * distance) / previousPinch.distance,
            MIN_SCALE,
            MAX_SCALE
          );
          const ratio = k / v.k;
          return { k, x: px - (px - v.x) * ratio, y: py - (py - v.y) * ratio };
        });
      }
      return;
    }

    const dx = current.x - previous.x;
    const dy = current.y - previous.y;
    setView((v) => ({ ...v, x: v.x + dx, y: v.y + dy }));
  };

  const endPointer = (event: React.PointerEvent<HTMLDivElement>) => {
    pointers.current.delete(event.pointerId);
    if (pointers.current.size < 2) pinch.current = null;
  };

  const zoomBy = (factor: number) => {
    const element = viewportRef.current;
    if (!element) return;
    const px = element.clientWidth / 2;
    const py = element.clientHeight / 2;
    setView((v) => {
      const k = clamp(v.k * factor, MIN_SCALE, MAX_SCALE);
      const ratio = k / v.k;
      return { k, x: px - (px - v.x) * ratio, y: py - (py - v.y) * ratio };
    });
  };

  const edges = useMemo(
    () =>
      nodes.flatMap((parent) =>
        parent.children.map((child) => ({
          id: child.id,
          d: `M ${parent.cx} ${parent.bottom} V ${parent.bottom + V_GAP / 2} H ${child.cx} V ${child.y}`,
        }))
      ),
    [nodes]
  );

  const buttonClass =
    "h-9 w-9 rounded-md bg-white/95 text-[hsl(204,98%,15%)] text-lg font-bold shadow " +
    "hover:bg-white cursor-pointer select-none leading-none";

  return (
    <>
      <Navbar />

      <main className="h-screen w-full overflow-hidden bg-[#193463]">
        {/* Header scrim: keeps the title readable as the chart pans beneath it. */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-30 px-4 pb-10 pt-[76px] text-center"
          style={{
            background:
              "linear-gradient(to bottom, #193463 0%, #193463 62%, rgba(25,52,99,0) 100%)",
          }}
        >
          <h1 className="text-2xl font-bold text-white sm:text-3xl">
            Organization Chart
          </h1>
          <p className="mt-1 text-sm text-white/70">
            {total} current positions across {root.children.length} sectors —
            drag to move, scroll or pinch to zoom.
          </p>
        </div>

        <div className="absolute right-4 top-[76px] z-30 flex flex-col gap-2">
          <button
            type="button"
            aria-label="Zoom in"
            className={buttonClass}
            onClick={() => zoomBy(1.35)}
          >
            +
          </button>
          <button
            type="button"
            aria-label="Zoom out"
            className={buttonClass}
            onClick={() => zoomBy(1 / 1.35)}
          >
            −
          </button>
          <button
            type="button"
            aria-label="Fit to screen"
            className={`${buttonClass} text-xs`}
            onClick={fit}
          >
            FIT
          </button>
        </div>

        <div
          ref={viewportRef}
          className="h-full w-full touch-none overflow-hidden"
          style={{ cursor: "grab" }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endPointer}
          onPointerCancel={endPointer}
          onPointerLeave={endPointer}
        >
          <div
            style={{
              width,
              height,
              transform: `translate(${view.x}px, ${view.y}px) scale(${view.k})`,
              transformOrigin: "0 0",
              position: "relative",
            }}
          >
            <svg
              width={width}
              height={height}
              className="pointer-events-none absolute left-0 top-0"
            >
              {edges.map((edge) => (
                <path
                  key={edge.id}
                  d={edge.d}
                  fill="none"
                  stroke="rgba(255,255,255,0.35)"
                  strokeWidth={2}
                />
              ))}
            </svg>

            {nodes.map((node) => {
              const style = KIND_STYLE[node.kind];
              const accent = accentOf(node);
              return (
                <div
                  key={node.id}
                  style={{
                    position: "absolute",
                    left: node.x,
                    top: node.y,
                    width: node.blockW,
                  }}
                >
                  <div
                    className="flex flex-col items-center justify-center rounded-lg px-3 text-center shadow-md"
                    style={{
                      height: HEADER_H,
                      width: HEADER_W,
                      marginLeft: (node.blockW - HEADER_W) / 2,
                      background: style.bg,
                      color: style.fg,
                      fontSize: style.size,
                      fontWeight: 700,
                      lineHeight: 1.15,
                      border:
                        node.kind === "team"
                          ? `2px solid ${accent}`
                          : "2px solid transparent",
                    }}
                  >
                    <span>{node.label}</span>
                    {node.cards.length > 0 && (
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: 500,
                          opacity: 0.75,
                        }}
                      >
                        {node.cards.length}
                        {node.cards.length === 1 ? " position" : " positions"}
                      </span>
                    )}
                  </div>

                  {node.rows > 0 && (
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: `repeat(${node.cols}, ${CARD_W}px)`,
                        columnGap: CARD_GAP_X,
                        rowGap: CARD_GAP_Y,
                        justifyContent: "center",
                        marginTop: CARDS_TOP_GAP,
                      }}
                    >
                      {node.cards.map((card) => (
                        <div
                          key={card.id}
                          className="flex flex-col justify-center rounded-md bg-white px-2.5 shadow"
                          style={{
                            height: CARD_H,
                            borderLeft: `4px solid ${accent}`,
                          }}
                        >
                          <span
                            style={{
                              fontSize: 12,
                              fontWeight: 700,
                              color: accent,
                              lineHeight: 1.15,
                            }}
                          >
                            {card.title}
                          </span>
                          <span
                            style={{
                              fontSize: 13,
                              color: "hsl(204, 98%, 15%)",
                              lineHeight: 1.2,
                            }}
                          >
                            {card.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}

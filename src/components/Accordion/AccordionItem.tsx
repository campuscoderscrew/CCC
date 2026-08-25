import type { ReactNode } from "react";
import { useState, useRef, useEffect } from "react";

import shipWheel from "@assets/ship-wheel.png";

type Props = {
  title: string;
  children: ReactNode;

  id: number;
  isOpen: boolean;
  handleToggle: (id: number) => void;

  /**
   * Tightens the toggle row so a single-item accordion reads as a compact
   * disclosure box rather than a full FAQ list.
   */
  compact?: boolean;
};

export default function AccordionItem(props: Props) {
  const { title, children, id, isOpen, handleToggle, compact = false } = props;

  // For precise accordion opening
  const [panelHeight, setPanelHeight] = useState<number>(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const panelMaxHeight = { maxHeight: isOpen ? panelHeight : 0 };

  useEffect(() => {
    /**
     * Determines the max height of the accordion body
     */
    const handleResize = () => {
      const height = panelRef.current?.scrollHeight;
      height && setPanelHeight(height);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // The panel's left margin must equal the button's left padding plus the ship
  // wheel's width plus the gutter between them, so the body lines up with the
  // label above it.
  // Default: p-4 (16) + size-10 (40) + gap-4 (16) = 72px = ml-18
  // Compact:  px-2 (8) + size-8  (32) + gap-3 (12) = 52px = ml-13
  const buttonSpacing = compact ? "px-2 py-3 gap-3" : "p-4 gap-4";
  const wheelSize = compact ? "size-8" : "size-10";
  const panelSpacing = compact ? "ml-13 -mt-3 mb-3" : "ml-18 -mt-4 mb-4";

  return (
    <div className="flex flex-col justify-items-stretch text-ocean-dark">
      {/* Panel toggle */}
      <button
        onClick={() => handleToggle(id)}
        className={`group flex items-center cursor-pointer ${buttonSpacing}`}
      >
        <div
          className={`${wheelSize} shrink-0 grid transition duration-1000 ease-in-out
            ${isOpen ? "rotate-180" : "rotate-0"}`}
        >
          <img className="place-self-center" src={shipWheel} />
        </div>
        <span className="text-left">{title}</span>
      </button>

      {/* Panel content */}
      <div
        ref={panelRef}
        style={panelRef.current ? panelMaxHeight : {}}
        className={`bg-white overflow-hidden transition-all ease-in-out
          ${panelSpacing}
          ${isOpen ? "duration-500" : "duration-300"}`}
      >
        <div className="">{children}</div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Member {
  id: string;
  name: string;
  isLead?: boolean;
  avatarUrl: string;
}

interface Team {
  id: string;
  name: string;
  members: Member[];
}

var blankIcon="https://static.vecteezy.com/system/resources/previews/028/569/170/non_2x/single-man-icon-people-icon-user-profile-symbol-person-symbol-businessman-stock-vector.jpg"

// ─── Data ─────────────────────────────────────────────────────────────────────

const TEAMS: Team[] = [
  {
    id: "events",
    name: "Events",
    members: [
      { id: "e1",  name: "Lorem Ipsum", isLead: true, avatarUrl: blankIcon },
      { id: "e2",  name: "Lorem Ipsum", avatarUrl: blankIcon },
      { id: "e3",  name: "Lorem Ipsum", avatarUrl: blankIcon },
      { id: "e4",  name: "Lorem Ipsum", avatarUrl: blankIcon },
      { id: "e5",  name: "Lorem Ipsum", avatarUrl: blankIcon },
      { id: "e6",  name: "Lorem Ipsum", avatarUrl: blankIcon },
    ],
  },
  {
    id: "finance",
    name: "Finance",
    members: [
      { id: "f1", name: "Lorem Ipsum", isLead: true, avatarUrl: blankIcon },
      { id: "f2", name: "Lorem Ipsum", avatarUrl: blankIcon },
      { id: "f3", name: "Lorem Ipsum", avatarUrl: blankIcon },
      { id: "f4", name: "Lorem Ipsum", avatarUrl: blankIcon },
      { id: "f5", name: "Lorem Ipsum", avatarUrl: blankIcon },
      { id: "f6", name: "Lorem Ipsum", avatarUrl: blankIcon },
    ],
  },
  {
    id: "logistics",
    name: "Logistics",
    members: [
      { id: "l1", name: "Lorem Ipsum", isLead: true, avatarUrl: blankIcon },
      { id: "l2", name: "Lorem Ipsum", avatarUrl: blankIcon },
      { id: "l3", name: "Lorem Ipsum", avatarUrl: blankIcon },
      { id: "l4", name: "Lorem Ipsum", avatarUrl: blankIcon },
      { id: "l5", name: "Lorem Ipsum", avatarUrl: blankIcon },
    ],
  },
];

const COLS = 4;


// ─── Member Card ──────────────────────────────────────────────────────────────

function MemberCard({ member }: { member: Member }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-full aspect-square rounded-2xl overflow-hidden">
        <img
          src={member.avatarUrl}
          alt={member.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <span className="text-white text-base">{member.name}</span>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function TeamWhale() {
  // Each "slide" is one team. The dots & arrows navigate between teams.
  const [teamIndex, setTeamIndex] = useState(0);
  const team = TEAMS[teamIndex];

  // Build rows of COLS, padding the last row with nulls so the grid stays even
  const rows: (Member | null)[][] = [];
  for (let i = 0; i < team.members.length; i += COLS) {
    const row = team.members.slice(i, i + COLS) as (Member | null)[];
    while (row.length < COLS) row.push(null);
    rows.push(row);
  }

  const hasLead = team.members.some((m) => m.isLead);

  function prev() { setTeamIndex((i) => Math.max(0, i - 1)); }
  function next() { setTeamIndex((i) => Math.min(TEAMS.length - 1, i + 1)); }

  return (
    <>
      <style>{`body { margin: 0; }`}</style>

      <div className="min-h-screen text-white flex flex-col relative overflow-hidden">

        {/* Content */}
        <div className="flex-1 flex flex-col px-16 pt-10 pb-10 relative z-10">

          {/* Title */}
          <h1 className="text-[3vw] font-bold mb-12 text-white text-center">
            {team.name}
          </h1>

          {/* Team Lead label */}
          {hasLead && (
            <p className="text-base font-bold mt-10 absolute left-1/8" style={{ color: "#E2D8B5" }}>
              Team Lead
            </p>
          )}

          {/* Dynamic grid — one row per group of 4 */}
          <div className="flex flex-col gap-6">
            {rows.map((row, rowIdx) => (
              <div key={rowIdx} className="grid grid-cols-4 gap-6">
                {row.map((m, colIdx) =>
                  m ? (
                    <MemberCard key={m.id} member={m} />
                  ) : (
                    // invisible placeholder keeps columns aligned
                    <div key={`ph-${rowIdx}-${colIdx}`} className="flex flex-col gap-3 invisible">
                      <div className="w-full aspect-square rounded-2xl bg-[#d0d0d0]" />
                      <span className="text-base">—</span>
                    </div>
                  )
                )}
              </div>
            ))}
          </div>

          {/* Pagination — navigates between teams */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prev}
              disabled={teamIndex === 0}
              className="text-white disabled:opacity-30 text-xl w-6 text-center"
              aria-label="Previous team"
            >
              ‹
            </button>

            {TEAMS.map((_, i) => (
              <button
                key={i}
                onClick={() => setTeamIndex(i)}
                className="w-3 h-3 rounded-full transition-colors"
                style={{ backgroundColor: i === teamIndex ? "#FFFFFF" : "#a2a2a2" }}
                aria-label={`Team ${i + 1}`}
              />
            ))}

            <button
              onClick={next}
              disabled={teamIndex === TEAMS.length - 1}
              className="text-white disabled:opacity-30 text-xl w-6 text-center"
              aria-label="Next team"
            >
              ›
            </button>
          </div>

        </div>
      </div>
    </>
  );
}
import { FaChevronRight } from "react-icons/fa";

import Accordion from "../Accordion";

type Rank = {
  name: string;
  note: string;
};

const ranks: Rank[] = [
  { name: "Associate", note: "New members start here" },
  { name: "Intermediate", note: "After an active season" },
  { name: "Senior", note: "After another active season" },
];

type Position = {
  title: string;
  level?: string;
  seniorLevel?: boolean;
  description: string;
  internal?: boolean;
};

const positions: Position[] = [
  {
    title: "President",
    level: "Senior Executive-level",
    seniorLevel: true,
    description: "Manages the Vice Presidents.",
    internal: true,
  },
  {
    title: "Vice President",
    level: "Senior Executive-level",
    seniorLevel: true,
    description: "Manages an operations sector (a group of departments).",
    internal: true,
  },
  {
    title: "Department Head",
    level: "Executive-level",
    description: "Manages a department.",
  },
  {
    title: "Team Lead",
    description: "Manages a team within a department.",
  },
  {
    title: "Member",
    description: "Hands-on work.",
  },
];

/**
 * Body of the "Membership Information" panel. Rendered inside the `Accordion`
 * panel, which supplies the white background, so subsections use tinted
 * surfaces rather than white cards.
 */
function MembershipDetails() {
  return (
    <div
      className="pb-2 space-y-8 text-base
        [&_h3]:font-semibold [&_h4]:font-semibold"
    >
      {/* Open-Admissions Policy */}
      <section className="space-y-2">
        <h3 className="text-xl">Open-Admissions Policy</h3>
        <p className="text-pretty">
          Our departments are non-selective; all prospective members are
          admitted to the departments they apply to. We believe everyone can
          contribute meaningfully, regardless of their background.
        </p>
      </section>

      {/* Promotions */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl">Promotions</h3>
          <p className="text-pretty">
            Members start off at an Associate level. After a development season,
            active Associate members are promoted to Intermediate. After another
            season, active Intermediate members are promoted to Senior. This
            progression was implemented to promote productivity in the club.
          </p>
        </div>

        {/* Associate -> Intermediate -> Senior */}
        <ol className="flex max-sm:flex-col items-stretch sm:items-center gap-2">
          {ranks.map((rank, i) => (
            <li key={rank.name} className="contents">
              <div
                className="grow p-4 flex flex-col gap-1 items-center text-center
                  bg-sky-light/50 rounded-xl ring-1 ring-ocean-light/15"
              >
                <span className="font-semibold">{rank.name}</span>
                <span className="text-sm text-ocean-light">{rank.note}</span>
              </div>

              {/* Connector; points down once the chain stacks */}
              {i < ranks.length - 1 && (
                <FaChevronRight
                  aria-hidden
                  className="shrink-0 self-center text-ocean-light/60
                    max-sm:rotate-90"
                  size={16}
                />
              )}
            </li>
          ))}
        </ol>
      </section>

      {/* Management Positions */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl">Management Positions</h3>
          <p className="text-pretty">
            Every position is a learning opportunity; we don&apos;t expect
            members to know everything beforehand. Non-Executive positions are
            filled based on interest. Non-Senior Executive positions may be
            applied to via one of the forms on this page. Executive positions
            are filled based on whoever meets our minimum qualifications.
          </p>
          <p className="text-pretty">
            Our management structure is outlined below:
          </p>
        </div>

        <ol className="divide-y divide-black/10 border-l-2 border-sky-dark">
          {positions.map((position, i) => (
            <li key={position.title} className="py-4 pl-4 flex gap-4">
              <span
                className="size-8 shrink-0 grid place-items-center rounded-full
                  bg-ocean-light text-sand-light text-sm font-semibold"
              >
                {i + 1}
              </span>

              <div className="space-y-1">
                <div className="flex flex-wrap gap-x-3 gap-y-1 items-center">
                  <h4 className="text-lg">{position.title}</h4>

                  {position.level && (
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-semibold
                        ${
                          position.seniorLevel
                            ? "bg-ocean-light text-sand-light"
                            : "bg-sky-light text-ocean-light"
                        }`}
                    >
                      {position.level}
                    </span>
                  )}

                  {position.internal && (
                    <span
                      className="px-2.5 py-0.5 rounded-full text-xs font-semibold
                        text-ocean-light ring-1 ring-ocean-light/30"
                    >
                      Sourced internally
                    </span>
                  )}
                </div>

                <p>{position.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* BREAK + more details */}
      <div className="grid md:grid-cols-2 gap-6 items-stretch">
        <section
          className="h-full p-4 space-y-2 border-l-4 border-ocean-light
            bg-sand-light rounded-r-xl"
        >
          <h3 className="text-lg">On BREAK</h3>
          <p>
            If you are interested in joining a department in the future but do
            not have availability currently, you can indicate interest in being
            placed on <b>BREAK</b> and we will reach out to you down the line.
            There is a &ldquo;Weekly Availability&rdquo; question in the
            application forms where you can indicate your availability.
          </p>
        </section>

        <section
          className="h-full p-4 space-y-2 border-l-4 border-ocean-light
            bg-sand-light rounded-r-xl"
        >
          <h3 className="text-lg">More Details</h3>
          <p>
            For details on what each department does, please review our{" "}
            <a
              href="https://docs.google.com/document/d/1h7bEzolbzK2O4zOQ3YjAPsZZ9LAMSBxM2Cw2EWNRmQk/edit?tab=t.0"
              className="font-semibold text-ocean-light hover:underline"
            >
              Management Strategy
            </a>{" "}
            document.
          </p>
        </section>
      </div>
    </div>
  );
}

/**
 * Collapsible "Membership Information" panel, slotted into `Join` between the
 * "Want to Join?" heading and the blurb below it. That block is centred and
 * `gap-4`, so `text-left` restores prose alignment and `my-4` widens the
 * breathing room around a panel this tall. `z-30` matches the FAQ so the wave
 * that follows `Join` does not paint over it.
 */
export default function MembershipInformation() {
  return (
    <section
      className="z-30 my-2 w-full max-w-250
        font-sans text-left text-ocean-dark"
    >
      <Accordion
        compact
        labels={["Membership Information"]}
        content={[<MembershipDetails />]}
      />
    </section>
  );
}

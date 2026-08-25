import { FaChevronRight } from "react-icons/fa";

import Accordion from "../Accordion";
import { applicationFormData } from "../../data/ApplicationFormData";
import type {
  ApplicationSector,
  DepartmentApplicationData,
} from "../../data/types";

/** The sheet's short sector keys, spelled out for the page. */
const SECTOR_LABELS: Record<ApplicationSector, string> = {
  Development: "Development Operations",
  Internal: "Internal Operations",
  External: "External Operations",
};

/**
 * The one department expanded when the page loads, so visitors land on the
 * department most of them are here for. Every other panel starts closed.
 */
const DEFAULT_OPEN_DEPARTMENT = "Development";

const SECTOR_BLURBS: Record<ApplicationSector, string> = {
  Development: "Builds the websites and products we ship for our clients.",
  Internal: "Keeps the club itself running — people, money, and resources.",
  External: "Connects the club to the campus and to prospective members.",
};

/**
 * Body of one department's accordion panel: where to apply, what the
 * department is working on, and the positions it does and does not have open.
 *
 * Rendered inside the `Accordion` panel, which supplies the white background,
 * so the position lists use tinted surfaces rather than white cards.
 */
function DepartmentPanel(props: { data: DepartmentApplicationData }) {
  const { data } = props;
  const open = data.applicationPositions.filter((p) => !p.closed);
  const closed = data.applicationPositions.filter((p) => p.closed);

  return (
    <div className="pb-2 space-y-6 text-base">
      {/* Links */}
      <div className="flex max-xs:flex-col flex-wrap items-start gap-3">
        <a
          href={data.applicationLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3
            bg-ocean-light rounded-lg text-sand-light font-bold
            transition duration-300
            hover:bg-transparent hover:outline-2 hover:text-ocean-light"
        >
          Apply to {data.department}
          <FaChevronRight aria-hidden className="text-sm" />
        </a>

        <a
          href={data.departmentInitativesLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3
            rounded-lg outline-2 outline-ocean-light/40 font-bold
            text-ocean-light transition duration-300
            hover:outline-ocean-light hover:bg-sky-light/50"
        >
          Department Initiatives
        </a>
      </div>

      {/* Currently accepting */}
      {open.length > 0 && (
        <section className="space-y-3">
          <h5 className="font-semibold">Currently accepting</h5>
          <ul className="space-y-2">
            {open.map((position) => (
              <li
                key={position.position}
                className="px-4 py-3 bg-sky-light/40 rounded-lg"
              >
                <p className="font-semibold">{position.position}</p>
                <p className="text-pretty">{position.positionDescription}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Listed for context, but not open this season */}
      {closed.length > 0 && (
        <section className="space-y-3">
          <h5 className="font-semibold">Not currently accepting</h5>
          <ul className="space-y-2">
            {closed.map((position) => (
              <li
                key={position.position}
                className="px-4 py-3 rounded-lg outline outline-black/10"
              >
                <p className="flex flex-wrap items-center gap-2 font-semibold">
                  <span className="opacity-70">{position.position}</span>
                  <span
                    className="px-2 py-0.5 bg-black/8 rounded-full
                      text-xs font-bold uppercase tracking-wide opacity-70"
                  >
                    Closed
                  </span>
                </p>
                <p className="text-pretty opacity-70">
                  {position.positionDescription}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

/**
 * Every department's application form, grouped by operations sector. Each
 * sector gets its own accordion so only one department is expanded at a time.
 */
export default function DepartmentApplications() {
  return (
    <section className="w-full max-w-4xl space-y-12 text-ocean-dark">
      <div className="space-y-2 text-center">
        <h3 className="text-3xl font-bold">Apply by Department</h3>
        <p className="mx-auto max-w-200 text-pretty">
          Each department runs its own application. Open one below to see what
          it works on and which positions it's hiring for. You're welcome to
          apply to more than one (be wary of applying to too many positions;
          since we accept all applications, some members get burnt out by
          applying to too many departments).
        </p>
      </div>

      {applicationFormData.applicationSectors.map((sector) => (
        <div key={sector.sector} className="space-y-4">
          <div className="space-y-1">
            <h4 className="text-2xl font-bold">
              {SECTOR_LABELS[sector.sector]}
            </h4>
            <p className="text-pretty opacity-80">
              {SECTOR_BLURBS[sector.sector]}
            </p>
          </div>

          <Accordion
            /* -1 in every sector that lacks it, which leaves those closed. */
            defaultOpenId={sector.departments.findIndex(
              (d) => d.department === DEFAULT_OPEN_DEPARTMENT
            )}
            labels={sector.departments.map((d) => d.department)}
            content={sector.departments.map((d) => (
              <DepartmentPanel key={d.department} data={d} />
            ))}
          />
        </div>
      ))}
    </section>
  );
}

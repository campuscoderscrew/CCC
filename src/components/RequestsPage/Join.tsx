import type { ReactNode } from "react";

import FAQ from "./FAQ";

type Props = {
  /** Optional content slotted between the "Want to Join?" heading and the
   * blurb that introduces the interest forms. */
  children?: ReactNode;

  /** Optional content slotted between the interest forms and the FAQ. */
  applications?: ReactNode;
};

export default function Join(props: Props) {
  const { children, applications } = props;

  return (
    <div
      className="-mt-48 pt-48 -mb-[20%]
          bg-linear-to-b from-white to-[#BAEBF8] to-70%"
    >
      <div
        className="mx-8 mt-16
            flex flex-col items-center gap-16 text-ocean-dark"
      >
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-4xl font-bold">Want to Join?</h2>

          <p className="max-w-200 self-center text-base text-pretty">
            If you're interested in becoming part of <b>Campus Coders Crew</b>,
            please fill out one of the forms below!
          </p>

          {children}
        </div>

        {applications}

        <FAQ />
      </div>
    </div>
  );
}

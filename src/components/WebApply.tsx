import React from "react";

// (Eligibility, process, timeline, cost), form button
export default function WebApply() {
  return (
    <div
      className="py-4 flex flex-col items-center 
        text-ocean-dark bg-sand-light"
    >
      <h2 className="text-2xl font-bold text-center">Apply for a Website</h2>
      <div
        className="max-w-250 w-full px-8
          grid grid-cols-2 [&_h3]:font-bold 
          *:p-4"
      >
        <div>
          <h3>Eligibility</h3>
          <p>
            All UMD students and clubs can request a website! Not from UMD? Feel
            free to email us for follow up details.
          </p>
        </div>
        <div>
          <h3>Process</h3>
          <p>
            All requests will be fulfilled! If no teams are currently available,
            you'll be placed on a waitlist.
          </p>
        </div>
        <div>
          <h3>Timeline</h3>
          <p>
            Placement depends on team availability and demand. All respondents
            will be kept up to date with the status of their application.
          </p>
        </div>
        <div>
          <h3>Cost</h3>
          <p>
            Our base plan is free. For backend and server-side applications,
            pricing will adjust accordingly.
          </p>
        </div>
      </div>
    </div>
  );
}

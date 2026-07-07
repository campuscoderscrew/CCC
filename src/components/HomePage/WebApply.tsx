import WantWebsiteButton from "./WantWebsiteButton";

// (Eligibility, process, timeline, cost), form button
export default function WebApply() {
  return (
    <>
      <div id="request-website"  
        className="pt-8 px-4 flex flex-col gap-4 items-center 
        text-base text-ocean-dark bg-sand-light"
      >
        <h2 className="text-2xl font-bold text-center">Apply for a Website</h2>
        <div
          className="max-w-250 w-full grid md:grid-cols-2 gap-4
          [&_h3]:my-2 [&_h3]:text-xl [&_h3]:font-bold
          *:p-4 *:rounded-lg
          *:transition *:duration-300 *:hover:shadow-md
          *:hover:outline *:outline-black/3"
        >
          <div>
            <h3>Eligibility</h3>
            <p>
              All UMD students and clubs can request a website! Not from UMD?
              Feel free to email us for follow up details.
            </p>
          </div>
          <div>
            <h3>Process</h3>
            <p>
              All requests will be fulfilled! If no teams are currently
              available, you'll be placed on a waitlist.
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

        <WantWebsiteButton/>
      </div>
      <svg
        className="bg-sky-light fill-sand-light"
        viewBox="0 0 600 30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 27.0282V18.3972V0.0004673H600V18.3972C557.164 18.5807 464.67 
            7.86426 309.408 20.018C154.145 32.1717 45.56 31.5168 0 27.0282Z"
        />
        <path
          d="M0 15.8592V5.70506V0.00053215H600V5.70506C557.164 5.92103 464.67 
            -6.68657 309.408 7.61195C154.145 21.9105 45.56 21.14 0 15.8592Z"
        />
      </svg>
    </>
  );
}

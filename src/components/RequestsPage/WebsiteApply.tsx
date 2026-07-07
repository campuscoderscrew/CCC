export default function WebsiteApply(){
    return(
        <div
        className="mx-8 md:mx-16 lg:mx-32 mt-16 
          flex flex-col gap-16 items-center font-sans text-ocean-dark
          [&_h1]:font-semibold [&_h2]:font-semibold [&_h3]:font-semibold"
      >
        <h1 className="text-4xl">Requests</h1>
        <div
          className="w-full grid sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 
          [&_div]:space-y-2 md:[&_div]:col-span-2
          [&_h3]:text-xl [&_p]:text-base"
        >
          <h2
            className="sm:max-md:col-span-2 md:row-span-2 
              text-2xl text-balance"
          >
            Apply for a Website
          </h2>

          <div>
            <h3>Eligibility</h3>
            <p>All UMD students and clubs can request a website!</p>
            <p>Not from UMD? Email us for follow up details</p>
          </div>

          <div>
            <h3>Request a Website</h3>
            <p>
              All requests will be fulfilled! If no teams are currently
              available, you'll be placed on a waitlist.
            </p>
          </div>

          <div>
            <h3>Wishlist</h3>
            <p>
              Placement depends on team availability and demand. All respondents
              will be kept up to date with the status of their application
            </p>
          </div>

          <div>
            <h3>Pricing</h3>
            <p>
              Our base plan is free. For back end and server-side applications,
              pricing will adjust accordingly
            </p>
          </div>
        </div>

        {/* TODO: Add new theme color #09578A */}
        <div
          className="z-10 w-full p-8
            flex flex-col gap-2 items-center  
            bg-[#09578A] rounded-3xl text-sand-light text-center"
        >
          <h2 className="text-2xl">Want a Website?</h2>
          <span className="font-light">
            Please fill out the form below, and we'll reach out!
          </span>
          <a
            className="mt-4 px-12 py-4 bg-sand-light rounded-lg
              text-ocean-dark font-semibold text-center
              transition duration-300 hover:bg-transparent
              hover:outline-2 hover:text-sand-light"
            href="https://go.umd.edu/CCC-website-request"
          >
            Request Form
          </a>
        </div>
      </div>
    )
}
export default function WebsiteApply() {
  return (
    <div
      className="mx-8 md:mx-16 lg:mx-32 mt-16 
          flex flex-col gap-16 items-center font-sans text-ocean-dark
          [&_h1]:font-semibold [&_h2]:font-semibold [&_h3]:font-semibold"
    >
      <h1 className="text-4xl">Product Requests</h1>
      <div
        className="w-full grid sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 
          [&_div]:space-y-2 md:[&_div]:col-span-2
          [&_h3]:text-xl [&_p]:text-base"
      >
        <h2
          className="sm:max-md:col-span-2 md:row-span-2
      text-2xl text-balance text-left"
        >
          Request a Website/Web Application
          <span className="block mt-2 text-base font-light text-ocean-light">
            Product timelines are generally ~3 months
          </span>
        </h2>

        <div>
          <h3>Eligibility</h3>
          <p>
            All UMD students, clubs, startups, and departments can request a
            website!
          </p>
          <p>
            Not from UMD? Email us at
            <span className="font-semibold">
              <a
                href="mailto:campuscoderscrew@gmail.com"
                className="text-blue-600 hover:underline"
              >
                {" "}
                campuscoderscrew@gmail.com{" "}
              </a>
            </span>
            for follow up details
          </p>
        </div>

        <div>
          <h3>Request a Product</h3>
          <p>
            All requests will be fulfilled! If no teams are currently available,
            you'll be placed on a waitlist.
            <br></br>
            <strong>
              We currently have more product requests than available teams;
              project timelines for new clients may vary.
            </strong>
          </p>
        </div>

        <div>
          <h3>Wishlist</h3>
          <p>
            Product placement depends on team availability and demand. All
            prsopective clients will be kept up to date with the status of their
            request
          </p>
        </div>

        <div>
          <h3>Pricing</h3>
          <p>
            Our base plan is free. For back end and server-side applications
            that require cloud hosting, pricing will adjust accordingly to cover
            build costs
          </p>
        </div>
      </div>

      {/* TODO: Add new theme color #09578A */}
      <div
        className="z-10 w-full p-8
            flex flex-col gap-2 items-center  
            bg-[#09578A] rounded-3xl text-sand-light text-center"
      >
        <h2 className="text-2xl">Want a Website / Web Application?</h2>
        <span className="font-light">
          Please fill out the form below, and we'll reach out! <br></br>
          We also accept other types of product requests, such as mobile
          applications, data analytics, and more. Please email us for details.
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
  );
}

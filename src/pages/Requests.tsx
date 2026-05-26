import NavBar from "../components/NavBar";
import ContactFooter from "../components/ContactFooter";

import { Waves } from "../components/Icons";
import Accordion from "../components/Accordion";

const questions = [
  "Who can join?",
  "What skill level do I need?",
  "How are development teams formed?",
  "Can I choose a team?",
  "What are the chances of being accepted?",
  "Is there a time commitment expected?",
];

const answers = [
  <p>
    Anyone can join! In addition to our development team, we also have
    Committees that allow members to gain experience with non-technical
    components that facilitate club functions. These committees include
    Marketing, Logistics, Human Resources, Quality Assurance, and more!
  </p>,
  <p>
    Anyone can join! In addition to our development team, we also have
    Committees that allow members to gain experience with non-technical
    components that facilitate club functions. These committees include
    Marketing, Logistics, Human Resources, Quality Assurance, and more!
  </p>,
  <p>
    Development teams are formed by our Human Resources (HR) committee. HR
    considers members` proficiencies and availability to match them to the
    appropriate team so that members are put in a development environment that
    has the appropriate pace.
  </p>,
  <p>
    To ensure members are spread evenly across our teams, members cannot
    determine what team they are assigned to. However, if certain members wish
    to be on the same team, we will try to accommodate as much as possible.
    Additionally, while members cannot change their primary team, they can
    temporarily join multiple teams at once. For temporary assignments, members
    can choose where they are assigned to.
  </p>,
  <p>
    CCC is non-selective, meaning that everyone is accepted into our club. While
    Committees and Development Pods are non-selective, Development Teams screen
    members to ensure they have the appropriate skill level. However, we do not
    have a cap on our amount of developers, and we will accept all qualified
    candidates into Development Teams.
  </p>,
  <p>
    We do not have a defined time commitment across the board; however, members
    should set down expectations with their Team Lead/Committee Heads. Members
    are expected to notify Human Resources when they need to take a break from
    the club or will be unavailable for certain times. Members are also expected
    to respond to communication within 72 hours. Some members spend 30 minutes
    per week on the club while others spend 10+. So long as members explain how
    involved they wish to be and follow through with whatever time commitment
    they indicate, they may be a club member.
  </p>,
];

export default function Requests() {
  return (
    <>
      <NavBar />
      {/*
       * Navbar is fixed, not sticky; additional space is inserted after the
       * navbar until the issue is resolved
       */}
      <div className="h-14" />

      {/* "Apply for a Website" Section */}
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
          className="z-2 w-full p-8
            flex flex-col gap-2 items-center  
            bg-[#09578A] rounded-3xl text-sand-light"
        >
          <h2 className="text-2xl">Want a Website?</h2>
          <span className="font-light">
            Please fill out the form below, and we'll reach out!
          </span>
          <a
            className="mt-4 px-12 p-4 bg-sand-light rounded-lg
              text-ocean-dark font-semibold text-center
              transition duration-300 hover:bg-[#09578A] 
              hover:outline-2 hover:outline-sand-light hover:text-sand-light"
            href="https://go.umd.edu/CCC-website-request"
          >
            Request Form
          </a>
        </div>
      </div>

      <Waves
        className="z-1 w-full h-48 -my-24
        bg-transparent -scale-x-100 fill-rose-500/10"
      />

      {/* TODO: Add new theme color #BAEBF8 */}
      {/* "Want to Join" Section */}
      <div
        className="-mt-48 pt-48 flex flex-col items-center 
          bg-linear-to-b from-amber-500 to-[#BAEBF8]"
      >
        <div className="p-16 space-y-16 text-ocean-dark">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl font-bold">Want to Join?</h2>
            <p className="text-base">
              If you're interested in becoming part of <b>Campus Coders Crew</b>
              , please fill out one of the forms below!
            </p>

            <div></div>
          </div>

          <div className="z-1 max-w-250 px-4 space-y-8">
            <h3 className="text-2xl font-bold text-center">
              Frequently Asked Questions
            </h3>
            <Accordion labels={questions} content={answers} />
          </div>
        </div>
      </div>

      <Waves className="w-full h-96 bg-transparent -scale-x-100 fill-[#BAEBF8]" />

      {/* Contacts */}
      <ContactFooter
        className="py-8 bg-sand-light text-ocean-dark
          [&_a]:transition [&_a]:duration-300 [&_a]:hover:text-ocean-light"
      />
    </>
  );
}

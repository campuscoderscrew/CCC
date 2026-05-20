import Accordion from "./Accordion";

// Drop down 6 questions
export default function FAQ() {
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
      temporarily join multiple teams at once. For temporary assignments,
      members can choose where they are assigned to.
    </p>,
    <p>
      CCC is non-selective, meaning that everyone is accepted into our club.
      While Committees and Development Pods are non-selective, Development Teams
      screen members to ensure they have the appropriate skill level. However,
      we do not have a cap on our amount of developers, and we will accept all
      qualified candidates into Development Teams.
    </p>,
    <p>
      We do not have a defined time commitment across the board; however,
      members should set down expectations with their Team Lead/Committee Heads.
      Members are expected to notify Human Resources when they need to take a
      break from the club or will be unavailable for certain times. Members are
      also expected to respond to communication within 72 hours. Some members
      spend 30 minutes per week on the club while others spend 10+. So long as
      members explain how involved they wish to be and follow through with
      whatever time commitment they indicate, they may be a club member.
    </p>,
  ];

  return (
    <div
      className="px-4 flex flex-col gap-4 items-center 
        text-base text-ocean-dark"
    >
      <h3 className="text-xl text-center font-bold">
        Frequently Asked Questions
      </h3>
      <div className="max-w-250 w-full">
        <Accordion labels={questions} content={answers} />
      </div>
    </div>
  );
}

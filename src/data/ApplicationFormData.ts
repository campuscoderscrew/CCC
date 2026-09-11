import type { ApplicationData } from "./types";

/**
 * Department application forms, initiative docs, and the positions each
 * department is (or is not) currently hiring for.
 *
 * `closed: true` means the position exists on the org chart but is not
 * accepting applications this season — it is still listed so prospective
 * members can see the whole ladder before applying.
 */
export const applicationFormData: ApplicationData = {
  applicationSectors: [
    {
      sector: "Development",
      departments: [
        {
          department: "Development",
          applicationLink:
            "https://docs.google.com/forms/d/e/1FAIpQLSfrX09hIxXqnUN2AyDaZUBjm1eXCIGRdzYYHEU0FmUBFsngSQ/viewform?usp=publish-editor",
          departmentInitativesLink:
            "https://docs.google.com/document/d/1sEdOTYho1sbxBV7rWJctSY1iRcvF4ovujkxwDSNm508/edit?tab=t.uf082hgynp57",
          applicationPositions: [
            {
              position: "Developer",
              positionDescription:
                "Full stack development, including web design, front end development, back end development, and dev ops",
              closed: false,
            },
            {
              position: "Designer",
              positionDescription: "Creates web designs",
              closed: false,
            },
            {
              position: "Development Primary Team Lead",
              positionDescription: "Manages a team of Developers and Designers",
              closed: false,
            },
            {
              position: "Development Secondary Team Lead",
              positionDescription: "Assists their team's Primary Team Lead",
              closed: false,
            },
            {
              position: "Staff Developer",
              positionDescription:
                "Solo developer for a specific project or initiative. Functions as a one-person team",
              closed: true,
            },
            {
              position: "Development Department Head",
              positionDescription: "Manages the Development department",
              closed: true,
            },
            {
              position: "Development Advisor",
              positionDescription:
                "Provides advice on Development department operations",
              closed: false,
            },
          ],
        },
        {
          department: "Quality Assurance",
          applicationLink:
            "https://docs.google.com/forms/d/e/1FAIpQLScC_iQ9YYdc75hz93jagzYPfASIMYTIb6uQs6Mgm1nPkvp2XQ/viewform?usp=dialog",
          departmentInitativesLink:
            "https://docs.google.com/document/d/1h7bEzolbzK2O4zOQ3YjAPsZZ9LAMSBxM2Cw2EWNRmQk/edit?tab=t.xwdtguh77x19",
          applicationPositions: [
            {
              position: "Quality Assurance (QA) Analyst",
              positionDescription:
                "Ensures projects by the development teams meet club standards and are bug-free",
              closed: false,
            },
            {
              position: "Quality Assurance Primary Team Lead",
              positionDescription:
                "Manages a team of Quality Assurance Analysts",
              closed: true,
            },
            {
              position: "Quality Assurance Secondary Team Lead",
              positionDescription: "Assists their team's Primary Team Lead",
              closed: true,
            },
            {
              position: "Quality Assurance Department Head",
              positionDescription: "Manages the Quality Assurance department",
              closed: true,
            },
            {
              position: "Quality Assurance Advisor",
              positionDescription:
                "Provides advice on Quality Assurance department operations",
              closed: false,
            },
          ],
        },
        {
          department: "Product Management",
          applicationLink:
            "https://docs.google.com/forms/d/e/1FAIpQLSfV-1ph3TnMxU8Ek41tYTqp685xDO9uwGdhU0y1eTwSy61OLQ/viewform?usp=dialog",
          departmentInitativesLink:
            "https://docs.google.com/document/d/1h7bEzolbzK2O4zOQ3YjAPsZZ9LAMSBxM2Cw2EWNRmQk/edit?tab=t.ce52w5movbb",
          applicationPositions: [
            {
              position: "Product Manager",
              positionDescription:
                "Coordinates initial product specifications with clients; ensures products and projects meet client needs",
              closed: false,
            },
            {
              position: "Product Primary Team Lead",
              positionDescription: "Manages a team of Product Managers",
              closed: true,
            },
            {
              position: "Product Secondary Team Lead",
              positionDescription: "Assists their team's Primary Team Lead",
              closed: true,
            },
            {
              position: "Product Department Head",
              positionDescription: "Manages the Product Management department",
              closed: true,
            },
            {
              position: "Product Advisor",
              positionDescription:
                "Provides advice on Product Management department operations",
              closed: false,
            },
          ],
        },
      ],
    },
    {
      sector: "Internal",
      departments: [
        {
          department: "Human Resources",
          applicationLink:
            "https://docs.google.com/forms/d/e/1FAIpQLSc7MJ_9GDxo9uH-e9JDrtFVwGTRYFQ-h3qvHuuU9ix4uGAXKQ/viewform?usp=publish-editor",
          departmentInitativesLink:
            "https://docs.google.com/document/d/1h7bEzolbzK2O4zOQ3YjAPsZZ9LAMSBxM2Cw2EWNRmQk/edit?tab=t.3dj2hxx6505r",
          applicationPositions: [
            {
              position: "Human Resources Specialist",
              positionDescription:
                "Handles the assignment of members to development teams and committees. Also handles onboarding tasks.",
              closed: false,
            },
            {
              position: "Human Resources Primary Team Lead",
              positionDescription:
                "Manages a team of Human Resources Specialists",
              closed: true,
            },
            {
              position: "Human Resources Secondary Team Lead",
              positionDescription: "Assists their team's Primary Team Lead",
              closed: true,
            },
            {
              position: "Human Resources Department Head",
              positionDescription: "Manages the Human Resources department",
              closed: false,
            },
            {
              position: "Human Resources Advisor",
              positionDescription:
                "Provides advice on Human Resources department operations",
              closed: false,
            },
          ],
        },
        {
          department: "Analytics",
          applicationLink:
            "https://docs.google.com/forms/d/e/1FAIpQLScbz48heyzwbsHNqFaGPku9ob4psopIW_fLfKSRqzqMug44Cg/viewform?usp=publish-editor",
          departmentInitativesLink:
            "https://docs.google.com/document/d/1h7bEzolbzK2O4zOQ3YjAPsZZ9LAMSBxM2Cw2EWNRmQk/edit?tab=t.nfuh4kfnp49e",
          applicationPositions: [
            {
              position: "Analyst",
              positionDescription:
                "Analyzes department and team productivity logs to identify areas of improvement.",
              closed: false,
            },
            {
              position: "Analytics Primary Team Lead",
              positionDescription: "Manages a team of Analysts",
              closed: true,
            },
            {
              position: "Analytics Secondary Team Lead",
              positionDescription: "Assists their team's Primary Team Lead",
              closed: true,
            },
            {
              position: "Analytics Department Head",
              positionDescription: "Manages the Analytics department",
              closed: false,
            },
            {
              position: "Analytics Advisor",
              positionDescription:
                "Provides advice on Analytics department operations",
              closed: false,
            },
          ],
        },
        {
          department: "Finance",
          applicationLink:
            "https://docs.google.com/forms/d/e/1FAIpQLSemDzJZpGFbEfEZrG14_jAaGaJmWygWTvTKRQlf2hW5ay18Cw/viewform?usp=publish-editor",
          departmentInitativesLink:
            "https://docs.google.com/document/d/1h7bEzolbzK2O4zOQ3YjAPsZZ9LAMSBxM2Cw2EWNRmQk/edit?tab=t.td6j6wkl72yn",
          applicationPositions: [
            {
              position: "Financial Analyst",
              positionDescription:
                "Creates biweekly stock reports to guide club stock investments",
              closed: false,
            },
            {
              position: "Accountant",
              positionDescription: "Manages the club's books and open accounts",
              closed: false,
            },
            {
              position: "Fundraiser",
              positionDescription:
                "Raises funds for the club, through fundraisers like bake sales and funding opportunities like SGA funding and the Pepsi Grant",
              closed: false,
            },
            {
              position: "Stock Investment Primary Team Lead",
              positionDescription: "Manages a team of Financial Analysts",
              closed: true,
            },
            {
              position: "Stock Investment Secondary Team Lead",
              positionDescription: "Assists their team's Primary Team Lead",
              closed: true,
            },
            {
              position: "Accounting Primary Team Lead",
              positionDescription: "Manages a team of Accountants",
              closed: false,
            },
            {
              position: "Accounting Secondary Team Lead",
              positionDescription: "Assists their team's Primary Team Lead",
              closed: true,
            },
            {
              position: "Fundraising Primary Team Lead",
              positionDescription: "Manages a team of Fundraisers",
              closed: false,
            },
            {
              position: "Fundraising Secondary Team Lead",
              positionDescription: "Assists their team's Primary Team Lead",
              closed: true,
            },
            {
              position: "Finance Department Head",
              positionDescription: "Manages the Finance department",
              closed: true,
            },
            {
              position: "Finance Advisor",
              positionDescription:
                "Provides advice on Finance department operations",
              closed: false,
            },
          ],
        },
        {
          department: "Resource Management",
          applicationLink:
            "https://docs.google.com/forms/d/e/1FAIpQLSfeXDIUjqEl5KmnXsx95bJTMJmKmeEx-27zEeY-VXHjE68faw/viewform?usp=publish-editor",
          departmentInitativesLink:
            "https://docs.google.com/document/d/1h7bEzolbzK2O4zOQ3YjAPsZZ9LAMSBxM2Cw2EWNRmQk/edit?tab=t.1vddgdcf444b",
          applicationPositions: [
            {
              position: "Resource Manager",
              positionDescription:
                "Ensures fluid club functionality, including managing the club Google Drive",
              closed: false,
            },
            {
              position: "Resource Management Primary Team Lead",
              positionDescription: "Manages a team of Resource Managers",
              closed: true,
            },
            {
              position: "Resource Management Secondary Team Lead",
              positionDescription: "Assists their team's Primary Team Lead",
              closed: true,
            },
            {
              position: "Resource Management Department Head",
              positionDescription: "Manages the Resource Management department",
              closed: false,
            },
            {
              position: "Resource Management Advisor",
              positionDescription:
                "Provides advice on Resource Management department operations",
              closed: false,
            },
          ],
        },
      ],
    },
    {
      sector: "External",
      departments: [
        {
          department: "Marketing",
          applicationLink:
            "https://docs.google.com/forms/d/e/1FAIpQLScq9RAOTkNNNXhZzyU3s0yUAIHafnrlJtHZmOJSFo-3XdX9-Q/viewform?usp=publish-editor",
          departmentInitativesLink:
            "https://docs.google.com/document/d/1h7bEzolbzK2O4zOQ3YjAPsZZ9LAMSBxM2Cw2EWNRmQk/edit?tab=t.gy38sa3d5za7",
          applicationPositions: [
            {
              position: "Marketing Specialist",
              positionDescription:
                "Creates a marketing timeline and promotes messages about the club",
              closed: false,
            },
            {
              position: "Graphic Designer",
              positionDescription:
                "Creates graphic designs to be posted on our social media platforms",
              closed: false,
            },
            {
              position: "Recruiter",
              positionDescription:
                "Reaches out to prospective members to join CCC",
              closed: false,
            },
            {
              position: "Marketing Primary Team Lead",
              positionDescription: "Manages a team of Marketing Specialists",
              closed: true,
            },
            {
              position: "Marketing Secondary Team Lead",
              positionDescription: "Assists their team's Primary Team Lead",
              closed: true,
            },
            {
              position: "Graphic Design Team Lead",
              positionDescription: "Manages a team of Graphic Designers",
              closed: true,
            },
            {
              position: "Recruitment Team Lead",
              positionDescription: "Manages a team of Recruiters",
              closed: true,
            },
            {
              position: "Marketing Department Head",
              positionDescription: "Manages the Marketing department",
              closed: true,
            },
            {
              position: "Marketing Advisor",
              positionDescription:
                "Provides advice on Marketing department operations",
              closed: false,
            },
          ],
        },
        {
          department: "Public Relations",
          applicationLink:
            "https://docs.google.com/forms/d/e/1FAIpQLSfx6SUuDni8Ijcbwt6S9U5Ej8A8KNyQf5ePnhfxEXLSNicXeQ/viewform?usp=publish-editor",
          departmentInitativesLink:
            "https://docs.google.com/document/d/1h7bEzolbzK2O4zOQ3YjAPsZZ9LAMSBxM2Cw2EWNRmQk/edit?tab=t.c4fnc530b5zw",
          applicationPositions: [
            {
              position: "Public Relations (PR) Specialist",
              positionDescription:
                "Shapes a general perception of the club. This includes outreach events and social media posts",
              closed: false,
            },
            {
              position: "Public Relations Primary Team Lead",
              positionDescription: "Manages a team of PR Specialists",
              closed: true,
            },
            {
              position: "Public Relations Secondary Team Lead",
              positionDescription: "Assists their team's Primary Team Lead",
              closed: true,
            },
            {
              position: "Public Relations Department Head",
              positionDescription: "Manages the Public Relations department",
              closed: true,
            },
            {
              position: "Public Relations Advisor",
              positionDescription:
                "Provides advice on Public Relations department operations",
              closed: false,
            },
          ],
        },
        {
          department: "Events",
          applicationLink:
            "https://docs.google.com/forms/d/e/1FAIpQLScHBzLuW6CMDLD63rmIMeSMOk29rWOzlCytWvXuatppUByCkQ/viewform?usp=publish-editor",
          departmentInitativesLink:
            "https://docs.google.com/document/d/1h7bEzolbzK2O4zOQ3YjAPsZZ9LAMSBxM2Cw2EWNRmQk/edit?tab=t.j6yxly41yy2q",
          applicationPositions: [
            {
              position: "Events Coordinator",
              positionDescription:
                "Plans events such as General Body Meetings, Workshops, and Season Recap Seminars",
              closed: false,
            },
            {
              position: "Events Primary Team Lead",
              positionDescription: "Manages a team of Events Coordinators",
              closed: true,
            },
            {
              position: "Events Secondary Team Lead",
              positionDescription: "Assists their team's Primary Team Lead",
              closed: true,
            },
            {
              position: "Events Department Head",
              positionDescription: "Manages the Events department",
              closed: false,
            },
            {
              position: "Events Advisor",
              positionDescription:
                "Provides advice on Events department operations",
              closed: false,
            },
          ],
        },
      ],
    },
  ],
};

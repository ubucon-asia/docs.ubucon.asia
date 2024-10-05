interface NavConfigItem {
  title: string;
  slug: string;
  discourseUrl: string;
  subsection: NavConfigItem[];
}

export const discourseHost = "https://discourse.ubuntu.com/";
export const navigation: NavConfigItem[] = [
  {
    title: "Home",
    slug: "/",
    discourseUrl: "t/ubucon-asia-documentation/47858",
    subsection: [
      {
        title: "Chat",
        slug: "/chat",
        discourseUrl: "t/ubucon-asia-chat-information/47859",
        subsection: [],
      },
      {
        title: "Add new page",
        slug: "/add-new-page",
        discourseUrl: "t/adding-new-page-to-ubucon-asia-docs/47862",
        subsection: [],
      },
    ],
  },
  {
    title: "Travel support",
    slug: "/travel-support",
    discourseUrl: "t/travel-support/47860",
    subsection: [
      {
        title: "Travel grant",
        slug: "/travel-support/travel-grant",
        discourseUrl: "t/travel-grant/47861",
        subsection: [
          {
            title: "Applying for travel grant",
            slug: "/travel-support/travel-grant/apply",
            discourseUrl: "t/applying-for-travel-grant/48536",
            subsection: [],
          },
          {
            title: "Submitting reimbursement for your travel",
            slug: "/travel-support/travel-grant/submit-reimbursement",
            discourseUrl: "t/submitting-reimbursement-for-your-travel/48537",
            subsection: [],
          }
        ],
      },
    ],
  },
  {
    title: "Organizer",
    slug: "/organizer",
    discourseUrl: "t/organizer-documentation/47870",
    subsection: [
      {
        title: "Overview",
        slug: "/organizer/overview",
        discourseUrl: "t/event-organizing-overview/47891",
        subsection: [],
      },
      {
        title: "Teams & Roles",
        slug: "/organizer/teams-roles",
        discourseUrl: "t/teams-roles/47871",
        subsection: [],
      },
      {
        title: "Timeline",
        slug: "/organizer/timeline",
        discourseUrl: "t/event-organization-timeline/48060",
        subsection: [],
      },
      {
        title: "Meeting arrangement",
        slug: "/organizer/meeting",
        discourseUrl: "t/arranging-periodic-team-meeting/48055",
        subsection: [],
      },
      {
        title: "Registration",
        slug: "/organizer/registration",
        discourseUrl: "t/registration-check-in/48404",
        subsection: [],
      },
      {
        title: "Content",
        slug: "/organizer/content",
        discourseUrl: "t/content/48538",
        subsection: [
          {
            title: "Session types and categories",
            slug: "/organizer/content/types-and-categoreis",
            discourseUrl: "t/session-types-and-categories/48539",
            subsection: [],
          },
        ],
      },
      {
        title: "Sponsorship & Finance",
        slug: "/organizer/sponsorship-finance",
        discourseUrl: "t/sponsorship-finance/47888",
        subsection: [
          {
            title: "Standard sponsorship packages",
            slug: "/organizer/sponsorship-finance/standard-sponsorship",
            discourseUrl: "t/standard-sponsorship-packages/47890",
            subsection: [],
          },
        ],
      },
    ],
  },
];

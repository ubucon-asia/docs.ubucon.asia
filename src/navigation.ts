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
        subsection: [],
      },
    ],
  },
  {
    title: "Organizer",
    slug: "/organizer",
    discourseUrl: "t/organizer-documentation/47870",
    subsection: [
      {
        title: "Teams & Roles",
        slug: "/organizer/teams-roles",
        discourseUrl: "t/teams-roles/47871",
        subsection: [],
      },
      {
        title: "Overview",
        slug: "/organizer/overview",
        discourseUrl: "t/event-organizing-overview/47891",
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

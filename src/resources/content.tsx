import type { About, Person, Social, SectionConfig, Popup } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

// =============================================================================
// PERSON & SOCIAL
// =============================================================================
const person: Person = {
  firstName: "Logan",
  lastName: "Waller",
  name: "Logan Waller",
  role: "Backend Software Engineer",
  avatar: "/images/profile.jpeg",
  email: "logan@loganwaller.dev",
  location: "Europe/London",
  languages: [],
  github: "Mystik01",
};

const social: Social = [
  { name: "GitHub", icon: "github", link: "https://github.com/Mystik01" },
  { name: "LinkedIn", icon: "linkedin", link: "https://www.linkedin.com/in/logan-waller/" },
  { name: "Email", icon: "email", link: `mailto:${person.email}` },
  { name: "Credly", icon: "credly", link: "https://www.credly.com/users/logan-waller" },
];

// =============================================================================
// POPUP NOTIFICATION
// =============================================================================
const popup: Popup = {
  display: true,
  title: "Hello",
  description:
    "Thanks for stopping by! This site is built with Next.js and Once UI. Have a look around.",
};

// =============================================================================
// HOME & ABOUT (legacy compatibility objects)
// =============================================================================

const about: About = {
  label: "About",
  title: "",
  description: "",
  tableOfContent: { display: true, subItems: false },
  avatar: { display: true },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hi, I'm Logan, a backend software engineer at Simplyhealth, where I'm completing a Level 6
        Digital and Technology Solutions degree apprenticeship with the University of Exeter. I work
        on the API side, building and testing the services behind Simplyhealth's products in
        TypeScript on Azure Functions, with automated testing in Playwright. Outside of work I build
        full-stack projects with Next.js and Python, and I'm exploring AI agent frameworks and
        applied AI.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    description: "My current and upcoming work experiences.",
    experiences: [
      {
        company: "Simplyhealth",
        timeframe: "Sept. 2026 - Present",
        role: "Software Engineer (Degree Apprentice) - Backend",
        description: (
          <>
            I'm a backend engineer on the API side at{" "}
            <a href="https://www.simplyhealth.co.uk/" target="_blank" rel="noreferrer">
              Simplyhealth
            </a>
            . I build and maintain serverless services in TypeScript on Azure Functions, write
            automated tests with Playwright, and ship changes through a develop, main, pre-prod and
            production release pipeline, with work tracked in Jira. Alongside the role I'm studying
            for a Level 6 Digital and Technology Solutions degree with the University of Exeter.
          </>
        ),
        highlighted: true,
      },
      {
        company: "Qualcomm",
        timeframe: "May 2026 - July 2026",
        role: "Industry Placement",
        description: (
          <>
            A 9-week T Level industry placement with the customer engineering team at{" "}
            <a href="https://www.qualcomm.com/" target="_blank" rel="noreferrer">
              Qualcomm
            </a>{" "}
            in Farnborough, working on robotics, edge AI benchmarking and computer vision alongside
            software and hardware engineers.
          </>
        ),
      },
      {
        company: "Everyone Active & Bp",
        timeframe: "2023 - Aug. 2026 (Part-Time)",
        role: "First jobs: Lifeguard & Retail Assistant",
        description: (
          <>
            Part-time work alongside college, until I started at Simplyhealth. As a lifeguard at
            Everyone Active I was responsible for pool safety and emergency response, holding the{" "}
            <a
              href="https://www.rlss.org.uk/national-pool-lifeguard-qualification"
              target="_blank"
              rel="noopener noreferrer"
            >
              NPLQ
            </a>
            . At Bp I handled customer service, stock and fuel authorisations.
          </>
        ),
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "University of Exeter",
        timeframe: "Sept. 2026 - July 2029",
        description: (
          <>Level 6 Digital and Technology Solutions Professional degree apprenticeship</>
        ),
      },
      {
        name: "Farnborough College of Technology",
        timeframe: "Sept. 2024 - July 2026",
        description: <>T Level Digital Production, Design and Development</>,
      },
      {
        name: "HSDC Alton",
        timeframe: "Sept. 2023 - July 2024",
        description: <>Level 2 Cambridge Technical Diploma in IT</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Skills",
    skills: [
      {
        tags: [
          { name: "TypeScript", icon: "typescript" },
          { name: "Azure", icon: "azure" },
          { name: "Azure Functions", icon: "azureFunctions" },
          { name: "Playwright", icon: "playwright" },
          { name: "REST APIs", icon: "api" },
          { name: "Python", icon: "python" },
          { name: "JavaScript", icon: "javascript" },
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "SQL", icon: "sql" },
          { name: "Supabase", icon: "supabase" },
          { name: "Git", icon: "git" },
        ],
      },
    ],
  },
};

// =============================================================================
// SECTIONS — Primary content structure (drives navbar & page rendering)
// =============================================================================
// Add a new section object here and it will automatically:
//  1. Create a navbar item with the specified icon
//  2. Render a page heading and content
//  3. Be observed for active-state highlighting
//
// Fields:
//  - id: element id for scroll target
//  - label: text shown in navbar
//  - title: optional heading on the page
//  - icon: icon name from design system
//  - type: renderer type (intro|technical|studies|work|projects) or custom
//  - display: set false to hide
//  - items: optional array of strings for simple self-contained content
//  - images: optional array of image objects to display in a gallery

const sections: SectionConfig[] = [
  {
    id: "intro",
    label: "About",
    type: "intro",
    display: false, // Hidden from navbar, but still renders on page via v4 component
  },
  {
    id: "skills",
    label: "Skills",
    title: about.technical.title,
    icon: "computer",
    type: "technical",
    display: about.technical.display,
  },
  {
    id: "studies",
    label: "Studies",
    title: about.studies.title,
    icon: "book",
    type: "studies",
    display: about.studies.display,
  },
  {
    id: "projects",
    label: "Projects",
    title: "Projects",
    icon: "grid",
    type: "projects",
    display: true,
    links: [
      {
        url: "https://github.com/Mystik01/portfolio",
        title: "This portfolio website",
        description:
          "My first React project: a heavily modified fork of the Magic Portfolio template, built with Next.js and Once UI and deployed on Vercel.",
      },
      {
        url: "https://github.com/Mystik01/FlappyBird",
        title: "Flappy Bird Clone",
        description: "My version of Flappy Bird whilst I was leaning Javascript, html and css.",
      },
      {
        url: "https://github.com/divyanshu-in/soundsharp-musicplayer-tkinter",
        title: "Music Player built with Tkinter",
        description: "A music player application built with Python's Tkinter library.",
      },
      {
        url: "https://github.com/Mystik01/toka-fitness",
        title: "Toka Fitness",
        description: `A full-stack fitness tracking app built for a college project. Uses a Next.js frontend with
a Flask API and Supabase authentication/database.`,
      },
    ],
  },
  {
    id: "work",
    label: "Work",
    title: about.work.title,
    icon: "briefcase",
    type: "work",
    display: about.work.display,
  },

  // Example: Add a new section here
  // {
  //   id: "blog",
  //   label: "Blog",
  //   title: "Writing",
  //   icon: "rss",
  //   type: "projects",
  //   display: true,
  //   items: ["Post A", "Post B"],
  //   images: [{ src: "/images/og/home.jpg", width: 16, height: 9 }],
  // },
];

export { person, social, about, sections, popup };

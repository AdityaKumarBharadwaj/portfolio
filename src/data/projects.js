// ============================================================
// PROJECTS CONFIGURATION
// Add / edit projects here — changes reflect across the site
// Set `visible: false` to hide a project from the live site
// Order: DevBoard -> ARVIX -> AcadFlow -> SkillSwap
// ============================================================

export const projects = [
  {
    id: 'devboard',
    index: '01',
    visible: true,
    title: 'DevBoard',
    subtitle: 'Developer Productivity & Sprint Platform',
    category: 'Full-Stack / MERN',
    year: '2024',
    status: 'Live',
    shortDescription:
      'A comprehensive MERN-stack developer productivity platform unifying Kanban task management, syntax-highlighted code snippets, Markdown documentation, and sprint tracking in one workspace.',
    longDescription:
      'DevBoard addresses the fragmented tooling problem developers face by unifying sprint planning, Kanban project boards, syntax-highlighted code snippets, and Markdown documentation in a single cohesive platform. Built with MongoDB, Express.js, React, and Node.js, it features drag-and-drop task progression, a real-time code editor with multi-language syntax highlighting, live Markdown previewing, and structured file management.',
    features: [
      'Kanban task board with dynamic drag-and-drop workflow status',
      'Sprint planning engine with backlog management and milestone targets',
      'Syntax-highlighted code snippets library with language filtering',
      'Markdown notes editor with split-screen real-time preview',
      'Secure JWT authentication with bcrypt password hashing',
      'Multi-project directory and developer workspace customization',
    ],
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT', 'REST API'],
    github: 'https://github.com/AdityaKumarBharadwaj/DevBoard',
    live: '',
    color: '#D71935',
    accentColor: '#FFD43B',
    image: '/projects/devboard/03-project-dashboard.png',
    imageAlt: 'DevBoard — Developer Productivity & Sprint Platform',
    screenshots: [
      {
        url: '/projects/devboard/03-project-dashboard.png',
        title: 'Project Dashboard & Sprint Overview',
        description: 'Real-time telemetry, active sprint metrics, and workspace navigation across ongoing developer initiatives.',
      },
      {
        url: '/projects/devboard/06-kanban-board.png',
        title: 'Interactive Kanban Task Board',
        description: 'Drag-and-drop task progression across Backlog, In Progress, Review, and Done stages with priority badges.',
      },
      {
        url: '/projects/devboard/09-markdown-notes.png',
        title: 'Markdown Documentation & Live Preview',
        description: 'Split-view editor for technical documentation, architectural notes, and release logs with formatting shortcuts.',
      },
      {
        url: '/projects/devboard/10-sprint-planning.png',
        title: 'Sprint Planning & Milestone Management',
        description: 'Sprint timeline creation, task point allocation, and backlog grooming interface for engineering teams.',
      },
      {
        url: '/projects/devboard/04-projects-directory.png',
        title: 'Multi-Project Workspace Directory',
        description: 'Centralized directory for managing repositories, teams, contributors, and active technical repositories.',
      },
      {
        url: '/projects/devboard/01-authentication-login.png',
        title: 'JWT Authentication & Developer Access',
        description: 'Secure token-based developer login and registration with encrypted credentials and session management.',
      },
    ],
  },

  {
    id: 'arvix',
    index: '02',
    visible: true,
    title: 'ARVIX',
    subtitle: 'Ward Citizen Services & Grievance Redressal Portal',
    category: 'Full-Stack / E-Governance',
    year: '2024',
    status: 'Live',
    shortDescription:
      'A hyper-local civic e-governance platform built with the MERN stack — enabling Aadhaar-verified grievance redressal, community hall reservations, and public welfare directory access for urban ward residents.',
    longDescription:
      'ARVIX addresses municipal transparency and citizen convenience by digitizing ward-level governance. Built with MongoDB, Express.js, React, and Node.js, the portal features 12-digit Aadhaar resident verification, live 4-stage grievance tracking (Submitted → Under Review → In Progress → Resolved), interactive community marriage hall booking calendars, free medicine inventory schedules, and bilingual accessibility (English & Hindi).',
    features: [
      'Aadhaar-verified citizen authentication with privacy masking (XXXX-XXXX-1042)',
      'Live 4-milestone grievance tracking stepper (Submitted → Resolved)',
      'Community & Vivah (Marriage) Hall month booking calendar with availability highlights',
      'Free medicine dispensary inventory and Fair Price Shop (FPS) ration schedule',
      'Central & State Government public welfare schemes directory with criteria checklists',
      'Bilingual accessibility toggle (English / हिन्दी)',
      'Ward representative administrative portal and resolution audit trail',
    ],
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT', 'REST API'],
    github: 'https://github.com/AdityaKumarBharadwaj/Arvix',
    live: '',
    color: '#D71935',
    accentColor: '#FFD43B',
    image: '/projects/arvix/01-homepage-hero.png',
    imageAlt: 'ARVIX — Ward Citizen Services & Grievance Redressal Portal',
    screenshots: [
      {
        url: '/projects/arvix/01-homepage-hero.png',
        title: 'Civic Homepage & National Tricolor Hero',
        description: 'Deep obsidian styling with live announcements ticker, quick tracking search, and ward representative desk.',
      },
      {
        url: '/projects/arvix/02-grievance-filing.png',
        title: 'Citizen Grievance Redressal Filing',
        description: 'Category selection (Roads, Water, Sanitation, Schools), Aadhaar resident auto-fill, and photo attachment dropzone.',
      },
      {
        url: '/projects/arvix/03-live-tracking-stepper.png',
        title: 'Live 4-Milestone Progress Stepper',
        description: 'Real-time timeline tracking (Submitted → Under Review → In Progress → Completed) with assigned department audit trail.',
      },
      {
        url: '/projects/arvix/04-marriage-hall-calendar.png',
        title: 'Community & Marriage Hall Month Calendar',
        description: 'Interactive month-view calendar highlighting available vs. booked dates with subsidized citizen reservation requests.',
      },
      {
        url: '/projects/arvix/05-free-medicine-ration-schedule.png',
        title: 'Free Medicine & Fair Price Ration Timetable',
        description: 'Dispensary operating hours, searchable essential medicine inventory, and crowd-free ration token schedule.',
      },
      {
        url: '/projects/arvix/06-government-schemes-directory.png',
        title: 'Public Welfare Schemes Directory',
        description: 'Searchable schemes across Education, Healthcare, and Housing with eligibility checklists and step-by-step application modal.',
      },
      {
        url: '/projects/arvix/07-aadhaar-citizen-login.png',
        title: 'Aadhaar-Verified Citizen Authentication',
        description: 'Strict 12-digit Aadhaar Card verification restricting access to ward residents with privacy masking.',
      },
    ],
  },

  {
    id: 'acadflow',
    index: '03',
    visible: true,
    title: 'AcadFlow',
    subtitle: 'Academic Workflow & Task Management System',
    category: 'Full-Stack / MERN',
    year: '2024',
    status: 'Live',
    shortDescription:
      'A full-stack academic task management application built with the MERN stack — featuring multi-criteria search, priority matrices, status tracking (Todo → In Progress → Completed), and secure JWT isolation.',
    longDescription:
      'AcadFlow is an academic task management system designed to eliminate student disorganization across university coursework, lab submissions, and exams. Built with MongoDB, Express.js, React, and Node.js, AcadFlow delivers strict user data isolation, compound database indexes for sub-millisecond query performance, debounced keyword search, priority-based organization, and a distraction-free responsive interface.',
    features: [
      'Status workflow tracking across Todo, In Progress, and Completed',
      'Priority level assignment (Low, Medium, High) with urgent alerts',
      'Debounced real-time keyword search and course code filtering',
      'Dashboard summary metrics and completion rate analytics',
      'Secure JWT authentication with bcrypt password hashing',
      'Compound MongoDB indexing for fast user-isolated querying',
    ],
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Vite', 'JWT', 'REST API'],
    github: 'https://github.com/AdityaKumarBharadwaj/AcadFlow',
    live: '',
    color: '#D71935',
    accentColor: '#FFD43B',
    image: '/projects/acadflow/02-acadflow-dashboard.png',
    imageAlt: 'AcadFlow — Academic Task Management System',
    screenshots: [
      {
        url: '/projects/acadflow/02-acadflow-dashboard.png',
        title: 'Academic Command Center & Task Matrix',
        description: 'Live dashboard displaying assignment metrics (Total, Todo, In Progress, Completed), quick search, and active tasks.',
      },
      {
        url: '/projects/acadflow/03-acadflow-task-modal.png',
        title: 'Task Creation & Priority Scheduler',
        description: 'Interactive assignment modal with coursework tagging, priority selection (Low, Medium, High), and deadline picker.',
      },
      {
        url: '/projects/acadflow/04-acadflow-search-filter.png',
        title: 'Debounced Search & Filter Controls',
        description: 'Instant keyword search and multi-criteria filters for finding coursework and tracking assignment deadlines.',
      },
      {
        url: '/projects/acadflow/01-acadflow-login.png',
        title: 'JWT Authentication & Student Portal',
        description: 'Secure token-based student login with encrypted credentials and cross-user data isolation.',
      },
    ],
  },

  {
    id: 'skillswap',
    index: '04',
    visible: true,
    title: 'SkillSwap',
    subtitle: 'Neighborhood Skill Exchange Platform',
    category: 'Full-Stack / MERN',
    year: '2024',
    status: 'Live',
    shortDescription:
      'A community-driven skill barter platform powered by the MERN stack — enabling neighbors to exchange services (tutoring, repairs, tech support) using Time Credits instead of money.',
    longDescription:
      'SkillSwap reimagines local mutual aid through a time-banking economy where 1 hour of help given equals 1 Time Credit earned. Built with MongoDB, Express.js, React, and Node.js, the platform features JWT authentication with Bcrypt hashing, real-time community skill listings, dynamic service posting with ownership protection, a personalized user profile with reputation metrics, and request management workflows.',
    features: [
      'Time-banking credit system: earn and spend time credits without monetary transactions',
      'Community skill marketplace with categorization (Tech, Education, Household, Other)',
      'Dynamic skill posting form with location tags and detailed descriptions',
      'Interactive user profile displaying credit balances, reputation stats, and listed skills',
      'Service swap request engine with incoming and outgoing request statuses',
      'JWT-authenticated user sessions with bcrypt password encryption',
      'Modern responsive UI crafted with Tailwind CSS, Lucide icons, and Framer Motion',
    ],
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT', 'REST API', 'Framer Motion'],
    github: 'https://github.com/AdityaKumarBharadwaj/SkillSwap',
    live: '',
    color: '#D71935',
    accentColor: '#FFD43B',
    image: '/projects/skillswap/01-skillswap-landing.png',
    imageAlt: 'SkillSwap — Neighborhood Skill Exchange Platform',
    screenshots: [
      {
        url: '/projects/skillswap/01-skillswap-landing.png',
        title: 'Landing Page & Value Proposition',
        description: 'Hero section introducing the neighborhood time-banking economy where time is the currency.',
      },
      {
        url: '/projects/skillswap/03-skillswap-feed.png',
        title: 'Community Skills Marketplace Feed',
        description: 'Real-time neighborhood skill cards with category pills, creator tags, and 1-click swap requests.',
      },
      {
        url: '/projects/skillswap/04-skillswap-add-skill.png',
        title: 'Post a Skill & Service Offering',
        description: 'Service listing form with title, category selector, location tagging, and description.',
      },
      {
        url: '/projects/skillswap/05-skillswap-profile.png',
        title: 'User Profile & Time Credits Command Center',
        description: 'Personalized dashboard displaying current Time Credits balance, reputation score, and listed skills.',
      },
      {
        url: '/projects/skillswap/02-skillswap-login.png',
        title: 'Secure Authentication & Sign-In',
        description: 'JWT-secured citizen login with encrypted credential verification and session persistence.',
      },
    ],
  },
];

// Only returns projects with visible: true
export const visibleProjects = projects.filter(p => p.visible);

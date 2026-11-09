// ============================================================
// CENTRALIZED PROFILE CONFIGURATION
// Update your personal information here — it propagates everywhere
// ============================================================

export const profile = {
  // — Personal identity
  name: 'Aditya Kumar',
  firstName: 'Aditya',
  lastName: 'Kumar',
  initials: 'AK',

  // — Professional titles
  titles: [
    'Software Engineer',
    'Cloud & Backend Engineer',
    'Full-Stack Developer',
    'Open Source Contributor',
  ],

  // — About text
  tagline: 'Engineering with intent.',
  seekingRole:
    'Currently seeking SDE / Cloud Engineering internships where I can contribute to backend infrastructure, distributed systems, and data-driven applications.',

  bio: `I'm a Computer Science student at VIT Bhopal University (CGPA 8.79/10) with a strong foundation in Data Structures & Algorithms, system design, and networking. As an AWS Certified Solutions Architect – Associate, I focus on building performant backend infrastructure, scalable MERN web applications, and data-driven systems.`,

  bioExtended: `I am an active open-source contributor with merged pull requests across community repositories, experienced in collaborative git workflows and cloud integrations. I approach engineering with rigor, curiosity, and high standards for clean architecture.`,

  cricketBio: `Beyond tech, I'm a competitive cricketer — I represented my school across U-16, U-17, and U-19 inter-school tournaments, and also competed at higher professional levels, earning newspaper recognition for match-winning performances. Cricket has sharpened skills I bring directly into engineering: performing under pressure, leading from the front, and staying consistent through long grinds — whether that's a 50-over match or a debugging session at 2 AM.`,

  // — Core Strengths
  coreStrengths: [
    {
      label: 'AWS Certified Solutions Architect – Associate',
      note: 'Certified through Apr 2026',
      badge: 'AWS Certified',
      category: 'Cloud',
    },
    {
      label: 'Backend & Full-Stack Development',
      note: 'MERN Stack: MongoDB, Express.js, React, Node.js',
      badge: 'Full-Stack',
      category: 'Engineering',
    },
    {
      label: 'Data Structures & Algorithms',
      note: 'System Design, Networking & Core CS Fundamentals',
      badge: 'Core CS',
      category: 'DSA',
    },
    {
      label: 'Machine Learning & Data Applications',
      note: 'Data-driven application development & ML pipelines',
      badge: 'ML & Data',
      category: 'AI/ML',
    },
    {
      label: 'Open-Source Contributor',
      note: 'Merged pull requests, cloud storage optimizations & component architecture',
      badge: 'Open Source',
      category: 'Open Source',
    },
  ],

  // — Contact & social
  email: 'kumarsinghaditya240@gmail.com',
  altEmail: 'adityakumarbharadwaj@gmail.com',
  phone: '+91 9801548509',
  github: 'https://github.com/AdityaKumarBharadwaj',
  linkedin: 'https://www.linkedin.com/in/aditya-kumar-8248a2293/',
  resume: '/resume.pdf',

  // — Location & availability
  location: 'Ranchi, India',
  timezone: 'IST (UTC+5:30)',
  availability: 'Seeking SDE / Cloud Internships',
  availabilityStatus: true,

  // — Education
  education: {
    degree: 'B.Tech in Computer Science and Engineering',
    university: 'VIT Bhopal University',
    school: 'Surendranath Centenary School',
    cgpa: '8.79 / 10',
    year: '2022 — 2026',
    focus: 'Data Structures, Cloud Computing, Distributed Systems, ML',
  },

  // — Personal & Athletics
  athletics: {
    sport: 'Cricket',
    levels: ['U-16 Inter-School', 'U-17 Inter-School', 'U-19 Inter-School', 'Professional Club Levels'],
    recognition: 'Featured in print newspapers for match-winning performances',
  },

  // — Footer copyright
  copyrightYear: new Date().getFullYear(),
};

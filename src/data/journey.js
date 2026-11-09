// ============================================================
// JOURNEY & TIMELINE CONFIGURATION
// Only include verified facts & milestones
// ============================================================

export const journeyItems = [
  {
    id: 'vitbhopal',
    year: '2022',
    type: 'education',
    title: 'VIT Bhopal University',
    subtitle: 'B.Tech Computer Science & Engineering',
    description:
      'Began my engineering journey, diving deep into computer science fundamentals — data structures, algorithms, operating systems and software engineering principles.',
    tags: ['Education', 'CSE', 'B.Tech'],
    highlight: 'CGPA: 8.79 / 10',
  },
  {
    id: 'cricket-interschool',
    year: 'Competitive',
    type: 'personal',
    title: 'Competitive Cricket (U-16, U-17, U-19)',
    subtitle: 'Inter-School & Professional Levels',
    description:
      'Represented school across U-16, U-17, and U-19 inter-school tournaments, competed at higher professional levels, and earned newspaper recognition for match-winning performances. Sharpened calm execution under pressure and leadership.',
    tags: ['Cricket', 'U-19', 'Leadership', 'Athletics'],
    highlight: 'Newspaper Match-Winning Recognition',
  },
  {
    id: 'cp-start',
    year: '2022',
    type: 'achievement',
    title: 'Data Structures & Algorithms',
    subtitle: 'Algorithmic Mastery & Problem Solving',
    description:
      'Built a rigorous foundation in C++ data structures, graph algorithms, dynamic programming, and system design, practicing on LeetCode and Codeforces.',
    tags: ['C++', 'DSA', 'Algorithms', 'LeetCode'],
    highlight: null,
  },
  {
    id: 'web-dev',
    year: '2023',
    type: 'learning',
    title: 'MERN Stack & Backend Engineering',
    subtitle: 'MongoDB, Express.js, React, Node.js',
    description:
      'Engineered full-stack applications from database schema modeling to RESTful API routing, JWT authentication, and responsive frontend interfaces.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    highlight: null,
  },
  {
    id: 'opensource-contributions',
    year: '2023',
    type: 'achievement',
    title: 'Open Source Contributor',
    subtitle: 'Community Repositories & Cloud Pipelines',
    description:
      'Active contributor to open-source software repositories. Collaborated with developers globally, resolved complex issues, submitted peer-reviewed PRs, and engineered pre-signed S3 upload pipelines.',
    tags: ['Open Source', 'Git', 'Collaboration', 'Cloud'],
    highlight: 'Merged Pull Requests',
  },
  {
    id: 'devboard',
    year: '2024',
    type: 'project',
    title: 'DevBoard',
    subtitle: 'MERN Developer Productivity Platform',
    description:
      'Developed a full-stack productivity platform for developers — combining Kanban boards, syntax-highlighted code snippets, Markdown notes and file storage architecture.',
    tags: ['MERN', 'Full-Stack', 'React', 'Node.js'],
    highlight: null,
  },
  {
    id: 'aws-certification',
    year: '2024',
    type: 'achievement',
    title: 'AWS Certified Solutions Architect – Associate',
    subtitle: 'Amazon Web Services (Valid through Apr 2026)',
    description:
      'Earned the official AWS Solutions Architect – Associate credential, validating expertise in distributed systems architecture, VPC networking, IAM security, high availability, and cost-optimized cloud solutions.',
    tags: ['AWS', 'Cloud Architecture', 'Distributed Systems'],
    highlight: 'AWS Certified (Apr 2026)',
  },
  {
    id: 'acadflow',
    year: '2024',
    type: 'project',
    title: 'AcadFlow',
    subtitle: 'Academic Management Web App',
    description:
      'Building a web application to streamline academic workflows — assignment tracking, schedule management, study resources and academic progress monitoring.',
    tags: ['React', 'Full-Stack', 'Web App'],
    highlight: null,
  },
];

export const journeyTypeColors = {
  education: '#D71935',
  achievement: '#FFD43B',
  learning: '#A5A5A5',
  project: '#D71935',
  personal: '#FFD43B',
};

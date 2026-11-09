// ============================================================
// SKILLS & EXPERTISE CONFIGURATION
// ============================================================

export const skillCategories = [
  {
    id: 'programming',
    label: 'Languages',
    description: 'Core programming languages I work with daily',
    skills: [
      { name: 'C++', level: 'Advanced', note: 'DSA, Competitive Programming' },
      { name: 'JavaScript', level: 'Advanced', note: 'ES2024, Full-Stack' },
      { name: 'Python', level: 'Intermediate', note: 'ML, Automation, Scripting' },
      { name: 'Java', level: 'Intermediate', note: 'OOP, Data Structures' },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    description: 'Building interactive, performant user interfaces',
    skills: [
      { name: 'React', level: 'Advanced', note: 'Hooks, Context, Performance' },
      { name: 'HTML5', level: 'Advanced', note: 'Semantic, Accessible' },
      { name: 'CSS3', level: 'Advanced', note: 'Animations, Grid, Flexbox' },
      { name: 'Tailwind CSS', level: 'Advanced', note: 'Design System, Utility-first' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    description: 'Server-side architecture and API development',
    skills: [
      { name: 'Node.js', level: 'Intermediate', note: 'Server, Event Loop' },
      { name: 'Express.js', level: 'Intermediate', note: 'REST APIs, Middleware' },
      { name: 'REST APIs', level: 'Intermediate', note: 'Design, Implementation' },
    ],
  },
  {
    id: 'database',
    label: 'Databases',
    description: 'Data modeling and persistence',
    skills: [
      { name: 'MongoDB', level: 'Intermediate', note: 'NoSQL, Mongoose ODM' },
      { name: 'MySQL', level: 'Intermediate', note: 'Relational, SQL queries' },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    description: 'Cloud architecture, distributed systems and CI/CD',
    skills: [
      { name: 'AWS', level: 'Advanced', note: 'Certified Solutions Architect (Apr 2026), VPC, IAM, EC2' },
      { name: 'Docker', level: 'Intermediate', note: 'Containerization, Microservices' },
      { name: 'Git', level: 'Advanced', note: 'Branching, PR Reviews, Collaborative Git' },
      { name: 'GitHub', level: 'Advanced', note: 'Open Source Contributor, Merged PRs, Actions' },
      { name: 'CI/CD', level: 'Intermediate', note: 'Pipeline automation, Deployment workflows' },
    ],
  },
  {
    id: 'ml',
    label: 'Machine Learning',
    description: 'Data analysis, ML modeling and visualization',
    skills: [
      { name: 'NumPy', level: 'Intermediate', note: 'Numerical computing' },
      { name: 'Pandas', level: 'Intermediate', note: 'Data manipulation' },
      { name: 'Matplotlib', level: 'Intermediate', note: 'Data visualization' },
      { name: 'Scikit-learn', level: 'Beginner', note: 'ML algorithms' },
    ],
  },
];

export const levelColors = {
  Advanced: '#D71935',
  Intermediate: '#FFD43B',
  Beginner: '#A5A5A5',
};

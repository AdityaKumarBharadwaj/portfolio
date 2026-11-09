const items = [
  'React',
  '·',
  'Node.js',
  '·',
  'TypeScript',
  '·',
  'MongoDB',
  '·',
  'AWS',
  '·',
  'Docker',
  '·',
  'C++',
  '·',
  'Python',
  '·',
  'DSA',
  '·',
  'Full-Stack',
  '·',
  'Open Source',
  '·',
];

export default function Marquee({ reverse = false }) {
  // Duplicate items 4 times to ensure seamless infinite loop across wide screens
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div
      className="overflow-hidden border-y border-border bg-[#111] py-3.5 select-none contain-paint"
      aria-hidden="true"
    >
      <div
        className={`flex gap-8 whitespace-nowrap will-change-transform ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee-forward'
        }`}
      >
        {repeatedItems.map((item, i) => (
          <span
            key={i}
            className={`font-mono text-xs tracking-widest uppercase flex-shrink-0 ${
              item === '·' ? 'text-crimson font-bold' : 'text-muted/80'
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

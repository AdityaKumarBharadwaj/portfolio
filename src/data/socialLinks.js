// ============================================================
// SOCIAL LINKS CONFIGURATION
// ============================================================

import { profile } from './profile';

export const socialLinks = [
  {
    id: 'github',
    label: 'GitHub',
    url: profile.github,
    handle: '@AdityaKumarBharadwaj',
    description: 'Open source projects & contributions',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: profile.linkedin,
    handle: 'aditya-kumar-8248a2293',
    description: 'Professional network',
  },
  {
    id: 'email',
    label: 'Email',
    url: `mailto:${profile.email}`,
    handle: profile.email,
    description: 'Direct contact',
  },
  {
    id: 'phone',
    label: 'Phone',
    url: `tel:${profile.phone.replace(/\s+/g, '')}`,
    handle: profile.phone,
    description: 'Direct call & WhatsApp',
  },
];

export const navLinks = [
  { index: '01', label: 'About', href: '#about' },
  { index: '02', label: 'Work', href: '#projects' },
  { index: '03', label: 'Expertise', href: '#expertise' },
  { index: '04', label: 'Certifications', href: '#certifications' },
  { index: '05', label: 'Coding', href: '#coding-profiles' },
  { index: '06', label: 'Open Source', href: '#open-source' },
  { index: '07', label: 'Contact', href: '#contact' },
];

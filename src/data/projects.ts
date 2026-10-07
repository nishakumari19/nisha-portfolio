export interface CaseStudy {
  category: string;
  problem: string;
  builtItems: { label: string; text: string }[];
  hardestChallenge?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle?: string;
  featured?: boolean;
  tags: string[];
  description: string;
  builtDetails?: string;
  additionalModules?: string;
  engineeringHighlights?: string[];
  bullets?: string[];
  note?: string;
  // Set to undefined when unavailable. Add live URL string here when ready (e.g. 'https://example.com').
  liveUrl?: string;
  // Set to undefined when unavailable or private. Add GitHub repository URL string here when ready.
  githubUrl?: string;
  caseStudy?: CaseStudy;
}

export const projects: Project[] = [
  {
    id: 'workforce-tracker',
    title: 'Workforce Tracker (Desktop + Web)',
    category: 'FEATURED PRODUCTION SYSTEM · AZEOSOFT',
    subtitle: 'Desktop + Web Application',
    featured: true,
    tags: ['Electron', 'React', 'Node.js', 'RxDB', 'WebRTC', 'AWS S3'],
    description:
      'A desktop and web tracker for remote teams. I built the sync layer that keeps the tracker working when the internet drops, and a retrying upload pipeline to S3.',
    builtDetails:
      'Core Electron tracking features (automated screenshots, application and browser activity, live session timer), real-time WebRTC screen monitoring for admins, an offline sync layer (RxDB and queue management), and an AWS S3 presigned-URL upload pipeline with retry handling.',
    additionalModules:
      'Break management, manual time entry with validation, offline login with token persistence, a mini tracker UI, dashboards, and the tracker web frontend feature and pricing pages.',
    engineeringHighlights: [
      'RxDB offline queue with automatic reconnection sync',
      'WebRTC peer screen viewing for admin real-time audit',
      'S3 presigned URLs with backoff retry logic',
      'Secure offline auth token persistence',
    ],
    // Live URL for production workforce tracker
    liveUrl: 'https://tracker.azeosoft.com',
    // Set to undefined for now. Source code is private.
    githubUrl: undefined,
    caseStudy: {
      category: 'CASE STUDY · AZEOSOFT · DESKTOP + WEB',
      problem:
        'A desktop tracker needs to run smoothly even when internet connections drop. Local tracking (screenshots, app usage, active timers) must keep going without losing data, crashing, or flooding the server once the connection comes back. At the same time, managers need to view live screens when devices are online.',
      builtItems: [
        {
          label: 'Core Electron tracking',
          text: 'Automatic screenshot captures, application and browser window activity monitoring, and accurate session timers.',
        },
        {
          label: 'Real-time WebRTC monitoring',
          text: 'Low-latency peer screen monitoring streams so managers can inspect active sessions.',
        },
        {
          label: 'Offline sync layer',
          text: 'Local data storage with RxDB and an action queue that keeps tracking events safe during offline periods.',
        },
        {
          label: 'AWS S3 upload pipeline',
          text: 'Direct media uploads with presigned URLs, exponential retry backoff, and failure recovery for screenshots.',
        },
        {
          label: 'Controls and user features',
          text: 'Break management, manual time entry with validation, offline login with saved tokens, a mini tracker widget UI, and web frontend feature and pricing pages.',
        },
      ],
      // Leave empty for now; the modal will only render this block if non-empty.
      hardestChallenge: '',
    },
  },
  {
    id: 'ecommerce-admin',
    title: 'D2C E-Commerce Admin Panel',
    category: 'INTERNAL TOOL · AZEOSOFT',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'ExcelJS', 'REST APIs'],
    description:
      'A dashboard for managing products, categories, banners, orders, sellers, and reports, with a dynamic multivariant category and attribute system and image cropping tools.',
    bullets: [
      'Excel bulk product upload built with ExcelJS, complete with schema validation and upload history logs.',
      'Connected 20+ REST APIs across core admin modules.',
      'Seller onboarding and approval pipelines, plus commission tracking.',
      'Invoice generation system supporting multiple templates and dynamic data mapping.',
      'Diagnosed and debugged production issues around image URL mapping, API mismatches, and database connectivity.',
    ],
    // Live URL for D2C E-Commerce Admin Panel
    liveUrl: 'https://www.directtocart.com',
    // Set to undefined for now. Source code is private.
    githubUrl: undefined,
  },
  {
    id: 'hizashi-sora',
    title: 'Hizashi Sora: E-Commerce Website',
    category: 'PERSONAL PROJECT · FULL-STACK',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Razorpay', 'Google OAuth', 'AWS S3', 'Vercel'],
    description:
      'Full-stack e-commerce platform with secure auth, Razorpay payments, Google OAuth, automated email notifications, and S3 image storage. Deployed on Vercel with a custom domain.',
    note: "Built for my sister's business.",
    // Set to undefined for now. Add live URL string here when ready.
    liveUrl: undefined,
    // Set to undefined for now. Source code is private.
    githubUrl: undefined,
  },
  {
    id: 'cattrend',
    title: 'CatTrend: Cat-Themed Blog',
    category: 'PERSONAL PROJECT · CAT THEME',
    tags: ['Node.js', 'MongoDB', 'Express'],
    description:
      'CRUD blogging platform with a responsive interface, built with Node.js and MongoDB.',
    // Set to undefined for now. Add live URL string here when ready.
    liveUrl: undefined,
    // Set to undefined for now. Add repository URL string here when ready.
    githubUrl: undefined,
  },
];

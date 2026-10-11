/**
 * Authentic Portfolio Data
 * Harishwa S - Source of Truth: Resume
 */

import {
  ContactInfo,
  SkillItem,
  ProjectItem,
  EducationItem,
  CertificationItem,
  ActivityItem,
} from '../types/portfolio';

export const personalInfo: ContactInfo = {
  name: 'Harishwa S',
  title: 'First-Year B.E. Computer Science & Engineering Student',
  email: 'harishwa.tech2008@gmail.com',
  phone: '+91 93843 92613',
  location: 'Salem, Tamil Nadu, India',
  linkedin: 'https://linkedin.com/in/harishwa-s-048762432',
  college: 'KPR Institute of Engineering and Technology, Coimbatore',
  degree: 'B.E. Computer Science and Engineering',
  batch: '2026–2030 (First Year)',
};

export const heroBio = {
  summary:
    'First-year Computer Science and Engineering student with a strong academic record and a working knowledge of Python programming and AI tools. Interested in software development, web development, and embedded prototyping, with hands-on experience building an Arduino-based safety project and representing a farmer-to-consumer platform concept at Smart India Hackathon. Comfortable leading small teams and learning new technologies quickly.',
  roles: [
    'Computer Science Student',
    'Python Developer',
    'Embedded & IoT Prototyper',
    'AI Tools Explorer',
    'Aspiring Software Engineer',
  ],
};

export const skillsData: SkillItem[] = [
  // Programming Languages
  {
    name: 'Python Programming',
    level: 'Good working knowledge',
    category: 'programming',
    description: 'Core syntax, problem solving, scripting, data handling, and 40-hour formal training.',
    icon: 'terminal',
  },
  // AI Tools
  {
    name: 'AI Tools & AI-assisted Development',
    level: 'Working knowledge',
    category: 'ai',
    description: 'Utilizing modern AI developer tools for rapid prototyping, workflow enhancement, and coding productivity.',
    icon: 'cpu',
  },
  // Web Development
  {
    name: 'Web Development',
    level: 'Basics',
    category: 'web',
    description: 'Foundations of web architecture, modern HTML/CSS layout techniques, and interactive UI logic.',
    icon: 'globe',
  },
  // Hardware & Electronics
  {
    name: 'Arduino & Electronics',
    level: 'Basics & Prototyping',
    category: 'hardware',
    description: 'Sensor interfacing (optical eye-blink sensors), microcontroller logic, breadboard circuits, and automated alerts.',
    icon: 'zap',
  },
  // Prototyping & Methodology
  {
    name: 'Project Development & Prototyping',
    level: 'Hands-on practical',
    category: 'programming',
    description: 'Transforming concepts into functional working prototypes, from circuit assembly to conceptual platform architecture.',
    icon: 'layers',
  },
  {
    name: 'Problem Solving',
    level: 'Active focus',
    category: 'programming',
    description: 'Analytical decomposition of complex challenges and engineering practical software & hardware solutions.',
    icon: 'puzzle',
  },
  // Soft Skills / Strengths
  {
    name: 'Leadership',
    category: 'soft',
    description: 'Comfortable leading small teams, coordinating project tasks, and guiding initiatives toward completion.',
    icon: 'users',
  },
  {
    name: 'Teamwork & Communication',
    category: 'soft',
    description: 'Active collaboration within student clubs, sports teams, and technical project groups.',
    icon: 'message-square',
  },
  {
    name: 'Creativity & Initiative',
    category: 'soft',
    description: 'Proactively identifying pain points in communities and proposing creative engineering solutions.',
    icon: 'sparkles',
  },
  {
    name: 'Quick Learning & Adaptability',
    category: 'soft',
    description: 'Rapidly absorbing novel frameworks, microcontroller programming logic, and AI workflows.',
    icon: 'trending-up',
  },
  {
    name: 'Technical Curiosity',
    category: 'soft',
    description: 'Enthusiasm for emerging technologies, intelligent computing, and hands-on maker experimentation.',
    icon: 'compass',
  },
  // Languages
  {
    name: 'Tamil',
    level: 'Native',
    category: 'language',
    description: 'Mother tongue, fluent written and verbal communication.',
    icon: 'mic',
  },
  {
    name: 'English',
    level: 'Good',
    category: 'language',
    description: 'Proficient technical and professional communication.',
    icon: 'mic',
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: 'anti-sleep-alarm',
    title: 'Anti-Sleep Alarm System for Drivers',
    type: 'College Project',
    category: 'Embedded Systems & IoT Safety',
    tagline: 'Hardware prototype detecting driver drowsiness in real time to prevent road accidents.',
    problem:
      'Driver fatigue and inadvertent micro-sleep episodes are among the leading causes of fatal highway accidents. Existing systems are often costly or overly intrusive.',
    overview:
      'Built an embedded prototype that actively detects driver drowsiness by monitoring eye-blinking patterns through an infrared eye-blink sensor. Programmed the Arduino microcontroller to trigger an audible buzzer alarm whenever prolonged eye closure indicates drowsiness, alerting the driver to stay awake without taking dangerous control of the steering or vehicle mechanics.',
    technologies: [
      'Arduino UNO',
      'Eye-Blink Sensor Module',
      'Piezo Buzzer Alarm',
      'Microcontroller Logic',
      'Embedded C / C++',
      'Circuit Prototyping',
    ],
    contribution: [
      'Assembled the complete hardware circuit connecting Arduino board, eye-blink sensor, buzzer, 9V battery, and jumper wires.',
      'Programmed threshold logic to differentiate between natural blinking and prolonged eye closure.',
      'Implemented automated auditory alert mechanism with fast response time.',
      'Conducted rigorous calibration and testing to ensure reliable driver alerting.',
    ],
    keyFeatures: [
      'Real-time non-intrusive eye-blink monitoring',
      'Autonomous threshold-based drowsiness detection',
      'Instant high-decibel piezo buzzer safety alarm',
      'Driver-centric design that warns without hijacking vehicle controls',
      'Low-power, portable, battery-powered embedded form factor',
    ],
    impactNotes:
      'Gained deep practical exposure to sensor interfacing, real-time microcontroller logic, and safety-critical embedded systems.',
    hasInteractiveDemo: true,
  },
  {
    id: 'farmconnect-sih',
    title: 'FarmConnect — Farmer-to-Consumer Platform',
    type: 'Smart India Hackathon (SIH) Idea',
    category: 'AgTech & Supply Chain Platform',
    tagline: 'Direct marketplace connecting consumers with farmers to eliminate intermediary exploitation.',
    problem:
      'Multi-tiered middleman networks in the agricultural supply chain severely slash farmer earnings while simultaneously driving up end-consumer prices and causing agricultural produce to lose freshness.',
    overview:
      'Conceptualized and architected a digital direct-to-consumer platform for the Smart India Hackathon (SIH) that eliminates intermediary layers between agricultural producers and retail buyers. Designed a distributed logistics model powered by localized collection points and urban fulfillment hubs to deliver harvested produce swiftly and affordably.',
    technologies: [
      'Platform Architecture',
      'Supply Chain Distribution Model',
      'Web Platform Conceptualization',
      'Problem Identification & Research',
      'Hub-and-Spoke Logistics',
    ],
    contribution: [
      'Spearheaded problem identification surrounding farmer profit margins, transit delays, and supply chain bottlenecks.',
      'Structured a comprehensive catalogue covering farm produce: vegetables, milk, curd, eggs, rice, pulses, and regional crops.',
      'Designed a distributed regional distribution model centered on village-level collection centers and urban hubs.',
      'Presented the solution blueprint as part of Smart India Hackathon idea development.',
    ],
    keyFeatures: [
      'Direct fair-price monetization for regional agricultural producers',
      'Unified farm produce catalogue spanning dairy, vegetables, grains, and pulses',
      'Local hub-and-spoke collection points minimizing transit times and spoilage',
      'Freshness assurance and end-to-end supply chain transparency',
    ],
    impactNotes:
      'Developed deep insight into system design, scalable marketplace dynamics, and user empathy in rural economies.',
    hasInteractiveDemo: true,
  },
];

export const educationData: EducationItem[] = [
  {
    degree: 'B.E. Computer Science and Engineering',
    institution: 'KPR Institute of Engineering and Technology, Coimbatore',
    location: 'Coimbatore, Tamil Nadu',
    period: '2026 – 2030',
    status: 'First Year (Currently Pursuing)',
    details: [
      'Curriculum focused on core computing principles, programming paradigms, and emerging engineering methodologies.',
      'Active participant in collegiate technical societies and innovation challenges.',
      'Member of Ignitron Club, contributing to hands-on engineering and campus tech events.',
    ],
  },
  {
    degree: 'Class XII — Tamil Nadu State Board',
    institution: 'Sree Saravana Nikethan Higher Secondary School',
    location: 'Nerinjipettai, Tamil Nadu',
    period: 'Completed 2026',
    score: '553 / 600',
    scoreType: '92.17% (Academic Distinction)',
    details: [
      'Secured 92.17% overall with strong performance in Mathematics, Physics, and Chemistry.',
      'Demonstrated disciplined academic focus and consistent analytical problem-solving skills.',
      'Represented the institution in extracurriculars and sports.',
    ],
  },
  {
    degree: 'Class X — Matriculation',
    institution: 'Sri Nachiyar Matriculation School',
    location: 'Tamil Nadu',
    period: 'Completed 2024',
    score: '483 / 500',
    scoreType: '96.6% (Top Honor)',
    details: [
      'Achieved a remarkable 96.6% score, standing among top academic performers.',
      'Active participation in school extracurriculars, academic quizzes, and sports up to Class X.',
    ],
  },
];

export const certificationData: CertificationItem[] = [
  {
    title: 'Python Programming',
    duration: '40 Hours Comprehensive Training',
    issuer: 'CUBE Technologies',
    completionDate: 'Completed January 2026',
    conductedAt: 'Sree Saravana Nikethan Matric. Hr. Sec. School, Nerinjipettai',
    skills: [
      'Python Syntax & Semantics',
      'Control Structures & Logic',
      'Functions & Modular Design',
      'Data Structures (Lists, Tuples, Dictionaries)',
      'Algorithmic Problem Solving',
      'Practical Hands-on Exercises',
    ],
  },
];

export const activitiesData: ActivityItem[] = [
  {
    title: 'Ignitron Club',
    role: 'Active Member',
    organization: 'KPR Institute of Engineering and Technology (KPRIET)',
    category: 'club',
    description:
      'Premier collegiate technical and innovation club fostering robotics, embedded prototyping, and peer collaboration.',
    highlights: [
      'Engages in campus innovation challenges and technical workshops.',
      'Collaborates with seniors and peers on practical engineering projects.',
    ],
  },
  {
    title: 'College Technical & Innovation Activities',
    role: 'Participant & Builder',
    organization: 'KPRIET, Coimbatore',
    category: 'innovation',
    description:
      'Active contributor to collegiate engineering showcases, hackathons, and ideation tracks.',
    highlights: [
      'Participated in campus innovation competitions and technical events.',
      'Eager to represent the department in regional and national hackathons.',
    ],
  },
  {
    title: 'Smart India Hackathon (SIH) Idea Development',
    role: 'Concept Designer & Researcher',
    organization: 'Smart India Hackathon',
    category: 'innovation',
    description:
      'Ideated and represented the FarmConnect agricultural platform addressing rural supply-chain friction.',
    highlights: [
      'Formulated the problem statement around agricultural intermediaries.',
      'Designed collection hub logistics and transparent consumer catalogue.',
    ],
  },
  {
    title: 'Kho Kho Sports Team',
    role: 'School Sports Team Member',
    organization: 'School Athletic Team',
    category: 'sports',
    description:
      'Active team athlete competing in Kho Kho sports tournaments, developing agility, tactical discipline, and strong team communication.',
    highlights: [
      'Trained in rapid decision-making, physical resilience, and strategic team coordination.',
      'Represented the school team in competitive matches.',
    ],
  },
  {
    title: 'School Extracurricular Activities',
    role: 'Active Participant',
    organization: 'Up to Class X',
    category: 'extracurricular',
    description:
      'Consistently participated in school events, competitions, and collaborative activities throughout formative school years.',
    highlights: [
      'Balanced rigorous academic excellence with sports and active school involvement.',
    ],
  },
];

export const areasOfInterest = [
  'Artificial Intelligence & Machine Learning',
  'Python Programming & Scripting',
  'Web Development & Modern Frontends',
  'Software Engineering & Architecture',
  'Embedded Systems & IoT Prototyping',
  'Emerging Technologies',
  'Algorithmic Problem Solving',
  'Community Innovation',
];

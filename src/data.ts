import { Course, Testimonial } from './types';

export const COURSES: Course[] = [
  {
    id: 'power-bi',
    title: 'Power BI & Business Intelligence',
    subtitle: 'Build Professional Dashboards from Real-World Data',
    description: 'Master Power BI, Power Query, DAX, data modeling, and interactive dashboard development through practical, business-focused projects.',
    duration: '6 Weeks • Weekend Batches',
    level: 'Beginner to Advanced',
    icon: 'BarChart3',
    skills: ['Data Visualization', 'DAX Queries', 'Data Modeling', 'Power Query', 'AI Integrations', 'Workspace Publishing'],
    tools: ['Power BI Desktop', 'Power BI Service', 'Power Query', 'Power BI Copilot', 'DAX Studio'],
    features: [
      'Interactive Dashboard Building from Scratch',
      'Advanced DAX functions & Calculations',
      'Data Cleansing & Transformation techniques',
      'Power BI Service & Workspace publishing',
      'AI-powered visualizers & Copilot guides'
    ],
    syllabus: [
      {
        week: 'Week 1',
        topic: 'Introduction & Power Query Essentials',
        details: [
          'Understanding BI Architectures & data lifecycle',
          'Connecting to SQL Databases, Web, Excel sources',
          'Power Query transformations (Merge, Append, Pivot, Unpivot)',
          'Handling duplicates, formatting columns, and error checking'
        ]
      },
      {
        week: 'Week 2',
        topic: 'Data Modeling & Schema Designs',
        details: [
          'Building relational schemas (Star vs Snowflake)',
          'Managing active & inactive relationships',
          'Designing calculated tables and custom Date tables',
          'Ensuring optimal refresh rates and design patterns'
        ]
      },
      {
        week: 'Week 3',
        topic: 'DAX (Data Analysis Expressions) Basics',
        details: [
          'Calculated Columns vs Measures',
          'Understanding filter context and row context',
          'Core functions: CALCULATE, FILTER, ALL, ALLEXCEPT',
          'Time Intelligence formulas (YTD, Prior Year, Rolling Averages)'
        ]
      },
      {
        week: 'Week 4',
        topic: 'Advanced Visualizations & Layout Crafting',
        details: [
          'Designing high-impact KPIs and gauge charts',
          'Implementing drill-downs, drill-throughs, and bookmarks',
          'Customizing visual tooltips and navigation buttons',
          'Designing dashboard templates with grid-precision alignments'
        ]
      },
      {
        week: 'Week 5',
        topic: 'AI Copilot Integration & Advanced DAX',
        details: [
          'Querying dashboard metrics using Natural Language Q&A',
          'Using Key Influencers and Decomposition Tree visualizers',
          'Connecting Power BI to ChatGPT & Copilot for automatic reports',
          'Row-level security (RLS) setup for data privacy'
        ]
      },
      {
        week: 'Week 6',
        topic: 'Capstone Projects & Publishing Portfolio',
        details: [
          'Completing a full-scale corporate Sales & Profit Dashboard',
          'Publishing reports to Power BI Service cloud workspace',
          'Optimizing dashboards for Mobile applications',
          'Portfolio building & resume writing guidelines'
        ]
      }
    ]
  },
  {
    id: 'sql',
    title: 'SQL for Data Analytics',
    subtitle: 'Relational Databases and Business Query Mastery',
    description: 'Master Structured Query Language (SQL) to fetch, aggregate, join, and optimize data inside industrial database engines.',
    duration: '4 Weeks (Saturdays & Sundays)',
    level: 'Beginner to Pro',
    icon: 'Database',
    skills: ['PostgreSQL', 'MySQL', 'Joins & Subqueries', 'Window Functions', 'CTEs', 'Database Modeling'],
    tools: ['PostgreSQL', 'pgAdmin', 'DBeaver', 'MySQL Workbench'],
    features: [
      'Hands-on syntax practices on active PostgreSQL servers',
      'Real-world business query assignments',
      'Performance tuning and indexing strategies',
      'Mock interview preparation sessions'
    ],
    syllabus: [
      {
        week: 'Week 1',
        topic: 'Introduction & Relational Database Basics',
        details: [
          'How databases store structured tables',
          'Database CRUD operations (CREATE, INSERT, UPDATE, DELETE)',
          'Basic SELECT syntax with WHERE, ORDER BY, and LIMIT',
          'Data types, Primary Keys, and Foreign Keys constraints'
        ]
      },
      {
        week: 'Week 2',
        topic: 'Data Grouping & Multi-Table Joins',
        details: [
          'Aggregate functions (SUM, AVG, COUNT, MIN, MAX)',
          'GROUP BY and HAVING clauses',
          'Inner Joins, Left/Right Outer Joins, Full Outer Joins',
          'Self joins and joining more than three tables'
        ]
      },
      {
        week: 'Week 3',
        topic: 'Subqueries & CTEs (Common Table Expressions)',
        details: [
          'Writing subqueries in SELECT, FROM, and WHERE clauses',
          'Core advantages of Common Table Expressions (WITH statements)',
          'String functions, Date manipulation, and CASE WHEN statements',
          'Database views creation and utilization'
        ]
      },
      {
        week: 'Week 4',
        topic: 'Window Functions & Performance Tuning',
        details: [
          'Analytical functions (ROW_NUMBER, RANK, DENSE_RANK)',
          'Moving calculations using LAG, LEAD, and OVER(PARTITION BY)',
          'Understanding indexes & optimizing query runtime speed',
          'Final query modeling test & mock database design'
        ]
      }
    ]
  },
  {
    id: 'excel',
    title: 'Advanced Excel for Business',
    subtitle: 'The Ultimate Workplace Spreadsheet Guide',
    description: 'Master the most powerful business tool ever created. Build financial models, dynamic trackers, and interactive executive reports.',
    duration: '4 Weeks (Saturdays & Sundays)',
    level: 'Beginner to Intermediate',
    icon: 'FileSpreadsheet',
    skills: ['Pivot Tables', 'XLOOKUP / VLOOKUP', 'Power Query', 'Macros & VBA', 'Data Modeling', 'Financial Projections'],
    tools: ['Microsoft Excel', 'Power Query', 'VBA Editor', 'Excel AI Add-ins'],
    features: [
      'Advanced formula construction & troubleshooting',
      'Dynamic automated spreadsheets',
      'Professional financial statement templates',
      'Automated macros and workflow shortcuts'
    ],
    syllabus: [
      {
        week: 'Week 1',
        topic: 'Essential Formulas & Logical Operations',
        details: [
          'Cell references (Absolute, Relative, Mixed)',
          'XLOOKUP, VLOOKUP, INDEX & MATCH masteries',
          'IF, AND, OR, SUMIFS, and COUNTIFS constructs',
          'Conditional Formatting for visual reports'
        ]
      },
      {
        week: 'Week 2',
        topic: 'Pivot Tables & Dynamic Summaries',
        details: [
          'Creating and customizing Pivot Tables',
          'Sorting, grouping, and filtering pivot metrics',
          'Using Slicers & Timelines for interactive layouts',
          'Pivot Chart design and synchronization'
        ]
      },
      {
        week: 'Week 3',
        topic: 'Excel Power Query & Data Cleaning',
        details: [
          'Loading multiple files, CSVs, or web tables into Excel',
          'Cleaning raw data (Extract text, split columns, date formatting)',
          'Merging & consolidating spreadsheets automatically',
          'Using the advanced Excel Data Model schema features'
        ]
      },
      {
        week: 'Week 4',
        topic: 'Macros & Dashboards Automation',
        details: [
          'Recording simple Macros to automate repetitive reports',
          'Introduction to VBA editing environment',
          'Building beautiful Executive summary tabs from scratch',
          'Keyboard shortcuts and expert productivity guidelines'
        ]
      }
    ]
  },
  {
    id: 'python-ai',
    title: 'Python for Data Analytics',
    subtitle: 'Harness the Future with Code and AI Agents',
    description: 'Learn the core programming language for data analytics and combine it with AI prompts, ChatGPT, and Copilot tools to build solutions.',
    duration: '6 Weeks (Saturdays & Sundays)',
    level: 'Beginner',
    icon: 'Terminal',
    skills: ['Python Core', 'Pandas & NumPy', 'Data Visualization', 'Prompt Engineering', 'ChatGPT / Copilot Analytics', 'Jupyter Lab'],
    tools: ['Python', 'Jupyter Notebooks', 'Pandas', 'Matplotlib', 'GitHub Copilot'],
    features: [
      'Zero-programming-background friendly design',
      'Interactive notebooks & hands-on file structures',
      'AI Prompt strategies to write perfect scripts',
      'Real-world data scraping and automation projects'
    ],
    syllabus: [
      {
        week: 'Week 1',
        topic: 'Python Programming Core Basics',
        details: [
          'Setting up Python, Anaconda, and Jupyter Notebooks',
          'Variables, basic operators, and data types',
          'Conditional statements (if-else) and loops (for, while)',
          'Writing reusable Python functions & handling libraries'
        ]
      },
      {
        week: 'Week 2',
        topic: 'Pandas & NumPy for Structured Analysis',
        details: [
          'Understanding Series and DataFrames structure',
          'Filtering rows, sorting data, and renaming columns',
          'Handling empty values, duplicates, and faulty formatting',
          'Grouping data and aggregating column statistics'
        ]
      },
      {
        week: 'Week 3',
        topic: 'Data Visualization & Reporting',
        details: [
          'Creating line, bar, scatter, and histogram plots',
          'Styling plots with Matplotlib and Seaborn styles',
          'Exporting clean analytical charts for PowerPoint/Reports',
          'Writing dynamic scripts to combine separate files'
        ]
      },
      {
        week: 'Week 4',
        topic: 'ChatGPT & Copilot for Rapid Python Coding',
        details: [
          'Prompt engineering strategies to debug Python bugs',
          'Using ChatGPT to write advanced formulas and scripts',
          'Using GitHub Copilot to autocomplete blocks of python code',
          'Automating daily files, web searches, and file exports'
        ]
      },
      {
        week: 'Week 5',
        topic: 'Business Intelligence & API Connections',
        details: [
          'Scraping tabular data from web pages automatically',
          'Connecting Python scripts to Google Sheets / Excel files',
          'Using OpenAI API with Python to analyze review texts',
          'Analyzing sales reviews using sentiment indices'
        ]
      },
      {
        week: 'Week 6',
        topic: 'Practical Projects Showcase',
        details: [
          'Processing 1,000,000 row data streams in seconds',
          'Drafting automated analytical summaries using templates',
          'Hosting python portfolios on GitHub and LinkedIn',
          'Job interview prep questions & curriculum review'
        ]
      }
    ]
  },
  {
    id: 'ai-tools',
    title: 'AI Tools & Prompt Engineering',
    subtitle: 'Optimize Your Productivity and Business Workflows',
    description: 'Master Prompt Engineering, ChatGPT Plus, Claude, Microsoft Copilot, and Google Gemini to work 10x faster and automate administrative tasks.',
    duration: '3 Weeks (Saturdays & Sundays)',
    level: 'All Levels',
    icon: 'Cpu',
    skills: ['Prompt Engineering', 'Custom GPTs', 'Workflow Automation', 'AI Agents', 'Research Intelligence', 'Microsoft Copilot'],
    tools: ['ChatGPT', 'Claude', 'Microsoft Copilot', 'Google Gemini', 'Perplexity AI', 'NotebookLM'],
    features: [
      'Formulating advanced prompts with professional frameworks',
      'Automating document and presentation summaries',
      'Creating personalized custom AI agents for workflows',
      'Deep academic and market research strategies with AI tools'
    ],
    syllabus: [
      {
        week: 'Week 1',
        topic: 'Foundations of Prompt Engineering',
        details: [
          'Introduction to LLMs (Large Language Models) capabilities',
          'Role-play prompting, few-shot prompts, and context settings',
          'The CREATE prompt framework and structured templates',
          'Overcoming AI hallucinations and fact-checking workflows'
        ]
      },
      {
        week: 'Week 2',
        topic: 'Enterprise AI Tools & Copilots',
        details: [
          'Integrating Microsoft Copilot into Excel, Word, and PowerPoint',
          'Google Gemini Workspace automation guides',
          'Using Claude 3.5 Sonnet Artifacts for rapid prototyping',
          'Perplexity AI for deep web searching and research consolidation'
        ]
      },
      {
        week: 'Week 3',
        topic: 'AI Automation & Custom Agents',
        details: [
          'Building custom GPT assistants without writing any code',
          'Using NotebookLM to create structured audio-podcasts from files',
          'AI Ethics, secure data handling guidelines, and future roadmaps',
          'Final productivity hackathon: Automating a 5-hour task to 5 minutes'
        ]
      }
    ]
  },
  {
    id: 'resume-interview',
    title: 'Resume Building & Interview Preparation',
    subtitle: 'Get Recruiter Ready and Crack Technical Rounds',
    description: 'Learn to design high-impact, ATS-friendly resumes and build a professional analytical portfolio. Master behavioral and SQL mock interviews.',
    duration: '2 Weeks (Saturdays & Sundays)',
    level: 'Career Starters & Professionals',
    icon: 'Briefcase',
    skills: ['ATS Optimization', 'Personal Branding', 'LinkedIn Profile Design', 'Technical Mock Interviews', 'HR Behavioral Answers'],
    tools: ['Canva ATS Builder', 'GitHub', 'LinkedIn', 'ATS Match Checkers', 'Google Interview Warmup'],
    features: [
      'Individual ATS-score review and CV restructuring',
      'Polishing LinkedIn profile settings for active recruiters',
      'Uploading and presenting dashboards on GitHub or Web portfolios',
      'Live mock technical loops simulating corporate hiring rounds'
    ],
    syllabus: [
      {
        week: 'Week 1',
        topic: 'ATS Resume Engineering & LinkedIn Makeover',
        details: [
          'Cracking ATS (Applicant Tracking System) parser guidelines',
          'Crafting impactful bullet points using the XYZ resume formula',
          'Optimizing LinkedIn headings, summaries, and skills sections',
          'Drafting customized cover letters utilizing smart AI assistants'
        ]
      },
      {
        week: 'Week 2',
        topic: 'Mock Interview Loops & Portfolio Showcase',
        details: [
          'Behavioral questions training (The STAR methodology)',
          'Whiteboarding SQL join schemas and Power BI performance queries',
          'Tackling difficult gap-year questions and salary negotiations',
          'Deploying your analytics dashboard projects to public portfolios'
        ]
      }
    ]
  },
  {
    id: 'english-comm',
    title: 'English Communication Skills',
    subtitle: 'Build Speaking Fluency and Professional Confidence',
    description: 'Overcome presentation stage fear, master business email writing, and speak confidently in group discussions and meetings.',
    duration: '4 Weeks (Saturdays & Sundays)',
    level: 'Beginner to Intermediate',
    icon: 'MessageSquare',
    skills: ['Spoken English', 'Vocal Confidence', 'Business Email Etiquette', 'Stage Presentation', 'Active Listening'],
    tools: ['Vocal Recorders', 'Grammarly', 'Interactive Presentation Slides'],
    features: [
      'Interactive public speaking drills',
      'Fun group debates and conversation games',
      'Business vocabulary and sentence structural guidance',
      'Personal feedback on vocal tone, clarity, and pace'
    ],
    syllabus: [
      {
        week: 'Week 1',
        topic: 'Building Conversational Habits',
        details: [
          'Overcoming the fear of making grammar mistakes',
          'Expanding daily vocabulary and key phrase connectors',
          'Correcting common pronunciation errors in Indian English',
          'Fun visual-description games and icebreakers'
        ]
      },
      {
        week: 'Week 2',
        topic: 'Body Language & Public Delivery',
        details: [
          'The power of eye contact, posture, and smiling',
          'Vocal modulation (Pitch adjustments, pause dynamics)',
          'Presenting with visual slides confidently on stage',
          'Individual presentations on student-selected topics'
        ]
      },
      {
        week: 'Week 3',
        topic: 'Professional Business Writing',
        details: [
          'Structuring clear, polite corporate emails',
          'Writing reports, summaries, and chat messages with precision',
          'Using AI assistants to proofread and polish language structures',
          'Mock business email writing assignments & peer reviews'
        ]
      },
      {
        week: 'Week 4',
        topic: 'Meetings, Group Debates & Etiquette',
        details: [
          'Rules of constructive dialogue and polite disagreement',
          'Leading and contributing to brainstorming sessions',
          'Active listening habits and telephone interview etiquette',
          'Graduation speech: Showcase presentation for peers'
        ]
      }
    ]
  },
  {
    id: 'kannada-comm',
    title: 'Kannada Communication Skills',
    subtitle: 'Conversational Kannada for Fluent Daily Interactions',
    description: 'Learn spoken Kannada for day-to-day business, networking, team collaborations, and social interactions in Karnataka.',
    duration: '4 Weeks (Saturdays & Sundays)',
    level: 'Beginner to Spoken Fluency',
    icon: 'Languages',
    skills: ['Spoken Kannada', 'Workplace Conversations', 'Social Interactions', 'Local Phrases', 'Fluency Drills'],
    tools: ['Conversational Guidebooks', 'Real-life Roleplay Cards', 'Daily Audio logs'],
    features: [
      'Zero Kannada background-friendly structured curriculum',
      'Day-to-day real-world situation roleplay sessions',
      'Vocabulary sheets covering essential daily vocabulary',
      'Building strong local corporate and casual friendships'
    ],
    syllabus: [
      {
        week: 'Week 1',
        topic: 'Essential Pronouns & Daily Greetings',
        details: [
          'Key vocabulary: Pronouns, relationships, numbers, and colors',
          'Basic polite greetings and introductions',
          'Forming simple 3-word sentences in Kannada',
          'Roleplay: Daily shopping and interaction with local drivers'
        ]
      },
      {
        week: 'Week 2',
        topic: 'Workplace and Team Collaboration',
        details: [
          'Kannada terminology for offices and workspace tools',
          'Explaining instructions, deadlines, and project requirements',
          'Polite requests, permission questions, and feedback phrasing',
          'Roleplay: Explaining files or asking local team members for support'
        ]
      },
      {
        week: 'Week 3',
        topic: 'Social Networking & Navigating the City',
        details: [
          'Asking directions, dealing with traffic, and city transport keys',
          'Expressing emergency needs, medical calls, and restaurant orders',
          'Casual conversations about sports, weather, and food habits',
          'Interactive scenario games: Resolving mock city problems'
        ]
      },
      {
        week: 'Week 4',
        topic: 'Storytelling, Idioms & Final Presentation',
        details: [
          'Exploring popular Kannada proverbs, idioms, and their meanings',
          'Narrating simple childhood or daily work stories in Kannada',
          'Constructive conversational reviews & feedback sessions',
          'Final presentation: Spoken speech about Karnataka culture'
        ]
      }
    ]
  },
  {
    id: 'school-program',
    title: 'Government School Student Development Program',
    subtitle: 'Free Specialized Empowerment and Career Awareness Programs',
    description: 'Exclusive weekend and holiday courses tailored for government school students, aiming to improve confidence, digital literacy, and future career horizons.',
    duration: 'Ongoing (Saturdays, Sundays & Holidays)',
    level: 'School Students (Grades 5-12)',
    icon: 'GraduationCap',
    skills: ['English Speaking', 'Kannada Communication', 'Public Speaking', 'Computer Fundamentals', 'Personality Development', 'Career Guidance', 'Digital Skills', 'Basic AI Awareness'],
    tools: ['Desktop Computers', 'Typing Coaches', 'Interactive Presentation Kits', 'Basic Internet Utilities'],
    features: [
      'Sponsored free training resources for deserving students',
      'Activity-based conversational speaking modules',
      'Basic keyboarding, internet search, and software training',
      'Inspiring mentorship sessions on future high-paying careers'
    ],
    syllabus: [
      {
        week: 'Phase 1',
        topic: 'Self-Confidence & Basic Communication',
        details: [
          'Overcoming fear of speaking in front of a class',
          'Polite introduction rules (English and Kannada structures)',
          'Storytelling, roleplay games, and basic hand gestures',
          'Simple vocal projection and breathing exercises'
        ]
      },
      {
        week: 'Phase 2',
        topic: 'Computer Fundamentals & Digital Skills',
        details: [
          'How computers work: Key parts, mouse and keyboard shortcuts',
          'Basic typing drills and formatting text inside documents',
          'Introduction to safe internet searches and educational portals',
          'Creating beautiful slides for school presentations'
        ]
      },
      {
        week: 'Phase 3',
        topic: 'Career Awareness & Future Skills',
        details: [
          'Exploring high-demand modern careers (Tech, Management, Public Service)',
          'Basic AI awareness: What is ChatGPT and how to use it safely',
          'Financial literacy: Understanding saving, banking, and budget keys',
          'Interactive quiz competitions and team-building tournaments'
        ]
      }
    ]
  }
];

export const HIGHLIGHTS = [
  {
    title: 'Real Corporate Projects',
    description: 'Build enterprise dashboards, relational database schemas, and data pipelines using actual corporate datasets.',
    icon: 'FolderKanban'
  },
  {
    title: 'Industry Mentorship',
    description: 'Learn directly from senior industry analysts and leadership experts who bring years of practical experience.',
    icon: 'Compass'
  },
  {
    title: 'Weekend Batches',
    description: 'Flexible Saturday and Sunday training calendars designed specifically for working professionals and students.',
    icon: 'Calendar'
  },
  {
    title: 'Small Batch Size',
    description: 'We keep our groups small (maximum 15 seats) to guarantee premium feedback and personalized workspace evaluation.',
    icon: 'Users'
  },
  {
    title: 'Resume Preparation',
    description: 'Step-by-step guidance to draft high-scoring, ATS-friendly resumes that stand out to competitive HR teams.',
    icon: 'FileText'
  },
  {
    title: 'Job Assistance',
    description: 'Receive interview opportunities, callback tips, and constant job channel notifications from our networks.',
    icon: 'Briefcase'
  },
  {
    title: 'AI-Integrated Learning',
    description: 'Learn to use ChatGPT, Microsoft Copilot, Gemini, and Prompt Engineering to write queries and clean files 10x faster.',
    icon: 'Cpu'
  },
  {
    title: 'Practice Lab Access',
    description: 'Work directly on our interactive Analytics Lab terminals, run queries, and compare results inside our sandbox.',
    icon: 'Terminal'
  },
  {
    title: 'Lifetime Learning Resources',
    description: 'Get continuous access to class recorded sessions, custom template libraries, datasets, and future syllabus revisions.',
    icon: 'BookOpen'
  }
];

export const TESTIMONIALS: Testimonial[] = []; // Not used, replaced with STUDENT OUTCOMES grid

export const FAQS = [
  {
    question: 'Do I need coding knowledge?',
    answer: 'Absolutely not! All our analytical programs start from scratch, assuming zero prior coding or database experience. We teach you concepts from basic variables and structures.'
  },
  {
    question: 'Is this course for beginners?',
    answer: 'Yes! Our structured programs are tailored specifically to guide beginners step-by-step into highly proficient, job-ready professionals.'
  },
  {
    question: 'Will I receive placement assistance?',
    answer: 'Yes! We offer extensive job assistance, including direct sharing of student profiles with our partner hiring networks, continuous placement leads, and mock evaluation certifications.'
  },
  {
    question: 'Will I work on real projects?',
    answer: 'Absolutely. You will construct real-world corporate dashboards and execute complex relational SQL queries using authentic industry datasets.'
  },
  {
    question: 'Will resume preparation be included?',
    answer: 'Yes, we provide personal ATS (Applicant Tracking System) resume reviews, templates, and LinkedIn profile optimization guides as part of our career support modules.'
  },
  {
    question: 'Are mock interviews included?',
    answer: 'Yes! We conduct mock technical SQL and Power BI interviews as well as behavioral HR mock rounds to build your confidence and polish your responses.'
  },
  {
    question: 'Will Prompt Engineering be taught?',
    answer: 'Yes! We teach Prompt Engineering frameworks and show how to use ChatGPT, Claude, and Gemini to automate daily workflows and debug code with ease.'
  },
  {
    question: 'Do you teach ChatGPT and Copilot?',
    answer: 'Yes, our training is heavily integrated with Microsoft Copilot, ChatGPT Plus, and standard AI assistants to turn you into a highly efficient modern professional.'
  },
  {
    question: 'Is this suitable for college students?',
    answer: 'Yes! It is highly beneficial for college students looking to acquire high-income skills, build strong portfolios, and get placed during campus or off-campus drives.'
  },
  {
    question: 'Do you have weekend batches?',
    answer: 'Yes! All of our premium bootcamps run on Saturdays and Sundays, allowing working professionals and students to participate without interrupting their schedules.'
  }
];

export type Category = 'All' | 'WordPress' | 'Shopify' | 'SaaS' | 'Research' | 'Tools';

export interface Project {
    id: string;
    title: string;
    category: Category;
    overview: string;
    problem: string;
    role: string[];
    challenges: string[];
    learnings: string[];
    techStack: string[];
    image: string; // Placeholder or path
    link?: string;
    github?: string;
    featured?: boolean;
}

export interface Experience {
    id: string;
    role: string;
    company: string;
    period: string;
    description: string;
}

export interface Education {
    id: string;
    degree: string;
    institution: string;
    year: string;
    details: string;
}

export const portfolioData = {
    hero: {
        name: "Ammar Asif",
        tagline: "Builder. Problem Solver. Lifelong Learner.",
        description:
            "I build real-world web, data, and system products. I enjoy solving messy problems and turning ideas into working systems.",
        ctaPrimary: "View My Work",
        ctaSecondary: "Download CV",
    },
    about: {
        title: "About Me",
        story: [
            "My journey started with a BSc in Computer Science, where I built a strong foundation in software engineering principles. But I didn't want to just write code; I wanted to build intelligent systems. This led me to pursue an MSc in Artificial Intelligence & Data Analytics.",
            "I've always been curiosity-driven. Whether it's building a complex POS system from scratch or analyzing trends with AI, I learn by doing. I believe in taking ownership of problems and delivering end-to-end solutions.",
            "For me, technology is a tool to solve real-world problems. I focus on building systems that are not just functional, but also robust, scalable, and user-centric.",
        ],
    },
    projects: [
        {
            id: "pos-system",
            title: "POS System",
            category: "SaaS",
            overview: "A comprehensive, enterprise-grade Point of Sale system designed for high-volume retail environments. Features a real-time till interface, advanced stock tracking, and role-based access control.",
            problem: "Small to medium businesses often struggle with fragmented tools for sales and inventory. This system unifies them into a single, real-time platform, eliminating stock discrepancies and streamlining staff management.",
            role: ["Lead Developer", "System Architect"],
            challenges: [
                "Implementing optimistic UI updates to ensure the till feels instant even on slow connections.",
                "Designing a robust database schema to handle concurrent transactions without race conditions.",
            ],
            learnings: [
                "Architecting complex state management with React to handle thousands of product SKUs.",
                "Mastery of PostgreSQL transactions and isolation levels for financial data integrity.",
            ],
            techStack: ["React", "Node.js", "Express", "PostgreSQL", "Socket.io"],
            image: "/pos-system.png",
            featured: true,
        },
        {
            id: "trendarc",
            title: "TrendArc",
            category: "SaaS",
            overview: "An intelligent trend dashboard that compares what's hot across movies, music, games, and tech using multi-source data and AI insights.",
            problem: "Trend data is often siloed across different platforms. TrendArc solves this by aggregating data from YouTube, Spotify, and Google Trends into a single 'TrendArc Score' for cross-category comparison.",
            role: ["Full Stack Developer", "AI Engineer"],
            challenges: [
                "Implementing a weighted scoring algorithm that combines search interest, social buzz, and momentum.",
                "Building a hybrid AI category detector using Claude 3.5 Haiku with API fallback probing.",
            ],
            learnings: [
                "Integration of multiple third-party APIs (TMDB, Spotify, Steam) with rate limiting and caching.",
                "Using Prisma with PostgreSQL for efficient complex queries and Next.js 16 App Router for performance.",
            ],
            techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "Anthropic API"],
            image: "/trendarc.png",
            link: "#",
            featured: true,
        },
        {
            id: "datatales",
            title: "DataTales",
            category: "SaaS",
            overview: "A platform for interactive data storytelling and dashboards that transforms raw numbers into compelling narratives.",
            problem: "Traditional analytics tools often present dry, disconnected charts that fail to communicate the 'why' behind the data. DataTales solves this by integrating rich text narratives directly with interactive visualizations.",
            role: ["Frontend Developer", "UI/UX Designer"],
            challenges: [
                "Building a flexible drag-and-drop layout engine for user-generated dashboards.",
                "Ensuring high performance while rendering multiple complex D3 charts simultaneously.",
            ],
            learnings: [
                "Mastered component composability to create a reusable library of visualization widgets.",
                "Deepened understanding of advanced CSS Grid and Flexbox for responsive dashboard layouts.",
            ],
            techStack: ["React", "TypeScript", "D3.js", "Recoil"],
            image: "/datatales.png",
            featured: true,
        },
        {
            id: "shopify-tagging-app",
            title: "Auto Tagging App",
            category: "Tools",
            overview: "A private Shopify app for a client to automate product tagging based on inventory rules.",
            problem: "Manual tagging of thousands of products was time-consuming and error-prone.",
            role: ["Backend Developer"],
            challenges: [
                "Handling Shopify's API rate limits.",
                "Ensuring 100% accuracy in automated tagging rules.",
            ],
            learnings: [
                "Webhook architecture.",
                "Shopify Admin API.",
            ],
            techStack: ["Node.js", "Shopify API", "Redis"],
            image: "",
        },
        {
            id: "illusion-of-wearing",
            title: "Illusion of Wearing (FYP)",
            category: "Research",
            overview: "A virtual try-on system allowing users to see clothes on themselves virtually using deep learning and webcam feed. Created in 2020 as my Bachelor's Final Year Project.",
            problem: "Online shopping lacks the 'try-on' experience, leading to uncertainty and high return rates. This system solves that by overlaying virtual clothes on a live video stream.",
            role: ["Sole Developer", "Researcher"],
            challenges: [
                "Detecting key body points in real-time using OpenPose/MXNet.",
                "Morphing 2D clothing images to fit 3D body posture realistically.",
            ],
            learnings: [
                "Integration of deep learning models (GluonCV) with real-time video processing (OpenCV).",
                "Building an interactive web interface with Django for model interaction.",
            ],
            techStack: ["Python", "Django", "OpenCV", "MXNet", "GluonCV"],
            image: "/illusion-of-wearing.png",
            github: "https://github.com/AmmarAsif-cmd/Illusion-of-wearing",
            featured: true,
        },
        {
            id: "data-analytics-dissertation",
            title: "AI & Cybersecurity: The Developing Relationship",
            category: "Research",
            overview: "MSc Dissertation investigating the intersection of AI and cybersecurity. Analyzed the evolution, integration, and transformative impact of AI technologies on security protocols through extensive secondary research.",
            problem: "The rapid evolution of cyber threats necessitates advanced AI defense mechanisms, yet implementing them introduces significant ethical considerations and new security vulnerabilities.",
            role: ["Lead Researcher", "Analyst"],
            challenges: [
                "Synthesizing diverse data from scholarly articles and whitepapers to identify key trends.",
                "Addressing the ethical implications of AI deployment in security scenarios.",
            ],
            learnings: [
                "The transformative potential of AI in automating threat detection.",
                "The critical need for specific strategies to handle AI-driven security obstacles.",
            ],
            techStack: ["Secondary Research", "Data Analysis", "AI Ethics", "Cybersecurity Protocols"],
            image: "",
            link: "https://www.researchgate.net/publication/394524789_Examining_the_Effectiveness_of_AI-based_incident_response_strategies_in_mitigating_cyber-attacks",
            featured: true,
        },
        {
            id: "client-wordpress-1",
            title: "E-Commerce Lifestyle Brand",
            category: "WordPress",
            overview: "A high-conversion e-commerce site for a lifestyle brand, designed to merge storytelling with seamless shopping.",
            problem: "The client needed a bespoke digital presence that standard themes couldn't offer. They required a unique layout to showcase their brand identity while maintaining high performance and SEO rankings.",
            role: ["Lead WordPress Developer"],
            challenges: [
                "Developing a custom WooCommerce theme from scratch to meet specific design requirements.",
                "Optimizing image-heavy product pages to achieve a sub-2 second load time.",
            ],
            learnings: [
                "Advanced WordPress theming and custom hook implementation.",
                "Server-side caching strategies and asset optimization for e-commerce.",
            ],
            techStack: ["WordPress", "WooCommerce", "PHP", "SCSS", "MySQL"],
            image: "",
            featured: true,
        },
        {
            id: "client-shopify-1",
            title: "Modern Apparel Store",
            category: "Shopify",
            overview: "A sleek, minimal Shopify store for a fast-growing fashion startup, focused on brand aesthetics and user retention.",
            problem: "The standard Liquid themes felt generic and failed to capture the brand's unique identity. The client needed a highly customized storefront with specific interactive elements to engage visitors.",
            role: ["Shopify Developer", "Frontend Engineer"],
            challenges: [
                "Architecting custom Liquid sections to allow the client to easily manage content without code.",
                "Seamlessly integrating third-party inventory management apps without slowing down the site.",
            ],
            learnings: [
                "Deep dive into Shopify's Liquid templating language and Storefront API.",
                "Best practices for extending Shopify functionality while maintaining upgrade paths.",
            ],
            techStack: ["Shopify", "Liquid", "JavaScript", "Tailwind CSS"],
            image: "",
            featured: true,
        },
    ] as Project[],
    skills: {
        technical: [
            "JavaScript/TypeScript", "React", "Next.js", "Node.js", "Python", "SQL", "Git", "HTML/CSS"
        ],
        soft: [
            { name: "Problem Solving", desc: "Breaking down complex issues into manageable steps." },
            { name: "Ownership Mindset", desc: "Taking full responsibility from concept to delivery." },
            { name: "Clear Communication", desc: "Explaining technical concepts to non-technical stakeholders." },
            { name: "Learning Fast", desc: "Rapidly adapting to new tools and frameworks." },
            { name: "Working with Ambiguity", desc: "Making progress even when requirements are unclear." },
        ]
    },
    education: [
        {
            id: "msc",
            degree: "MSc Artificial Intelligence & Data Analytics",
            institution: "University",
            year: "2024-2025",
            details: "Focus on Machine Learning, Big Data, and Intelligent Systems.",
        },
        {
            id: "bsc",
            degree: "BSc Computer Science",
            institution: "University",
            year: "2020-2024",
            details: "Core software engineering, algorithms, and web development.",
        },
    ] as Education[],
    contact: {
        email: "ammarasif@example.com",
        linkedin: "https://linkedin.com/in/ammarasif",
        github: "https://github.com/ammarasif",
    }
};

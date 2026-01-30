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
            overview: "A comprehensive ongoing Point of Sale system featuring a till interface, admin dashboard, role management, stock tracking, and reporting.",
            problem: "Small businesses struggle with fragmented inventory and sales tools. This system unifies them into one platform.",
            role: ["Lead Developer", "System Architect"],
            challenges: [
                "Managing real-time stock updates across multiple concurrent sessions.",
                "Designing a role-based access control (RBAC) system for staff and admins.",
            ],
            learnings: [
                "Complex state management in React.",
                "Database schema design for transactional integrity.",
            ],
            techStack: ["React", "Node.js", "Express", "PostgreSQL", "Socket.io"],
            image: "/pos-system.png",
            featured: true,
        },
        {
            id: "trendarc",
            title: "TrendArc",
            category: "SaaS",
            overview: "A trend analysis and comparison platform that helps users identify emerging market trends.",
            problem: "Market trends are often buried under noisy data, making it hard for businesses to react quickly. TrendArc solves this by aggregating millions of data points into actionable, real-time visual insights.",
            role: ["Full Stack Developer", "Data Engineer"],
            challenges: [
                "Processing large datasets efficiently in the browser without lag.",
                "Creating intuitive visualizations for complex, multi-dimensional data.",
            ],
            learnings: [
                "GAINED: Mastery in data visualization libraries (D3/Recharts) for storytelling.",
                "GAINED: Techniques for client-side performance optimization with large datasets.",
            ],
            techStack: ["Next.js", "Python", "Pandas", "Chart.js"],
            image: "/trendarc.png",
            link: "#",
            featured: true,
        },
        {
            id: "datatales",
            title: "DataTales",
            category: "SaaS",
            overview: "A platform for interactive data storytelling and dashboards.",
            problem: "Data analysis often lacks narrative. DataTales bridges the gap between raw numbers and compelling stories.",
            role: ["Frontend Developer"],
            challenges: [
                "Building a flexible layout engine for user-generated dashboards.",
            ],
            learnings: [
                "Component composability and reusability.",
                "Advanced CSS grid layouts.",
            ],
            techStack: ["React", "TypeScript", "D3.js"],
            image: "",
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
            overview: "A high-conversion e-commerce site for a lifestyle brand.",
            problem: "Client needed a custom design that standard themes couldn't provide.",
            role: ["WordPress Developer"],
            challenges: [
                "Customizing WooCommerce templates without breaking update compatibility.",
                "Performance optimization for image-heavy pages.",
            ],
            learnings: [
                "Advanced WordPress theming.",
                "PHP hooks and filters.",
            ],
            techStack: ["WordPress", "WooCommerce", "PHP", "CSS"],
            image: "",
        },
        {
            id: "client-shopify-1",
            title: "Modern Apparel Store",
            category: "Shopify",
            overview: "A sleek, minimal Shopify store for a fashion startup.",
            problem: "Standard Liquid themes felt generic; client wanted a unique brand identity.",
            role: ["Shopify Developer"],
            challenges: [
                "Implementing custom sections in Liquid.",
                "Integrating third-party inventory apps.",
            ],
            learnings: [
                "Liquid templating language.",
                "Shopify Storefront API.",
            ],
            techStack: ["Shopify", "Liquid", "JavaScript"],
            image: "",
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

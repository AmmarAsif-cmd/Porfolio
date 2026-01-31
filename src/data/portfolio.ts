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
            id: "automated-tag",
            title: "AutomatedTag for Shopify",
            category: "Tools",
            overview: "A specialized Shopify app that automatically tags orders based on specific verification criteria (OTP verification) to streamline fulfillment workflows.",
            problem: "Shopify merchants needed a way to flag high-risk or verified orders instantly without manual review. This app automates that process using webhooks.",
            role: ["Backend Developer"],
            challenges: [
                "Handling Shopify webhooks reliably during high-traffic flash sales.",
                "Ensuring secure HMAC verification to prevent spoofed requests.",
            ],
            learnings: [
                "Deep understanding of Shopify's Order API and Webhook infrastructure.",
                "Building serverless functions for cost-effective event processing.",
            ],
            techStack: ["Node.js", "Shopify API", "JavaScript", "Express"],
            image: "/automated-tag.png",
            github: "https://github.com/AmmarAsif-cmd/Automated-Tag-Generater-For-Shopify-Orders",
            featured: false,
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
            image: "/ai-cybersecurity.png",
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
            id: "limelight",
            title: "Limelight",
            category: "Shopify",
            overview: "Pakistan's leading fashion brand. Focused on high-performance theme customization and mobile optimization.",
            problem: "The site struggled with load times during high-traffic sales. Needed custom sections for dynamic content without relying on apps.",
            role: ["Shopify Developer"],
            challenges: ["Optimizing Liquid code for sub-2s load times.", "Building custom drag-and-drop sections for marketing teams."],
            learnings: ["Advanced Liquid performance techniques.", "Mobile-first UX design patterns for fashion retail."],
            techStack: ["Shopify Plus", "Liquid", "SCSS", "JavaScript"],
            image: "",
            link: "https://limelight.pk",
        },
        {
            id: "bonanza-satrangi",
            title: "Bonanza Satrangi",
            category: "Shopify",
            overview: "A massive textile giant. Revamped product and collection templates for better user experience.",
            problem: "Navigation was cluttered and PDPs (Product Detail Pages) lacked hierarchy, leading to drop-offs.",
            role: ["Frontend Developer"],
            challenges: ["Restructuring complex mega-menus.", "Creating dynamic product templates handling multiple variants."],
            learnings: ["Shopify 2.0 architecture.", "Complex navigation data structures."],
            techStack: ["Shopify", "Liquid", "jQuery"],
            image: "",
            link: "https://bonanzasatrangi.com",
        },
        {
            id: "interwood",
            title: "Interwood",
            category: "Shopify",
            overview: "Pakistan's most trusted furniture brand. Implemented advanced filtering and dynamic options.",
            problem: "Furniture has complex variants (material, size, fabric) that standard Shopify options couldn't handle elegantly.",
            role: ["Lead Developer"],
            challenges: ["Building a custom filtering engine.", "Handling complex product variant logic on the frontend."],
            learnings: ["Advanced JavaScript state management in Shopify.", "Facet filtering logic."],
            techStack: ["Shopify", "JavaScript", "AJAX"],
            image: "",
            link: "https://interwood.pk",
        },
        {
            id: "zara-shahjahan",
            title: "Zara Shahjahan",
            category: "Shopify",
            overview: "Premium luxury fashion. Improved PDP layouts and fixed legacy Liquid issues.",
            problem: "Inconsistent layouts across pages and accumulation of technical debt from legacy apps.",
            role: ["Shopify Developer"],
            challenges: ["Refactoring legacy codebase without breaking live site.", "Standardizing UI components across the store."],
            learnings: ["Legacy code maintainability.", "Regression testing strategies."],
            techStack: ["Shopify", "Liquid", "CSS"],
            image: "",
            link: "https://zarashahjahan.com",
        },
        {
            id: "maria-b",
            title: "Maria.B",
            category: "Shopify",
            overview: "International fashion powerhouse. Enhanced collection layouts and speed optimization.",
            problem: "Collection pages were heavy and slow. Mobile layout needed tweaks for better conversion.",
            role: ["Performance Engineer"],
            challenges: ["Implementing lazy loading and critical CSS.", "Optimizing heavy image assets on the fly."],
            learnings: ["Core Web Vitals optimization.", "Browser rendering pipelines."],
            techStack: ["Shopify", "Liquid", "JS"],
            image: "",
            link: "https://mariab.pk",
        },
        {
            id: "alkaram",
            title: "Alkaram Studio",
            category: "Shopify",
            overview: "A household name in fashion. Redesigned homepage and refined product cards.",
            problem: "Homepage needed a fresh look to align with new branding, and filters were non-intuitive.",
            role: ["Frontend Developer"],
            challenges: ["Translating a complex design system into a Shopify Theme.", "Improving filter UX/UI."],
            learnings: ["Design system implementation.", "User interface micro-interactions."],
            techStack: ["Shopify", "SCSS", "Liquid"],
            image: "",
            link: "https://alkaramstudio.com",
        },
        {
            id: "image-1993",
            title: "Image 1993",
            category: "Shopify",
            overview: "Contemporary clothing brand. Built campaign sections and improved PDPs.",
            problem: "Marketing campaigns required unique, one-off layouts that the theme didn't support.",
            role: ["Shopify Developer"],
            challenges: ["Creating flexible campaign templates.", "Ensuring PDPs highlighted fabric details effectively."],
            learnings: ["Modular theme architecture.", "High-fidelity UI implementation."],
            techStack: ["Shopify", "Liquid", "HTML/CSS"],
            image: "",
            link: "https://image1993.com",
        },
        {
            id: "republic-womenswear",
            title: "Republic Womenswear",
            category: "Shopify",
            overview: "Luxury bridal and formal wear. UI fixes and mobile UX enhancements.",
            problem: "Mobile experience felt clunky, especially in the checkout flow and seasonally updated sections.",
            role: ["Frontend Developer"],
            challenges: ["Debugging mobile-specific layout shifts.", "Rapidly deploying seasonal UI updates."],
            learnings: ["Mobile responsive design patterns.", "Cross-device testing."],
            techStack: ["Shopify", "Liquid", "CSS"],
            image: "",
            link: "https://republicwomenswear.com",
        },
        {
            id: "mohtaram",
            title: "Mohtaram",
            category: "Shopify",
            overview: "Premium menswear. Homepage improvements and Liquid cleanup.",
            problem: "Codebase was bloated with unused scripts; Homepage didn't reflect the premium brand audit.",
            role: ["Shopify Developer"],
            challenges: ["Auditing and removing unused apps/scripts.", "Refining typography and spacing."],
            learnings: ["Codebase hygiene.", "Typography hierarchy in web design."],
            techStack: ["Shopify", "Liquid"],
            image: "",
            link: "https://mohtaram.com",
        },
        {
            id: "one-toy-store",
            title: "One Toy Store",
            category: "Shopify",
            overview: "Kids' toy retailer. Product setup, shipping rules, and frontend fixes.",
            problem: "Complex shipping rules for different toy sizes and cart logic issues.",
            role: ["Full Stack Shopify"],
            challenges: ["Configuring advanced shipping profiles.", "Fixing cart drawer logic glitches."],
            learnings: ["Shopify shipping settings.", "Cart API manipulation."],
            techStack: ["Shopify", "Liquid", "JS"],
            image: "",
            link: "https://onetoystore.com",
        },
        {
            id: "sana-safinaz",
            title: "Sana Safinaz",
            category: "Shopify",
            overview: "Iconic luxury fashion house. Delivered a seamless mobile-first shopping experience and optimized checkout flows.",
            problem: "High bounce rates on mobile due to complex navigation and slow collection rendering for their massive catalog.",
            role: ["Shopify Developer"],
            challenges: ["Optimizing mega-menu for mobile touch gestures.", "Integrating 3rd party logistics for automated fulfillment."],
            learnings: ["Mobile UX best practices.", "ERP integration patterns."],
            techStack: ["Shopify Plus", "Liquid", "JavaScript"],
            image: "",
            link: "https://www.sanasafinaz.com/pk/",
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

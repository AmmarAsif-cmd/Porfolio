import React, { useState } from 'react';
import Section from '../common/Section';
import Button from '../common/Button';
import styles from './Projects.module.css';
import { portfolioData } from '../../data/portfolio';
import type { Project, Category } from '../../data/portfolio';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    // Format learnings: Use the first bullet point or join them if catchy
    const learningText = project.learnings.length > 0 ? project.learnings[0] : "Various technical skills.";

    return (
        <article className={styles.projectCard}>
            {/* Browser Viewport Image with Scroll Effect */}
            <div className={styles.imageWindow}>
                {project.image ? (
                    <img src={project.image} alt={project.title} />
                ) : (
                    <div style={{ width: '100%', height: '300%', background: 'linear-gradient(180deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%)' }}></div>
                )}
                <div className={styles.overlay}></div>
                <div className={styles.scrollHint}>Hover to scroll</div>
            </div>

            <div className={styles.cardContent}>
                <div className={styles.metaHeader}>
                    <span className={styles.category}>{project.category}</span>
                </div>

                <h3 className={styles.projectTitle}>{project.title}</h3>

                {/* Structured Info Blocks */}
                <div className={styles.infoBlock}>
                    <span className={styles.infoLabel}>Overview</span>
                    <p className={styles.infoText}>{project.overview}</p>
                </div>

                <div className={styles.infoBlock}>
                    <span className={styles.infoLabel}>Problem</span>
                    <p className={styles.infoText}>{project.problem}</p>
                </div>

                <div className={styles.infoBlock}>
                    <span className={styles.infoLabel}>Learnings</span>
                    <p className={styles.infoText}>{learningText}</p>
                </div>

                {/* Tech Stack Pills */}
                <div className={styles.techStack}>
                    {project.techStack.slice(0, 5).map((tech) => (
                        <span key={tech} className={styles.techTag}>
                            {tech}
                        </span>
                    ))}
                    {project.techStack.length > 5 && (
                        <span className={styles.techTag}>+{project.techStack.length - 5}</span>
                    )}
                </div>

                {/* CTA */}
                <div className={styles.actions}>
                    {project.link ? (
                        <Button href={project.link} variant="primary" size="md">
                            Visit Site
                        </Button>
                    ) : project.github ? (
                        <Button href={project.github} variant="outline" size="md">
                            View Code
                        </Button>
                    ) : (
                        <Button variant="outline" size="md" disabled>
                            Coming Soon
                        </Button>
                    )}
                </div>
            </div>
        </article>
    );
};

const CATEGORIES: Category[] = ['All', 'WordPress', 'Shopify', 'Webflow', 'SaaS', 'Research', 'Tools & Apps'];

const Projects: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<Category>('All');
    const [visibleCount, setVisibleCount] = useState(9); // Initial show count

    const filteredProjects = portfolioData.projects.filter(
        (project) => activeCategory === 'All' || project.category === activeCategory
    ).sort((a, b) => {
        if (activeCategory === 'All') {
            return CATEGORIES.indexOf(a.category) - CATEGORIES.indexOf(b.category);
        }
        return 0;
    });

    const visibleProjects = filteredProjects.slice(0, visibleCount);

    // Reset visible count when category changes
    const handleCategoryChange = (category: Category) => {
        setActiveCategory(category);
        setVisibleCount(9);
    };

    const handleShowMore = () => {
        setVisibleCount((prev) => prev + 6);
    };

    return (
        <Section id="projects" className={styles.projectsSection}>
            {/* Custom Wide Container */}
            <div className={styles.wideContainer}>
                <div className={styles.header}>
                    <h2>Selected Work</h2>
                    <div className={styles.filterTabs}>
                        {CATEGORIES.map(category => (
                            <button
                                key={category}
                                className={`${styles.tab} ${activeCategory === category ? styles.activeTab : ''}`}
                                onClick={() => handleCategoryChange(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={styles.grid}>
                    {visibleProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {visibleCount < filteredProjects.length && (
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'var(--space-12)' }}>
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={handleShowMore}
                        >
                            Show More Projects
                        </Button>
                    </div>
                )}
            </div>
        </Section>
    );
};

export default Projects;

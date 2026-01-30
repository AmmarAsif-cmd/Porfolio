import React, { useState } from 'react';
import Section from '../common/Section';
import Container from '../common/Container';
import Card from '../common/Card';
import Button from '../common/Button';
import styles from './Projects.module.css';
import { portfolioData } from '../../data/portfolio';
import type { Project, Category } from '../../data/portfolio';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <Card className={styles.projectCard} hover>
        <div className={styles.imagePlaceholder}>
            {/* Placeholder for project screenshot */}
            <div className={styles.overlay}></div>
        </div>
        <div className={styles.cardContent}>
            <div className={styles.projectHeader}>
                <span className={styles.category}>{project.category}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
            </div>
            <p className={styles.overview}>{project.overview}</p>
            <div className={styles.techStack}>
                {project.techStack.slice(0, 3).map((tech) => (
                    <span key={tech} className={styles.techTag}>
                        {tech}
                    </span>
                ))}
                {project.techStack.length > 3 && (
                    <span className={styles.techTag}>+{project.techStack.length - 3}</span>
                )}
            </div>
            <div className={styles.links}>
                {project.link && (
                    <Button href={project.link} variant="outline" size="sm">
                        Visit Site
                    </Button>
                )}
                {project.github && (
                    <Button href={project.github} variant="outline" size="sm">
                        GitHub
                    </Button>
                )}
            </div>
        </div>
    </Card>
);

const CATEGORIES: Category[] = ['All', 'SaaS', 'WordPress', 'Shopify', 'Research', 'Tools'];

const Projects: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<Category>('All');

    const filteredProjects = portfolioData.projects.filter(
        (project) => activeCategory === 'All' || project.category === activeCategory
    );

    return (
        <Section id="projects" className={styles.projectsSection}>
            <Container>
                <div className={styles.header}>
                    <h2 className="mb-8">Selected Work</h2>
                    <div className={styles.filterTabs}>
                        {CATEGORIES.map(category => (
                            <button
                                key={category}
                                className={`${styles.tab} ${activeCategory === category ? styles.activeTab : ''}`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={styles.grid}>
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default Projects;

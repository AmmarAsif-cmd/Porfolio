import React from 'react';
import Section from '../common/Section';
import Container from '../common/Container';
import styles from './Skills.module.css';
import { portfolioData } from '../../data/portfolio';

const Skills: React.FC = () => {
    const { skills } = portfolioData;

    return (
        <Section className={styles.skillsSection}>
            <Container>
                <div className={styles.grid}>
                    <div className={styles.column}>
                        <h2 className="mb-8">Technical Skills</h2>
                        <div className={styles.techGrid}>
                            {skills.technical.map((skill) => (
                                <div key={skill} className={styles.techItem}>
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.column}>
                        <h2 className="mb-8">Soft Skills & Mindset</h2>
                        <div className={styles.softGrid}>
                            {skills.soft.map((skill) => (
                                <div key={skill.name} className={styles.softItem}>
                                    <h3 className={styles.softName}>{skill.name}</h3>
                                    <p className={styles.softDesc}>{skill.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default Skills;

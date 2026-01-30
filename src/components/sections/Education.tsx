import React from 'react';
import Section from '../common/Section';
import Container from '../common/Container';
import styles from './Education.module.css';
import { portfolioData } from '../../data/portfolio';

const Education: React.FC = () => {
    const { education } = portfolioData;

    return (
        <Section className={styles.educationSection}>
            <Container>
                <h2 className="mb-12">Education</h2>
                <div className={styles.timeline}>
                    {education.map((edu) => (
                        <div key={edu.id} className={styles.timelineItem}>
                            <div className={styles.year}>{edu.year}</div>
                            <div className={styles.content}>
                                <h3 className={styles.degree}>{edu.degree}</h3>
                                <h4 className={styles.institution}>{edu.institution}</h4>
                                <p className={styles.details}>{edu.details}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default Education;

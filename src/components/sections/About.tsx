import React from 'react';
import Section from '../common/Section';
import Container from '../common/Container';
import styles from './About.module.css';
import { portfolioData } from '../../data/portfolio';

const About: React.FC = () => {
    const { about } = portfolioData;

    return (
        <Section id="about" className={styles.aboutSection}>
            <Container>
                <div className={styles.grid}>
                    <div className={styles.titleColumn}>
                        <h2 className="mb-4">{about.title}</h2>
                    </div>
                    <div className={styles.contentColumn}>
                        {about.story.map((paragraph, index) => (
                            <p key={index} className={styles.paragraph}>
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default About;

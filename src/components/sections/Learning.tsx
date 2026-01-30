import React from 'react';
import Section from '../common/Section';
import Container from '../common/Container';
import styles from './Learning.module.css';

const Learning: React.FC = () => {
    return (
        <Section className={styles.learningSection}>
            <Container>
                <div className={styles.grid}>
                    <div>
                        <h2 className="mb-6">Learning & Growth</h2>
                        <p className={styles.intro}>
                            My approach to software engineering is grounded in continuous adaptation.
                            Building complex platforms like TrendArc and DataTales taught me that code is just a means to an end—the real value lies in the system as a whole.
                        </p>
                    </div>

                    <div className={styles.cards}>
                        <div className={styles.card}>
                            <h3>System Thinking</h3>
                            <p>
                                I don't just fix bugs; I analyze how components interact. My experience with deep learning models has trained me to look for non-linear relationships in messy systems.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <h3>Curiosity Driven</h3>
                            <p>
                                I learn by doing. Whether it's picking up a new Python library for data analysis or optimizing React render cycles, I dive deep into documentation and experiments.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default Learning;

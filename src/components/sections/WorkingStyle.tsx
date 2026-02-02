import React from 'react';
import Section from '../common/Section';
import styles from './WorkingStyle.module.css';

const WorkingStyle: React.FC = () => {
    return (
        <Section id="work-style" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2>How I Work</h2>
                    <p>My approach to delivering high-quality results consistently.</p>
                </div>

                <div className={styles.grid}>
                    {/* Card 1: Structure */}
                    <div className={styles.card}>
                        <div className={styles.iconWrapper}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </div>
                        <h3>Structured & Clear</h3>
                        <p>
                            I work best with clear structure and expectations. I follow provided layouts closely and adhere to established design systems to ensure consistency.
                        </p>
                    </div>

                    {/* Card 2: Proactive */}
                    <div className={styles.card}>
                        <div className={styles.iconWrapper}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                            </svg>
                        </div>
                        <h3>Proactive Communication</h3>
                        <p>
                            I flag issues early rather than waiting for them to become blockers. I avoid unnecessary deviations and keep stakeholders aligned on progress.
                        </p>
                    </div>

                    {/* Card 3: Quality First */}
                    <div className={styles.card}>
                        <div className={styles.iconWrapper}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3>Review-Ready Delivery</h3>
                        <p>
                            I aim to deliver work that’s truly ready for review, not work that needs finishing touches. I obsess over the details so you don't have to.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default WorkingStyle;

import React from 'react';
import Section from '../common/Section';
import Container from '../common/Container';
import Button from '../common/Button';
import styles from './Hero.module.css';
import { portfolioData } from '../../data/portfolio';

const Hero: React.FC = () => {
    const { hero } = portfolioData;

    return (
        <Section className={styles.heroSection}>
            <Container className={styles.heroContainer}>
                <div className={styles.content}>
                    <h1 className={styles.name}>{hero.name}</h1>
                    <h2 className={styles.tagline}>{hero.tagline}</h2>
                    <p className={styles.description}>{hero.description}</p>
                    <div className={styles.actions}>
                        <Button href="#projects" variant="primary" size="lg">
                            {hero.ctaPrimary}
                        </Button>
                        <Button href="/cv.pdf" variant="secondary" size="lg">
                            {hero.ctaSecondary}
                        </Button>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default Hero;

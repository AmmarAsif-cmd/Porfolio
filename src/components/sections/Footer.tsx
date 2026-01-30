import React from 'react';
import Container from '../common/Container';
import Button from '../common/Button';
import styles from './Footer.module.css';
import { portfolioData } from '../../data/portfolio';

const Footer: React.FC = () => {
    const { contact } = portfolioData;

    return (
        <footer className={styles.footer}>
            <Container className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.heading}>Ready to build something?</h2>
                    <div className={styles.links}>
                        <Button href={`mailto:${contact.email}`} variant="primary">
                            Email Me
                        </Button>
                        <Button href={contact.linkedin} variant="outline">
                            LinkedIn
                        </Button>
                        <Button href={contact.github} variant="outline">
                            GitHub
                        </Button>
                    </div>
                    <div className={styles.copyright}>
                        &copy; {new Date().getFullYear()} Ammar Asif. Built with React & Vite.
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;

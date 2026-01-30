import React from 'react';
import styles from './Section.module.css';

interface SectionProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
}

const Section: React.FC<SectionProps> = ({ children, id, className = '' }) => {
    return (
        <section id={id} className={`${styles.section} ${className}`}>
            {children}
        </section>
    );
};

export default Section;

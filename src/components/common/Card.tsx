import React from 'react';
import styles from './Card.module.css';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = false }) => {
    return (
        <div className={`${styles.card} ${hover ? styles.hover : ''} ${className}`}>
            {children}
        </div>
    );
};

export default Card;

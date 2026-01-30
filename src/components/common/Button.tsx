import React from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    href,
    ...props
}) => {
    const classes = `${styles.btn} ${styles[variant]} ${styles[size]} ${className}`;

    if (href) {
        return (
            <a href={href} className={classes} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                {children}
            </a>
        );
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
};

export default Button;

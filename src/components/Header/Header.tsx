'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './header.module.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigationItems = [
        { name: 'Главная', href: '/' },
        { name: 'Цель анализа', href: '/goal' },
        { name: 'Сравнение методик', href: '/comparison' },
        { name: 'Сопоставление показателей', href: '/indicators' },
        { name: 'Адаптация методики', href: '/adaptation' },
        { name: 'Улучшение рейтинга', href: '/improvement' },
        { name: 'Выводы и рекомендации', href: '/conclusion' },
    ];

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.headerContent}>
                    <Link href="/" className={styles.logo}>
                        <h1>ОМСУ Рейтинг</h1>
                    </Link>

                    <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                        {navigationItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={styles.navLink}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    <button
                        className={styles.menuButton}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;

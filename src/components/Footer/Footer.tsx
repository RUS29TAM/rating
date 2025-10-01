import React from 'react';
import Link from 'next/link';
import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerContent}>
                    <div className={styles.footerSection}>
                        <h3>О проекте</h3>
                        <p>Анализ методик оценки эффективности ОМСУ Тюменской и Архангельской областей</p>
                    </div>

                    <div className={styles.footerSection}>
                        <h3>Навигация</h3>
                        <ul>
                            <li><Link href="/">Главная</Link></li>
                            <li><Link href="/goal">Цель анализа</Link></li>
                            <li><Link href="/comparison">Сравнение методик</Link></li>
                            <li><Link href="/indicators">Сопоставление показателей</Link></li>
                            <li><Link href="/adaptation">Адаптация методики</Link></li>
                            <li><Link href="/improvement">Улучшение рейтинга</Link></li>
                            <li><Link href="/conclusion">Выводы и рекомендации</Link></li>
                        </ul>
                    </div>

                    <div className={styles.footerSection}>
                        <h3>Контакты</h3>
                        <p>Для вопросов и предложений</p>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p>&copy; {new Date().getFullYear()} ОМСУ Рейтинг. Все права защищены.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

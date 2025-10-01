import '@/styles/globals.css';
import '@/styles/animations.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Сравнение методик оценки эффективности ОМСУ',
    description: 'Анализ методики оценки эффективности ОМСУ Тюменской области и Национального рейтинга 2025 года',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru">
        <body className={inter.className}>
        <div className="page-container">
            <Header />
            <main className="main-content">
                {children}
            </main>
            <Footer />
        </div>
        </body>
        </html>
    );
}

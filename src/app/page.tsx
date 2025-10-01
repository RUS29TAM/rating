import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>Можно ли применить Тюменскую модель в Архангельской области для улучшения её позиции в рейтинге</h1>
        <p className={styles.subtitle}>
          Сопоставить методику оценки эффективности ОМСУ Тюменской области с Национальным рейтингом 2025 года
        </p>
        <Link href="/">
          <button className={styles.ctaButton}>Начнем</button>
        </Link>
      </div>
    </div>
  );
}

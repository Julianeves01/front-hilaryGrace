import styles from '../styles/Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.heroContent}>
                    <div className={styles.heroText}>
                        <h1>Beautiful Collection</h1>
                        <p>Sophisticated elegance in confidence</p>
                        <a href="/listagem" className={styles.btnPrimary}>Discover Collection</a>
                    </div>
                    <div className={styles.heroImage}>
                        <img src="/icons/hero-model.jpg" alt="Beautiful Collection" />
                    </div>
                </div>
            </div>
        </section>
    );
}

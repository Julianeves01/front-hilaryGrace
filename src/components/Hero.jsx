import styles from '../styles/Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.heroContent}>
                    <div className={styles.heroText}>
                        <h1>Coleção Exclusiva</h1>
                        <p>Elegância sofisticada com confiança</p>
                        <a href="/listagem" className={styles.btnPrimary}>Descobrir Coleção</a>
                    </div>
                    <div className={styles.heroImage}>
                        <img src="/image/logo.png" alt="Coleção Exclusiva" />
                    </div>
                </div>
            </div>
        </section>
    );
}

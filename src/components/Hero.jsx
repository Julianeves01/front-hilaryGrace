import styles from '../styles/Hero.module.css';

export default function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Beautiful Collection</h1>
                        <p>Sophisticated elegance in confidence</p>
                        <a href="/listagem" className="btn-primary">Discover Collection</a>
                    </div>
                    <div className="hero-image">
                        <img src="/icons/hero-model.jpg" alt="Beautiful Collection" />
                    </div>
                </div>
            </div>
        </section>
    );
}

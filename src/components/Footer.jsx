import Link from 'next/link'
import styles from '../styles/footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerContent}>
                    <div className={styles.footerSection}>
                        <h3>Hilary Grace</h3>
                        <p>Elevando seus momentos cotidianos com elegância sofisticada e estilo atemporal.</p>
                    </div>

                    <div className={styles.footerSection}>
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/listagem">Collection</Link></li>
                            <li><Link href="/sobre">About</Link></li>
                            <li><Link href="/contato">Contact</Link></li>
                        </ul>
                    </div>

                    <div className={styles.footerSection}>
                        <h4>Customer Care</h4>
                        <ul>
                            <li><a href="#">Size Guide</a></li>
                            <li><a href="#">Shipping Info</a></li>
                            <li><a href="#">Returns</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>

                    <div className={styles.footerSection}>
                        <h4>Newsletter</h4>
                        <p>Subscribe to receive updates on new arrivals and exclusive offers.</p>
                        <form className={styles.newsletterForm}>
                            <input type="email" placeholder="Your email address" />
                            <button type="submit" className={styles.btnSecondary}>Subscribe</button>
                        </form>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p>&copy; 2025 Hilary Grace. All rights reserved.</p>
                    <div className={styles.footerLinks}>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

import Link from 'next/link'


export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Hilary Grace</h3>
                        <p>Elevating your everyday moments with sophisticated elegance and timeless style.</p>
                        <div className="social-links">
                            <Link href="#" aria-label="Instagram">📷</Link>
                            <Link href="#" aria-label="Facebook">📘</Link>
                            <Link href="#" aria-label="Pinterest">📌</Link>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/listagem">Collection</Link></li>
                            <li><Link href="/sobre">About</Link></li>
                            <li><Link href="/contato">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Customer Care</h4>
                        <ul>
                            <li><a href="#">Size Guide</a></li>
                            <li><a href="#">Shipping Info</a></li>
                            <li><a href="#">Returns</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Newsletter</h4>
                        <p>Subscribe to receive updates on new arrivals and exclusive offers.</p>
                        <form className="newsletter-form">
                            <input type="email" placeholder="Your email address" />
                            <button type="submit" className="btn-secondary">Subscribe</button>
                        </form>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2025 La Moré Boutique. All rights reserved.</p>
                    <div className="footer-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

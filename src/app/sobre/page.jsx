export default function Sobre() {
    return (
        <div className="sobre-page">
            <div className="container">
                {/* Hero Section */}
                <section className="sobre-hero">
                    <div className="sobre-content">
                        <div className="sobre-text">
                            <h1 className="section-title">About La Moré</h1>
                            <p className="lead">Creating timeless pieces that celebrate the modern woman's journey through life with grace, confidence, and sophisticated elegance.</p>
                        </div>
                        <div className="sobre-image">
                            <img src="/image/about-main.jpg" alt="About La Moré Boutique" />
                        </div>
                    </div>
                </section>


                {/* Story Section */}
                <section className="story-section">
                    <h2 className="section-title">Our Story</h2>
                    <div className="story-content">
                        <div className="story-text">
                            <p>
                                Founded with a passion for empowering women through fashion, La Moré Boutique began as a dream to create a space where elegance meets comfort, where sophistication embraces individuality.
                            </p>
                            <p>
                                Every piece in our collection is carefully curated to reflect the multifaceted nature of the modern woman - strong yet feminine, confident yet graceful, timeless yet contemporary.
                            </p>
                            <p>
                                We believe that true beauty comes from within, and our mission is to create pieces that enhance your natural radiance and make you feel extraordinary in every moment.
                            </p>
                        </div>
                        <div className="story-stats">
                            <div className="stat">
                                <h3>500+</h3>
                                <p>Happy Customers</p>
                            </div>
                            <div className="stat">
                                <h3>3</h3>
                                <p>Years of Excellence</p>
                            </div>
                            <div className="stat">
                                <h3>100+</h3>
                                <p>Unique Pieces</p>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Values Section */}
                <section className="values-section">
                    <h2 className="section-title">Our Values</h2>
                    <div className="values-grid">
                        <div className="value-item">
                            <div className="value-icon">✨</div>
                            <h3>Quality</h3>
                            <p>We source only the finest materials and work with skilled artisans to ensure every piece meets our high standards.</p>
                        </div>
                        <div className="value-item">
                            <div className="value-icon">💝</div>
                            <h3>Elegance</h3>
                            <p>Timeless design that transcends trends, creating pieces you'll treasure for years to come.</p>
                        </div>
                        <div className="value-item">
                            <div className="value-icon">🌸</div>
                            <h3>Empowerment</h3>
                            <p>Fashion that makes you feel confident, beautiful, and ready to conquer the world.</p>
                        </div>
                        <div className="value-item">
                            <div className="value-icon">🤝</div>
                            <h3>Service</h3>
                            <p>Personalized attention and exceptional customer service that makes your shopping experience memorable.</p>
                        </div>
                    </div>
                </section>


                {/* Team Section */}
                <section className="team-section">
                    <h2 className="section-title">Meet Our Team</h2>
                    <div className="team-grid">
                        <div className="team-member">
                            <img src="/image/team-1.jpg" alt="Founder" />
                            <h3>Isabella Santos</h3>
                            <p>Founder & Creative Director</p>
                            <p>"Fashion is my language, and every piece tells a story of feminine strength and grace."</p>
                        </div>
                        <div className="team-member">
                            <img src="/image/team-2.jpg" alt="Designer" />
                            <h3>Marina Costa</h3>
                            <p>Head Designer</p>
                            <p>"I believe in creating pieces that make women feel like the best version of themselves."</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
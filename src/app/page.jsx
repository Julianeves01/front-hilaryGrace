import Hero from '../components/Hero'
import styles from './page.module.css'


async function getProducts() {
  try {
    const res = await fetch('http://localhost:3000/api/jewels', {
      cache: 'no-store'
    })
    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.status} ${res.statusText}`)
    }
    return res.json()
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}


export default async function Home() {
  const products = await getProducts()


  return (
    <div className={styles.home}>
      <Hero />

      {/* Featured Collection */}
      <section className={styles.featuredSection}>
        <div className="container">
          <h2 className="section-title">Beautiful Collection</h2>
          <div className={styles.collectionGrid}>
            <div className={styles.collectionItem}>
              <img src="/image/collection-1.jpg" alt="Sophisticated Elegance" />
              <h3>Sophisticated Elegance</h3>
            </div>
            <div className={styles.collectionItem}>
              <img src="/image/collection-2.jpg" alt="Feminine Confidence" />
              <h3>Feminine Confidence</h3>
            </div>
            <div className={styles.collectionItem}>
              <img src="/image/collection-3.jpg" alt="Modern Classics" />
              <h3>Modern Classics</h3>
            </div>
          </div>
        </div>
      </section>


      {/* Featured Products */}
      <section className={styles.productsSection}>
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <div className={styles.productsGrid}>
            {products.slice(0, 8).map((product) => (
              <div key={product.id} className={styles.productCard}>
                <img src={product.image} alt={product.name} />
                <h4>{product.name}</h4>
                <p className={styles.price}>R$ {product.price}</p>
              </div>
            ))}
          </div>
          <div className={styles.ctaSection}>
            <a href="/listagem" className="btn-primary">View All Products</a>
          </div>
        </div>
      </section>


      {/* About Preview */}
      <section className={styles.aboutPreview}>
        <div className="container">
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <h2>Elevate your style</h2>
              <p>Discover pieces that speak to your heart and elevate your everyday moments into something extraordinary.</p>
              <a href="/sobre" className="btn-secondary">Learn More</a>
            </div>
            <div className={styles.aboutImage}>
              <img src="/image/about-preview.jpg" alt="About Us" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
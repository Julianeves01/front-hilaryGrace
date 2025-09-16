'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'
import Hero from '../components/Hero'
import styles from './page.module.css'

export default function Home() {
  const [joias, setJoias] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchJoias = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/jewels`
        );
        setJoias(res.data);
      } catch (error) {
        console.error("Erro ao buscar joias:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJoias();
  }, []);


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
            {loading ? (
              <p>Carregando joias...</p>
            ) : (
              joias.slice(0, 8).map((joia) => (
                <div key={joia.id} className={styles.productCard}>
                  <img src={joia.imagem_url || '/image/default-product.jpg'} alt={joia.nome} />
                  <h4>{joia.nome}</h4>
                  <p className={styles.price}>R$ {joia.preco}</p>
                </div>
              ))
            )}
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
          </div>
        </div>
      </section>
    </div>
  )
}
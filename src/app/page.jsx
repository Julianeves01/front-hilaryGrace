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
          `${process.env.NEXT_PUBLIC_API_URL}/api/joias`
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

      <section className={styles.featuredSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Coleção Especial</h2>
          <div className={styles.collectionGrid}>
            <div className={styles.collectionItem}>
              <img src="/image/sofisticado.jpg" alt="Elegância Sofisticada" />
              <h3>Elegância Sofisticada</h3>
            </div>
            <div className={styles.collectionItem}>
              <img src="/image/feminilidade.jpg" alt="Confiança Feminina" />
              <h3>Confiança Feminina</h3>
            </div>
            <div className={styles.collectionItem}>
              <img src="/image/moderna.jpg" alt="Clássicos Modernos" />
              <h3>Clássicos Modernos</h3>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.productsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Produtos em Destaque</h2>
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
            <a href="/listagem" className={styles.btnPrimary}>Ver Todos os Produtos</a>
          </div>
        </div>
      </section>

      <section className={styles.aboutPreview}>
        <div className={styles.container}>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <h2>Eleve seu estilo</h2>
              <p>Descubra peças que tocam seu coração e transformam seus momentos cotidianos em algo extraordinário.</p>
              <a href="/sobre" className={styles.btnSecondary}>Saiba Mais</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
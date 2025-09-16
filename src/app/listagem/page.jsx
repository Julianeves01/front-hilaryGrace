'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import ProductCard from '../../components/ProductCard'
import styles from '../../styles/listagem.module.css'

export default function Listagem() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/jewels`)
            const data = await response.json()
            setProducts(data)
        } catch (error) {
            console.error('Erro ao buscar produtos:', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className={styles.listagemPage}>
            <div className={styles.container}>
                <h1 className={styles.sectionTitle}>Nossa Coleção</h1>

                <div className={styles.productsGrid}>
                    {loading ? (
                        <p>Carregando produtos...</p>
                    ) : products.length > 0 ? (
                        products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    ) : (
                        <p>Nenhum produto encontrado.</p>
                    )}
                </div>
            </div>
        </div>
    )
}

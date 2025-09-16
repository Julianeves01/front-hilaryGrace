'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import ProductCard from '../../components/ProductCard'
import styles from '../../styles/listagem.module.css'

export default function Listagem() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [filter, setFilter] = useState('all')


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


    const filteredProducts = filter === 'all'
        ? products
        : products.filter(product => product.category === filter)


    if (loading) {
        return <div className={styles.loading}>Carregando...</div>
    }


    return (
        <div className={styles.listagemPage}>
            <div className={styles.container}>
                <h1 className={styles.sectionTitle}>Nossa Coleção</h1>

                <div className={styles.filters}>
                    <button
                        className={filter === 'all' ? styles.active : ''}
                        onClick={() => setFilter('all')}
                    >
                        Todos
                    </button>
                    <button
                        className={filter === 'necklace' ? styles.active : ''}
                        onClick={() => setFilter('necklace')}
                    >
                        Colares
                    </button>
                    <button
                        className={filter === 'earring' ? styles.active : ''}
                        onClick={() => setFilter('earring')}
                    >
                        Brincos
                    </button>
                    <button
                        className={filter === 'ring' ? styles.active : ''}
                        onClick={() => setFilter('ring')}
                    >
                        Anéis
                    </button>
                    <button
                        className={filter === 'bracelet' ? styles.active : ''}
                        onClick={() => setFilter('bracelet')}
                    >
                        Pulseiras
                    </button>
                </div>


                <div className={styles.productsGrid}>
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}

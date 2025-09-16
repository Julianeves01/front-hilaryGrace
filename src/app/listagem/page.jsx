'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import ProductCard from '../../components/ProductCard'


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
        return <div className="loading">Carregando...</div>
    }


    return (
        <div className="listagem-page">
            <div className="container">
                <h1 className="section-title">Nossa Coleção</h1>

                <div className="filters">
                    <button
                        className={filter === 'all' ? 'active' : ''}
                        onClick={() => setFilter('all')}
                    >
                        Todos
                    </button>
                    <button
                        className={filter === 'necklace' ? 'active' : ''}
                        onClick={() => setFilter('necklace')}
                    >
                        Colares
                    </button>
                    <button
                        className={filter === 'earring' ? 'active' : ''}
                        onClick={() => setFilter('earring')}
                    >
                        Brincos
                    </button>
                    <button
                        className={filter === 'ring' ? 'active' : ''}
                        onClick={() => setFilter('ring')}
                    >
                        Anéis
                    </button>
                    <button
                        className={filter === 'bracelet' ? 'active' : ''}
                        onClick={() => setFilter('bracelet')}
                    >
                        Pulseiras
                    </button>
                </div>


                <div className="products-grid">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}

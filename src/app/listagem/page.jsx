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
            console.error('Error fetching products:', error)
        } finally {
            setLoading(false)
        }
    }


    const filteredProducts = filter === 'all'
        ? products
        : products.filter(product => product.category === filter)


    if (loading) {
        return <div className="loading">Loading...</div>
    }


    return (
        <div className="listagem-page">
            <div className="container">
                <h1 className="section-title">Our Collection</h1>

                <div className="filters">
                    <button
                        className={filter === 'all' ? 'active' : ''}
                        onClick={() => setFilter('all')}
                    >
                        All
                    </button>
                    <button
                        className={filter === 'dresses' ? 'active' : ''}
                        onClick={() => setFilter('dresses')}
                    >
                        Dresses
                    </button>
                    <button
                        className={filter === 'tops' ? 'active' : ''}
                        onClick={() => setFilter('tops')}
                    >
                        Tops
                    </button>
                    <button
                        className={filter === 'accessories' ? 'active' : ''}
                        onClick={() => setFilter('accessories')}
                    >
                        Accessories
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

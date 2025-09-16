import Link from 'next/link'


export default function ProductCard({ product }) {
    return (
        <div className="product-card">
            <Link href={`/detalhes/${product.id}`}>
                <div className="product-image">
                    <img src={product.image} alt={product.name} />
                    <div className="product-overlay">
                        <span>View Details</span>
                    </div>
                </div>
                <div className="product-info">
                    <h3>{product.name}</h3>
                    <p className="product-category">{product.category}</p>
                    <p className="product-price">R$ {product.price}</p>
                </div>
            </Link>
        </div>
    )
}
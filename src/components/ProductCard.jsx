import Link from 'next/link'
import styles from '../styles/productCard.module.css'

export default function ProductCard({ product }) {
    return (
        <div className={styles.productCard}>
            <Link href={`/detalhes/${product.id}`}>
                <div className={styles.productImage}>
                    <img src={product.image} alt={product.name} />
                    <div className={styles.productOverlay}>
                        <span>View Details</span>
                    </div>
                </div>
                <div className={styles.productInfo}>
                    <h3>{product.name}</h3>
                    <p className={styles.productCategory}>{product.category}</p>
                    <p className={styles.productPrice}>R$ {product.price}</p>
                </div>
            </Link>
        </div>
    )
}
import Link from 'next/link'
import styles from '../styles/productCard.module.css'

export default function ProductCard({ product }) {
    return (
        <div className={styles.productCard}>
            <Link href={`/detalhes/${product.id}`}>
                <div className={styles.productImage}>
                    <img src={product.imagem_url || '/icons/placeholder.jpg'} alt={product.nome} />
                    <div className={styles.productOverlay}>
                        <span>View Details</span>
                    </div>
                </div>
                <div className={styles.productInfo}>
                    <h3>{product.nome}</h3>
                    <p className={styles.productPrice}>R$ {parseFloat(product.preco).toFixed(2)}</p>
                </div>
            </Link>
        </div>
    )
}
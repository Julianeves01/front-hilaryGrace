import Link from 'next/link'
import styles from '../styles/productCard.module.css'

export default function ProductCard({ product }) {
    return (
        <div className={styles.productCard}>
            <Link href={`/detalhes/${product.id}`}>
                <div className={styles.productImage}>
                    <img src={product.foto || '/icons/placeholder.jpg'} alt={product.nome} />
                    <div className={styles.productOverlay}>
                        <span>Ver Detalhes</span>
                    </div>
                    {product.status === 'vendida' && (
                        <div className={styles.soldBadge}>
                            <span>VENDIDA</span>
                        </div>
                    )}
                </div>
                <div className={styles.productInfo}>
                    <h3>{product.nome}</h3>
                    <p className={styles.productPrice}>R$ {parseFloat(product.preco).toFixed(2)}</p>
                    <p className={styles.productSeller}>Por: {product.vendedora}</p>
                    <p className={styles.productStatus}>
                        Status: <span className={product.status === 'disponivel' ? styles.available : styles.sold}>
                            {product.status}
                        </span>
                    </p>
                </div>
            </Link>
        </div>
    )
}
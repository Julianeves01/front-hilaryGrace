import Link from 'next/link'
import styles from '../styles/footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerContent}>
                    <div className={styles.footerSection}>
                        <h3>Hilary Grace</h3>
                        <p>Elevando seus momentos cotidianos com elegância sofisticada e estilo atemporal.</p>
                    </div>

                    <div className={styles.footerSection}>
                        <h4>Links Rápidos</h4>
                        <ul>
                            <li><Link href="/">Início</Link></li>
                            <li><Link href="/listagem">Coleção</Link></li>
                            <li><Link href="/sobre">Sobre</Link></li>
                            <li><Link href="/contato">Contato</Link></li>
                        </ul>
                    </div>

                    <div className={styles.footerSection}>
                        <h4>Informações</h4>
                        <p>Inscreva-se para receber atualizações sobre novos produtos e ofertas exclusivas.</p>
                        <form className={styles.newsletterForm}>
                            <input type="email" placeholder="Seu endereço de e-mail" />
                            <button type="submit" className={styles.btnSecondary}>Inscrever</button>
                        </form>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p>&copy; 2025 Hilary Grace. Todos os direitos reservados.</p>
                    <div className={styles.footerLinks}>
                        <a href="#">Política de Privacidade</a>
                        <a href="#">Termos de Serviço</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

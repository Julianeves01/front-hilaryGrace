"use client"
import { useState } from "react"
import Link from "next/link"
import styles from "../styles/header.module.css"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <h1>Hilary Grace</h1>
                    <span>JOIAS</span>
                </Link>
                <nav className={isMenuOpen ? styles.open : ""}>
                    <Link href="/">Home</Link>
                    <Link href="/listagem">Coleção</Link>
                    <Link href="/vendas">Vendas</Link>
                    <Link href="/usuarias">Vendedoras</Link>
                    <Link href="/criar">Criar</Link>
                    <Link href="/sobre">Sobre</Link>
                    <Link href="/contato">Contato</Link>
                </nav>
                <button
                    className={styles.menuToggle}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    )
}

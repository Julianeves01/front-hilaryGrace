"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./not-found.module.css";

export default function NotFound() {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h1 className={styles.title}>404</h1>
                    <h2 className={styles.subtitle}>Página não encontrada</h2>
                </div>

                <div className={styles.message}>
                    <p className={styles.description}>
                        Ops! A página que você está procurando não existe ou foi movida.
                    </p>
                    <p className={styles.subdescription}>
                        Que tal explorar nossa coleção de joias exclusivas?
                    </p>
                </div>
                <div className={styles.actions}>
                    <Link href="/" className={styles.primaryButton}>
                        Voltar ao Início
                    </Link>
                    <Link href="/listagem" className={styles.secondaryButton}>
                        Ver Coleção
                    </Link>
                    <button
                        onClick={() => router.back()}
                        className={styles.tertiaryButton}
                    >
                        Página Anterior
                    </button>
                </div>
                <div className={styles.decoration}>
                    <div className={styles.jewelIcon}>💎</div>
                    <p className={styles.brandText}>Hilary Grace</p>
                    <p className={styles.brandSubtext}> Elegância Feminina Exclusiva</p>
                </div>
            </div>
        </div>
    );
}
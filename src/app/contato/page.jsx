"use client"
import { useState } from "react"
import styles from "../../styles/contato.module.css"

export default function Contato() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitMessage, setSubmitMessage] = useState("")

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simula um pequeno delay para parecer real
        setTimeout(() => {
            setSubmitMessage('Obrigado pela sua mensagem! Entraremos em contato em breve.')
            setFormData({ name: '', email: '', subject: '', message: '' })
            setIsSubmitting(false)
        }, 1000)
    }
    return (
        <div className={styles.contatoPage}>
            <div className={styles.container}>
                <h1 className={styles.sectionTitle}>Entre em Contato</h1>

                <div className={styles.contatoContent}>
                    <div className={styles.contactFormSection}>
                        <h2>Envie-nos uma Mensagem</h2>
                        <p>Adoraríamos ouvir você. Envie-nos uma mensagem e responderemos o mais breve possível.</p>

                        <form onSubmit={handleSubmit} className={styles.contactForm}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Nome Completo</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email">Endereço de Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="subject">Assunto</label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="order">Dúvida sobre Pedido</option>
                                    <option value="returns">Devoluções e Trocas</option>
                                    <option value="other">Outro</option>
                                </select>
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message">Mensagem</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="6"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Conte-nos como podemos ajudá-lo..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className={styles.btnPrimary}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                            </button>

                            {submitMessage && (
                                <p className={`${styles.submitMessage} ${styles.success}`}>
                                    {submitMessage}
                                </p>
                            )}
                        </form>
                    </div>

                    <div className={styles.contactInfoSection}>
                        <h2>Visite Nossa Boutique</h2>

                        <div className={styles.contactInfo}>
                            <div className={styles.infoItem}>
                                <h3>Endereço</h3>
                                <p>Rua das Flores, 123<br />Jardins, São Paulo - SP<br />01234-567</p>
                            </div>

                            <div className={styles.infoItem}>
                                <h3>Telefone</h3>
                                <p>+55 (11) 99999-9999</p>
                            </div>

                            <div className={styles.infoItem}>
                                <h3>Email</h3>
                                <p>contato@hilarygrace.com</p>
                            </div>
                        </div>

                        <div className={styles.socialMedia}>
                            <h3>Siga-nos</h3>
                            <div className={styles.socialLinks}>
                                <a href="#" className={styles.socialLink}>Instagram</a>
                                <a href="#" className={styles.socialLink}>Linkedin</a>
                                <a href="#" className={styles.socialLink}>GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
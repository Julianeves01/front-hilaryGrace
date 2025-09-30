"use client"
import { useState, useEffect } from 'react'
import axios from 'axios'
import styles from '../../styles/usuarias.module.css'

export default function Usuarias() {
    const [usuarias, setUsuarias] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchUsuarias()
    }, [])

    const fetchUsuarias = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/usuarias`)
            setUsuarias(response.data)
        } catch (error) {
            console.error('Erro ao buscar usuárias:', error)
            setError('Erro ao carregar usuárias. Tente novamente mais tarde.')
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return (
            <div className={styles.listagemPage}>
                <div className={styles.container}>
                    <p>Carregando usuárias...</p>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className={styles.listagemPage}>
                <div className={styles.container}>
                    <p>Erro: {error}</p>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.listagemPage}>
            <div className={styles.container}>
                <h1 className={styles.sectionTitle}>Usuárias Cadastradas</h1>

                {usuarias.length > 0 ? (
                    <div style={{
                        display: 'grid',
                        gap: '1rem',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
                    }}>
                        {usuarias.map((usuaria) => (
                            <div key={usuaria.id} style={{
                                background: 'white',
                                padding: '1.5rem',
                                borderRadius: '8px',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                border: '1px solid #e0e0e0'
                            }}>
                                <h3 style={{
                                    color: '#e91e63',
                                    marginBottom: '1rem',
                                    fontSize: '1.2rem'
                                }}>
                                    {usuaria.nome}
                                </h3>
                                <div style={{
                                    marginBottom: '0.8rem'
                                }}>
                                    <strong>Email:</strong> {usuaria.email}
                                </div>
                                <div style={{
                                    color: '#666',
                                    fontSize: '0.9rem'
                                }}>
                                    <strong>Cadastrada em:</strong> {new Date(usuaria.created_at).toLocaleDateString('pt-BR')}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div style={{
                        textAlign: 'center',
                        padding: '2rem'
                    }}>
                        <p>Nenhuma usuária encontrada.</p>
                    </div>
                )}
            </div>
        </div>
    )
}
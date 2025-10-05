"use client"
import {useState, useEffect} from 'react'
import axios from 'axios'
import styles from '../../styles/listagem.module.css'

export default function Vendas() {
    const [vendas, setVendas] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        fetchVendas()
    }, [])

    const fetchVendas = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/vendas`)
            setVendas(response.data)
        } catch (error) {
            console.error('Erro ao buscar vendas:', error)
            setError('Erro ao carregar as vendas')
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return (
            <div className={styles.listagemPage}>
                <div className={styles.container}>
                    <p>Carregando vendas...</p>
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
                <h1 className={styles.sectionTitle}>Histórico de Vendas</h1>
                {vendas.length > 0 ? (
                    <div style={{
                        display: 'grid',
                        gap: '1rem',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))'
                    }}>
                        {vendas.map((venda) => (
                            <div key={venda.id} style={{
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
                                    {venda.joia}
                                </h3>
                                <div style={{ marginBottom: '0.8rem' }}>
                                    <strong>Comprador:</strong> {venda.comprador_nome}
                                </div>
                                <div style={{ marginBottom: '0.8rem' }}>
                                    <strong>Email:</strong> {venda.comprador_email}
                                </div>
                                <div style={{ marginBottom: '0.8rem' }}>
                                    <strong>Vendedora:</strong> {venda.vendedora}
                                </div>
                                <div style={{
                                    color: '#666',
                                    fontSize: '0.9rem'
                                }}>
                                    <strong>Data da Venda:</strong> {new Date(venda.data_venda).toLocaleString('pt-BR')}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div style={{ textAlign: 'center', padding: '2rem' }}>
                        <p>Nenhuma venda encontrada.</p>
                    </div>
                )}
            </div>
        </div>
    )
}
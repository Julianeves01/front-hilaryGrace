'use client'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios'
export default function DetalhesJoia() {
    const [joia, setJoia] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [compraData, setCompraData] = useState({
        comprador_nome: '',
        comprador_email: ''
    })
    const [comprando, setComprando] = useState(false)
    const [mensagem, setMensagem] = useState('')
    const params = useParams()
    useEffect(() => {
        const fetchJoia = async () => {
            try {
                const res = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/joias/${params.id}`
                );
                setJoia(res.data);
            } catch (error) {
                console.error("Erro ao buscar joia:", error);
                setError("Erro ao carregar os detalhes da joia");
            } finally {
                setLoading(false);
            }
        };
        if (params.id) {
            fetchJoia();
        }
    }, [params.id]);

    const handleCompra = async (e) => {
        e.preventDefault();
        setComprando(true);
        setMensagem('');
        try {
            const vendaData = {
                joia_id: parseInt(params.id),
                comprador_nome: compraData.comprador_nome,
                comprador_email: compraData.comprador_email
            };
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/vendas`, vendaData);
            setMensagem('✅ Compra realizada com sucesso!');
            setCompraData({ comprador_nome: '', comprador_email: '' });
            // Atualizar os dados da joia
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/joias/${params.id}`);
            setJoia(res.data);
        } catch (error) {
            console.error("Erro ao processar compra:", error);
            setMensagem('❌ Erro ao processar compra. Tente novamente.');
        } finally {
            setComprando(false);
        }
    };
    if (loading) {
        return (
            <main style={{ padding: '2rem', textAlign: 'center' }}>
                <p>Carregando detalhes da joia...</p>
            </main>
        );
    }
    if (error) {
        return (
            <main style={{ padding: '2rem', textAlign: 'center' }}>

                <p>{error}</p>
            </main>
        );
    }
    if (!joia) {
        return (
            <main style={{ padding: '2rem', textAlign: 'center' }}>
                <p>Joia não encontrada.</p>
            </main>
        );
    }
    return (
        <main style={{
            padding: '2rem', maxWidth: '1200px', margin: '0 auto'
        }}>
            <div style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start'
            }}>
                <div>
                    <img
                        src={joia.foto ||
                            '/image/default-product.jpg'}
                        alt={joia.nome}
                        style={{ width: '100%', borderRadius: '8px' }}
                    />
                </div>
                <div>
                    <h1>{joia.nome}</h1>
                    <p style={{
                        fontSize: '1.5rem', color: '#e91e63',
                        fontWeight: 'bold'
                    }}>
                        R$ {parseFloat(joia.preco).toFixed(2)}
                    </p>
                    <p style={{
                        marginTop: '1rem', lineHeight: '1.6'
                    }}>
                        {joia.descricao}
                    </p>
                    <div style={{
                        marginTop: '1.5rem', padding: '1rem',
                        backgroundColor: '#f5f5f5', borderRadius: '8px'
                    }}>
                        <h3>Informações da Vendedora</h3>
                        <p><strong>Nome:</strong> {joia.vendedora}</p>
                        <p><strong>Email:</strong> {joia.email}</p>
                        <p><strong>Status:</strong>

                            <span style={{
                                color: joia.status === 'disponivel' ?
                                    '#4caf50' : '#f44336',
                                fontWeight: 'bold',
                                marginLeft: '8px'
                            }}>
                                {joia.status}
                            </span>
                        </p>

                        <p><strong>Criada em:</strong> {new Date(joia.created_at).toLocaleDateString('pt-BR')}</p>
                    </div>
                    {joia.status === 'disponivel' && (
                        <div style={{
                            marginTop: '2rem', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px'
                        }}>
                            <h3>Comprar Joia</h3>
                            <form onSubmit={handleCompra}>
                                <div style={{ marginBottom: '1rem' }}>
                                    <label style={{
                                        display: 'block',
                                        marginBottom: '0.5rem'
                                    }}>
                                        <strong>Seu Nome:</strong>
                                    </label>
                                    <input

                                        type="text"
                                        value={compraData.comprador_nome}
                                        onChange={(e) =>
                                            setCompraData({ ...compraData, comprador_nome: e.target.value })}
                                        required
                                        style={{

                                            width: '100%',
                                            padding: '8px',
                                            border: '1px solid #ddd',
                                            borderRadius: '4px'
                                        }}
                                    />
                                </div>

                                <div style={{ marginBottom: '1rem' }}>
                                    <label style={{
                                        display: 'block',
                                        marginBottom: '0.5rem'
                                    }}>
                                        <strong>Seu Email:</strong>
                                    </label>

                                    <input
                                        type="email"
                                        value={compraData.comprador_email}
                                        onChange={(e) =>
                                            setCompraData({ ...compraData, comprador_email: e.target.value })}
                                        required
                                        style={{

                                            width: '100%',
                                            padding: '8px',
                                            border: '1px solid #ddd',
                                            borderRadius: '4px'
                                        }}
                                    />
                                </div>
                                <button

                                    type="submit"
                                    disabled={comprando}

                                    style={{
                                        backgroundColor: '#e91e63',
                                        color: 'white',
                                        padding: '12px 24px',
                                        border: 'none',
                                        borderRadius: '4px',
                                        cursor: comprando ?
                                            'not-allowed' : 'pointer',
                                        fontSize: '1rem',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    {comprando ? 'Processando...' :
                                        'Comprar'}
                                </button>
                            </form>
                            {mensagem && (
                                <div style={{
                                    marginTop: '1rem',
                                    padding: '1rem',
                                    borderRadius: '4px',
                                    backgroundColor:
                                        mensagem.includes('✅') ? '#d4edda' : '#f8d7da',
                                    color: mensagem.includes('✅') ?
                                        '#155724' : '#721c24'

                                }}>
                                    {mensagem}
                                </div>
                            )}
                        </div>
                    )}
                    {joia.status === 'vendida' && (
                        <div style={{
                            marginTop: '2rem',
                            padding: '1rem',
                            backgroundColor: '#f8d7da',
                            borderRadius: '8px',
                            border: '1px solid #f5c6cb'
                        }}>
                            <h3 style={{ color: '#721c24' }}>Joia
                                Vendida</h3>
                            <p style={{ color: '#721c24' }}>Esta joia
                                já foi vendida e não está mais disponível.</p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}

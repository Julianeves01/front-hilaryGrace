'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios'

export default function DetalhesJoia() {
    const [joia, setJoia] = useState(null)
    const [personalizacoes, setPersonalizacoes] = useState([])
    const [loading, setLoading] = useState(true)
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
            }
        };

        const fetchPersonalizacoes = async () => {
            try {
                const res = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/customizations`
                );
                // Filtrar personalizações para esta joia
                const personalizacoesDaJoia = res.data.filter(p => p.joia_id === parseInt(params.id));
                setPersonalizacoes(personalizacoesDaJoia);
            } catch (error) {
                console.error("Erro ao buscar personalizações:", error);
            } finally {
                setLoading(false);
            }
        };

        if (params.id) {
            fetchJoia();
            fetchPersonalizacoes();
        }
    }, [params.id]);

    if (loading) {
        return (
            <main style={{ padding: '2rem', textAlign: 'center' }}>
                <p>Carregando detalhes da joia...</p>
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
        <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>
                <div>
                    <img
                        src={joia.imagem_url || '/image/default-product.jpg'}
                        alt={joia.nome}
                        style={{ width: '100%', borderRadius: '8px' }}
                    />
                </div>
                <div>
                    <h1>{joia.nome}</h1>
                    <p style={{ fontSize: '1.5rem', color: '#e91e63', fontWeight: 'bold' }}>
                        R$ {joia.preco}
                    </p>
                    <p style={{ marginTop: '1rem', lineHeight: '1.6' }}>
                        {joia.descricao}
                    </p>

                    {personalizacoes.length > 0 && (
                        <div style={{ marginTop: '2rem' }}>
                            <h3>Personalizações Disponíveis</h3>
                            <div style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
                                {personalizacoes.map((personalizacao) => (
                                    <div key={personalizacao.id} style={{
                                        border: '1px solid #ddd',
                                        padding: '1rem',
                                        borderRadius: '8px'
                                    }}>
                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem' }}>
                                            {personalizacao.metal && <p><strong>Metal:</strong> {personalizacao.metal}</p>}
                                            {personalizacao.pedra && <p><strong>Pedra:</strong> {personalizacao.pedra}</p>}
                                            {personalizacao.formato && <p><strong>Formato:</strong> {personalizacao.formato}</p>}
                                        </div>
                                        {personalizacao.imagem_url && (
                                            <img
                                                src={personalizacao.imagem_url}
                                                alt="Personalização"
                                                style={{ width: '100px', height: '100px', objectFit: 'cover', marginTop: '0.5rem', borderRadius: '4px' }}
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}

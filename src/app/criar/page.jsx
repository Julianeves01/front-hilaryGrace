'use client'
import { useState, useEffect } from 'react'
import axios from 'axios'
import styles from '../../styles/admin.module.css'
export default function Admin() {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        image: '',
        description: '',
        usuaria_id: '1' // Por simplicidade, usando usuária padrão
    })
    const [usuarias, setUsuarias] = useState([])
    const [message, setMessage] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    useEffect(() => {
        fetchUsuarias()
    }, [])
    const fetchUsuarias = async () => {
        try {
            const response = await
                axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/usuarias`)
            setUsuarias(response.data)
            if (response.data.length > 0) {
                setFormData(prev => ({
                    ...prev, usuaria_id:
                        response.data[0].id.toString()
                }))
            }
        } catch (error) {

            console.error('Erro ao buscar usuárias:', error)
        }
    }
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setMessage('')
        try {
            // Validação mais robusta
            if (!formData.name.trim() || !formData.price ||
                !formData.usuaria_id) {
                setMessage('Por favor, preencha todos os campos obrigatórios.')
                return
            }
            // Validar preço
            const priceNum = parseFloat(formData.price)
            if (isNaN(priceNum) || priceNum <= 0) {
                setMessage('Por favor, insira um preço válido maior que zero.')
                return
            }
            // Preparar dados para o backend (formato correto da API)
            const joiaData = {
                nome: formData.name.trim(),
                preco: parseFloat(formData.price),
                descricao: formData.description.trim() || '',
                usuaria_id: parseInt(formData.usuaria_id)
            }
            console.log('Enviando dados:', joiaData)

            console.log('URL da API:', process.env.NEXT_PUBLIC_API_URL)
            // Enviar para o backend
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/api/joias`,
                joiaData
            )
            console.log('Resposta do servidor:', response.data)
            setMessage('✅ Joia criada com sucesso!')
            // Limpar formulário
            setFormData({
                name: '',
                price: '',
                image: '',
                description: '',
                usuaria_id: '1'
            })
        } catch (error) {
            console.error('Erro completo:', error)
            if (error.response) {
                console.error('Status:', error.response.status)
                console.error('Dados da resposta:',
                    error.response.data)
                console.error('Headers:', error.response.headers)
                if (error.response.status === 400) {
                    const errorMsg = error.response.data?.message ||
                        error.response.data?.error || 'Dados inválidos'
                    setMessage(`❌ Erro 400: ${errorMsg}`)
                } else if (error.response.status === 404) {
                    setMessage('❌ Erro 404: Endpoint não encontrado. Verifique se o backend está rodando.')
                } else if (error.response.status === 500) {
                    setMessage('❌ Erro 500: Erro interno do servidor.')
                } else {
                    setMessage(`❌ Erro ${error.response.status}:
${error.response.data?.message || 'Erro desconhecido'}`)
                }

            } else if (error.request) {
                console.error('Erro de requisição:', error.request)
                setMessage('❌ Erro de conexão: Não foi possível conectar ao servidor. Verifique se o backend está rodando.')
            } else {
                console.error('Erro:', error.message)
                setMessage(`❌ Erro: ${error.message}`)
            }
        } finally {
            setIsSubmitting(false)
        }
    }
    return (
        <div className={styles.adminContainer}>
            <h1 className={styles.title}>Adicionar Nova Joia</h1>
            <div className={styles.apiInfo}>
                <p><strong>API URL:</strong>
                    {process.env.NEXT_PUBLIC_API_URL || 'Não configurada'}</p>
            </div>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="usuaria_id">Vendedora *</label>
                    <select
                        id="usuaria_id"
                        name="usuaria_id"
                        value={formData.usuaria_id}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Selecione uma
                            vendedora</option>
                        {usuarias.map((usuaria) => (
                            <option key={usuaria.id}
                                value={usuaria.id}>
                                {usuaria.nome} ({usuaria.email})
                            </option>
                        ))}
                    </select>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="name">Nome da Joia *</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ex: Colar Elegante de Ouro"
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="price">Preço (R$) *</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="299.99"

                        step="0.01"
                        min="0"
                        required

                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="image">URL da Imagem</label>
                    <input
                        type="url"
                        id="image"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        placeholder="https://exemplo.com/imagem.jpg"
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="description">Descrição</label>
                    <textarea

                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Descrição detalhada da joia..."
                        rows="4"
                    />
                </div>
                {message && (
                    <div className={`${styles.message}
${message.includes('✅') ? styles.success : styles.error}`}>
                        {message}
                    </div>
                )}
                <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Criando...' : 'Criar Joia'}
                </button>
            </form>
            {formData.image && (
                <div className={styles.preview}>
                    <h3>Preview da Imagem:</h3>
                    <img src={formData.image} alt="Preview"
                        onError={(e) => {
                            e.target.style.display = 'none'
                        }} />
                </div>
            )}
            <div className={styles.debugInfo}>
                <h3>Dados do Formulário (Debug):</h3>
                <pre>{JSON.stringify(formData, null, 2)}</pre>
            </div>
        </div>
    )
}
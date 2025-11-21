import { useState, useRef, useEffect } from "react"
import { MessageCircle, Send, Loader2, Sparkles, User, Bot } from "lucide-react"
import Header from "../../components/layout/Header"
import Footer from "../../components/layout/Footer"

interface Message {
    id: string
    content: string
    role: 'user' | 'assistant'
    timestamp: Date
}

export default function ChatPage() {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            content: 'Olá! Sou o assistente virtual do Kutambula Marketplace. Como posso ajudá-lo hoje?',
            role: 'assistant',
            timestamp: new Date()
        }
    ])
    const [inputMessage, setInputMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)
    const textareaRef = useRef<HTMLTextAreaElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!inputMessage.trim() || isLoading) return

        const userMessage: Message = {
            id: Date.now().toString(),
            content: inputMessage,
            role: 'user',
            timestamp: new Date()
        }

        setMessages(prev => [...prev, userMessage])
        setInputMessage('')
        setIsLoading(true)

        // Simular resposta da IA (substituir por chamada real de API)
        setTimeout(() => {
            const assistantMessage: Message = {
                id: (Date.now() + 1).toString(),
                content: 'Esta é uma resposta simulada. Em produção, aqui seria integrado com um modelo de IA real para fornecer assistência sobre produtos africanos, lojas, pedidos e muito mais!',
                role: 'assistant',
                timestamp: new Date()
            }
            setMessages(prev => [...prev, assistantMessage])
            setIsLoading(false)
        }, 1500)
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSubmit(e)
        }
    }

    const adjustTextareaHeight = () => {
        const textarea = textareaRef.current
        if (textarea) {
            textarea.style.height = 'auto'
            textarea.style.height = Math.min(textarea.scrollHeight, 150) + 'px'
        }
    }

    useEffect(() => {
        adjustTextareaHeight()
    }, [inputMessage])

    return (
        <>
            <Header />
            
            <div className="min-h-screen bg-gray-50 pt-16 lg:pt-24">
                <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
                    {/* Hero Section */}
                    <div className="text-center mb-4 sm:mb-6 lg:mb-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full mb-3">
                            <Sparkles className="w-3.5 h-3.5 text-primary" />
                            <span className="text-xs font-medium text-primary">Novo</span>
                        </div>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary mb-2 sm:mb-3">
                            Chat de <span className="text-primary">IA</span>
                        </h1>
                        <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto px-2">
                            Tire suas dúvidas sobre produtos, lojas e pedidos com nosso assistente inteligente
                        </p>
                    </div>

                    {/* Chat Container */}
                    <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                        {/* Messages Area */}
                        <div className="h-[55vh] sm:h-[60vh] overflow-y-auto p-3 sm:p-5 lg:p-6 space-y-3 sm:space-y-4">
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`flex gap-2 sm:gap-3 ${
                                        message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                                    }`}
                                >
                                    {/* Avatar */}
                                    <div className={`shrink-0 w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center ${
                                        message.role === 'user' 
                                            ? 'bg-primary text-white' 
                                            : 'bg-secondary text-white'
                                    }`}>
                                        {message.role === 'user' ? (
                                            <User className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                        ) : (
                                            <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                        )}
                                    </div>

                                    {/* Message Content */}
                                    <div className={`flex-1 max-w-[80%] sm:max-w-[75%] ${
                                        message.role === 'user' ? 'items-end' : 'items-start'
                                    }`}>
                                        <div className={`rounded-2xl px-3 py-2 sm:px-4 sm:py-3 ${
                                            message.role === 'user'
                                                ? 'bg-primary text-white'
                                                : 'bg-gray-100 text-gray-800'
                                        }`}>
                                            <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap wrap-break-word">
                                                {message.content}
                                            </p>
                                        </div>
                                        <span className={`text-[10px] sm:text-xs text-gray-500 mt-1 block ${
                                            message.role === 'user' ? 'text-right' : 'text-left'
                                        }`}>
                                            {message.timestamp.toLocaleTimeString('pt-BR', { 
                                                hour: '2-digit', 
                                                minute: '2-digit' 
                                            })}
                                        </span>
                                    </div>
                                </div>
                            ))}

                            {/* Loading Indicator */}
                            {isLoading && (
                                <div className="flex gap-2 sm:gap-3">
                                    <div className="shrink-0 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-secondary text-white flex items-center justify-center">
                                        <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                    </div>
                                    <div className="bg-gray-100 rounded-2xl px-3 py-2 sm:px-4 sm:py-3">
                                        <div className="flex items-center gap-2">
                                            <Loader2 className="w-4 h-4 animate-spin text-primary" />
                                            <span className="text-sm text-gray-600">Digitando...</span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="border-t border-gray-200 bg-gray-50 p-3 sm:p-4">
                            <form onSubmit={handleSubmit} className="flex gap-2">
                                <div className="flex-1 relative">
                                    <textarea
                                        ref={textareaRef}
                                        value={inputMessage}
                                        onChange={(e) => setInputMessage(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                        placeholder="Digite sua mensagem..."
                                        className="w-full px-3 py-2.5 sm:px-4 sm:py-3 pr-2 sm:pr-12 text-xs sm:text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 resize-none transition-all min-h-10 max-h-[120px]"
                                        rows={1}
                                        disabled={isLoading}
                                    />
                                    <div className="hidden sm:block absolute bottom-3 right-3 text-xs text-gray-400">
                                        Enter para enviar
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    disabled={!inputMessage.trim() || isLoading}
                                    className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary text-white hover:bg-primary/90 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center group hover:scale-105 disabled:hover:scale-100"
                                >
                                    {isLoading ? (
                                        <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                                    ) : (
                                        <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 transition-transform" />
                                    )}
                                </button>
                            </form>

                            {/* Suggestions */}
                            <div className="mt-3 flex flex-wrap gap-1.5 sm:gap-2">
                                <button
                                    onClick={() => setInputMessage('Quais são as lojas mais populares?')}
                                    className="px-2.5 py-1.5 text-[11px] sm:text-xs text-gray-600 bg-white border border-gray-200 rounded-lg hover:border-primary hover:text-primary transition-colors"
                                    disabled={isLoading}
                                >
                                    Lojas populares
                                </button>
                                <button
                                    onClick={() => setInputMessage('Como faço um pedido?')}
                                    className="px-2.5 py-1.5 text-[11px] sm:text-xs text-gray-600 bg-white border border-gray-200 rounded-lg hover:border-primary hover:text-primary transition-colors"
                                    disabled={isLoading}
                                >
                                    Como fazer pedido
                                </button>
                                <button
                                    onClick={() => setInputMessage('Quais produtos africanos vocês têm?')}
                                    className="px-2.5 py-1.5 text-[11px] sm:text-xs text-gray-600 bg-white border border-gray-200 rounded-lg hover:border-primary hover:text-primary transition-colors"
                                    disabled={isLoading}
                                >
                                    Produtos africanos
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Info Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8">
                        <div className="bg-white p-3 sm:p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2 sm:mb-3">
                                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                            </div>
                            <h3 className="font-semibold text-secondary mb-1.5 text-xs sm:text-sm">Respostas Instantâneas</h3>
                            <p className="text-[11px] sm:text-xs text-gray-600 leading-relaxed">
                                Obtenha respostas rápidas sobre produtos, lojas e serviços
                            </p>
                        </div>

                        <div className="bg-white p-3 sm:p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2 sm:mb-3">
                                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                            </div>
                            <h3 className="font-semibold text-secondary mb-1.5 text-xs sm:text-sm">Inteligência Artificial</h3>
                            <p className="text-[11px] sm:text-xs text-gray-600 leading-relaxed">
                                Assistente treinado para ajudar com o marketplace africano
                            </p>
                        </div>

                        <div className="bg-white p-3 sm:p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2 sm:mb-3">
                                <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                            </div>
                            <h3 className="font-semibold text-secondary mb-1.5 text-xs sm:text-sm">Disponível 24/7</h3>
                            <p className="text-[11px] sm:text-xs text-gray-600 leading-relaxed">
                                Suporte sempre disponível, a qualquer hora do dia
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

import { useState } from 'react';
import { Mail, Phone, MessageCircle, Send, User, FileText } from 'lucide-react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simular envio (substituir com lógica real de API)
        setTimeout(() => {
            console.log('Formulário enviado:', formData);
            setSubmitStatus('success');
            setIsSubmitting(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });

            // Resetar status após 5 segundos
            setTimeout(() => setSubmitStatus('idle'), 5000);
        }, 1500);
    };

    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
            {/* Cabeçalho */}
            <div className="bg-linear-to-r from-primary to-tertiary p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">Pedido de Informação</h2>
                <p className="text-white/90">Tem alguma dúvida? Envie-nos uma mensagem e responderemos o mais breve possível.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 p-6">
                {/* Formulário */}
                <div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Nome */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                Nome Completo *
                            </label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                                    placeholder="Seu nome completo"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email *
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                                    placeholder="seu.email@exemplo.com"
                                />
                            </div>
                        </div>

                        {/* Telefone */}
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                Telefone
                            </label>
                            <div className="relative">
                                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                                    placeholder="+244 900 000 000"
                                />
                            </div>
                        </div>

                        {/* Assunto */}
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                Assunto *
                            </label>
                            <div className="relative">
                                <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                                >
                                    <option value="">Selecione um assunto</option>
                                    <option value="informacao-produto">Informação sobre Produto</option>
                                    <option value="status-pedido">Status do Pedido</option>
                                    <option value="devolucao">Devolução/Reembolso</option>
                                    <option value="suporte-tecnico">Suporte Técnico</option>
                                    <option value="parceria">Parceria/Vendedor</option>
                                    <option value="outro">Outro</option>
                                </select>
                            </div>
                        </div>

                        {/* Mensagem */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                Mensagem *
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                                placeholder="Descreva sua dúvida ou pedido de informação..."
                            />
                        </div>

                        {/* Botão de Enviar */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-tertiary transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    Enviando...
                                </>
                            ) : (
                                <>
                                    <Send className="w-5 h-5" />
                                    Enviar Mensagem
                                </>
                            )}
                        </button>

                        {/* Status de Envio */}
                        {submitStatus === 'success' && (
                            <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                                ✓ Mensagem enviada com sucesso! Entraremos em contato em breve.
                            </div>
                        )}
                        {submitStatus === 'error' && (
                            <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                                ✗ Erro ao enviar mensagem. Por favor, tente novamente.
                            </div>
                        )}
                    </form>
                </div>

                {/* Informações de Contato */}
                <div className="bg-gray-50 rounded-xl p-6 space-y-6">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Outras Formas de Contato</h3>
                        <p className="text-gray-600 text-sm mb-6">
                            Escolha a melhor forma de entrar em contato conosco. Estamos disponíveis para ajudar!
                        </p>
                    </div>

                    <div className="space-y-4">
                        {/* Email */}
                        <a 
                            href="mailto:suporte@kutambula.com"
                            className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:border-primary transition-colors"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                                <Mail className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                                <p className="text-sm text-gray-600">suporte@kutambula.com</p>
                                <p className="text-xs text-gray-500 mt-1">Resposta em até 24h</p>
                            </div>
                        </a>

                        {/* Telefone */}
                        <a 
                            href="tel:+244900000000"
                            className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:border-primary transition-colors"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                                <Phone className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-1">Telefone</h4>
                                <p className="text-sm text-gray-600">+244 900 000 000</p>
                                <p className="text-xs text-gray-500 mt-1">Seg-Sex: 8h-18h</p>
                            </div>
                        </a>

                        {/* Chat ao Vivo */}
                        <a 
                            href="#chat"
                            className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:border-primary transition-colors"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                                <MessageCircle className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-1">Chat ao Vivo</h4>
                                <p className="text-sm text-gray-600">Atendimento online</p>
                                <p className="text-xs text-green-600 mt-1 font-medium">● Disponível agora</p>
                            </div>
                        </a>
                    </div>

                    {/* Horário de Atendimento */}
                    <div className="pt-4 border-t border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-2">Horário de Atendimento</h4>
                        <div className="text-sm text-gray-600 space-y-1">
                            <p>Segunda a Sexta: 8h - 18h</p>
                            <p>Sábado: 9h - 13h</p>
                            <p>Domingo: Fechado</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

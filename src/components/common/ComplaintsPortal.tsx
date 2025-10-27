import { useState } from 'react';
import { AlertCircle, FileText, Send, Upload, User, Mail, Package, CheckCircle } from 'lucide-react';

export default function ComplaintsPortal() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        orderId: '',
        complaintType: '',
        description: '',
        files: [] as File[]
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [complaintNumber, setComplaintNumber] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const filesArray = Array.from(e.target.files);
            setFormData(prev => ({
                ...prev,
                files: [...prev.files, ...filesArray]
            }));
        }
    };

    const removeFile = (index: number) => {
        setFormData(prev => ({
            ...prev,
            files: prev.files.filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simular envio (substituir com lógica real de API)
        setTimeout(() => {
            const number = `REC-${Date.now().toString().slice(-8)}`;
            setComplaintNumber(number);
            console.log('Reclamação enviada:', { ...formData, complaintNumber: number });
            setSubmitStatus('success');
            setIsSubmitting(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                orderId: '',
                complaintType: '',
                description: '',
                files: []
            });
        }, 1500);
    };

    if (submitStatus === 'success') {
        return (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Reclamação Registada com Sucesso!</h2>
                <p className="text-gray-600 mb-6">
                    Sua reclamação foi registada e está a ser processada.
                </p>
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <p className="text-sm text-gray-600 mb-2">Número do Protocolo:</p>
                    <p className="text-3xl font-bold text-primary">{complaintNumber}</p>
                    <p className="text-xs text-gray-500 mt-3">
                        Guarde este número para acompanhar o andamento da sua reclamação
                    </p>
                </div>
                <div className="space-y-3 text-sm text-gray-600 text-left max-w-md mx-auto mb-6">
                    <p className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Receberá uma confirmação por email em breve</span>
                    </p>
                    <p className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>O prazo de resposta é de até 10 dias úteis</span>
                    </p>
                    <p className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Pode acompanhar o status através do email ou contactando o suporte</span>
                    </p>
                </div>
                <button
                    onClick={() => setSubmitStatus('idle')}
                    className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-tertiary transition-colors"
                >
                    Fazer Nova Reclamação
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
            {/* Cabeçalho */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                    <AlertCircle className="w-8 h-8" />
                    <h2 className="text-2xl font-bold">Portal de Reclamações</h2>
                </div>
                <p className="text-white/90">
                    Registe a sua reclamação de forma oficial, similar ao Livro de Reclamações.
                </p>
            </div>

            {/* Informação Importante */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 m-6">
                <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-yellow-800">
                        <p className="font-semibold mb-1">Informação Importante</p>
                        <p>As reclamações registadas neste portal têm valor legal e serão encaminhadas às entidades competentes. Preencha todos os campos com atenção.</p>
                    </div>
                </div>
            </div>

            {/* Formulário */}
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Nome Completo */}
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
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
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
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                                placeholder="seu.email@exemplo.com"
                            />
                        </div>
                    </div>

                    {/* Telefone */}
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Telefone *
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                            placeholder="+244 900 000 000"
                        />
                    </div>

                    {/* Número do Pedido */}
                    <div>
                        <label htmlFor="orderId" className="block text-sm font-medium text-gray-700 mb-2">
                            Número do Pedido (se aplicável)
                        </label>
                        <div className="relative">
                            <Package className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                id="orderId"
                                name="orderId"
                                value={formData.orderId}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                                placeholder="Ex: #12345"
                            />
                        </div>
                    </div>
                </div>

                {/* Tipo de Reclamação */}
                <div>
                    <label htmlFor="complaintType" className="block text-sm font-medium text-gray-700 mb-2">
                        Tipo de Reclamação *
                    </label>
                    <div className="relative">
                        <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <select
                            id="complaintType"
                            name="complaintType"
                            value={formData.complaintType}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                        >
                            <option value="">Selecione o tipo de reclamação</option>
                            <option value="produto-defeituoso">Produto Defeituoso</option>
                            <option value="produto-diferente">Produto Diferente do Anunciado</option>
                            <option value="nao-entregue">Produto Não Entregue</option>
                            <option value="atendimento">Mau Atendimento</option>
                            <option value="cobranca-indevida">Cobrança Indevida</option>
                            <option value="atraso-entrega">Atraso na Entrega</option>
                            <option value="cancelamento">Problemas com Cancelamento</option>
                            <option value="reembolso">Problemas com Reembolso</option>
                            <option value="outro">Outro</option>
                        </select>
                    </div>
                </div>

                {/* Descrição Detalhada */}
                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                        Descrição Detalhada da Reclamação *
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 resize-none"
                        placeholder="Descreva detalhadamente sua reclamação, incluindo datas, valores e todos os factos relevantes..."
                    />
                    <p className="text-xs text-gray-500 mt-1">
                        Seja o mais detalhado possível. Quanto mais informação fornecer, mais rápida será a resolução.
                    </p>
                </div>

                {/* Upload de Documentos */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Documentos Comprovativos (opcional)
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-red-500 transition-colors">
                        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                        <p className="text-sm text-gray-600 mb-2">
                            Arraste ficheiros para aqui ou clique para selecionar
                        </p>
                        <p className="text-xs text-gray-500 mb-4">
                            PDF, imagens, faturas, comprovantes (máx. 5MB por ficheiro)
                        </p>
                        <input
                            type="file"
                            onChange={handleFileChange}
                            multiple
                            accept="image/*,.pdf"
                            className="hidden"
                            id="file-upload"
                        />
                        <label
                            htmlFor="file-upload"
                            className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors"
                        >
                            Selecionar Ficheiros
                        </label>
                    </div>

                    {/* Lista de ficheiros */}
                    {formData.files.length > 0 && (
                        <div className="mt-4 space-y-2">
                            {formData.files.map((file, index) => (
                                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <span className="text-sm text-gray-700">{file.name}</span>
                                    <button
                                        type="button"
                                        onClick={() => removeFile(index)}
                                        className="text-red-600 hover:text-red-800 text-sm font-medium"
                                    >
                                        Remover
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Termos e Condições */}
                <div className="bg-gray-50 rounded-lg p-4">
                    <label className="flex items-start gap-3 cursor-pointer">
                        <input
                            type="checkbox"
                            required
                            className="mt-1 w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                        />
                        <span className="text-sm text-gray-700">
                            Confirmo que todas as informações fornecidas são verdadeiras e estou ciente de que esta reclamação tem caráter oficial e será encaminhada às autoridades competentes quando necessário. *
                        </span>
                    </label>
                </div>

                {/* Botão de Enviar */}
                <div className="flex gap-4">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                A Processar...
                            </>
                        ) : (
                            <>
                                <Send className="w-5 h-5" />
                                Registar Reclamação Oficial
                            </>
                        )}
                    </button>
                </div>

                <p className="text-xs text-gray-500 text-center">
                    Ao submeter esta reclamação, um protocolo oficial será gerado e você receberá uma confirmação por email.
                </p>
            </form>
        </div>
    );
}

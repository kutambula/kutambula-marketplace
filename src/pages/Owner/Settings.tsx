import { useState } from "react";
import ContainerOwner from "../../components/layout/Owner/Container";
import {
    Store,
    Image as ImageIcon,
    MapPin,
    Phone,
    Mail,
    Globe,
    Save,
    Trash2
} from "lucide-react";
import Input from "../../components/common/Form/Input";
import Button from "../../components/common/Form/Button";

export default function SettingsOwner() {
    const [formData, setFormData] = useState({
        name: "Sabores d'Angola",
        description: "A melhor loja de produtos africanos autênticos em Portugal. Importamos diretamente dos melhores produtores de Angola.",
        email: "contato@saboresdangola.com",
        phone: "+351 912 345 678",
        address: "Rua do Comércio, 123, Lisboa",
        website: "www.saboresdangola.com"
    });

    return (
        <ContainerOwner>
            <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Configurações da Loja</h1>
                        <p className="text-gray-500 text-sm mt-1">Personalize sua marca e informações de contato.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left Side: Forms */}
                    <div className="md:col-span-2 space-y-6">
                        {/* Basic Info */}
                        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
                            <h3 className="font-bold text-gray-900 flex items-center gap-2">
                                <Store className="w-5 h-5 text-primary" />
                                Informações Básicas
                            </h3>

                            <div className="space-y-4">
                                <Input
                                    label="Nome da Loja"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    fullWidth
                                />
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 mb-1.5">Descrição da Loja</label>
                                    <textarea
                                        rows={4}
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                                        placeholder="Conte a história da sua marca..."
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
                            <h3 className="font-bold text-gray-900 flex items-center gap-2">
                                <Mail className="w-5 h-5 text-primary" />
                                Contato e Localização
                            </h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Input
                                    label="Email Comercial"
                                    type="email"
                                    icon={<Mail className="w-4 h-4" />}
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    fullWidth
                                />
                                <Input
                                    label="Telefone"
                                    icon={<Phone className="w-4 h-4" />}
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    fullWidth
                                />
                                <Input
                                    label="Website (Opcional)"
                                    icon={<Globe className="w-4 h-4" />}
                                    value={formData.website}
                                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                                    fullWidth
                                />
                                <Input
                                    label="Endereço"
                                    icon={<MapPin className="w-4 h-4" />}
                                    value={formData.address}
                                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                    fullWidth
                                />
                            </div>
                        </div>

                        {/* Danger Zone */}
                        <div className="bg-red-50 p-8 rounded-3xl border border-red-100 space-y-4">
                            <h3 className="font-bold text-red-900 flex items-center gap-2">
                                <Trash2 className="w-5 h-5" />
                                Zona de Perigo
                            </h3>
                            <p className="text-red-700 text-sm">Ao encerrar sua loja, todos os seus produtos e dados serão removidos permanentemente.</p>
                            <button className="px-4 py-2 bg-red-600 text-white rounded-xl text-xs font-bold hover:bg-red-700 transition-colors shadow-sm">
                                Encerrar Atividades
                            </button>
                        </div>
                    </div>

                    {/* Right Side: Visuals */}
                    <div className="space-y-6">
                        {/* Logo Upload */}
                        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm text-center">
                            <h3 className="font-bold text-gray-900 mb-4">Logo da Loja</h3>
                            <div className="relative inline-block group">
                                <div className="w-32 h-32 rounded-3xl bg-gray-50 border-2 border-dashed border-gray-200 flex items-center justify-center overflow-hidden transition-all group-hover:border-primary">
                                    <Store className="w-12 h-12 text-gray-300 group-hover:text-primary transition-colors" />
                                </div>
                                <button className="absolute -bottom-2 -right-2 p-2 bg-primary text-white rounded-xl shadow-lg hover:bg-tertiary transition-transform active:scale-95">
                                    <ImageIcon className="w-4 h-4" />
                                </button>
                            </div>
                            <p className="text-[10px] text-gray-400 mt-4 leading-relaxed">
                                Recomendado: PNG ou JPG, 512x512px. Máximo 2MB.
                            </p>
                        </div>

                        {/* Banner Upload */}
                        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4">Banner da Loja</h3>
                            <div className="w-full h-32 rounded-2xl bg-gray-50 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-2 group hover:border-primary transition-all cursor-pointer">
                                <ImageIcon className="w-6 h-6 text-gray-300 group-hover:text-primary transition-colors" />
                                <span className="text-[10px] font-bold text-gray-400 group-hover:text-primary transition-colors uppercase">Upload Banner</span>
                            </div>
                            <p className="text-[10px] text-gray-400 mt-4 leading-relaxed text-center">
                                Banner retangular para o topo da sua página de loja.
                            </p>
                        </div>

                        {/* Quick Save Card */}
                        <div className="bg-primary/5 p-6 rounded-3xl border border-primary/10 space-y-4">
                            <p className="text-xs font-medium text-gray-600">Não esqueça de salvar suas alterações antes de sair.</p>
                            <Button
                                fullWidth
                                icon={<Save className="w-4 h-4" />}
                                className="shadow-lg"
                            >
                                Salvar Tudo
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </ContainerOwner>
    );
}

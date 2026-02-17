import { useState } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { useConfigureAccount } from "../../hooks/useOrganization";
import { User, Store, ArrowRight, ShieldCheck } from "lucide-react";
import Button from "../../components/common/Form/Button";
import Input from "../../components/common/Form/Input";

export default function ConfigureAccount() {
    const configureAccountMutation = useConfigureAccount();

    const [accountType, setAccountType] =
        useState<'personal' | 'business'>("personal");

    const [businessName, setBusinessName] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        configureAccountMutation.mutate(
            {
                businessName: accountType === 'business' ? businessName : "",
                accountType
            },
            {
                onSuccess: (data: any) => {
                    if (accountType === "business" && data?.id) {
                        window.location.href = `/dashboard/${data.id}`;
                    } else {
                        window.location.href = "/dashboard";
                    }
                },
                onError: (error: Error) => {
                    alert(error.message);
                },
            }
        );
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />

            <main className="flex-1 flex items-center justify-center p-6 sm:p-12 relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

                <div className="max-w-2xl w-full z-10">
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-12 transition-all duration-300 hover:shadow-2xl">
                        <div className="text-center mb-10">
                            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl mb-4">
                                <ShieldCheck className="w-8 h-8 text-primary" />
                            </div>
                            <h1 className="text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">
                                Configure sua Conta
                            </h1>
                            <p className="text-gray-500 max-w-sm mx-auto">
                                Escolha como deseja utilizar o Kutambula Marketplace para termos uma experiência personalizada.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Tipo de Conta - Visual Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div
                                    onClick={() => setAccountType('personal')}
                                    className={`relative cursor-pointer group p-6 rounded-2xl border-2 transition-all duration-300 ${accountType === 'personal'
                                        ? 'border-primary bg-primary/5 shadow-md'
                                        : 'border-gray-100 bg-gray-50 hover:border-gray-300 hover:bg-white'
                                        }`}
                                >
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${accountType === 'personal' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500 group-hover:bg-gray-300'}`}>
                                        <User className="w-6 h-6" />
                                    </div>
                                    <h3 className={`font-bold text-lg mb-1 ${accountType === 'personal' ? 'text-primary' : 'text-gray-900'}`}>
                                        Pessoal
                                    </h3>
                                    <p className="text-xs text-gray-500 leading-relaxed">
                                        Perfeito para fazer compras e apoiar produtores locais.
                                    </p>

                                    {accountType === 'personal' && (
                                        <div className="absolute top-4 right-4 text-primary">
                                            <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                                                <div className="w-2 h-2 bg-white rounded-full" />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div
                                    onClick={() => setAccountType('business')}
                                    className={`relative cursor-pointer group p-6 rounded-2xl border-2 transition-all duration-300 ${accountType === 'business'
                                        ? 'border-primary bg-primary/5 shadow-md'
                                        : 'border-gray-100 bg-gray-50 hover:border-gray-300 hover:bg-white'
                                        }`}
                                >
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${accountType === 'business' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500 group-hover:bg-gray-300'}`}>
                                        <Store className="w-6 h-6" />
                                    </div>
                                    <h3 className={`font-bold text-lg mb-1 ${accountType === 'business' ? 'text-primary' : 'text-gray-900'}`}>
                                        Negócio
                                    </h3>
                                    <p className="text-xs text-gray-500 leading-relaxed">
                                        Ideal para vender seus produtos e gerenciar sua loja.
                                    </p>

                                    {accountType === 'business' && (
                                        <div className="absolute top-4 right-4 text-primary">
                                            <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                                                <div className="w-2 h-2 bg-white rounded-full" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Nome da empresa só aparece se for business */}
                            <div className={`transition-all duration-500 ease-in-out ${accountType === 'business' ? 'opacity-100 translate-y-0 max-h-40' : 'opacity-0 -translate-y-4 max-h-0 overflow-hidden'}`}>
                                <Input
                                    label="Nome da Organização / Empresa"
                                    placeholder="Ex: Sabores d'Angola"
                                    name="businessName"
                                    value={businessName}
                                    onChange={(e) => setBusinessName(e.target.value)}
                                    required={accountType === 'business'}
                                    icon={<Store className="w-5 h-5" />}
                                    fullWidth
                                />
                            </div>

                            <Button
                                type="submit"
                                fullWidth
                                size="lg"
                                loading={configureAccountMutation.isPending}
                                icon={<ArrowRight className="w-5 h-5" />}
                                iconPosition="right"
                            >
                                {configureAccountMutation.isPending
                                    ? "Configurando tudo para você..."
                                    : "Finalizar Configuração"}
                            </Button>
                        </form>
                    </div>

                    <p className="text-center text-gray-400 text-sm mt-8">
                        Ao continuar você concorda com nossos <a href="#" className="text-primary hover:underline underline-offset-4">termos de uso</a> e <a href="#" className="text-primary hover:underline underline-offset-4">privacidade</a>.
                    </p>
                </div>
            </main>

            <Footer />
        </div>
    );
}

import { useState } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { useConfigureAccount } from "../../hooks/useOrganization";

export default function ConfigureAccount() {
    const configureAccountMutation = useConfigureAccount();

    const [accountType, setAccountType] =
        useState<'personal' | 'business'>("personal");

    const [businessName, setBusinessName] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        configureAccountMutation.mutate(
            {
                businessName,
                accountType
            },
            {
                onSuccess: (data: any) => {
                    if (accountType === "business") {
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
        <div className="min-h-screen bg-background">
            <Header />

            <main className="p-4">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                    {/* Tipo de Conta */}
                    <select
                        value={accountType}
                        onChange={(e) =>
                            setAccountType(e.target.value as 'personal' | 'business')
                        }
                    >
                        <option value="personal">Conta Pessoal</option>
                        <option value="business">Conta Empresarial</option>
                    </select>

                    {/* Nome da empresa só aparece se for business */}
                    {accountType === "business" && (
                        <input
                            name="businessName"
                            value={businessName}
                            onChange={(e) => setBusinessName(e.target.value)}
                            placeholder="Nome da Organização"
                            required
                        />
                    )}

                    <button
                        type="submit"
                        disabled={configureAccountMutation.isPending}
                    >
                        {configureAccountMutation.isPending
                            ? "Configurando..."
                            : "Continuar"}
                    </button>
                </form>
            </main>

            <Footer />
        </div>
    );
}

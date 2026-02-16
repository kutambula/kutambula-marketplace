import { useState } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { useCreateOrganization } from "../../hooks/useOrganization";
import { useNavigate } from "react-router-dom";

export default function CreateOrganization() {
    const createOrganizationMutation = useCreateOrganization();
    const [businessName, setBusinessName] = useState<string>("");

    const navegate =  useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        createOrganizationMutation.mutate({
            businessName
        }, {
            onSuccess: (data: any) => {
                alert(`Organização ${data.name} criada com sucesso!`);
                navegate(`/dashboard/${data.id}`)
            },
            onError: (error: Error) => {
                alert(error.message);
            },
        });
    };

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="p-4">
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">

                    <input
                        name="businessName"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value as any)}
                        placeholder="Nome"
                        required
                    />

                    <button
                        type="submit"
                        disabled={createOrganizationMutation.isPending}
                    >
                        {createOrganizationMutation.isPending
                            ? "Criando..."
                            : "Criar Organização"}
                    </button>
                </form>
            </main>

            <Footer />
        </div>
    );
}

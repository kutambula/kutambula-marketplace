import { useState } from "react";
import { X, Store, Loader2, Plus, Sparkles } from "lucide-react";
import { useOrganization } from "../../../../hooks/useOrganization";
import Button from "../../../common/Form/Button";
import Input from "../../../common/Form/Input";

interface CreateStoreModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CreateStoreModal({ isOpen, onClose }: CreateStoreModalProps) {
    const { createMutation, switchOrganization } = useOrganization();
    const [businessName, setBusinessName] = useState("");
    const [error, setError] = useState<string | null>(null);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (!businessName.trim()) {
            setError("O nome da loja é obrigatório.");
            return;
        }

        try {
            const org = await createMutation.mutateAsync({ businessName });

            // Success! Switch to the new organization and close modal
            if (org && org.id) {
                await switchOrganization(org.id);
                onClose();
                // Refresh to ensure all contexts are updated for the new store
                window.location.reload();
            }
        } catch (err: any) {
            setError(err.message || "Erro ao criar a loja. Tente novamente.");
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm animate-in fade-in duration-300"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
                {/* Header with Background Pattern */}
                <div className="relative p-8 bg-linear-to-br from-primary to-primary-dark text-white">
                    <div className="absolute top-0 right-0 p-6 opacity-10">
                        <Plus className="w-24 h-24" />
                    </div>

                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-white/20 rounded-xl">
                            <Store className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-xl font-black tracking-tight uppercase">Criar Nova Loja</h2>
                    </div>
                    <p className="text-black text-sm font-medium">
                        Comece a vender hoje mesmo definindo o nome da sua nova marca.
                    </p>
                </div>

                {/* Form Body */}
                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    <div className="space-y-2">
                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">
                            Nome do Negócio
                        </label>
                        <div className="relative group">
                            <Input
                                value={businessName}
                                onChange={(e) => setBusinessName(e.target.value)}
                                placeholder="Ex: Minha Boutique Elegante"
                                className="pr-10"
                                required
                            />
                            <Sparkles className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 group-focus-within:text-primary transition-colors" />
                        </div>
                        {error && (
                            <p className="text-red-500 text-[10px] font-black uppercase tracking-wider ml-1 animate-in slide-in-from-top-1">
                                {error}
                            </p>
                        )}
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 italic text-[11px] text-gray-500 text-center">
                        "Você poderá configurar o logo, banner e outras informações da loja nas configurações após a criação."
                    </div>

                    <div className="flex gap-3">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={onClose}
                            className="flex-1"
                        >
                            Cancelar
                        </Button>
                        <Button
                            type="submit"
                            className="flex-3"
                            disabled={createMutation.isPending}
                        >
                            {createMutation.isPending ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                                    Criando...
                                </>
                            ) : (
                                "Criar Loja"
                            )}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

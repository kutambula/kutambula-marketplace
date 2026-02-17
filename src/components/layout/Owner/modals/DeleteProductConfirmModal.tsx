import { AlertTriangle, Loader2 } from "lucide-react";
import Button from "../../../common/Form/Button";

interface DeleteProductConfirmModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    productName: string;
    isPending?: boolean;
}

export default function DeleteProductConfirmModal({
    isOpen,
    onClose,
    onConfirm,
    productName,
    isPending = false
}: DeleteProductConfirmModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm animate-in fade-in duration-300" onClick={onClose} />

            <div className="relative w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
                <div className="p-8 text-center space-y-6">
                    <div className="mx-auto w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center ring-8 ring-red-50/50">
                        <AlertTriangle className="w-8 h-8 text-red-500" />
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight">Excluir Produto?</h3>
                        <p className="text-sm text-gray-500 font-medium">
                            Tem certeza que deseja remover <span className="text-gray-900 font-bold">"{productName}"</span>? Esta ação não pode ser desfeita.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <Button
                            variant="danger"
                            onClick={onConfirm}
                            disabled={isPending}
                            className="w-full py-4 shadow-lg shadow-red-500/20"
                        >
                            {isPending ? (
                                <Loader2 className="w-5 h-5 animate-spin mx-auto" />
                            ) : (
                                "Sim, Excluir Produto"
                            )}
                        </Button>
                        <button
                            onClick={onClose}
                            className="w-full py-3 text-sm font-bold text-gray-400 hover:text-gray-600 transition-colors uppercase tracking-widest"
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

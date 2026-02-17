import { useState, useEffect } from "react";
import { X, Package, Loader2, Image as ImageIcon, Plus, Trash2, Tag, Info } from "lucide-react";
import { useProduct } from "../../../../hooks/useProduct";
import { useOrganization } from "../../../../hooks/useOrganization";
import Button from "../../../common/Form/Button";
import Input from "../../../common/Form/Input";
import type { ProductResponse } from "../../../../types/product.types";

interface ManageProductModalProps {
    isOpen: boolean;
    onClose: () => void;
    product?: ProductResponse | null;
}

export default function ManageProductModal({ isOpen, onClose, product }: ManageProductModalProps) {
    const isEditing = !!product;
    const { createMutation, updateMutation } = useProduct();
    const { activeOrgId } = useOrganization();

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        category: "",
        price: 0,
        stockQuantity: 0,
        sku: "",
        tags: [] as string[],
        images: [] as string[],
    });
    const [tagInput, setTagInput] = useState("");
    const [imageInput, setImageInput] = useState("");
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (product) {
            setFormData({
                name: product.name,
                description: product.description,
                category: product.category,
                price: product.price,
                stockQuantity: product.stockQuantity,
                sku: product.sku,
                tags: product.tags,
                images: product.images,
            });
        } else {
            setFormData({
                name: "",
                description: "",
                category: "",
                price: 0,
                stockQuantity: 0,
                sku: "",
                tags: [],
                images: [],
            });
        }
        setError(null);
    }, [product, isOpen]);

    if (!isOpen) return null;

    const handleAddTag = () => {
        if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
            setFormData(prev => ({ ...prev, tags: [...prev.tags, tagInput.trim()] }));
            setTagInput("");
        }
    };

    const handleRemoveTag = (tag: string) => {
        setFormData(prev => ({ ...prev, tags: prev.tags.filter(t => t !== tag) }));
    };

    const handleAddImage = () => {
        if (imageInput.trim() && !formData.images.includes(imageInput.trim())) {
            setFormData(prev => ({ ...prev, images: [...prev.images, imageInput.trim()] }));
            setImageInput("");
        }
    };

    const handleRemoveImage = (img: string) => {
        setFormData(prev => ({ ...prev, images: prev.images.filter(i => i !== img) }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (!activeOrgId) {
            setError("Nenhuma organização ativa encontrada.");
            return;
        }

        try {
            if (isEditing && product) {
                await updateMutation.mutateAsync({
                    id: product.id,
                    payload: formData,
                });
            } else {
                await createMutation.mutateAsync({
                    ...formData,
                    organizationId: activeOrgId,
                });
            }
            onClose();
        } catch (err: any) {
            setError(err.message || "Erro ao salvar produto.");
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" onClick={onClose} />

            <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 max-h-[90vh] flex flex-col">
                {/* Header */}
                <div className="p-6 bg-linear-to-r from-primary to-primary-dark text-white flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/20 rounded-xl">
                            <Package className="w-6 h-6" />
                        </div>
                        <h2 className="text-xl font-black uppercase tracking-tight">
                            {isEditing ? "Editar Produto" : "Novo Produto"}
                        </h2>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Body */}
                <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">
                    {error && (
                        <div className="p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-red-600 text-sm font-bold animate-in slide-in-from-top-2">
                            <Info className="w-5 h-5 shrink-0" />
                            {error}
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Basic Info */}
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Nome do Produto</label>
                                <Input
                                    value={formData.name}
                                    onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                    placeholder="Ex: Café de Angola Premium"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">SKU</label>
                                <Input
                                    value={formData.sku}
                                    onChange={e => setFormData(prev => ({ ...prev, sku: e.target.value }))}
                                    placeholder="Ex: CAFE-001"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Categoria</label>
                                <Input
                                    value={formData.category}
                                    onChange={e => setFormData(prev => ({ ...prev, category: e.target.value }))}
                                    placeholder="Ex: Bebidas"
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Preço</label>
                                    <Input
                                        type="number"
                                        value={formData.price}
                                        onChange={e => setFormData(prev => ({ ...prev, price: Number(e.target.value) }))}
                                        placeholder="0.00"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Estoque</label>
                                    <Input
                                        type="number"
                                        value={formData.stockQuantity}
                                        onChange={e => setFormData(prev => ({ ...prev, stockQuantity: Number(e.target.value) }))}
                                        placeholder="0"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Descrição</label>
                        <textarea
                            className="w-full p-4 bg-gray-50 border border-transparent rounded-2xl text-sm font-medium focus:outline-none focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all min-h-[120px] resize-none"
                            value={formData.description}
                            onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
                            placeholder="Descreva as qualidades do seu produto..."
                        />
                    </div>

                    {/* Tags */}
                    <div className="space-y-3">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Tags (Palavras-chave)</label>
                        <div className="flex gap-2">
                            <div className="relative flex-1">
                                <Input
                                    value={tagInput}
                                    onChange={e => setTagInput(e.target.value)}
                                    placeholder="Adicionar tag..."
                                    onKeyPress={e => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                                />
                                <Tag className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                            </div>
                            <Button type="button" onClick={handleAddTag} className="shrink-0"><Plus className="w-4 h-4" /></Button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {formData.tags.map(tag => (
                                <span key={tag} className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-tighter rounded-lg border border-primary/10">
                                    {tag}
                                    <button type="button" onClick={() => handleRemoveTag(tag)}><X className="w-3 h-3 hover:text-red-500" /></button>
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Images */}
                    <div className="space-y-4">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Imagens (URLs)</label>
                        <div className="flex gap-2">
                            <div className="relative flex-1">
                                <Input
                                    value={imageInput}
                                    onChange={e => setImageInput(e.target.value)}
                                    placeholder="Link da imagem..."
                                    onKeyPress={e => e.key === 'Enter' && (e.preventDefault(), handleAddImage())}
                                />
                                <ImageIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                            </div>
                            <Button type="button" onClick={handleAddImage} className="shrink-0"><Plus className="w-4 h-4" /></Button>
                        </div>
                        <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
                            {formData.images.map(img => (
                                <div key={img} className="relative aspect-square group">
                                    <img src={img} className="w-full h-full object-cover rounded-xl border border-gray-100" />
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveImage(img)}
                                        className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <Trash2 className="w-3 h-3" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </form>

                {/* Footer */}
                <div className="p-6 border-t border-gray-50 flex gap-4 bg-gray-50/50">
                    <Button variant="outline" onClick={onClose} className="flex-1">Cancelar</Button>
                    <Button type="submit" onClick={handleSubmit} className="flex-2" disabled={createMutation.isPending || updateMutation.isPending}>
                        {(createMutation.isPending || updateMutation.isPending) ? <Loader2 className="w-4 h-4 animate-spin" /> : "Salvar Produto"}
                    </Button>
                </div>
            </div>
        </div>
    );
}

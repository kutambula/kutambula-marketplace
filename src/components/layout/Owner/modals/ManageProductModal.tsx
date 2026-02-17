import { useState, useEffect, useRef } from "react";
import { X, Package, Loader2, Image as ImageIcon, Plus, Trash2, Tag, Info, Star } from "lucide-react";
import { useProduct } from "../../../../hooks/useProduct";
import { useOrganization } from "../../../../hooks/useOrganization";
import Button from "../../../common/Form/Button";
import Input from "../../../common/Form/Input";
import { uploadImageToCloudinary, validateImageFile } from "../../../../utils/cloudinary.utils";
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
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        category: "",
        price: 0,
        stockQuantity: 0,
        sku: "",
        tags: [] as string[],
        images: [] as string[],
        cover: "",
    });
    const [tagInput, setTagInput] = useState("");
    const [isUploading, setIsUploading] = useState(false);
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
                cover: product.cover || (product.images.length > 0 ? product.images[0] : ""),
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
                cover: "",
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

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const validation = validateImageFile(file);
        if (!validation.valid) {
            setError(validation.error || "Arquivo inválido.");
            return;
        }

        setIsUploading(true);
        setError(null);
        try {
            const url = await uploadImageToCloudinary(file, { folder: "kutambula_products" });
            if (url) {
                setFormData(prev => {
                    const newImages = [...prev.images, url];
                    return {
                        ...prev,
                        images: newImages,
                        cover: prev.cover || url // Define como cover se for a primeira imagem
                    };
                });
            }
        } catch (err: any) {
            setError("Erro ao carregar imagem. Tente novamente.");
            console.error(err);
        } finally {
            setIsUploading(false);
            if (fileInputRef.current) fileInputRef.current.value = "";
        }
    };

    const handleRemoveImage = (img: string) => {
        setFormData(prev => {
            const newImages = prev.images.filter(i => i !== img);
            let newCover = prev.cover;
            if (prev.cover === img) {
                newCover = newImages.length > 0 ? newImages[0] : "";
            }
            return { ...prev, images: newImages, cover: newCover };
        });
    };

    const handleSetCover = (img: string) => {
        setFormData(prev => ({ ...prev, cover: img }));
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
                            className="w-full p-4 bg-gray-50 border border-transparent rounded-3xl text-sm font-medium focus:outline-none focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all min-h-[120px] resize-none shadow-inner"
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
                            <Button type="button" onClick={handleAddTag} className="shrink-0 rounded-2xl"><Plus className="w-4 h-4" /></Button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {formData.tags.map(tag => (
                                <span key={tag} className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-tighter rounded-xl border border-primary/10">
                                    {tag}
                                    <button type="button" onClick={() => handleRemoveTag(tag)}><X className="w-3 h-3 hover:text-red-500 transition-colors" /></button>
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Images Gallery */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Galeria de Imagens</label>
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest italic">* Selecione a estrela para definir a capa</span>
                        </div>

                        <input
                            type="file"
                            ref={fileInputRef}
                            className="hidden"
                            accept="image/*"
                            onChange={handleImageUpload}
                        />

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {/* Upload Button */}
                            <button
                                type="button"
                                onClick={() => fileInputRef.current?.click()}
                                disabled={isUploading}
                                className="aspect-square rounded-3xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-2 hover:border-primary/40 hover:bg-orange-50/30 transition-all group relative overflow-hidden"
                            >
                                {isUploading ? (
                                    <Loader2 className="w-6 h-6 text-primary animate-spin" />
                                ) : (
                                    <>
                                        <div className="p-3 bg-gray-50 rounded-2xl group-hover:bg-white shadow-sm transition-colors text-gray-400 group-hover:text-primary">
                                            <ImageIcon className="w-6 h-6" />
                                        </div>
                                        <span className="text-[10px] font-black text-gray-400 group-hover:text-primary uppercase tracking-widest">Upload</span>
                                    </>
                                )}
                            </button>

                            {formData.images.map((img, index) => (
                                <div key={index} className={`relative aspect-square rounded-3xl overflow-hidden group border-2 transition-all ${formData.cover === img ? 'border-primary shadow-lg ring-4 ring-primary/5' : 'border-gray-100'}`}>
                                    <img src={img} className="w-full h-full object-cover" alt={`Produto ${index}`} />

                                    {/* Overlay Actions */}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                        <button
                                            type="button"
                                            onClick={() => handleSetCover(img)}
                                            className={`p-2 rounded-xl transition-all active:scale-95 ${formData.cover === img ? 'bg-primary text-white' : 'bg-white text-gray-600 hover:text-primary'}`}
                                            title="Definir como capa"
                                        >
                                            <Star className={`w-4 h-4 ${formData.cover === img ? 'fill-current' : ''}`} />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveImage(img)}
                                            className="p-2 bg-white text-gray-600 hover:text-red-500 rounded-xl transition-all active:scale-95"
                                            title="Remover imagem"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>

                                    {/* Cover Badge */}
                                    {formData.cover === img && (
                                        <div className="absolute top-2 left-2 px-2 py-1 bg-primary text-white text-[8px] font-black uppercase tracking-widest rounded-lg shadow-lg">
                                            Capa
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {formData.images.length === 0 && !isUploading && (
                            <div className="p-10 border-2 border-dashed border-gray-100 rounded-3xl flex flex-col items-center justify-center text-center gap-2">
                                <ImageIcon className="w-8 h-8 text-gray-100" />
                                <p className="text-xs font-bold text-gray-300 uppercase tracking-widest">Nenhuma imagem carregada</p>
                            </div>
                        )}
                    </div>
                </form>

                {/* Footer */}
                <div className="p-6 border-t border-gray-50 flex gap-4 bg-gray-50/50">
                    <Button variant="outline" onClick={onClose} className="flex-1 rounded-2xl py-4 uppercase text-xs font-black tracking-widest">Cancelar</Button>
                    <Button type="submit" onClick={handleSubmit} className="flex-2 rounded-2xl py-4 uppercase text-xs font-black tracking-widest" disabled={createMutation.isPending || updateMutation.isPending || isUploading}>
                        {(createMutation.isPending || updateMutation.isPending) ? <Loader2 className="w-4 h-4 animate-spin" /> : "Salvar Produto"}
                    </Button>
                </div>
            </div>
        </div>
    );
}

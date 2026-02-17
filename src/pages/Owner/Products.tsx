import { useState, useMemo } from "react";
import ContainerOwner from "../../components/layout/Owner/Container";
import {
    Plus,
    Search,
    Filter,
    Edit2,
    Trash2,
    Package,
    AlertCircle,
    Store,
    Loader2
} from "lucide-react";
import Button from "../../components/common/Form/Button";
import { useOrganization } from "../../hooks/useOrganization";
import { useProduct } from "../../hooks/useProduct";
import ManageProductModal from "../../components/layout/Owner/modals/ManageProductModal";
import DeleteProductConfirmModal from "../../components/layout/Owner/modals/DeleteProductConfirmModal";
import type { ProductResponse } from "../../types/product.types";

export default function ProductsOwner() {
    const { activeOrgId, isPending: isOrgPending } = useOrganization();
    const { useProductsByOrg, deleteMutation } = useProduct();
    const [searchTerm, setSearchTerm] = useState("");

    // Modal states
    const [isManageModalOpen, setIsManageModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<ProductResponse | null>(null);

    const { data: productRes, isPending: isProductsPending } = useProductsByOrg({
        organizationId: activeOrgId || "",
    });

    const products = useMemo(() => productRes?.data || [], [productRes]);

    const filteredProducts = useMemo(() => {
        return products.filter(p =>
            p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.sku.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [products, searchTerm]);

    const handleOpenCreateModal = () => {
        setSelectedProduct(null);
        setIsManageModalOpen(true);
    };

    const handleOpenEditModal = (product: ProductResponse) => {
        setSelectedProduct(product);
        setIsManageModalOpen(true);
    };

    const handleOpenDeleteModal = (product: ProductResponse) => {
        setSelectedProduct(product);
        setIsDeleteModalOpen(true);
    };

    const handleDeleteConfirm = async () => {
        if (selectedProduct) {
            try {
                await deleteMutation.mutateAsync(selectedProduct.id);
                setIsDeleteModalOpen(false);
            } catch (error) {
                console.error("Failed to delete product:", error);
            }
        }
    };

    if (isOrgPending || (isProductsPending && activeOrgId)) {
        return (
            <ContainerOwner>
                <div className="flex items-center justify-center min-h-[60vh]">
                    <Loader2 className="w-10 h-10 text-primary animate-spin" />
                </div>
            </ContainerOwner>
        );
    }

    if (!activeOrgId) {
        return (
            <ContainerOwner>
                <div className="flex flex-col items-center justify-center min-h-[60vh] text-center gap-3">
                    <Store className="w-12 h-12 text-primary" />
                    <h2 className="text-xl font-black text-gray-900 tracking-tight uppercase">Nenhuma organização ativa</h2>
                    <p className="text-sm text-gray-500 max-w-sm font-medium">
                        Crie ou selecione uma organização para gerenciar o catálogo de produtos da sua loja.
                    </p>
                </div>
            </ContainerOwner>
        );
    }

    return (
        <ContainerOwner>
            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-gray-100 pb-8">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">Meus Produtos</h1>
                        <p className="text-gray-500 text-xs md:text-sm mt-2 font-medium">Gestão de catálogo e inventário em tempo real.</p>
                    </div>
                    <Button
                        icon={<Plus className="w-5 h-5" />}
                        onClick={handleOpenCreateModal}
                        className="shadow-lg shadow-primary/20 px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-black text-xs md:text-sm transition-all hover:scale-105 active:scale-95"
                    >
                        Novo Produto
                    </Button>
                </div>

                {/* Filters & Search */}
                <div className="bg-white p-4 md:p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col lg:flex-row gap-4 items-center">
                    <div className="relative flex-1 w-full">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                        <input
                            type="text"
                            placeholder="Buscar produtos por nome ou SKU..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-6 py-3 bg-gray-50 border border-transparent rounded-2xl text-xs md:text-sm font-medium focus:outline-none focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all"
                        />
                    </div>
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 w-full lg:w-auto">
                        <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-4 md:px-6 py-3 bg-white border border-gray-200 rounded-2xl text-xs md:text-sm font-bold text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-all active:scale-95">
                            <Filter className="w-4 h-4 text-gray-400" />
                            Filtros
                        </button>
                    </div>
                </div>

                {/* Products Table */}
                <div className="bg-white rounded-3xl md:rounded-4xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
                    <div className="overflow-x-auto custom-scrollbar">
                        <table className="w-full text-left whitespace-nowrap">
                            <thead className="bg-gray-50/50 text-gray-400 text-[10px] uppercase tracking-[0.15em] font-black">
                                <tr>
                                    <th className="px-8 py-5">Informação do Produto</th>
                                    <th className="px-8 py-5">Categoria</th>
                                    <th className="px-8 py-5">Preço Unitário</th>
                                    <th className="px-8 py-5">Quantidade</th>
                                    <th className="px-8 py-5">Estado Atual</th>
                                    <th className="px-8 py-5 text-right">Gestão</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50 text-sm">
                                {filteredProducts.map((product) => (
                                    <tr key={product.id} className="hover:bg-primary/5 transition-colors group text-gray-600 font-medium">
                                        <td className="px-8 py-5">
                                            <div className="flex items-center gap-4">
                                                <div className="relative shrink-0">
                                                    <img
                                                        src={product.cover || (product.images.length > 0 ? product.images[0] : "https://via.placeholder.com/150")}
                                                        alt={product.name}
                                                        className="w-16 h-16 rounded-2xl object-cover shadow-sm bg-gray-100 ring-2 ring-transparent group-hover:ring-primary/20 transition-all"
                                                    />
                                                    {product.stockQuantity <= 5 && product.stockQuantity > 0 && (
                                                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 rounded-full border-2 border-white flex items-center justify-center">
                                                            <AlertCircle className="w-2.5 h-2.5 text-white" />
                                                        </div>
                                                    )}
                                                </div>
                                                <div>
                                                    <p className="font-black text-gray-900 group-hover:text-primary transition-colors text-base tracking-tight">{product.name}</p>
                                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">{product.sku}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-5 font-bold text-gray-500 uppercase text-[11px] tracking-wider">{product.category}</td>
                                        <td className="px-8 py-5 font-black text-gray-900 text-base">
                                            {product.price.toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' })}
                                        </td>
                                        <td className="px-8 py-5">
                                            <span className={`text-sm font-black ${product.stockQuantity === 0 ? "text-red-500" : "text-gray-800"}`}>
                                                {product.stockQuantity} un.
                                            </span>
                                        </td>
                                        <td className="px-8 py-5">
                                            <span className={`inline-flex items-center px-3 py-1.5 text-[10px] font-black uppercase tracking-tighter rounded-xl ${product.stockQuantity > 0
                                                ? "bg-green-100 text-green-700"
                                                : "bg-red-50 text-red-600"
                                                }`}>
                                                {product.stockQuantity > 0 ? "Venda Ativa" : "Indisponível"}
                                            </span>
                                        </td>
                                        <td className="px-8 py-5">
                                            <div className="flex items-center justify-end gap-2 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                                                <button
                                                    onClick={() => handleOpenEditModal(product)}
                                                    className="p-3 text-gray-400 hover:text-primary hover:bg-orange-50 rounded-xl transition-all active:scale-95"
                                                    title="Editar"
                                                >
                                                    <Edit2 className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => handleOpenDeleteModal(product)}
                                                    className="p-3 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all active:scale-95"
                                                    title="Excluir"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* Empty State for no products after filter */}
                    {filteredProducts.length === 0 && !isProductsPending && (
                        <div className="p-20 text-center flex flex-col items-center gap-4">
                            <Package className="w-12 h-12 text-gray-200" />
                            <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Nenhum produto encontrado</p>
                        </div>
                    )}
                    {/* Pagination - Simplified for now */}
                    {productRes && productRes.total > 0 && (
                        <div className="p-8 bg-gray-50/30 border-t border-gray-50 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">
                                Total de {productRes.total} produtos
                            </p>
                        </div>
                    )}
                </div>
            </div>

            <ManageProductModal
                isOpen={isManageModalOpen}
                onClose={() => setIsManageModalOpen(false)}
                product={selectedProduct}
            />

            <DeleteProductConfirmModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={handleDeleteConfirm}
                productName={selectedProduct?.name || ""}
                isPending={deleteMutation.isPending}
            />
        </ContainerOwner>
    );
}

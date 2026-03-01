import ContainerAdmin from "../../components/layout/Admin/Container";
import { useProduct } from "../../hooks/useProduct";
import { useAdmin } from "../../hooks/useAdmin";
import type { ProductResponse } from "../../types/product.types";
import {
    CheckCircle2,
    AlertCircle,
    Package,
    Building2,
    Search,
    Loader2,
} from "lucide-react";
import { useState } from "react";

type VerificationType = "products" | "organizations";
type FilterStatus = "all" | "pending" | "verified";

export default function VerificationsAdmin() {
    const [activeTab, setActiveTab] = useState<VerificationType>("products");
    const [filterStatus, setFilterStatus] = useState<FilterStatus>("pending");
    const [searchQuery, setSearchQuery] = useState("");

    // Fetch products
    const { useListProducts } = useProduct();
    const { data: productsData, isLoading: isLoadingProducts } = useListProducts({
        verified: filterStatus === "pending" ? false : filterStatus === "verified" ? true : undefined,
    });

    // Admin verification hooks
    const { verifyProductMutation } = useAdmin();

    const products = productsData?.data || [];

    // Filter by search query
    const filteredProducts = products.filter((product: ProductResponse) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleVerifyProduct = (productId: string, isVerified: boolean) => {
        verifyProductMutation.mutate({
            id: productId,
            status: !isVerified,
        });
    };

    const pendingCount = products.filter((p: ProductResponse) => !p.verified).length;
    const verifiedCount = products.filter((p: ProductResponse) => p.verified).length;

    return (
        <ContainerAdmin>
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                {/* Header Section */}
                <div className="relative overflow-hidden bg-white/40 backdrop-blur-xl p-8 rounded-[3rem] border border-white/60 shadow-2xl shadow-gray-200/50 flex flex-col lg:flex-row lg:items-center justify-between gap-8 transition-all duration-700 hover:shadow-primary/5 group">
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-primary/10 transition-colors duration-700" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-tertiary/5 rounded-full blur-3xl -ml-20 -mb-20 group-hover:bg-tertiary/10 transition-colors duration-700" />

                    <div className="relative z-10 space-y-3">
                        <div className="flex items-center gap-3">
                            <h1 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tighter">
                                Verificações
                            </h1>
                        </div>
                        <p className="text-gray-500 text-sm font-medium max-w-md leading-relaxed">
                            Gerencie e monitore a verificação de <span className="text-primary font-bold">produtos</span> e <span className="text-tertiary font-bold">organizações</span> na plataforma.
                        </p>
                    </div>

                    <div className="relative z-10 flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full border border-gray-100 shadow-sm">
                            <AlertCircle className="w-4 h-4 text-amber-600" />
                            <span className="text-[11px] font-black text-amber-600 uppercase tracking-widest">{pendingCount} Pendentes</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full border border-gray-100 shadow-sm">
                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                            <span className="text-[11px] font-black text-green-600 uppercase tracking-widest">{verifiedCount} Verificados</span>
                        </div>
                    </div>
                </div>

                {/* Tabs and Controls */}
                <div className="bg-white rounded-[2.5rem] border border-gray-50 shadow-sm overflow-hidden">
                    {/* Tabs */}
                    <div className="flex border-b border-gray-50">
                        <button
                            onClick={() => setActiveTab("products")}
                            className={`flex-1 px-8 py-6 font-black text-sm uppercase tracking-wider transition-all ${
                                activeTab === "products"
                                    ? "text-primary border-b-2 border-primary"
                                    : "text-gray-400 hover:text-gray-600"
                            }`}
                        >
                            <div className="flex items-center justify-center gap-2">
                                <Package className="w-4 h-4" />
                                Produtos
                            </div>
                        </button>
                        <button
                            onClick={() => setActiveTab("organizations")}
                            className={`flex-1 px-8 py-6 font-black text-sm uppercase tracking-wider transition-all ${
                                activeTab === "organizations"
                                    ? "text-primary border-b-2 border-primary"
                                    : "text-gray-400 hover:text-gray-600"
                            }`}
                        >
                            <div className="flex items-center justify-center gap-2">
                                <Building2 className="w-4 h-4" />
                                Organizações
                            </div>
                        </button>
                    </div>

                    {/* Search and Filters */}
                    <div className="p-8 border-b border-gray-50 space-y-4">
                        <div className="flex flex-col lg:flex-row gap-4">
                            {/* Search Input */}
                            <div className="flex-1 relative">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                                <input
                                    type="text"
                                    placeholder="Buscar por nome ou descrição..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
                                />
                            </div>

                            {/* Filter Buttons */}
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setFilterStatus("all")}
                                    className={`px-6 py-3 rounded-xl font-black text-xs uppercase tracking-wider transition-all ${
                                        filterStatus === "all"
                                            ? "bg-primary text-white shadow-lg shadow-primary/30"
                                            : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                                    }`}
                                >
                                    Todos
                                </button>
                                <button
                                    onClick={() => setFilterStatus("pending")}
                                    className={`px-6 py-3 rounded-xl font-black text-xs uppercase tracking-wider transition-all ${
                                        filterStatus === "pending"
                                            ? "bg-amber-500 text-white shadow-lg shadow-amber-500/30"
                                            : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                                    }`}
                                >
                                    Pendentes
                                </button>
                                <button
                                    onClick={() => setFilterStatus("verified")}
                                    className={`px-6 py-3 rounded-xl font-black text-xs uppercase tracking-wider transition-all ${
                                        filterStatus === "verified"
                                            ? "bg-green-500 text-white shadow-lg shadow-green-500/30"
                                            : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                                    }`}
                                >
                                    Verificados
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                        {activeTab === "products" && (
                            <div>
                                {isLoadingProducts ? (
                                    <div className="flex items-center justify-center py-12">
                                        <Loader2 className="w-8 h-8 text-primary animate-spin" />
                                    </div>
                                ) : filteredProducts.length === 0 ? (
                                    <div className="text-center py-12">
                                        <Package className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                                        <p className="text-gray-500 font-medium">Nenhum produto encontrado</p>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        {filteredProducts.map((product: ProductResponse) => (
                                            <div
                                                key={product.id}
                                                className="flex items-center justify-between p-6 border border-gray-100 rounded-2xl hover:border-primary/20 hover:bg-gray-50/50 transition-all group"
                                            >
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <h3 className="font-black text-gray-900">{product.name}</h3>
                                                        <span
                                                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${
                                                                product.verified
                                                                    ? "bg-green-100 text-green-700"
                                                                    : "bg-amber-100 text-amber-700"
                                                            }`}
                                                        >
                                                            {product.verified ? (
                                                                <>
                                                                    <CheckCircle2 className="w-3 h-3" />
                                                                    Verificado
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <AlertCircle className="w-3 h-3" />
                                                                    Pendente
                                                                </>
                                                            )}
                                                        </span>
                                                    </div>
                                                    <p className="text-sm text-gray-500 line-clamp-2">
                                                        {product.description || "Sem descrição"}
                                                    </p>
                                                    <div className="flex items-center gap-4 mt-3 text-[11px] text-gray-400 font-bold uppercase tracking-wider">
                                                        <span>Preço: {product.price} Kz</span>
                                                        <span>Categoria: {product.category}</span>
                                                    </div>
                                                </div>

                                                <button
                                                    onClick={() => handleVerifyProduct(product.id, product.verified)}
                                                    disabled={verifyProductMutation.isPending}
                                                    className={`ml-6 px-6 py-3 rounded-xl font-black text-xs uppercase tracking-wider transition-all ${
                                                        product.verified
                                                            ? "bg-red-50 text-red-600 hover:bg-red-100"
                                                            : "bg-green-50 text-green-600 hover:bg-green-100"
                                                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                                                >
                                                    {verifyProductMutation.isPending ? (
                                                        <Loader2 className="w-4 h-4 animate-spin" />
                                                    ) : product.verified ? (
                                                        "Desverificar"
                                                    ) : (
                                                        "Verificar"
                                                    )}
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {activeTab === "organizations" && (
                            <div className="text-center py-12">
                                <Building2 className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                                <p className="text-gray-500 font-medium">Seção de organizações em breve</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </ContainerAdmin>
    );
}

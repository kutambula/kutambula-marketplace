import { useAdmin } from "../../hooks/useAdmin";
import { useListOrganizations } from "../../hooks/useOrganization";
import { useProduct } from "../../hooks/useProduct";
import type { OrganizationData } from "../../types/organization.types";
import type { ProductResponse } from "../../types/product.types";
import ContainerAdmin from "../../components/layout/Admin/Container";
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

    // Fetch organizations
    const { data: orgsData, isLoading: isLoadingOrgs } = useListOrganizations(50, 1);

    // Admin verification hooks
    const { verifyProductMutation, verifyOrganizationMutation } = useAdmin();

    const products = Array.isArray(productsData) ? productsData : productsData?.data || [];
    const organizations = Array.isArray(orgsData) ? orgsData : orgsData?.data || [];

    // Filter by search query and status
    const filteredProducts = products.filter((product: ProductResponse) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredOrganizations = organizations.filter((org: OrganizationData) => {
        const matchesQuery = org.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            org.description?.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = filterStatus === "all" ||
            (filterStatus === "pending" && !org.verified) ||
            (filterStatus === "verified" && org.verified);
        return matchesQuery && matchesStatus;
    });

    const handleVerifyProduct = (productId: string, isVerified: boolean) => {
        verifyProductMutation.mutate({
            id: productId,
            status: !isVerified,
        });
    };

    const handleVerifyOrganization = (orgId: string, isVerified: boolean) => {
        verifyOrganizationMutation.mutate({
            id: orgId,
            status: !isVerified,
        });
    };

    const pendingProductsCount = products.filter((p: ProductResponse) => !p.verified).length;
    const verifiedProductsCount = products.filter((p: ProductResponse) => p.verified).length;

    const pendingOrgsCount = organizations.filter((o: OrganizationData) => !o.verified).length;
    const verifiedOrgsCount = organizations.filter((o: OrganizationData) => o.verified).length;

    const currentPendingCount = activeTab === "products" ? pendingProductsCount : pendingOrgsCount;
    const currentVerifiedCount = activeTab === "products" ? verifiedProductsCount : verifiedOrgsCount;

    return (
        <ContainerAdmin>
            <div className="space-y-4 sm:space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                {/* Header Section */}
                <div className="relative overflow-hidden bg-white/40 backdrop-blur-xl p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl md:rounded-[3rem] border border-white/60 shadow-2xl shadow-gray-200/50 flex flex-col gap-4 sm:gap-6 md:gap-8 transition-all duration-700 hover:shadow-primary/5 group">
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-primary/5 rounded-full blur-3xl -mr-10 sm:-mr-16 md:-mr-20 -mt-10 sm:-mt-16 md:-mt-20 group-hover:bg-primary/10 transition-colors duration-700" />
                    <div className="absolute bottom-0 left-0 w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 bg-tertiary/5 rounded-full blur-3xl -ml-10 sm:-ml-16 md:-ml-20 -mb-10 sm:-mb-16 md:-mb-20 group-hover:bg-tertiary/10 transition-colors duration-700" />

                    <div className="relative z-10 space-y-2 sm:space-y-3">
                        <div className="flex items-center gap-2 sm:gap-3">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tighter">
                                Verificações
                            </h1>
                        </div>
                        <p className="text-gray-500 text-xs sm:text-sm font-medium max-w-md leading-relaxed">
                            Gerencie e monitore a verificação de <span className="text-primary font-bold">produtos</span> e <span className="text-tertiary font-bold">organizações</span> na plataforma.
                        </p>
                    </div>

                    <div className="relative z-10 flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4">
                        <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/80 rounded-full border border-gray-100 shadow-sm">
                            <AlertCircle className="w-3 sm:w-4 h-3 sm:h-4 text-amber-600 flex-shrink-0" />
                            <span className="text-[10px] sm:text-[11px] font-black text-amber-600 uppercase tracking-widest">{currentPendingCount} Pendentes</span>
                        </div>
                        <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/80 rounded-full border border-gray-100 shadow-sm">
                            <CheckCircle2 className="w-3 sm:w-4 h-3 sm:h-4 text-green-600 flex-shrink-0" />
                            <span className="text-[10px] sm:text-[11px] font-black text-green-600 uppercase tracking-widest">{currentVerifiedCount} Verificados</span>
                        </div>
                    </div>
                </div>

                {/* Tabs and Controls */}
                <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-[2.5rem] border border-gray-50 shadow-sm overflow-hidden">
                    {/* Tabs */}
                    <div className="flex border-b border-gray-50">
                        <button
                            onClick={() => setActiveTab("products")}
                            className={`flex-1 px-3 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 font-black text-xs sm:text-sm uppercase tracking-wider transition-all ${activeTab === "products"
                                ? "text-primary border-b-2 border-primary"
                                : "text-gray-400 hover:text-gray-600"
                                }`}
                        >
                            <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                                <Package className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                                <span className="hidden sm:inline">Produtos</span>
                                <span className="sm:hidden">Prod.</span>
                            </div>
                        </button>
                        <button
                            onClick={() => setActiveTab("organizations")}
                            className={`flex-1 px-3 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 font-black text-xs sm:text-sm uppercase tracking-wider transition-all ${activeTab === "organizations"
                                ? "text-primary border-b-2 border-primary"
                                : "text-gray-400 hover:text-gray-600"
                                }`}
                        >
                            <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                                <Building2 className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                                <span className="hidden sm:inline">Organizações</span>
                                <span className="sm:hidden">Orgs</span>
                            </div>
                        </button>
                    </div>

                    {/* Search and Filters */}
                    <div className="p-4 sm:p-6 md:p-8 border-b border-gray-50 space-y-3 sm:space-y-4">
                        <div className="flex flex-col gap-3 sm:gap-4">
                            {/* Search Input */}
                            <div className="w-full relative">
                                <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-gray-400 pointer-events-none" />
                                <input
                                    type="text"
                                    placeholder="Buscar por nome ou descrição..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-9 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-xs sm:text-sm"
                                />
                            </div>

                            {/* Filter Buttons */}
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                <button
                                    onClick={() => setFilterStatus("all")}
                                    className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-black text-xs uppercase tracking-wider transition-all ${filterStatus === "all"
                                        ? "bg-primary text-white shadow-lg shadow-primary/30"
                                        : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                                        }`}
                                >
                                    Todos
                                </button>
                                <button
                                    onClick={() => setFilterStatus("pending")}
                                    className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-black text-xs uppercase tracking-wider transition-all ${filterStatus === "pending"
                                        ? "bg-amber-500 text-white shadow-lg shadow-amber-500/30"
                                        : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                                        }`}
                                >
                                    Pendentes
                                </button>
                                <button
                                    onClick={() => setFilterStatus("verified")}
                                    className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-black text-xs uppercase tracking-wider transition-all ${filterStatus === "verified"
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
                    <div className="p-4 sm:p-6 md:p-8">
                        {activeTab === "products" && (
                            <div>
                                {isLoadingProducts ? (
                                    <div className="flex items-center justify-center py-8 sm:py-12">
                                        <Loader2 className="w-6 sm:w-8 h-6 sm:h-8 text-primary animate-spin" />
                                    </div>
                                ) : filteredProducts.length === 0 ? (
                                    <div className="text-center py-8 sm:py-12">
                                        <Package className="w-10 sm:w-12 h-10 sm:h-12 text-gray-300 mx-auto mb-3 sm:mb-4" />
                                        <p className="text-gray-500 font-medium text-sm">Nenhum produto encontrado</p>
                                    </div>
                                ) : (
                                    <div className="space-y-3 sm:space-y-4">
                                        {filteredProducts.map((product: ProductResponse) => (
                                            <div
                                                key={product.id}
                                                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 p-4 sm:p-6 border border-gray-100 rounded-xl sm:rounded-2xl hover:border-primary/20 hover:bg-gray-50/50 transition-all group"
                                            >
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                                                        <h3 className="font-black text-gray-900 text-sm sm:text-base break-words">{product.name}</h3>
                                                        <span
                                                            className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-tighter whitespace-nowrap ${product.verified
                                                                ? "bg-green-100 text-green-700"
                                                                : "bg-amber-100 text-amber-700"
                                                                }`}
                                                        >
                                                            {product.verified ? (
                                                                <>
                                                                    <CheckCircle2 className="w-2.5 sm:w-3 h-2.5 sm:h-3 flex-shrink-0" />
                                                                    <span className="hidden sm:inline">Verificado</span>
                                                                    <span className="sm:hidden">Ver.</span>
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <AlertCircle className="w-2.5 sm:w-3 h-2.5 sm:h-3 flex-shrink-0" />
                                                                    <span className="hidden sm:inline">Pendente</span>
                                                                    <span className="sm:hidden">Pend.</span>
                                                                </>
                                                            )}
                                                        </span>
                                                    </div>
                                                    <p className="text-xs sm:text-sm text-gray-500 line-clamp-2">
                                                        {product.description || "Sem descrição"}
                                                    </p>
                                                    <div className="flex flex-wrap gap-2 sm:gap-4 mt-2 sm:mt-3 text-[9px] sm:text-[11px] text-gray-400 font-bold uppercase tracking-wider">
                                                        <span>Preço: {product.price} Kz</span>
                                                        <span>Categoria: {product.category}</span>
                                                    </div>
                                                </div>

                                                <button
                                                    onClick={() => handleVerifyProduct(product.id, product.verified)}
                                                    disabled={verifyProductMutation.isPending}
                                                    className={`w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-black text-xs uppercase tracking-wider transition-all whitespace-nowrap flex items-center justify-center gap-2 ${product.verified
                                                        ? "bg-red-50 text-red-600 hover:bg-red-100"
                                                        : "bg-green-50 text-green-600 hover:bg-green-100"
                                                        } disabled:opacity-50 disabled:cursor-not-allowed`}
                                                >
                                                    {verifyProductMutation.isPending ? (
                                                        <Loader2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 animate-spin" />
                                                    ) : (
                                                        <>
                                                            <span className="hidden sm:inline">{product.verified ? "Desverificar" : "Verificar"}</span>
                                                            <span className="sm:hidden">{product.verified ? "Desver." : "Verif."}</span>
                                                        </>
                                                    )}
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {activeTab === "organizations" && (
                            <div>
                                {isLoadingOrgs ? (
                                    <div className="flex items-center justify-center py-8 sm:py-12">
                                        <Loader2 className="w-6 sm:w-8 h-6 sm:h-8 text-primary animate-spin" />
                                    </div>
                                ) : filteredOrganizations.length === 0 ? (
                                    <div className="text-center py-8 sm:py-12">
                                        <Building2 className="w-10 sm:w-12 h-10 sm:h-12 text-gray-300 mx-auto mb-3 sm:mb-4" />
                                        <p className="text-gray-500 font-medium text-sm">Nenhuma organização encontrada</p>
                                    </div>
                                ) : (
                                    <div className="space-y-3 sm:space-y-4">
                                        {filteredOrganizations.map((org: OrganizationData) => (
                                            <div
                                                key={org.id}
                                                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 p-4 sm:p-6 border border-gray-100 rounded-xl sm:rounded-2xl hover:border-primary/20 hover:bg-gray-50/50 transition-all group"
                                            >
                                                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 flex-1 min-w-0">
                                                    <img
                                                        src={org.logo || "https://avatar.iran.liara.run/public/33"}
                                                        alt={org.name}
                                                        className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-lg sm:rounded-xl object-cover bg-gray-100 ring-2 ring-gray-100 group-hover:ring-primary/20 transition-all flex-shrink-0"
                                                    />
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                                                            <h3 className="font-black text-gray-900 text-sm sm:text-base break-words">{org.name}</h3>
                                                            <span
                                                                className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-tighter whitespace-nowrap ${org.verified
                                                                    ? "bg-green-100 text-green-700"
                                                                    : "bg-amber-100 text-amber-700"
                                                                    }`}
                                                            >
                                                                {org.verified ? (
                                                                    <>
                                                                        <CheckCircle2 className="w-2.5 sm:w-3 h-2.5 sm:h-3 flex-shrink-0" />
                                                                        <span className="hidden sm:inline">Verificado</span>
                                                                        <span className="sm:hidden">Ver.</span>
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        <AlertCircle className="w-2.5 sm:w-3 h-2.5 sm:h-3 flex-shrink-0" />
                                                                        <span className="hidden sm:inline">Pendente</span>
                                                                        <span className="sm:hidden">Pend.</span>
                                                                    </>
                                                                )}
                                                            </span>
                                                        </div>
                                                        <p className="text-xs sm:text-sm text-gray-500 line-clamp-2">
                                                            {org.description || "Sem descrição"}
                                                        </p>
                                                        <div className="flex flex-wrap gap-2 sm:gap-4 mt-2 sm:mt-3 text-[9px] sm:text-[11px] text-gray-400 font-bold uppercase tracking-wider">
                                                            <span>Categoria: {org.category || "Geral"}</span>
                                                            <span>Produtos: {org._count?.products || 0}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <button
                                                    onClick={() => handleVerifyOrganization(org.id, org.verified)}
                                                    disabled={verifyOrganizationMutation.isPending}
                                                    className={`w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-black text-xs uppercase tracking-wider transition-all whitespace-nowrap flex items-center justify-center gap-2 ${org.verified
                                                        ? "bg-red-50 text-red-600 hover:bg-red-100"
                                                        : "bg-green-50 text-green-600 hover:bg-green-100"
                                                        } disabled:opacity-50 disabled:cursor-not-allowed`}
                                                >
                                                    {verifyOrganizationMutation.isPending ? (
                                                        <Loader2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 animate-spin" />
                                                    ) : (
                                                        <>
                                                            <span className="hidden sm:inline">{org.verified ? "Desverificar" : "Verificar"}</span>
                                                            <span className="sm:hidden">{org.verified ? "Desver." : "Verif."}</span>
                                                        </>
                                                    )}
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </ContainerAdmin>
    );
}

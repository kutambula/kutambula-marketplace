import { useState } from "react";
import ContainerOwner from "../../components/layout/Owner/Container";
import {
    Plus,
    Search,
    Filter,
    MoreVertical,
    Edit2,
    Trash2,
    Eye,
    AlertCircle
} from "lucide-react";
import Button from "../../components/common/Form/Button";

export default function ProductsOwner() {
    const [searchTerm, setSearchTerm] = useState("");

    const products = [
        {
            id: 1,
            name: "Café de Angola Premium",
            category: "Bebidas",
            price: "€15,90",
            stock: 45,
            status: "Ativo",
            image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=200&auto=format&fit=crop"
        },
        {
            id: 2,
            name: "Farinha de Mandioca 1kg",
            category: "Alimentos",
            price: "4,50",
            stock: 120,
            status: "Ativo",
            image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=200&auto=format&fit=crop"
        },
        {
            id: 3,
            name: "Azeite de Dendê 500ml",
            category: "Óleos",
            price: "8,20",
            stock: 0,
            status: "Sem Estoque",
            image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=200&auto=format&fit=crop"
        },
    ];

    return (
        <ContainerOwner>
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Meus Produtos</h1>
                        <p className="text-gray-500 text-sm mt-1">Gerencie seu catálogo de produtos e níveis de estoque.</p>
                    </div>
                    <Button
                        icon={<Plus className="w-4 h-4" />}
                        className="shadow-md"
                    >
                        Novo Produto
                    </Button>
                </div>

                {/* Filters & Search */}
                <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-4 items-center">
                    <div className="relative flex-1 w-full">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Buscar por nome, SKU ou categoria..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                        />
                    </div>
                    <div className="flex items-center gap-2 w-full md:w-auto">
                        <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-all">
                            <Filter className="w-4 h-4" />
                            Filtros
                        </button>
                        <select className="flex-1 md:flex-none px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-600 outline-none focus:border-primary transition-all cursor-pointer">
                            <option>Todos os Status</option>
                            <option>Ativos</option>
                            <option>Inativos</option>
                            <option>Sem Estoque</option>
                        </select>
                    </div>
                </div>

                {/* Products Table */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left whitespace-nowrap">
                            <thead className="bg-gray-50/50 text-gray-500 text-[10px] uppercase tracking-wider font-bold">
                                <tr>
                                    <th className="px-6 py-4">Produto</th>
                                    <th className="px-6 py-4">Categoria</th>
                                    <th className="px-6 py-4">Preço</th>
                                    <th className="px-6 py-4">Estoque</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4 text-right">Ações</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50 text-sm">
                                {products.map((product) => (
                                    <tr key={product.id} className="hover:bg-gray-50/50 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-12 h-12 rounded-lg object-cover shadow-sm bg-gray-100"
                                                />
                                                <div>
                                                    <p className="font-bold text-gray-900 group-hover:text-primary transition-colors">{product.name}</p>
                                                    <p className="text-[10px] text-gray-400 font-medium">SKU: KTB-{product.id}00{product.id}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 font-medium text-gray-600">{product.category}</td>
                                        <td className="px-6 py-4 font-bold text-gray-900">{product.price}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <span className={`font-bold ${product.stock === 0 ? "text-red-500" : "text-gray-700"}`}>
                                                    {product.stock}
                                                </span>
                                                {product.stock <= 5 && product.stock > 0 && (
                                                    <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2.5 py-1 text-[10px] font-bold rounded-full ${product.status === "Ativo"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-red-100 text-red-700"
                                                }`}>
                                                {product.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="Ver Detalhes">
                                                    <Eye className="w-4 h-4" />
                                                </button>
                                                <button className="p-2 text-gray-400 hover:text-primary hover:bg-orange-50 rounded-lg transition-all" title="Editar">
                                                    <Edit2 className="w-4 h-4" />
                                                </button>
                                                <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all" title="Excluir">
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                            <button className="p-2 text-gray-400 hover:text-gray-600 md:hidden">
                                                <MoreVertical className="w-5 h-5" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* Pagination Placeholder */}
                    <div className="p-4 bg-gray-50/50 border-t border-gray-50 flex items-center justify-between">
                        <p className="text-xs text-gray-500 font-medium">Mostrando 1-3 de 12 produtos</p>
                        <div className="flex gap-2">
                            <button className="px-3 py-1 bg-white border border-gray-200 rounded text-xs font-bold text-gray-400 cursor-not-allowed">Anterior</button>
                            <button className="px-3 py-1 bg-white border border-gray-200 rounded text-xs font-bold text-gray-600 hover:bg-gray-50 transition-colors">Próximo</button>
                        </div>
                    </div>
                </div>

                {/* Empty State Illustration Placeholder (if no products) */}
                {/* <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
                    <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Package className="w-10 h-10 text-gray-300" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Nenhum produto cadastrado</h3>
                    <p className="text-gray-500 text-sm max-w-xs mx-auto mt-2">Combine sua paixão por produtos africanos com nosso marketplace.</p>
                    <Button className="mt-6">Começar agora</Button>
                </div> */}
            </div>
        </ContainerOwner>
    );
}

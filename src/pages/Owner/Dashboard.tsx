import ContainerOwner from "../../components/layout/Owner/Container";
import {
    TrendingUp,
    ShoppingBag,
    Star,
    ArrowUpRight,
    ArrowDownRight,
    Package
} from "lucide-react";

export default function DashboardOwner() {
    const stats = [
        {
            label: "Vendas Totais",
            value: "€1.250,00",
            change: "+12.5%",
            positive: true,
            icon: TrendingUp,
            color: "text-green-600",
            bg: "bg-green-50"
        },
        {
            label: "Pedidos",
            value: "25",
            change: "+8.2%",
            positive: true,
            icon: ShoppingBag,
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        {
            label: "Avaliação Média",
            value: "4.8",
            change: "-0.2%",
            positive: false,
            icon: Star,
            color: "text-amber-600",
            bg: "bg-amber-50"
        },
        {
            label: "Produtos Ativos",
            value: "12",
            change: "0%",
            positive: true,
            icon: Package,
            color: "text-purple-600",
            bg: "bg-purple-50"
        },
    ];

    return (
        <ContainerOwner>
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 overflow-x-hidden">
                {/* Welcome Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                        <p className="text-gray-500 text-sm mt-1">Bem-vindo de volta! Aqui está o resumo da sua loja hoje.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm whitespace-nowrap">
                            Exportar Relatório
                        </button>
                        <button className="px-4 py-2 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-tertiary transition-colors shadow-md whitespace-nowrap">
                            Ver Vendas
                        </button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                                <div className="flex items-start justify-between mb-4">
                                    <div className={`p-3 rounded-xl ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform`}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${stat.positive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                                        }`}>
                                        {stat.change}
                                        {stat.positive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                                    <h3 className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</h3>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Recent Orders */}
                    <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-gray-50 flex items-center justify-between">
                            <h3 className="font-bold text-gray-900">Pedidos Recentes</h3>
                            <button className="text-sm font-bold text-primary hover:text-tertiary transition-colors">
                                Ver todos
                            </button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left whitespace-nowrap">
                                <thead className="bg-gray-50/50 text-gray-500 text-[10px] uppercase tracking-wider font-bold">
                                    <tr>
                                        <th className="px-6 py-4">ID Pedido</th>
                                        <th className="px-6 py-4">Cliente</th>
                                        <th className="px-6 py-4">Status</th>
                                        <th className="px-6 py-4">Total</th>
                                        <th className="px-6 py-4">Data</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50 text-sm">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="px-6 py-4 font-bold text-gray-900">#ORD-000{i}</td>
                                            <td className="px-6 py-4 text-gray-600 font-medium">Cliente Exemplo {i}</td>
                                            <td className="px-6 py-4">
                                                <span className="px-2.5 py-1 bg-amber-100 text-amber-700 text-[10px] font-bold rounded-full">Pendente</span>
                                            </td>
                                            <td className="px-6 py-4 font-bold text-gray-900">€45,90</td>
                                            <td className="px-6 py-4 text-gray-500">Hoje</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Quick Info / Tips */}
                    <div className="space-y-6">
                        <div className="bg-primary p-6 rounded-2xl text-white shadow-lg relative overflow-hidden group">
                            <div className="relative z-10">
                                <h3 className="font-bold text-lg mb-2">Cresça seu Negócio</h3>
                                <p className="text-white/80 text-sm mb-4 leading-relaxed">Adicione novos produtos e fotos de alta qualidade para atrair mais clientes.</p>
                                <button className="px-5 py-2.5 bg-white text-primary rounded-xl text-xs font-bold hover:bg-orange-50 transition-all active:scale-95 shadow-md">
                                    Adicionar Produto
                                </button>
                            </div>
                            <Package className="absolute -right-4 -bottom-4 w-32 h-32 text-white/10 group-hover:rotate-12 transition-transform duration-500" />
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="font-bold text-gray-900">Atividade</h3>
                                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            </div>
                            <div className="space-y-6 relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-gray-100">
                                {[
                                    { text: "Novo pedido recebido", time: "2 min atrás", color: "bg-green-500" },
                                    { text: "Sem estoque: Café de Angola", time: "1h atrás", color: "bg-red-500" },
                                    { text: "Nova avaliação recebida", time: "3h atrás", color: "bg-blue-500" },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 relative">
                                        <div className={`w-3.5 h-3.5 ${item.color} rounded-full border-4 border-white shadow-sm shrink-0 z-10`} />
                                        <div className="-mt-1">
                                            <p className="text-xs font-bold text-gray-800">{item.text}</p>
                                            <p className="text-[10px] text-gray-400 font-medium">{item.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ContainerOwner>
    );
}
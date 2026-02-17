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
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {/* Welcome Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">Dashboard</h1>
                        <p className="text-gray-500 text-xs md:text-sm mt-1 font-medium italic">Bem-vindo de volta! Aqui está o resumo da sua loja.</p>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3">
                        <button className="flex-1 sm:flex-none px-4 md:px-5 py-2 md:py-2.5 bg-white border border-gray-200 rounded-xl md:rounded-2xl text-[10px] md:text-xs font-bold text-gray-600 hover:bg-gray-50 transition-all shadow-sm active:scale-95 uppercase tracking-wider">
                            Relatórios
                        </button>
                        <button className="flex-1 sm:flex-none px-4 md:px-5 py-2 md:py-2.5 bg-primary text-white rounded-xl md:rounded-2xl text-[10px] md:text-xs font-bold hover:bg-tertiary transition-all shadow-lg active:scale-95 shadow-primary/20 uppercase tracking-wider">
                            Vendas
                        </button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div key={index} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group overflow-hidden relative">
                                <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full opacity-[0.03] transition-transform group-hover:scale-150 duration-700 ${stat.bg}`} />
                                <div className="flex items-start justify-between mb-4 relative z-10">
                                    <div className={`p-4 rounded-2xl ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform shadow-inner`}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <div className={`flex items-center gap-1.5 text-[10px] font-black px-2.5 py-1.5 rounded-full uppercase tracking-tighter ${stat.positive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                                        }`}>
                                        {stat.change}
                                        {stat.positive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                                    </div>
                                </div>
                                <div className="relative z-10">
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.15em]">{stat.label}</p>
                                    <h3 className="text-3xl font-black text-gray-900 mt-2 tracking-tighter">{stat.value}</h3>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Recent Orders */}
                    <div className="lg:col-span-2 bg-white rounded-4xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
                        <div className="p-8 border-b border-gray-50 flex items-center justify-between">
                            <h3 className="font-black text-xl text-gray-900 tracking-tight">Pedidos Recentes</h3>
                            <button className="text-xs font-bold text-primary hover:text-tertiary transition-colors uppercase tracking-widest">
                                Ver todos
                            </button>
                        </div>
                        <div className="overflow-x-auto custom-scrollbar">
                            <table className="w-full text-left whitespace-nowrap">
                                <thead className="bg-gray-50/50 text-gray-400 text-[10px] uppercase tracking-[0.15em] font-black">
                                    <tr>
                                        <th className="px-8 py-5">ID Pedido</th>
                                        <th className="px-8 py-5">Cliente</th>
                                        <th className="px-8 py-5">Status</th>
                                        <th className="px-8 py-5">Total</th>
                                        <th className="px-8 py-5">Data</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50 text-sm">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <tr key={i} className="hover:bg-primary/5 transition-colors group">
                                            <td className="px-8 py-5 font-black text-gray-900">#ORD-000{i}</td>
                                            <td className="px-8 py-5 text-gray-600 font-bold group-hover:text-primary transition-colors">Cliente Exemplo {i}</td>
                                            <td className="px-8 py-5">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                                                    <span className="text-amber-700 text-[11px] font-black uppercase tracking-tight">Pendente</span>
                                                </div>
                                            </td>
                                            <td className="px-8 py-5 font-black text-gray-900">€45,90</td>
                                            <td className="px-8 py-5 text-gray-400 font-bold">Hoje</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Quick Info / Tips */}
                    <div className="space-y-8">
                        <div className="bg-linear-to-br from-primary to-secondary p-8 rounded-4xl text-white shadow-2xl relative overflow-hidden group">
                            <div className="relative z-10">
                                <TrendingUp className="w-10 h-10 mb-6 text-white/50" />
                                <h3 className="font-black text-2xl mb-2 tracking-tighter">Cresça seu Negócio</h3>
                                <p className="text-white/80 text-sm mb-6 leading-relaxed font-medium">Adicione novos produtos e fotos de alta qualidade para atrair mais clientes e aumentar vendas.</p>
                                <button className="px-6 py-3 bg-white text-primary rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-orange-50 transition-all active:scale-95 shadow-xl shadow-black/10">
                                    Adicionar Produto
                                </button>
                            </div>
                            <Package className="absolute -right-8 -bottom-8 w-48 h-48 text-white/10 group-hover:rotate-12 transition-transform duration-700 blur-[2px]" />
                        </div>

                        <div className="bg-white p-8 rounded-4xl border border-gray-100 shadow-sm relative overflow-hidden">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="font-black text-lg text-gray-900 tracking-tight">Atividade Recente</h3>
                                <div className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(255,102,0,0.5)]" />
                            </div>
                            <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-px before:bg-gray-100">
                                {[
                                    { text: "Novo pedido recebido", time: "2 min atrás", color: "bg-green-500" },
                                    { text: "Sem estoque: Café de Angola", time: "1h atrás", color: "bg-red-500" },
                                    { text: "Nova avaliação recebida", time: "3h atrás", color: "bg-blue-500" },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 relative">
                                        <div className={`w-[22px] h-[22px] ${item.color} rounded-full border-[6px] border-white shadow-lg shadow-gray-200 shrink-0 z-10`} />
                                        <div className="-mt-1">
                                            <p className="text-[13px] font-black text-gray-900 tracking-tight">{item.text}</p>
                                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">{item.time}</p>
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
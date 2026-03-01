import ContainerAdmin from "../../components/layout/Admin/Container";
import {
    TrendingUp,
    Building2,
    Users,
    Package,
    AlertCircle,
    CheckCircle2,
    MoreVertical,
    Calendar,
} from "lucide-react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
} from "recharts";

const dataPerformance = [
    { name: "Jan", sales: 4000, users: 2400 },
    { name: "Fev", sales: 3000, users: 1398 },
    { name: "Mar", sales: 2000, users: 9800 },
    { name: "Abr", sales: 2780, users: 3908 },
    { name: "Mai", sales: 1890, users: 4800 },
    { name: "Jun", sales: 2390, users: 3800 },
    { name: "Jul", sales: 3490, users: 4300 },
];

const dataCategories = [
    { name: "Alimentos", value: 400, color: "#F28F38" },
    { name: "Artesanato", value: 300, color: "#8C52FF" },
    { name: "Moda", value: 300, color: "#00C49F" },
    { name: "Serviços", value: 200, color: "#FFBB28" },
];

export default function DashboardAdmin() {
    const stats = [
        {
            label: "Total de Produtos",
            value: "1,245",
            icon: Package,
            color: "text-primary",
            bg: "bg-primary/10",
            gradient: "from-primary/20"
        },
        {
            label: "Organizações",
            value: "89",
            icon: Building2,
            color: "text-tertiary",
            bg: "bg-tertiary/10",
            gradient: "from-tertiary/20"
        },
        {
            label: "Usuários Ativos",
            value: "2,340",
            icon: Users,
            color: "text-green-600",
            bg: "bg-green-50",
            gradient: "from-green-100"
        },
        {
            label: "Vendas do Mês",
            value: "45.2K Kz",
            icon: TrendingUp,
            color: "text-amber-600",
            bg: "bg-amber-50",
            gradient: "from-amber-100"
        },
    ];

    const recentVerifications = [
        { type: "Produto", name: "Café de Angola Premium", status: "pending", time: "5 min atrás", id: "prod-001" },
        { type: "Organização", name: "Loja Digital Angola", status: "pending", time: "15 min atrás", id: "org-001" },
        { type: "Produto", name: "Artesanato Tradicional", status: "verified", time: "1h atrás", id: "prod-002" },
        { type: "Organização", name: "Mercado Local Luanda", status: "verified", time: "2h atrás", id: "org-002" },
    ];

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
                                Bem-vindo, Emanuel Malungo!
                            </h1>
                        </div>
                        <p className="text-gray-500 text-sm font-medium max-w-md leading-relaxed">
                            Monitorização centralizada e inteligente da plataforma <span className="text-primary font-bold">Kutambula</span>. Crescimento em tempo real.
                        </p>
                    </div>

                    <div className="relative z-10 flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-2.5 px-5 py-3 bg-white/80 rounded-2xl border border-gray-100 shadow-xs hover:shadow-md transition-all group/date">
                            <Calendar className="w-4 h-4 text-primary group-hover/date:scale-110 transition-transform" />
                            <span className="text-[11px] font-black text-gray-700 uppercase tracking-widest">{new Date().toLocaleDateString('pt-PT', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div key={index} className="bg-white p-6 rounded-[2.5rem] border border-gray-50 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group overflow-hidden relative">
                                <div className={`absolute inset-0 bg-linear-to-br ${stat.gradient} to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                <div className="flex items-start justify-between mb-6 relative z-10">
                                    <div className={`p-4 rounded-3xl ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform duration-500 shadow-inner`}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                </div>

                                <div className="relative z-10">
                                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
                                    <div className="flex items-end gap-2">
                                        <h3 className="text-3xl font-black text-gray-900 tracking-tighter">{stat.value}</h3>
                                    </div>
                                </div>

                                {/* Micro graph decoration */}
                                <div className="absolute right-0 bottom-0 left-0 h-1.5 bg-gray-50 group-hover:bg-transparent transition-colors">
                                    <div className={`h-full ${stat.bg.replace('/10', '')} opacity-20 w-3/4`} />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Main Charts Row */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Performance Area Chart */}
                    <div className="lg:col-span-2 bg-white p-8 rounded-[3rem] border border-gray-50 shadow-sm">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h3 className="text-xl font-black text-gray-900 tracking-tight">Crescimento da Plataforma</h3>
                                <p className="text-xs text-gray-500 font-medium">Comparativo de vendas e usuários ativos</p>
                            </div>
                            <select className="bg-gray-50 border-none rounded-xl text-xs font-bold px-4 py-2 focus:ring-2 focus:ring-primary/20 outline-hidden">
                                <option>Últimos 7 meses</option>
                                <option>Último ano</option>
                            </select>
                        </div>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={dataPerformance} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#F28F38" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#F28F38" stopOpacity={0} />
                                        </linearGradient>
                                        <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#8C52FF" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#8C52FF" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F0F0F0" />
                                    <XAxis
                                        dataKey="name"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#9CA3AF', fontSize: 12, fontWeight: 700 }}
                                        dy={10}
                                    />
                                    <YAxis
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#9CA3AF', fontSize: 12, fontWeight: 700 }}
                                    />
                                    <Tooltip
                                        contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', padding: '16px' }}
                                    />
                                    <Area type="monotone" dataKey="sales" stroke="#F28F38" strokeWidth={4} fillOpacity={1} fill="url(#colorSales)" />
                                    <Area type="monotone" dataKey="users" stroke="#8C52FF" strokeWidth={4} fillOpacity={1} fill="url(#colorUsers)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Categories Distribution */}
                    <div className="bg-white p-8 rounded-[3rem] border border-gray-50 shadow-sm flex flex-col">
                        <h3 className="text-xl font-black text-gray-900 tracking-tight mb-8">Distribuição por Categoria</h3>
                        <div className="h-[250px] relative">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={dataCategories}
                                        innerRadius={70}
                                        outerRadius={90}
                                        paddingAngle={8}
                                        dataKey="value"
                                        stroke="none"
                                    >
                                        {dataCategories.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                                <span className="text-3xl font-black text-gray-900 tracking-tighter">1.2k</span>
                                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Total</span>
                            </div>
                        </div>
                        <div className="mt-8 space-y-4">
                            {dataCategories.map((item, i) => (
                                <div key={i} className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                                        <span className="text-xs font-bold text-gray-600">{item.name}</span>
                                    </div>
                                    <span className="text-xs font-black text-gray-900">{((item.value / 1200) * 100).toFixed(0)}%</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Recent Verifications Table */}
                    <div className="lg:col-span-2 bg-white rounded-[3rem] border border-gray-50 shadow-sm overflow-hidden flex flex-col">
                        <div className="p-8 border-b border-gray-50 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <h3 className="font-black text-xl text-gray-900 tracking-tight">Verificações Recentes</h3>
                                <span className="px-3 py-1 bg-amber-100 text-amber-700 text-[10px] font-black rounded-full uppercase tracking-tighter">
                                    {recentVerifications.filter(v => v.status === "pending").length} Pendentes
                                </span>
                            </div>
                            <button className="text-[10px] font-black text-primary hover:text-tertiary transition-colors uppercase tracking-widest">
                                Ver todos
                            </button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left whitespace-nowrap">
                                <thead className="bg-gray-50/50 text-gray-400 text-[10px] uppercase tracking-widest font-black">
                                    <tr>
                                        <th className="px-8 py-5">Tipo</th>
                                        <th className="px-8 py-5">Nome</th>
                                        <th className="px-8 py-5">Status</th>
                                        <th className="px-8 py-5 text-right">Ação</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50 text-sm font-medium">
                                    {recentVerifications.map((item) => (
                                        <tr key={item.id} className="hover:bg-gray-50/50 transition-colors group">
                                            <td className="px-8 py-5">
                                                <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-tighter ${item.type === "Produto"
                                                    ? "bg-primary/10 text-primary"
                                                    : "bg-tertiary/10 text-tertiary"
                                                    }`}>
                                                    {item.type === "Produto" ? <Package className="w-3 h-3" /> : <Building2 className="w-3 h-3" />}
                                                    {item.type}
                                                </span>
                                            </td>
                                            <td className="px-8 py-5 text-gray-900 font-bold">{item.name}</td>
                                            <td className="px-8 py-5">
                                                {item.status === "pending" ? (
                                                    <span className="flex items-center gap-2 text-amber-600 text-[11px] font-black uppercase tracking-tighter">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                                                        Pendente
                                                    </span>
                                                ) : (
                                                    <span className="flex items-center gap-2 text-green-600 text-[11px] font-black uppercase tracking-tighter">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                                        Verificado
                                                    </span>
                                                )}
                                            </td>
                                            <td className="px-8 py-5 text-right">
                                                <button className="p-2 hover:bg-white rounded-xl transition-colors">
                                                    <MoreVertical className="w-4 h-4 text-gray-400" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Activity Feed */}
                    <div className="bg-white p-8 rounded-[3rem] border border-gray-50 shadow-sm relative overflow-hidden">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="font-black text-xl text-gray-900 tracking-tight">Atividade Recente</h3>
                            <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                        </div>
                        <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-linear-to-b before:from-primary/20 before:via-tertiary/20 before:to-transparent">
                            {[
                                { text: "Nova organização cadastrada", time: "10 min atrás", icon: Users, color: "bg-blue-500" },
                                { text: "Produto reportado por usuário", time: "30 min atrás", icon: AlertCircle, color: "bg-red-500" },
                                { text: "Organização verificada", time: "1h atrás", icon: CheckCircle2, color: "bg-green-500" },
                                { text: "Novo produto adicionado", time: "2h atrás", icon: Package, color: "bg-primary" },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 relative group cursor-default">
                                    <div className={`w-[24px] h-[24px] ${item.color} rounded-full border-[5px] border-white shadow-[0_0_15px_-3px_rgba(0,0,0,0.1)] shrink-0 z-10 group-hover:scale-125 transition-transform duration-300`} />
                                    <div className="-mt-0.5">
                                        <p className="text-sm font-black text-gray-900 tracking-tight group-hover:text-primary transition-colors">{item.text}</p>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">{item.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-8 py-3 bg-gray-50 hover:bg-gray-100 rounded-2xl text-[10px] font-black text-gray-500 uppercase tracking-widest transition-all">
                            Ver toda atividade
                        </button>
                    </div>
                </div>
            </div>
        </ContainerAdmin>
    );
}

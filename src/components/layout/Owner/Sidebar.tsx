import {
    ChevronRight,
    Store,
    LayoutDashboard,
    Package,
    Settings,
    LogOut,
    Home,
    ChevronLeft
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { authClient } from "../../../lib/auth-client";

interface SidebarOwnerProps {
    isOpen: boolean;
    onToggle: () => void;
}

export default function SidebarOwner({ isOpen, onToggle }: SidebarOwnerProps) {
    const location = useLocation();

    const menuItems = [
        { icon: LayoutDashboard, label: "Dashboard", path: "/owner/dashboard" },
        { icon: Package, label: "Meus Produtos", path: "/owner/dashboard/products" },
        { icon: Settings, label: "Configurações", path: "/owner/dashboard/setting" },
    ];

    const handleLogout = async () => {
        await authClient.signOut();
        window.location.href = "/login";
    };

    return (
        <aside
            className={`bg-white border-r border-gray-200 transition-all duration-300 flex flex-col z-50 sticky top-0 h-screen ${isOpen ? "w-64" : "w-20"
                }`}
        >
            <div className="p-6 flex items-center gap-3 border-b border-gray-100">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shrink-0 shadow-sm shadow-primary/20">
                    <Store className="text-white w-6 h-6" />
                </div>
                {isOpen && (
                    <div className="overflow-hidden whitespace-nowrap animate-in fade-in slide-in-from-left-2 duration-300">
                        <h2 className="font-bold text-gray-900 truncate">Kutambula</h2>
                        <p className="text-xs text-primary font-semibold">Painel Business</p>
                    </div>
                )}
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-2 overflow-y-auto custom-scrollbar">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;
                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center gap-3 p-3 rounded-xl transition-all group ${isActive
                                    ? "bg-primary/10 text-primary shadow-sm"
                                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                                }`}
                        >
                            <Icon className={`w-5 h-5 shrink-0 transition-transform ${isActive ? "" : "group-hover:scale-110"}`} />
                            {isOpen && (
                                <span className="font-semibold text-sm animate-in fade-in slide-in-from-left-2 duration-300">
                                    {item.label}
                                </span>
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* Sidebar Footer */}
            <div className="p-4 border-t border-gray-100 space-y-2">
                <Link
                    to="/"
                    className="flex items-center gap-3 p-3 rounded-xl text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-all group"
                >
                    <Home className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform" />
                    {isOpen && <span className="font-semibold text-sm">Voltar à Loja</span>}
                </Link>
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 p-3 rounded-xl text-red-500 hover:bg-red-50 transition-all group"
                >
                    <LogOut className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform" />
                    {isOpen && <span className="font-semibold text-sm font-bold">Sair</span>}
                </button>
            </div>

            {/* Collapse Toggle */}
            <button
                onClick={onToggle}
                className="absolute -right-3 top-20 bg-white border border-gray-200 rounded-full p-1 shadow-md hover:bg-gray-50 z-[60] text-gray-400 hover:text-primary transition-colors"
                aria-label={isOpen ? "Fechar sidebar" : "Abrir sidebar"}
            >
                {isOpen ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>
        </aside>
    );
}
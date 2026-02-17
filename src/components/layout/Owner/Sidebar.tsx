import {
    LayoutDashboard,
    Package,
    Settings,
    LogOut,
    Home,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { authClient } from "../../../lib/auth-client";

interface SidebarOwnerProps {
    isOpen: boolean;
}

export default function SidebarOwner({ isOpen }: SidebarOwnerProps) {
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
            className={`bg-white transition-all duration-300 flex flex-col z-50 my-6 ml-4 rounded-3xl border border-gray-100 shadow-sm sticky top-6 h-fit max-h-[calc(100vh-3rem)] ${isOpen ? "w-72" : "w-20"
                }`}
        >
            {/* Branding - Hidden when closed since Header has it */}
            <div className={`p-6 border-b border-gray-50 ${!isOpen && "hidden"}`}>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                    Menu de Gestão
                </p>
            </div>

            {/* Navigation Section */}
            <div className="flex-1 px-4 space-y-2 pt-4">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;
                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center gap-4 p-4 rounded-2xl transition-all group ${isActive
                                ? "bg-primary text-white shadow-lg shadow-primary/20"
                                : "text-gray-500 hover:bg-gray-50 hover:text-primary"
                                }`}
                        >
                            <Icon className={`w-5 h-5 shrink-0 transition-transform ${isActive ? "" : "group-hover:scale-110"}`} />
                            {isOpen && (
                                <span className="font-bold text-sm tracking-tight transition-opacity duration-300">
                                    {item.label}
                                </span>
                            )}
                        </Link>
                    );
                })}
            </div>

            {/* Sidebar Footer Actions */}
            <div className="p-4 border-t border-gray-50 space-y-2">
                <Link
                    to="/"
                    className="flex items-center gap-4 p-4 rounded-2xl text-gray-500 hover:bg-gray-50 hover:text-secondary transition-all group"
                >
                    <Home className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform" />
                    {isOpen && <span className="font-bold text-sm tracking-tight">Vê o Site</span>}
                </Link>
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-4 p-4 rounded-2xl text-red-500 hover:bg-red-50 transition-all group"
                >
                    <LogOut className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform" />
                    {isOpen && <span className="font-bold text-sm tracking-tight whitespace-nowrap">Sair da Conta</span>}
                </button>
            </div>
        </aside>
    );
}
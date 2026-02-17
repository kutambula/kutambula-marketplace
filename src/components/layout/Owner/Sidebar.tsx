import {
    LayoutDashboard,
    Package,
    Settings,
    LogOut,
    Home,
    X,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { authClient } from "../../../lib/auth-client";

interface SidebarOwnerProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SidebarOwner({ isOpen, onClose }: SidebarOwnerProps) {
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
            className={`bg-white transition-all duration-300 flex flex-col z-40 rounded-3xl border border-gray-100 shadow-sm 
                fixed inset-y-6 left-4 lg:sticky lg:top-6 h-[calc(100vh-3rem)] lg:h-fit lg:max-h-[calc(100vh-3rem)] 
                ${isOpen ? "translate-x-0 w-64" : "-translate-x-[calc(100%+2rem)] lg:translate-x-0 lg:w-20"}
                lg:my-6 lg:ml-4 overflow-hidden
            `}
        >
            {/* Mobile Close Button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-primary lg:hidden"
            >
                <X className="w-5 h-5" />
            </button>

            {/* Branding */}
            <div className={`p-6 border-b border-gray-50 ${!isOpen && "hidden lg:block"}`}>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] truncate">
                    {isOpen ? "Menu de Gestão" : "Menu"}
                </p>
            </div>

            {/* Navigation Section */}
            <div className="flex-1 px-4 space-y-2 pt-4 overflow-y-auto custom-scrollbar">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;
                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => window.innerWidth < 1024 && onClose()}
                            className={`flex items-center p-4 rounded-2xl transition-all group ${isOpen ? "gap-4 justify-start" : "justify-center"} ${isActive
                                ? "bg-primary text-white shadow-lg shadow-primary/20"
                                : "text-gray-500 hover:bg-gray-50 hover:text-primary"
                                }`}
                        >
                            <Icon className={`w-5 h-5 shrink-0 transition-transform ${isActive ? "" : "group-hover:scale-110"}`} />
                            <span className={`font-bold text-sm tracking-tight transition-all duration-300 ${isOpen ? "opacity-100 w-auto" : "opacity-0 w-0 overflow-hidden"}`}>
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </div>

            {/* Sidebar Footer   */}
            <div className="p-4 border-t border-gray-50 space-y-1">
                <Link
                    to="/"
                    className={`flex items-center p-4 rounded-2xl text-gray-500 hover:bg-gray-50 hover:text-secondary transition-all group ${isOpen ? "gap-4 justify-start" : "justify-center"}`}
                >
                    <Home className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className={`font-bold text-sm tracking-tight transition-all duration-300 ${isOpen ? "opacity-100 w-auto" : "opacity-0 w-0 overflow-hidden"}`}>Vê o Site</span>
                </Link>
                <button
                    onClick={handleLogout}
                    className={`w-full flex items-center p-4 rounded-2xl text-red-500 hover:bg-red-50 transition-all group ${isOpen ? "gap-4 justify-start" : "justify-center"}`}
                >
                    <LogOut className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className={`font-bold text-sm tracking-tight whitespace-nowrap transition-all duration-300 ${isOpen ? "opacity-100 w-auto" : "opacity-0 w-0 overflow-hidden"}`}>Sair</span>
                </button>
            </div>
        </aside>
    );
}
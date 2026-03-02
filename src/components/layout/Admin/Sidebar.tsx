import {
    LayoutDashboard,
    Package,
    Building2,
    Users,
    Settings,
    LogOut,
    Home,
    X,
    ShieldCheck,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authClient } from "../../../lib/auth-client";
import icon4 from "../../../assets/images/icon4.png";

interface SidebarAdminProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SidebarAdmin({ isOpen, onClose }: SidebarAdminProps) {
    const location = useLocation();
    const navigate = useNavigate();
    const { data: session } = authClient.useSession();

    const menuItems = [
        { icon: LayoutDashboard, label: "Dashboard", path: "/admin/dashboard" },
        { icon: Package, label: "Produtos", path: "/admin/dashboard/products" },
        { icon: Building2, label: "Organizações", path: "/admin/dashboard/organizations" },
        { icon: Users, label: "Usuários", path: "/admin/dashboard/users" },
        { icon: ShieldCheck, label: "Verificações", path: "/admin/dashboard/verifications" },
        { icon: Settings, label: "Configurações", path: "/admin/dashboard/settings" },
    ];

    const handleLogout = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    navigate("/login");
                },
            },
        });
    };

    return (
        <aside
            className={`bg-quaternary transition-all duration-300 flex flex-col z-40
                fixed inset-y-0 left-0 lg:static h-screen
                ${isOpen ? "translate-x-0 w-64" : "-translate-x-full lg:translate-x-0 lg:w-20"}
            `}
        >
            {/* Mobile Close Button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-white/60 hover:text-primary lg:hidden"
            >
                <X className="w-5 h-5" />
            </button>

            {/* Branding - Logo */}
            <div className="p-6 border-b border-tertiary/20 bg-quaternary flex items-center justify-center">
                <Link to="/" className={`hover:scale-105 transition-transform duration-200 ${!isOpen && "hidden lg:hidden"}`}>
                    <img
                        src={icon4}
                        alt="Kutambula Admin"
                        className="h-6 w-auto object-contain"
                    />
                </Link>
            </div>

            {/* Admin Label */}
            <div className={`px-6 pt-4 pb-2 ${!isOpen && "hidden lg:block lg:px-3"}`}>
                <p className={`text-[10px] font-bold text-white/50 uppercase tracking-[0.2em] ${!isOpen && "lg:text-center"}`}>
                    {isOpen ? "Painel Admin" : "ADM"}
                </p>
            </div>

            {/* Navigation Section */}
            <div className="flex-1 bg-quaternary px-4 space-y-1 pt-2 pb-4 overflow-y-auto custom-scrollbar">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;
                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => window.innerWidth < 1024 && onClose()}
                            className={`flex items-center p-3 rounded-xl transition-all group ${isOpen ? "gap-3 justify-start" : "justify-center"} ${isActive
                                ? "bg-primary text-white shadow-lg shadow-primary/20"
                                : "text-white/70 hover:bg-white/10 hover:text-white"
                                }`}
                        >
                            <Icon className={`w-5 h-5 shrink-0 transition-transform ${isActive ? "text-white" : "text-white/70 group-hover:text-white group-hover:scale-110"}`} />
                            <span className={`font-bold text-sm tracking-tight transition-all duration-300 ${isOpen ? "opacity-100 w-auto" : "opacity-0 w-0 overflow-hidden lg:hidden"}`}>
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </div>

            {/* Sidebar Footer */}
            <div className="p-4 bg-quaternary border-t border-white/10 space-y-1">
                {/* User Profile Summary (Desktop Sidebar collapsed or expanded) */}
                <div className={`mb-4 overflow-hidden transition-all duration-300 ${isOpen ? "px-2" : "flex justify-center"}`}>
                    <div className={`flex items-center gap-3 ${!isOpen && "justify-center"}`}>
                        <img
                            src={session?.user?.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCzxivJXCZk0Kk8HsHujTO3Olx0ngytPrWw&s"}
                            alt={session?.user?.name}
                            className="w-8 h-8 rounded-lg object-cover ring-2 ring-white/10"
                        />
                        {isOpen && (
                            <div className="min-w-0">
                                <p className="text-xs font-bold text-white truncate">{session?.user?.name || "Admin"}</p>
                                <p className="text-[10px] text-white/50 truncate font-medium">Administrador</p>
                            </div>
                        )}
                    </div>
                </div>

                <Link
                    to="/"
                    className={`flex items-center p-3 rounded-xl text-white/70 hover:bg-white/10 hover:text-white transition-all group ${isOpen ? "gap-3 justify-start" : "justify-center"}`}
                >
                    <Home className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className={`font-bold text-sm tracking-tight transition-all duration-300 ${isOpen ? "opacity-100 w-auto" : "opacity-0 w-0 overflow-hidden lg:hidden"}`}>Vê o Site</span>
                </Link>
                <button
                    onClick={handleLogout}
                    className={`w-full flex items-center p-3 rounded-xl text-primary hover:bg-white/10 transition-all group ${isOpen ? "gap-3 justify-start" : "justify-center"}`}
                >
                    <LogOut className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className={`font-bold text-sm tracking-tight whitespace-nowrap transition-all duration-300 ${isOpen ? "opacity-100 w-auto" : "opacity-0 w-0 overflow-hidden lg:hidden"}`}>Sair</span>
                </button>
            </div>
        </aside>
    );
}


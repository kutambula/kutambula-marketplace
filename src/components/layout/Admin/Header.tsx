import { Bell, Menu } from "lucide-react";
import { authClient } from "../../../lib/auth-client";
import { Link } from "react-router-dom";

interface HeaderAdminProps {
    onToggleSidebar: () => void;
    isSidebarOpen: boolean;
}

export default function HeaderAdmin({ onToggleSidebar }: HeaderAdminProps) {
    const { data: session } = authClient.useSession();

    return (
        <header className="bg-white sticky top-0 z-20 h-20 flex items-center shadow-lg px-4 md:px-8 border-b border-tertiary/20">
            <div className="flex items-center justify-between w-full gap-4 md:gap-8">
                {/* Logo & Toggle Section */}
                <div className="flex items-center gap-2 md:gap-4 shrink-0">
                    <button
                        onClick={onToggleSidebar}
                        className="p-2 text-gray-700 hover:bg-gray-100 rounded-xl transition-all"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-1 md:gap-4 shrink-0">
                    <button className="relative p-2 text-gray-700 hover:text-primary hover:bg-gray-100 rounded-full transition-all">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-primary rounded-full border-2 border-white"></span>
                    </button>

                    <div className="h-6 md:h-8 w-px bg-gray-200 mx-1"></div>

                    {/* User Profile */}
                    <div className="flex items-center gap-2 md:gap-3 pl-1 md:pl-2">
                        <div className="text-right hidden xl:block">
                            <p className="text-sm font-bold text-gray-900 leading-tight truncate max-w-[150px]">{session?.user?.name || "Administrador"}</p>
                            <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider">Dashboard Admin</p>
                        </div>
                        <Link to="/admin/dashboard/settings" className="group relative">
                            <div className="absolute -inset-1 bg-primary/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <img
                                src={session?.user?.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCzxivJXCZk0Kk8HsHujTO3Olx0ngytPrWw&s"}
                                alt="Admin"
                                className="relative w-9 h-9 md:w-10 md:h-10 rounded-xl object-cover ring-2 ring-gray-200 group-hover:ring-primary transition-all shadow-xl"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

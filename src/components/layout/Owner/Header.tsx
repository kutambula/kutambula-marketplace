import { Search, Bell } from "lucide-react";
import { authClient } from "../../../lib/auth-client";

export default function HeaderOwner() {
    const { data: session } = authClient.useSession();

    return (
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-8 shrink-0 sticky top-0 z-40">
            <div className="flex items-center gap-4 flex-1">
                <div className="relative max-w-md w-full group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                    <input
                        type="text"
                        placeholder="Buscar pedidos, produtos..."
                        className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                    />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button className="relative p-2 text-gray-400 hover:text-primary transition-all hover:bg-gray-50 rounded-lg">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>

                <div className="h-8 w-px bg-gray-100 mx-2"></div>

                <div className="flex items-center gap-3">
                    <div className="text-right hidden sm:block">
                        <p className="text-xs font-bold text-gray-900">{session?.user?.name || "Usuário"}</p>
                        <p className="text-[10px] text-gray-500 font-medium">Administrador da Loja</p>
                    </div>
                    <img
                        src={session?.user?.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCzxivJXCZk0Kk8HsHujTO3Olx0ngytPrWw&s"}
                        alt="User"
                        className="w-9 h-9 rounded-lg object-cover ring-4 ring-gray-50"
                    />
                </div>
            </div>
        </header>
    );
}
import { Search, Bell } from "lucide-react";
import { authClient } from "../../../lib/auth-client";
import icon4 from "../../../assets/images/icon4.png";
import { Link } from "react-router-dom";

export default function HeaderOwner() {
    const { data: session } = authClient.useSession();

    return (
        <header className="bg-primary sticky top-0 z-40 h-20 flex items-center shadow-lg px-4 md:px-8 border-b border-white/10">
            <div className="container mx-auto flex items-center justify-between w-full gap-4 md:gap-8">
                {/* Logo Section */}
                <div className="flex items-center gap-4 shrink-0">
                    <Link to="/" className="hover:scale-105 transition-transform duration-200">
                        <img
                            src={icon4}
                            alt="Kutambula"
                            className="h-10 md:h-12 w-32 md:w-46 object-contain"
                        />
                    </Link>
                </div>

                {/* Search Bar - Consistent with Main Header */}
                <div className='flex-1 max-w-2xl hidden md:block'>
                    <div className='relative group'>
                        <input
                            type="search"
                            placeholder="Buscar pedidos, produtos, clientes..."
                            className='w-full pl-11 pr-24 py-2.5 border-2 border-white/20 rounded-full focus:outline-none focus:border-white focus:ring-4 focus:ring-white/10 text-sm bg-white/10 text-white placeholder:text-white/60 transition-all'
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 group-focus-within:text-white transition-colors" />
                        <button
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-primary px-5 py-1.5 rounded-full text-xs font-bold transition-all active:scale-95 hover:shadow-lg"
                        >
                            Buscar
                        </button>
                    </div>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-2 md:gap-4 shrink-0">
                    <button className="relative p-2.5 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-primary"></span>
                    </button>

                    <div className="h-8 w-px bg-white/10 mx-1 hidden sm:block"></div>

                    {/* User Profile */}
                    <div className="flex items-center gap-3 pl-2">
                        <div className="text-right hidden lg:block">
                            <p className="text-sm font-bold text-white leading-tight">{session?.user?.name || "Usuário"}</p>
                            <p className="text-[10px] text-white/60 font-semibold uppercase tracking-wider">Dashboard Business</p>
                        </div>
                        <Link to="/owner/dashboard/setting" className="group relative">
                            <div className="absolute -inset-1 bg-white/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <img
                                src={session?.user?.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCzxivJXCZk0Kk8HsHujTO3Olx0ngytPrWw&s"}
                                alt="User"
                                className="relative w-10 h-10 rounded-xl object-cover ring-2 ring-white/20 group-hover:ring-white transition-all shadow-xl"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
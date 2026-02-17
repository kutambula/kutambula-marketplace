import { Search, Bell, Menu, ChevronDown, Building2, Plus } from "lucide-react";
import { authClient } from "../../../lib/auth-client";
import { useOrganization } from "../../../hooks/useOrganization";
import icon4 from "../../../assets/images/icon4.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import CreateStoreModal from "./modals/CreateStoreModal";

interface HeaderOwnerProps {
    onToggleSidebar: () => void;
}

export default function HeaderOwner({ onToggleSidebar }: HeaderOwnerProps) {
    const { data: session } = authClient.useSession();
    const { organizations, activeOrg, switchOrganization } = useOrganization();
    const [isOrgSwitcherOpen, setIsOrgSwitcherOpen] = useState(false);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

    const handleSwitchOrg = async (orgId: string) => {
        setIsOrgSwitcherOpen(false);
        try {
            await switchOrganization(orgId);
            window.location.reload();
        } catch (error) {
            console.error("Error switching organization:", error);
        }
    };

    return (
        <header className="bg-primary sticky top-0 z-20 h-20 flex items-center shadow-lg px-4 md:px-8 border-b border-white/10">
            <div className="container mx-auto flex items-center justify-between w-full gap-4 md:gap-8">
                {/* Logo & Toggle Section */}
                <div className="flex items-center gap-2 md:gap-4 shrink-0">
                    <button
                        onClick={onToggleSidebar}
                        className="p-2 text-white hover:bg-white/10 rounded-xl transition-all lg:hidden"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                    <Link to="/" className="hover:scale-105 transition-transform duration-200 hidden sm:block">
                        <img
                            src={icon4}
                            alt="Kutambula"
                            className="h-8 md:h-10 w-28 md:w-36 object-contain"
                        />
                    </Link>

                    {/* Organization Swapper */}
                    <div className="relative">
                        <button
                            onClick={() => setIsOrgSwitcherOpen(!isOrgSwitcherOpen)}
                            className="flex items-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/15 rounded-xl border border-white/10 transition-all active:scale-95 group max-w-[180px] md:max-w-[240px]"
                        >
                            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                                {activeOrg?.logo ? (
                                    <img src={activeOrg.logo} alt="" className="w-full h-full object-cover rounded-lg" />
                                ) : (
                                    <Building2 className="w-4 h-4 text-white/70" />
                                )}
                            </div>
                            <div className="text-left hidden md:block flex-1 min-w-0">
                                <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest leading-none mb-1">Loja Ativa</p>
                                <p className="text-sm font-black text-white truncate">{activeOrg?.name || "Selecionar Loja"}</p>
                            </div>
                            <ChevronDown className={`w-4 h-4 text-white/50 group-hover:text-white transition-transform ${isOrgSwitcherOpen ? "rotate-180" : ""}`} />
                        </button>

                        {/* Dropdown Menu */}
                        {isOrgSwitcherOpen && (
                            <>
                                <div className="fixed inset-0 z-40" onClick={() => setIsOrgSwitcherOpen(false)} />
                                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 z-50 animate-in fade-in zoom-in-95 duration-200">
                                    <div className="px-4 pb-2 mb-2 border-b border-gray-50">
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Minhas Lojas</p>
                                    </div>
                                    <div className="max-h-[300px] overflow-y-auto custom-scrollbar px-2 space-y-1">
                                        {organizations?.map((org) => (
                                            <button
                                                key={org.id}
                                                onClick={() => handleSwitchOrg(org.id)}
                                                className={`w-full flex items-center gap-3 p-2 rounded-xl transition-all ${org.id === activeOrg?.id
                                                    ? "bg-primary/10 border border-primary/20"
                                                    : "hover:bg-gray-50 border border-transparent"
                                                    }`}
                                            >
                                                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 overflow-hidden">
                                                    {org.logo ? (
                                                        <img src={org.logo} alt="" className="w-full h-full object-cover" />
                                                    ) : (
                                                        <Building2 className="w-5 h-5 text-gray-400" />
                                                    )}
                                                </div>
                                                <div className="text-left flex-1 min-w-0">
                                                    <p className={`text-sm font-bold truncate ${org.id === activeOrg?.id ? "text-primary" : "text-gray-900"}`}>{org.name}</p>
                                                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter">Owner Admin</p>
                                                </div>
                                                {org.id === activeOrg?.id && (
                                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="p-2 border-t border-gray-100 bg-gray-50/50">
                                        <button
                                            onClick={() => {
                                                setIsOrgSwitcherOpen(false);
                                                setIsCreateModalOpen(true);
                                            }}
                                            className="w-full flex items-center gap-2 p-2 hover:bg-white rounded-xl text-primary font-bold text-xs transition-all border border-transparent hover:border-primary/20 hover:shadow-sm"
                                        >
                                            <div className="w-7 h-7 bg-primary/10 rounded-lg flex items-center justify-center">
                                                <Plus className="w-4 h-4" />
                                            </div>
                                            Criar Nova Loja
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>

                {/* Search Bar - Hidden on Mobile, shown on Tablet/Desktop */}
                <div className='flex-1 max-w-2xl hidden sm:block'>
                    <div className='relative group'>
                        <input
                            type="search"
                            placeholder="Buscar..."
                            className='w-full pl-11 pr-24 py-2.5 border-2 border-white/20 rounded-full focus:outline-none focus:border-white focus:ring-4 focus:ring-white/10 text-xs md:text-sm bg-white/10 text-white placeholder:text-white/60 transition-all'
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 group-focus-within:text-white transition-colors" />
                        <button
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-primary px-3 md:px-5 py-1.5 rounded-full text-[10px] md:text-xs font-bold transition-all active:scale-95 hover:shadow-lg"
                        >
                            Buscar
                        </button>
                    </div>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-1 md:gap-4 shrink-0">
                    <button className="relative p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-primary"></span>
                    </button>

                    <div className="h-6 md:h-8 w-px bg-white/10 mx-1"></div>

                    {/* User Profile */}
                    <div className="flex items-center gap-2 md:gap-3 pl-1 md:pl-2">
                        <div className="text-right hidden xl:block">
                            <p className="text-sm font-bold text-white leading-tight truncate max-w-[150px]">{session?.user?.name || "Usuário"}</p>
                            <p className="text-[10px] text-white/60 font-semibold uppercase tracking-wider">Dashboard Business</p>
                        </div>
                        <Link to="/owner/dashboard/setting" className="group relative">
                            <div className="absolute -inset-1 bg-white/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <img
                                src={session?.user?.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCzxivJXCZk0Kk8HsHujTO3Olx0ngytPrWw&s"}
                                alt="User"
                                className="relative w-9 h-9 md:w-10 md:h-10 rounded-xl object-cover ring-2 ring-white/20 group-hover:ring-white transition-all shadow-xl"
                            />
                        </Link>
                    </div>
                </div>
            </div>

            <CreateStoreModal
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
            />
        </header>
    );
}
import { type ReactNode, useState } from "react";
import HeaderAdmin from "./Header";
import SidebarAdmin from "./Sidebar";

interface ContainerAdminProps {
    children: ReactNode;
}

export default function ContainerAdmin({ children }: ContainerAdminProps) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Default open on desktop

    return (
        <div className="h-screen flex bg-gray-50/50 overflow-hidden font-sans">
            {/* Backdrop for Mobile Sidebar */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 lg:hidden backdrop-blur-sm transition-opacity"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar - Fixed Left */}
            <SidebarAdmin isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

            {/* Main Content Area - Header + Content */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Header - Top Right */}
                <HeaderAdmin onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} isSidebarOpen={isSidebarOpen} />

                {/* Main Content - Below Header */}
                <main className="flex-1 overflow-y-auto custom-scrollbar bg-gray-50/50">
                    <div className="p-4 md:p-8 w-full max-w-[1800px] mx-auto animate-in fade-in duration-700">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}

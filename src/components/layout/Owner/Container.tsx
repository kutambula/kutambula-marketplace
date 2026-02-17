import { type ReactNode, useState } from "react";
import HeaderOwner from "./Header";
import SidebarOwner from "./Sidebar";

interface ContainerOwnerProps {
    children: ReactNode;
}

export default function ContainerOwner({ children }: ContainerOwnerProps) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Default closed on mobile

    return (
        <div className="h-screen flex flex-col bg-gray-50/50 overflow-hidden font-sans relative">
            {/* Fixed Top Header */}
            <HeaderOwner onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

            {/* Main Portal View */}
            <div className="flex-1 overflow-y-auto custom-scrollbar bg-gray-50/50 relative">
                <div className="container mx-auto flex relative min-h-full">
                    {/* Backdrop for Mobile Sidebar */}
                    {isSidebarOpen && (
                        <div
                            className="fixed inset-0 bg-black/50 z-30 lg:hidden backdrop-blur-sm transition-opacity"
                            onClick={() => setIsSidebarOpen(false)}
                        />
                    )}

                    {/* Sidebar Section */}
                    <SidebarOwner isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

                    {/* Main Workspace */}
                    <main className="flex-1 flex flex-col min-w-0">
                        <div className="p-4 md:p-8 w-full max-w-[1600px] mx-auto animate-in fade-in duration-700">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
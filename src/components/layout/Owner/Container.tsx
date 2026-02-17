import type { ReactNode } from "react";
import { useState } from "react";
import HeaderOwner from "./Header";
import SidebarOwner from "./Sidebar";

interface ContainerOwnerProps {
    children: ReactNode;
}

export default function ContainerOwner({ children }: ContainerOwnerProps) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div className="min-h-screen bg-gray-50 flex overflow-x-hidden">
            {/* Sidebar Component */}
            <SidebarOwner isOpen={isSidebarOpen} onToggle={toggleSidebar} />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col h-screen overflow-hidden">
                {/* Header Component */}
                <HeaderOwner />

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar bg-gray-50/50">
                    <div className="max-w-[1600px] mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
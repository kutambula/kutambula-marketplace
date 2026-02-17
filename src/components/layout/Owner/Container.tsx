import { type ReactNode, useState } from "react";
import HeaderOwner from "./Header";
import SidebarOwner from "./Sidebar";

interface ContainerOwnerProps {
    children: ReactNode;
}

export default function ContainerOwner({ children }: ContainerOwnerProps) {
    const [isSidebarOpen ] = useState(true);

    return (
        <div className="h-screen flex flex-col bg-gray-50/50 overflow-hidden font-sans">
            {/* Fixed Top Header - Now 100% width */}
            <HeaderOwner />

            {/* Main Portal View - Scrollable at this level for window-edge scrollbar */}
            <div className="flex-1 overflow-y-auto custom-scrollbar bg-gray-50/50">
                <div className="container mx-auto flex relative min-h-full">
                    {/* Sidebar Section - Beside the content */}
                    <SidebarOwner isOpen={isSidebarOpen} />

                    {/* Main Workspace - Now part of the scrollable parent */}
                    <main className="flex-1 overflow-visible">
                        <div className="p-4 md:p-8 w-full max-w-[1600px] mx-auto animate-in fade-in duration-700">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
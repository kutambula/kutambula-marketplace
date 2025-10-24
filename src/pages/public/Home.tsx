import Header from '../../components/layout/Header';
import SidebarFilters from '../../components/layout/SidebarFilters';
import MainContent from '../../components/layout/MainContent';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <div className="container mx-auto px-4 py-6 flex gap-6">
                <SidebarFilters />
                <MainContent />
            </div>
        </div>
    );
}
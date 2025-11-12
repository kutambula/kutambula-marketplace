import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ComplaintsPortal from '../../components/common/ComplaintsPortal';

export default function ComplaintsPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            
            <div className="container mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12">
                <div className="max-w-5xl mx-auto">
                    {/* Breadcrumb */}
                    <nav className="mb-6 sm:mb-8 text-xs sm:text-sm text-gray-600">
                        <a href="/" className="hover:text-primary">Início</a>
                        <span className="mx-1 sm:mx-2">›</span>
                        <span className="text-gray-900 font-medium">Portal de Reclamações</span>
                    </nav>

                    <ComplaintsPortal />
                </div>
            </div>

            <Footer />
        </div>
    );
}

import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import AdvertiseHero from '../../components/sections/AdvertiseHero';

export default function AdvertisePage() {
	return (
		<div className="min-h-screen bg-background">
			<Header />
			<main>
				<AdvertiseHero />

				{/* Seção para Anunciantes */}
            <section className="bg-gray-50 py-8 sm:py-12 md:py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-4 sm:mb-6">
                            Anuncie e Alcance Milhões
                        </h2>
                        <p className="text-sm sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 px-4">
                            Promova seus produtos com banners estratégicos, posts patrocinados e anúncios direcionados
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100">
                                <i className='bx bx-image text-2xl sm:text-3xl text-primary mb-3 sm:mb-4'></i>
                                <h3 className="font-bold text-base sm:text-lg mb-2">Banner Display</h3>
                                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                                    <span className="hidden sm:block">728x90, 300x250, 160x600<br/>Formatos responsivos</span>
                                    <span className="sm:hidden">Formatos responsivos<br/>Múltiplos tamanhos</span>
                                </p>
                                <div className="text-primary font-bold text-sm sm:text-base">
                                    <span className="hidden sm:inline">A partir de €50/mês</span>
                                    <span className="sm:hidden">€50+/mês</span>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100">
                                <i className='bx bx-bullseye text-2xl sm:text-3xl text-green-600 mb-3 sm:mb-4'></i>
                                <h3 className="font-bold text-base sm:text-lg mb-2">
                                    <span className="hidden sm:inline">Posts Patrocinados</span>
                                    <span className="sm:hidden">Patrocinados</span>
                                </h3>
                                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                                    Destaque nos resultados<br/>
                                    <span className="hidden sm:inline">Segmentação por país</span>
                                    <span className="sm:hidden">Segmentação</span>
                                </p>
                                <div className="text-primary font-bold text-sm sm:text-base">€0,20 por clique</div>
                            </div>

                            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100 sm:col-span-2 md:col-span-1">
                                <i className='bx bx-video text-2xl sm:text-3xl text-yellow-600 mb-3 sm:mb-4'></i>
                                <h3 className="font-bold text-base sm:text-lg mb-2">Vídeo Stories</h3>
                                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                                    Até 30 segundos<br/>
                                    <span className="hidden sm:inline">MP4, MOV máx 50MB</span>
                                    <span className="sm:hidden">Múltiplos formatos</span>
                                </p>
                                <div className="text-primary font-bold text-sm sm:text-base">€100/semana</div>
                            </div>
                        </div>

                        <button className="bg-primary hover:bg-tertiary text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base w-full sm:w-auto">
                            <span className="flex items-center justify-center gap-2">
                                <i className='bx bx-rocket text-base sm:text-lg'></i>
                                <span className="hidden sm:inline">Começar a Anunciar</span>
                                <span className="sm:hidden">Começar</span>
                            </span>
                        </button>
                    </div>
                </div>
            </section>
			</main>
			<Footer />
		</div>
	);
}

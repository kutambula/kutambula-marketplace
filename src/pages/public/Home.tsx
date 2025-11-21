import Header from '../../components/layout/Header';
import MainContent from '../../components/layout/MainContent';
import Footer from '../../components/layout/Footer';
import { Link } from 'react-router-dom';
import { Star, ChevronLeft, ChevronRight, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import HowItWorks from '../../components/layout/HowItWorks';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import HomeHero from '../../components/sections/HomeHero';

export default function HomePage() {
	const featuredStores = [
		{
			id: 1,
			name: 'Sabores da África',
			logo: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?w=200&h=200&fit=crop',
			banner: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=800&h=400&fit=crop',
			category: 'Alimentos Tradicionais',
			rating: 4.9,
			totalProducts: 450,
			verified: true,
			description: 'Ingredientes autênticos e especiarias africanas',
			specialties: ['Fufu', 'Especiarias', 'Grãos']
		},
		{
			id: 2,
			name: 'Bebidas Ancestrais',
			logo: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=200&h=200&fit=crop',
			banner: 'https://images.unsplash.com/photo-1560512823-829485b8bf24?w=800&h=400&fit=crop',
			category: 'Bebidas Artesanais',
			rating: 4.8,
			totalProducts: 280,
			verified: true,
			description: 'Sucos naturais, chás e bebidas tradicionais',
			specialties: ['Bissap', 'Vinho de Palma', 'Chás']
		},
		{
			id: 3,
			name: 'Mercado Kizomba',
			logo: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=200&h=200&fit=crop',
			banner: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=400&fit=crop',
			category: 'Mercearia Africana',
			rating: 4.7,
			totalProducts: 680,
			verified: true,
			description: 'Variedade completa de produtos africanos',
			specialties: ['Óleos', 'Farinhas', 'Conservas']
		},
		{
			id: 4,
			name: 'Aromas da Savana',
			logo: 'https://images.unsplash.com/photo-1596040033229-a0b4d1ab7faa?w=200&h=200&fit=crop',
			banner: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&h=400&fit=crop',
			category: 'Temperos & Molhos',
			rating: 4.9,
			totalProducts: 320,
			verified: true,
			description: 'Temperos exclusivos e molhos tradicionais',
			specialties: ['Piri-Piri', 'Suya', 'Berbere']
		},
		{
			id: 5,
			name: 'Café Africano Premium',
			logo: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=200&h=200&fit=crop',
			banner: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=400&fit=crop',
			category: 'Cafés & Infusões',
			rating: 4.8,
			totalProducts: 190,
			verified: true,
			description: 'Cafés etíopes, quenianos e mais',
			specialties: ['Etiópia', 'Quênia', 'Ruanda']
		},
		{
			id: 6,
			name: 'Doçura Africana',
			logo: 'https://images.unsplash.com/photo-1514517521153-1be72277b32f?w=200&h=200&fit=crop',
			banner: 'https://images.unsplash.com/photo-1587241321921-91a834d6d191?w=800&h=400&fit=crop',
			category: 'Doces & Snacks',
			rating: 4.6,
			totalProducts: 240,
			verified: true,
			description: 'Doces tradicionais e snacks africanos',
			specialties: ['Beignets', 'Chin Chin', 'Puff-Puff']
		},
		{
			id: 7,
			name: 'Grãos da Terra',
			logo: 'https://images.unsplash.com/photo-1595855759920-86582396756a?w=200&h=200&fit=crop',
			banner: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&h=400&fit=crop',
			category: 'Cereais & Legumes',
			rating: 4.7,
			totalProducts: 410,
			verified: true,
			description: 'Milhete, sorgo, feijões e mais',
			specialties: ['Milhete', 'Sorgo', 'Feijão Bambara']
		},
		{
			id: 8,
			name: 'Óleos & Manteigas',
			logo: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=200&h=200&fit=crop',
			banner: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b0?w=800&h=400&fit=crop',
			category: 'Óleos Naturais',
			rating: 4.8,
			totalProducts: 150,
			verified: true,
			description: 'Óleo de palma, karité e mais',
			specialties: ['Palma', 'Karité', 'Coco']
		}
	];

	const [isAtTop, setIsAtTop] = useState(true);

	const handleScroll = () => {
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		const scrollHeight = document.documentElement.scrollHeight;
		const clientHeight = document.documentElement.clientHeight;

		// Consider "at top" if within 100px of top
		// Consider "at bottom" if within 100px of bottom
		if (scrollTop < 100) {
			setIsAtTop(true);
		} else if (scrollTop + clientHeight >= scrollHeight - 100) {
			setIsAtTop(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		handleScroll(); // Check initial position
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const handleScrollToggle = () => {
		if (isAtTop) {
			// Scroll to bottom
			const height = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
			window.scrollTo({ top: height, behavior: 'smooth' });
		} else {
			// Scroll to top
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	};

	return (
		<div className="min-h-screen bg-background">
			<Header />

			{/* Hero Section */}
			<HomeHero />

			<HowItWorks />

			{/* Lojas em Destaque Section */}
			<section className="py-8 sm:py-12 md:py-16">
				<div className="container mx-auto px-4">
					
					<div className="text-center mb-8 sm:mb-10 md:mb-12">
						<div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
							<i className='bx bx-store-alt text-2xl sm:text-3xl md:text-4xl text-primary'></i>
							<h2 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900">Lojas em Destaque</h2>
						</div>
						<p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
							Descubra as melhores lojas verificadas da nossa comunidade empresarial
						</p>
					</div>

					{/* Desktop Grid - Hidden on mobile/tablet */}
					<div className="hidden lg:grid grid-cols-4 gap-6 xl:gap-8">
						{featuredStores.map((store) => (
							<Link
								to={`/loja/${store.id}`}
								key={store.id}
								className="group block cursor-pointer h-full"
							>
								<div className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-gray-100 hover:border-primary h-full flex flex-col">
									{/* Header com Banner - Mais alto e com overlay gradiente africano */}
									<div className="relative h-40 overflow-hidden">
										<img
											src={store.banner}
											alt={store.name}
											className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
										/>
										{/* Overlay com gradiente inspirado em cores africanas */}
										<div className="absolute inset-0 bg-linear-to-br from-orange-600/40 via-amber-500/30 to-red-600/40 group-hover:opacity-70 transition-opacity duration-500" />
										<div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

										{/* Badge verificação - Melhorado */}
										{store.verified && (
											<div className="absolute top-3 right-3 bg-linear-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
												<i className='bx bxs-badge-check text-sm'></i>
												<span>Verificada</span>
											</div>
										)}

										{/* Badge de categoria - Flutuante */}
										{/* <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
											<i className='bx bx-category-alt mr-1'></i>
											{store.category}
										</div> */}
									</div>

									{/* Logo e Conteúdo */}
									<div className="p-6 flex-1 flex flex-col">
										{/* Logo da empresa - Posicionado sobre o banner */}
										<div className="flex items-start gap-4 mb-4 -mt-10">
											<div className="relative w-20 h-20 rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-white shrink-0 group-hover:scale-105 transition-transform duration-300">
												<img
													src={store.logo}
													alt={`${store.name} logo`}
													className="w-full h-full object-cover"
												/>
											</div>
											<div className="flex-1 mt-8">
												<h3 className="text-lg font-black text-gray-900 mb-2 group-hover:text-primary transition-colors leading-tight">
													{store.name}
												</h3>
											</div>
										</div>

										{/* Descrição */}
										<p className="text-sm text-gray-600 mb-4 leading-relaxed h-10 line-clamp-2">
											{store.description}
										</p>

										{/* Especialidades - Novo elemento */}
											<div className="flex flex-wrap gap-2 mb-4 min-h-8">
												{store.specialties.map((specialty, idx) => (
													<span key={idx} className="text-xs bg-linear-to-r from-amber-50 to-orange-50 text-amber-700 font-semibold px-2.5 py-1 rounded-lg border border-amber-200/50">
														{specialty}
													</span>
												))}
											</div>

										{/* Estatísticas - Redesenhadas */}
										<div className="flex items-center justify-between py-4 border-t border-gray-100 mt-auto">
											<div className="flex items-center gap-1.5">
												<div className="flex items-center">
													{[...Array(5)].map((_, i) => (
														<Star
															key={i}
															className={`w-3.5 h-3.5 ${
																i < Math.floor(store.rating)
																	? 'text-amber-500 fill-amber-500'
																	: 'text-gray-300 fill-gray-300'
															}`}
														/>
													))}
												</div>
												<span className="font-bold text-sm text-gray-900">{store.rating}</span>
											</div>
											<div className="text-right">
												<div className="text-lg font-black text-primary">{store.totalProducts}</div>
												<div className="text-xs text-gray-500 font-medium">produtos</div>
											</div>
										</div>
									</div>
								</div>
							</Link>
						))}
					</div>

					{/* Mobile/Tablet Slider - Visible on smaller screens */}
					<div className="lg:hidden">
						<Swiper
							modules={[Navigation, Pagination, Autoplay]}
							spaceBetween={16}
							slidesPerView={1.2}
							centeredSlides={false}
							navigation={{
								nextEl: '.stores-swiper-button-next',
								prevEl: '.stores-swiper-button-prev',
							}}
							pagination={{
								el: '.stores-swiper-pagination',
								clickable: true,
								dynamicBullets: true,
							}}
							autoplay={{
								delay: 4000,
								disableOnInteraction: false,
							}}
							breakpoints={{
								640: {
									slidesPerView: 2.2,
									spaceBetween: 20,
								},
								768: {
									slidesPerView: 2.5,
									spaceBetween: 24,
								},
								1024: {
									slidesPerView: 3,
									spaceBetween: 24,
								}
							}}
							className="stores-swiper pb-12!"
						>
							{featuredStores.map((store) => (
								<SwiperSlide key={store.id}>
									<Link
										to={`/loja/${store.id}`}
										className="group block h-full cursor-pointer"
									>
										<div className="relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 h-full flex flex-col border-2 border-gray-100 hover:border-primary active:scale-95">
											{/* Header com Banner */}
											<div className="relative h-28 sm:h-32 overflow-hidden">
												<img
													src={store.banner}
													alt={store.name}
													className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
												/>
												{/* Overlay gradiente africano */}
												<div className="absolute inset-0 bg-linear-to-br from-orange-600/40 via-amber-500/30 to-red-600/40 group-hover:opacity-70 transition-opacity duration-500" />
												<div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

												{/* Badge verificação */}
												{store.verified && (
													<div className="absolute top-2 right-2 bg-linear-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-lg">
														<i className='bx bxs-badge-check text-xs'></i>
														<span className="hidden sm:inline">Verificada</span>
													</div>
												)}

												{/* Badge de categoria */}
												<div className="absolute bottom-2 left-2 bg-white/95 backdrop-blur-sm text-primary text-xs font-bold px-2 py-1 rounded-full shadow-md">
													<i className='bx bx-category-alt text-xs mr-0.5'></i>
													<span className="hidden sm:inline">{store.category}</span>
												</div>
											</div>

											{/* Conteúdo */}
											<div className="p-4 sm:p-5 flex-1 flex flex-col">
												{/* Logo e Nome */}
												<div className="flex items-start gap-3 mb-3 -mt-8">
													<div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-3 border-white shadow-xl bg-white shrink-0 group-hover:scale-105 transition-transform duration-300">
														<img
															src={store.logo}
															alt={`${store.name} logo`}
															className="w-full h-full object-cover"
														/>
													</div>
													<div className="flex-1 min-w-0 mt-6">
														<h3 className="text-base sm:text-lg font-black text-gray-900 mb-1 group-hover:text-primary transition-colors truncate leading-tight">
															{store.name}
														</h3>
													</div>
												</div>

												{/* Descrição */}
												<p className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-2 leading-relaxed hidden sm:block">
													{store.description}
												</p>

												{/* Especialidades */}
												<div className="flex flex-wrap gap-1.5 mb-3">
													{store.specialties.slice(0, 2).map((specialty, idx) => (
														<span key={idx} className="text-xs bg-linear-to-r from-amber-50 to-orange-50 text-amber-700 font-semibold px-2 py-0.5 rounded-md border border-amber-200/50">
															{specialty}
														</span>
													))}
												</div>

												{/* Estatísticas */}
												<div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
													<div className="flex items-center gap-1">
														<Star className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500 fill-amber-500" />
														<span className="font-bold text-sm text-gray-900">{store.rating}</span>
													</div>
													<div className="text-right">
														<div className="text-sm sm:text-base font-black text-primary">{store.totalProducts}</div>
														<div className="text-xs text-gray-500 font-medium">produtos</div>
													</div>
													<div className="flex items-center gap-1 text-primary">
														<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
													</div>
												</div>
											</div>
										</div>
									</Link>
								</SwiperSlide>
							))}
						</Swiper>

						{/* Navigation buttons - Hidden on mobile, visible on tablet+ */}
						<div className="hidden sm:flex justify-center items-center gap-4 mt-6">
							<button 
								className="stores-swiper-button-prev w-12 h-12 bg-linear-to-r from-primary to-tertiary text-white rounded-full flex items-center justify-center hover:from-tertiary hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl"
								aria-label="Loja anterior"
							>
								<ChevronLeft className="w-6 h-6" />
							</button>
							<div className="stores-swiper-pagination position-static! w-auto!"></div>
							<button 
								className="stores-swiper-button-next w-12 h-12 bg-linear-to-r from-primary to-tertiary text-white rounded-full flex items-center justify-center hover:from-tertiary hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl"
								aria-label="Próxima loja"
							>
								<ChevronRight className="w-6 h-6" />
							</button>
						</div>

						{/* Pagination only - Visible only on mobile */}
						<div className="sm:hidden flex justify-center mt-4">
							<div className="stores-swiper-pagination position-static! w-auto!"></div>
						</div>
					</div>

					{/* Botão Ver Todas */}
					<div className="text-center mt-8 sm:mt-10 md:mt-12">
						<Link to="/lojas">
							<button className="bg-linear-to-r from-primary via-tertiary to-primary bg-size-200 hover:bg-pos-100 text-white font-black px-8 sm:px-12 py-4 sm:py-5 rounded-2xl transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-2xl text-sm sm:text-base">
								<span className="flex items-center gap-3">
									<i className='bx bx-store-alt text-xl sm:text-2xl'></i>
									<span className="hidden sm:inline">Explorar Todas as Lojas</span>
									<span className="sm:hidden">Ver Todas</span>
									<ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
								</span>
							</button>
						</Link>
					</div>
				</div>
			</section>

			<div className="container mx-auto px-4 py-6">
				<MainContent />
			</div>

			{/* Scroll helper (toggle top/bottom) */}
			<div className="fixed right-6 bottom-6 z-50">
				<button
					onClick={handleScrollToggle}
					aria-label={isAtTop ? "Ir para o final da página" : "Ir para o topo"}
					className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
				>
					{isAtTop ? (
						<ChevronDown className="w-6 h-6" />
					) : (
						<ChevronUp className="w-6 h-6" />
					)}
				</button>
			</div>

			<Footer />
		</div>
	);
}
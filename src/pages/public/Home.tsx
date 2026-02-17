import Header from '../../components/layout/Header';
import MainContent from '../../components/layout/MainContent';
import Footer from '../../components/layout/Footer';
import { Link } from 'react-router-dom';
import { Star, ChevronLeft, ChevronRight, ArrowRight, ChevronDown, ChevronUp, Bot } from 'lucide-react';
import { useState, useEffect } from 'react';
import HowItWorks from '../../components/layout/HowItWorks';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import HomeHero from '../../components/sections/HomeHero';
import WhyKutambula from '../../components/sections/WhyKutambula';
import { useQuery } from '@tanstack/react-query';

export interface organizationResponse {
	id: string,
	category: string,
	averageRating: number,
	ratingsCount: number,
	_count: {
		products: number
	},
	specialties: [string]
	name: string
	logo: string
	banner: string
	description: string
	verified: true,
}

export default function HomePage() {
	const [page] = useState(1);
	const [limit] = useState(5);

	const { data: featuredStores, isLoading, error } = useQuery<organizationResponse[] | null>({
		queryKey: ['organizations'],
		queryFn: async () => {
			const res = await fetch(`${import.meta.env.VITE_API_URL}/organization/list?limit=${limit}&page=${page}`);
			if (!res.ok) throw new Error('Network response was not ok');
			return res.json() as Promise<organizationResponse[]>;
		},
	});

	if (featuredStores)
		console.log(featuredStores)

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
							<h2 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900">Lojas em Destaque</h2>
						</div>
						<p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
							Descubra as melhores lojas verificadas da nossa comunidade empresarial
						</p>
					</div>

					{/* Desktop Grid - Hidden on mobile/tablet */}
					<div className="hidden lg:grid grid-cols-4 gap-6 xl:gap-8">
						{isLoading && <span>Carregando...</span>}
						{error && <span className='text-red-6000'>{error.message}</span>}
						{featuredStores && featuredStores.map((store) => (
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
											<div className="flex-1 mt-8 min-w-0">
												<h3 className="text-lg font-black text-gray-900 mb-2 group-hover:text-primary transition-colors leading-tight truncate min-h-7">
													{store.name}
												</h3>
											</div>
										</div>

										{/* Descrição */}
										<p className="text-sm text-gray-600 mb-4 leading-relaxed min-h-10 line-clamp-2">
											{store.description}
										</p>

										{/* Especialidades - Novo elemento */}
										<div className="flex flex-wrap gap-2 mb-4 min-h-8">
											{store.specialties.map((specialty: string, idx: number) => (
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
															className={`w-3.5 h-3.5 ${i < Math.floor(store.averageRating)
																? 'text-amber-500 fill-amber-500'
																: 'text-gray-300 fill-gray-300'
																}`}
														/>
													))}
												</div>
												<span className="font-bold text-sm text-gray-900">{store.averageRating}</span>
											</div>
											<div className="text-right">
												<div className="text-lg font-black text-primary">{store._count.products}</div>
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
							{featuredStores && featuredStores.map((store: organizationResponse) => (
								<SwiperSlide key={store.id}>
									<Link
										to={`/loja/${store.id}`}
										className="group block h-full cursor-pointer"
									>
										<div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full min-h-[420px] sm:min-h-[460px] flex flex-col border-2 border-gray-100 hover:border-primary active:scale-[0.98]">
											{/* Header com Banner */}
											<div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
												<img
													src={store.banner}
													alt={store.name}
													className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
												/>
												{/* Overlay gradiente africano */}
												<div className="absolute inset-0 bg-linear-to-br from-orange-600/40 via-amber-500/30 to-red-600/40 group-hover:opacity-70 transition-opacity duration-500" />
												<div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

												{/* Badge verificação */}
												{store.verified && (
													<div className="absolute top-2.5 right-2.5 bg-linear-to-r from-green-500 to-emerald-600 text-white text-[10px] sm:text-xs font-bold px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-full flex items-center gap-1 shadow-lg">
														<i className='bx bxs-badge-check text-xs sm:text-sm'></i>
														<span className="hidden sm:inline">Verificada</span>
													</div>
												)}

												{/* Badge de categoria - Melhorado para mobile */}
												<div className="absolute bottom-2.5 left-2.5 bg-white/95 backdrop-blur-sm text-primary text-[10px] sm:text-xs font-bold px-2.5 py-1.5 rounded-lg shadow-lg flex items-center gap-1">
													<i className='bx bx-category-alt text-xs'></i>
													<span>{store.category}</span>
												</div>
											</div>

											{/* Conteúdo */}
											<div className="p-4 sm:p-5 flex-1 flex flex-col">
												{/* Logo e Nome */}
												<div className="flex items-start gap-3 mb-3 sm:mb-4 -mt-9 sm:-mt-10">
													<div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-xl overflow-hidden border-4 border-white shadow-2xl bg-white shrink-0 group-hover:scale-105 transition-transform duration-300">
														<img
															src={store.logo}
															alt={`${store.name} logo`}
															className="w-full h-full object-cover"
														/>
													</div>
													<div className="flex-1 min-w-0 mt-7 sm:mt-8">
														<h3 className="text-base sm:text-lg font-black text-gray-900 mb-1 group-hover:text-primary transition-colors truncate min-h-7 sm:min-h-8 leading-tight">
															{store.name}
														</h3>
														{/* Rating mobile - movido para aqui */}
														<div className="flex items-center gap-1.5 sm:hidden">
															<Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
															<span className="font-bold text-xs text-gray-900">{store.averageRating}</span>
															<span className="text-gray-400">•</span>
															<span className="text-xs text-gray-500 font-semibold">{store._count.products} produtos</span>
														</div>
													</div>
												</div>

												{/* Descrição - Visível no mobile */}
												<p className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-2 leading-relaxed min-h-8 sm:min-h-10">
													{store.description}
												</p>

												{/* Especialidades - Melhoradas */}
												<div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
													{store.specialties.slice(0, 3).map((specialty: string, idx: number) => (
														<span key={idx} className="text-[10px] sm:text-xs bg-linear-to-r from-amber-50 to-orange-50 text-amber-700 font-bold px-2 sm:px-2.5 py-1 rounded-lg border border-amber-200/50 shadow-sm">
															{specialty}
														</span>
													))}
												</div>

												{/* Estatísticas - Escondidas no mobile, visíveis no tablet+ */}
												<div className="hidden sm:flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
													<div className="flex items-center gap-1.5">
														<Star className="w-4 h-4 text-amber-500 fill-amber-500" />
														<span className="font-bold text-sm text-gray-900">{store.averageRating}</span>
													</div>
													<div className="text-right">
														<div className="text-base font-black text-primary">{store._count.products}</div>
														<div className="text-xs text-gray-500 font-medium">produtos</div>
													</div>
													<div className="flex items-center gap-1 text-primary">
														<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
													</div>
												</div>

												{/* Botão CTA Mobile */}
												<div className="sm:hidden mt-auto pt-3 border-t border-gray-100">
													<div className="flex items-center justify-between">
														<span className="text-xs font-bold text-gray-700">Ver loja</span>
														<div className="bg-primary/10 text-primary p-2 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
															<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
														</div>
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
							<button className="bg-linear-to-r from-primary  to-primary bg-size-200 hover:bg-pos-100 text-white font-black px-8 sm:px-12 py-4 sm:py-5 rounded-2xl transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-2xl text-sm sm:text-base">
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

			{/* Why Kutambula Section */}
			<WhyKutambula />

			{/* Floating Action Buttons */}
			<div className="fixed right-4 sm:right-6 bottom-6 z-50 flex flex-col gap-3">

				{/* Chat AI Button */}
				<Link to="/chat-ia">
					<button
						aria-label="Chat com IA"
						className="w-12 h-12 bg-primary rounded-full shadow-lg flex items-center justify-center hover:bg-tertiary hover:scale-110 transition-all duration-300 text-white group relative"
					>
						<Bot className="w-6 h-6" />
						{/* Pulse animation */}
						<span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></span>
					</button>
				</Link>

				{/* Scroll toggle button */}
				<button
					onClick={handleScrollToggle}
					aria-label={isAtTop ? "Ir para o final da página" : "Ir para o topo"}
					className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
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
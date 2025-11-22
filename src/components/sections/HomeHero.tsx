import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ArrowRight, ShoppingBag, Store, Truck, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import Swiper styles

export default function HomeHero() {
	const slides = [
		{
			id: 1,
			title: "Sabores Africanos em Portugal",
			subtitle: "Descubra produtos alimentares e bebidas autênticas de origem africana, entregues na sua porta.",
			image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&h=600&fit=crop",
			cta: "Explorar Produtos",
			link: "/lojas",
			icon: <ShoppingBag className="w-6 h-6" />,
			color: "from-primary/10 to-tertiary/90"
		},
		{
			id: 2,
			title: "Torne-se Nosso Parceiro",
			subtitle: "Junte-se à nossa rede de vendedores e fornecedores de produtos africanos. Expanda seu negócio conosco!",
			image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1200&h=600&fit=crop",
			cta: "Ser Parceiro",
			link: "/anuncie",
			icon: <Store className="w-6 h-6" />,
			secondaryCta: {
				text: "Ser Fornecedor",
				icon: <Truck className="w-5 h-5" />,
				link: "/anuncie#fornecedor"
			},
			color: "from-secondary/10 to-blue-900/90"
		},
		{
			id: 3,
			title: "Alimentos e Bebidas Africanas",
			subtitle: "Especiarias, cereais, bebidas tradicionais e muito mais. Produtos frescos de qualidade para sua cozinha.",
			image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1200&h=600&fit=crop",
			cta: "Ver Produtos",
			link: "/lojas",
			icon: <Utensils className="w-6 h-6" />,
			color: "from-green-600/10 to-green-800/90"
		}
	];

	return (
		<section className="relative bg-gray-50">
			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				spaceBetween={0}
				slidesPerView={1}
				speed={800}
				navigation={{
					nextEl: '.hero-swiper-button-next',
					prevEl: '.hero-swiper-button-prev',
				}}
				pagination={{
					clickable: true,
					el: '.hero-swiper-pagination',
				}}
				autoplay={{
					delay: 6000,
					disableOnInteraction: false,
					pauseOnMouseEnter: true,
				}}
				loop={true}
				className="hero-swiper h-[500px] md:h-[600px] w-full"
			>
				{slides.map((slide) => (
					<SwiperSlide key={slide.id}>
						<div className="relative w-full h-full overflow-hidden">
							{/* Background Image */}
							<div className="absolute inset-0 z-0">
								<img
									src={slide.image}
									alt={slide.title}
									className="w-full h-full object-cover"
								/>
								{/* Overlay Gradient */}
								<div className={`absolute inset-0 bg-linear-to-r ${slide.color}`}></div>
								{/* Pattern Overlay */}
								<div className="absolute inset-0 opacity-10 african-pattern"></div>
							</div>

							{/* Content */}
							<div className="relative h-full container mx-auto px-4 flex items-center z-10">
								<div className="max-w-2xl text-white space-y-6 animate-fade-in-up">
									<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 w-fit">
										{slide.icon}
										<span className="font-medium text-sm tracking-wide uppercase">Kutambula Marketplace</span>
									</div>

									<h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
										{slide.title}
									</h1>

									<p className="text-lg md:text-xl text-gray-100 leading-relaxed max-w-xl">
										{slide.subtitle}
									</p>

									<div className="pt-4 flex flex-wrap gap-4">
										<Link
											to={slide.link}
											className="inline-flex items-center gap-3 bg-white text-gray-900 font-bold px-8 py-4 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
										>
											{slide.cta}
											<ArrowRight className="w-5 h-5" />
										</Link>
										
										{slide.secondaryCta && (
											<Link
												to={slide.secondaryCta.link}
												className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-1"
											>
												{slide.secondaryCta.icon}
												{slide.secondaryCta.text}
											</Link>
										)}
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}

				{/* Custom Navigation Controls */}
				<div className="absolute bottom-8 right-8 z-10 md:flex items-center gap-4 hidden">
					<button 
						className="hero-swiper-button-prev w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300"
						aria-label="Slide anterior"
					>
						<ArrowRight className="w-6 h-6 rotate-180" />
					</button>
					<button 
						className="hero-swiper-button-next w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-tertiary transition-all duration-300 shadow-lg shadow-primary/30"
						aria-label="Próximo slide"
					>
						<ArrowRight className="w-6 h-6" />
					</button>
				</div>

				{/* Custom Pagination */}
				<div className="hero-swiper-pagination absolute bottom-8 z-10 left-1/2! -translate-x-1/2! md:left-8! md:translate-x-0! flex gap-2"></div>
			</Swiper>
		</section>
	);
}

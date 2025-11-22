import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { ArrowRight, ShoppingBag, Megaphone, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import Swiper styles

export default function HomeHero() {
	const slides = [
		{
			id: 1,
			title: "O Melhor da África na Sua Casa",
			subtitle: "Descubra sabores autênticos e produtos únicos de vendedores verificados.",
			image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&h=600&fit=crop",
			cta: "Comprar Agora",
			link: "/lojas",
			icon: <ShoppingBag className="w-6 h-6" />,
			color: "from-primary/90 to-tertiary/90"
		},
		{
			id: 2,
			title: "Expanda Seu Negócio",
			subtitle: "Anuncie para milhares de clientes buscando produtos alimentares e bebidas.",
			image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=600&fit=crop",
			cta: "Começar a Anunciar",
			link: "/anuncie",
			icon: <Megaphone className="w-6 h-6" />,
			color: "from-secondary/90 to-black/90"
		},
		{
			id: 3,
			title: "Ingredientes Frescos",
			subtitle: "Encontre os melhores ingredientes para suas receitas tradicionais.",
			image: "https://images.unsplash.com/photo-1606923829579-0cb9d4a998e9?w=1200&h=600&fit=crop",
			cta: "Ver Alimentos",
			link: "/categoria/alimentos",
			icon: <Utensils className="w-6 h-6" />,
			color: "from-green-600/90 to-green-800/90"
		}
	];

	return (
		<section className="relative bg-gray-50">
			<Swiper
				modules={[Navigation, Pagination, Autoplay, EffectFade]}
				effect="fade"
				spaceBetween={0}
				slidesPerView={1}
				navigation={{
					nextEl: '.hero-swiper-button-next',
					prevEl: '.hero-swiper-button-prev',
				}}
				pagination={{
					clickable: true,
					el: '.hero-swiper-pagination',
				}}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				loop={true}
				className="hero-swiper h-[500px] md:h-[600px] w-full"
			>
				{slides.map((slide) => (
					<SwiperSlide key={slide.id}>
						<div className="relative w-full h-full">
							{/* Background Image */}
							<div className="absolute inset-0">
								<img
									src={slide.image}
									alt={slide.title}
									className="w-full h-full object-cover"
								/>
								{/* Overlay Gradient */}
								<div className={`absolute inset-0 bg-gradient-to-r ${slide.color}`}></div>
								{/* Pattern Overlay */}
								<div className="absolute inset-0 opacity-10 african-pattern"></div>
							</div>

							{/* Content */}
							<div className="relative h-full container mx-auto px-4 flex items-center">
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

									<div className="pt-4">
										<Link
											to={slide.link}
											className="inline-flex items-center gap-3 bg-white text-gray-900 font-bold px-8 py-4 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
										>
											{slide.cta}
											<ArrowRight className="w-5 h-5" />
										</Link>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}

				{/* Custom Navigation Controls */}
				<div className="absolute bottom-8 right-8 z-10 flex items-center gap-4 hidden md:flex">
					<button className="hero-swiper-button-prev w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300">
						<ArrowRight className="w-6 h-6 rotate-180" />
					</button>
					<button className="hero-swiper-button-next w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-tertiary transition-all duration-300 shadow-lg shadow-primary/30">
						<ArrowRight className="w-6 h-6" />
					</button>
				</div>

				{/* Custom Pagination */}
				<div className="hero-swiper-pagination absolute bottom-8 left-0 w-full flex justify-center md:justify-start md:left-8 md:w-auto gap-2 z-10 !bottom-8 !left-1/2 md:!left-8 md:!translate-x-0 !-translate-x-1/2"></div>
			</Swiper>
		</section>
	);
}

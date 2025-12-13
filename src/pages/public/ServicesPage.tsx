import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Link } from 'react-router-dom';
import { ShoppingBag, Camera, Megaphone, ArrowRight, CheckCircle } from 'lucide-react';

export default function ServicesPage() {

	const services = [
		{
			id: 1,
			icon: <ShoppingBag className="w-8 h-8" />,
			title: 'Venda de Produtos Alimentares e de Bebidas de Origem Africana',
			description: 'Conectamos você aos melhores produtos alimentares e bebidas autênticos de África, com qualidade garantida e entrega confiável.',
			features: [
				'Ampla variedade de produtos alimentares africanos',
				'Bebidas tradicionais e autênticas',
				'Produtos frescos e de qualidade',
				'Importação direta de África',
				'Certificação de origem e qualidade'
			]
		},
		{
			id: 2,
			icon: <Camera className="w-8 h-8" />,
			title: 'Fotografia Profissional para Catálogo de Produtos',
			description: 'Serviço completo de fotografia profissional para destacar seus produtos e atrair mais clientes no marketplace.',
			features: [
				'Sessão fotográfica em estúdio profissional',
				'Edição e tratamento de imagens',
				'Fotos de alta qualidade para e-commerce',
				'Pacotes personalizados para vendedores',
				'Imagens otimizadas para catálogo online'
			]
		},
		{
			id: 3,
			icon: <Megaphone className="w-8 h-8" />,
			title: 'Serviço de Anúncio',
			description: 'Promova seus produtos de forma eficaz no Kutambula Marketplace e alcance mais clientes com nossos serviços de anúncio.',
			features: [
				'Destaque seus produtos no marketplace',
				'Maior visibilidade para sua loja',
				'Posicionamento estratégico dos anúncios',
				'Relatórios de desempenho',
				'Suporte para otimização de vendas'
			]
		}
	];

	return (
		<div className="min-h-screen bg-background">
			<Header />

			{/* Hero Section */}
			<section className="relative bg-secondary/5 py-16 sm:py-20 md:py-24 overflow-hidden">
				{/* Background Image */}
				<div className="absolute inset-0 z-0">
					<img 
						src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
						alt="Produtos Africanos" 
						className="w-full h-full object-cover opacity-20"
					/>
					<div className="absolute inset-0 bg-secondary/50"></div>
				</div>
				
				<div className="container mx-auto px-4 relative z-10">
					<div className="max-w-4xl mx-auto text-center">
						<div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-md">
							<span className="relative flex h-2 w-2">
								<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
								<span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
							</span>
							<span className="text-sm font-bold text-gray-800">Serviços Premium</span>
						</div>

						<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
							Serviços que Conectam África ao Mundo
						</h1>
						<p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
							Oferecemos soluções completas para facilitar o acesso a produtos africanos autênticos, 
							com qualidade garantida e entrega confiável.
						</p>
						<div className="flex flex-wrap items-center justify-center gap-4">
							<Link to="/marketplace">
								<button className="bg-primary hover:bg-tertiary text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-2">
									<ShoppingBag className="w-5 h-5" />
									<span>Explorar Produtos</span>
									<ArrowRight className="w-5 h-5" />
								</button>
							</Link>
							<Link to="/torne-se-vendedor">
								<button className="bg-white hover:bg-gray-50 text-gray-900 font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-2">
									<span>Vender no Kutambula</span>
								</button>
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Services Grid */}
			<section className="py-12 sm:py-16 md:py-20">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-4">
							Nossos Serviços
						</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							Descubra como podemos ajudar você a ter acesso aos melhores produtos africanos
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
						{services.map((service) => (
							<div
								key={service.id}
								className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-primary hover:-translate-y-1"
							>
								{/* Header simples */}
								<div className="p-6 bg-orange-50 border-b-2 border-orange-100">
									<div className="bg-white rounded-xl p-3 inline-flex mb-4 shadow-sm text-primary">
										{service.icon}
									</div>
									<h3 className="text-xl font-black text-gray-900 mb-2">{service.title}</h3>
								</div>

								{/* Content */}
								<div className="p-6">
									<p className="text-gray-700 mb-6 leading-relaxed">
										{service.description}
									</p>

									{/* Features */}
									<ul className="space-y-3 mb-6">
										{service.features.map((feature, idx) => (
											<li key={idx} className="flex items-start gap-2">
												<CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
												<span className="text-sm text-gray-700">{feature}</span>
											</li>
										))}
									</ul>

									{/* CTA */}
									<button className="w-full bg-primary hover:bg-tertiary text-white font-bold py-3 rounded-xl transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 group-hover:scale-105">
										<span>Saber Mais</span>
										<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}

import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Link } from 'react-router-dom';
import { Package, Truck, ShieldCheck, Headset, CreditCard, ArrowRight, CheckCircle, Clock, Award, Camera, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function ServicesPage() {
	const [openAccordion, setOpenAccordion] = useState<number | null>(null);

	const services = [
		{
			id: 1,
			icon: <Package className="w-8 h-8" />,
			title: 'Importação de Produtos Africanos',
			description: 'Facilitamos a importação de produtos autênticos diretamente de África para sua casa ou negócio.',
			features: [
				'Seleção cuidadosa de fornecedores',
				'Certificação de qualidade',
				'Documentação aduaneira completa',
				'Rastreamento em tempo real'
			]
		},
		{
			id: 2,
			icon: <Truck className="w-8 h-8" />,
			title: 'Entrega Expressa',
			description: 'Entregamos seus produtos africanos favoritos de forma rápida e segura em Angola e Europa.',
			features: [
				'Entregas em 24-48h em Luanda',
				'Entregas internacionais 5-7 dias',
				'Embalagem térmica para frescos',
				'Seguro de transporte incluído'
			]
		},
		{
			id: 3,
			icon: <ShieldCheck className="w-8 h-8" />,
			title: 'Garantia de Qualidade',
			description: 'Todos os produtos passam por rigoroso controle de qualidade antes de chegarem até você.',
			features: [
				'Inspeção de produtos',
				'Certificados sanitários',
				'Garantia de frescor',
				'Política de devolução 30 dias'
			]
		},
		{
			id: 4,
			icon: <Headset className="w-8 h-8" />,
			title: 'Suporte Personalizado',
			description: 'Nossa equipa está sempre disponível para ajudar com suas dúvidas e necessidades.',
			features: [
				'Atendimento em português',
				'WhatsApp Business ativo',
				'Suporte via email e telefone',
				'Consultoria de produtos gratuita'
			]
		},
		{
			id: 6,
			icon: <CreditCard className="w-8 h-8" />,
			title: 'Pagamento Flexível',
			description: 'Oferecemos múltiplas opções de pagamento para sua comodidade e segurança.',
			features: [
				'Cartão de crédito/débito',
				'Transferência bancária',
				'PayPal e Stripe',
				'Pagamento na entrega (Angola)'
			]
		},
		{
			id: 7,
			icon: <Camera className="w-8 h-8" />,
			title: 'Fotografia Profissional',
			description: 'Serviço completo de fotografia para destacar seus produtos e atrair mais clientes.',
			features: [
				'Sessão fotográfica em estúdio',
				'Edição e tratamento de imagens',
				'Fotos de alta qualidade para e-commerce',
				'Pacotes personalizados para vendedores'
			]
		}
	];

	const benefits = [
		{
			icon: <Clock className="w-6 h-6 text-primary" />,
			title: 'Economia de Tempo',
			description: 'Encontre todos os produtos africanos num só lugar',
			details: 'Com o Kutambula, você não precisa mais visitar várias lojas ou sites diferentes. Reunimos os melhores vendedores e produtos africanos em uma única plataforma, economizando horas de pesquisa e comparação.'
		},
		{
			icon: <ShieldCheck className="w-6 h-6 text-primary" />,
			title: 'Compra Segura',
			description: 'Proteção total em todas as suas transações',
			details: 'Sistema de pagamento criptografado, proteção ao comprador, verificação de vendedores e garantia de reembolso caso algo não saia como esperado. Sua segurança é nossa prioridade número um.'
		},
		{
			icon: <Award className="w-6 h-6 text-primary" />,
			title: 'Produtos Autênticos',
			description: 'Garantia de origem e qualidade certificada',
			details: 'Trabalhamos apenas com fornecedores verificados que garantem a autenticidade dos produtos. Cada item passa por controle de qualidade rigoroso para assegurar que você receba exatamente o que espera.'
		},
		{
			icon: <Headset className="w-6 h-6 text-primary" />,
			title: 'Suporte 24/7',
			description: 'Assistência sempre que você precisar',
			details: 'Nossa equipa de suporte está disponível 24 horas por dia, 7 dias por semana, através de chat, email e telefone. Respondemos em português e estamos prontos para ajudar com qualquer dúvida ou problema.'
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
									<Package className="w-5 h-5" />
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

			{/* Benefits Section */}
			<section className="py-12 sm:py-16 md:py-20 bg-orange-50">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-4">
							Por Que Escolher o Kutambula?
						</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							Benefícios exclusivos para sua experiência de compra
						</p>
					</div>

					<div className="max-w-4xl mx-auto space-y-4">
						{benefits.map((benefit, index) => (
							<div
								key={index}
								className="bg-white rounded-xl shadow-md border-2 border-gray-100 overflow-hidden"
							>
								<button
									onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
									className="w-full flex items-center justify-between p-6 hover:bg-orange-50 transition-colors text-left"
								>
									<div className="flex items-center gap-4 flex-1">
										<div className="bg-orange-100 rounded-lg p-3 shrink-0">
											{benefit.icon}
										</div>
										<div className="flex-1">
											<h3 className="text-lg font-bold text-gray-900 mb-1">
												{benefit.title}
											</h3>
											<p className="text-sm text-gray-600">
												{benefit.description}
											</p>
										</div>
									</div>
									<ChevronDown 
										className={`w-6 h-6 text-gray-600 transition-transform duration-300 shrink-0 ml-4 ${
											openAccordion === index ? 'rotate-180' : ''
										}`}
									/>
								</button>
								
								<div 
									className={`overflow-hidden transition-all duration-300 ${
										openAccordion === index ? 'max-h-96' : 'max-h-0'
									}`}
								>
									<div className="px-6 pb-6 pt-2">
										<p className="text-gray-700 leading-relaxed bg-orange-50 p-4 rounded-lg">
											{benefit.details}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-12 sm:py-16 md:py-20">
				<div className="container mx-auto px-4">
					<div className="bg-primary rounded-3xl p-8 sm:p-12 md:p-16 text-center text-white shadow-xl">
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4">
							Pronto para Começar?
						</h2>
						<p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
							Junte-se a milhares de clientes satisfeitos que já confiam no Kutambula Marketplace
						</p>
						<div className="flex flex-wrap items-center justify-center gap-4">
							<Link to="/marketplace">
								<button className="bg-white text-primary hover:bg-gray-50 font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-2">
									<Package className="w-5 h-5" />
									<span>Explorar Marketplace</span>
								</button>
							</Link>
							<Link to="/contacto">
								<button className="bg-secondary hover:bg-secondary/90 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-2">
									<Headset className="w-5 h-5" />
									<span>Falar com Suporte</span>
								</button>
							</Link>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}

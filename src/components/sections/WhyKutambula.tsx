import { Shield, Truck, Clock, HeadphonesIcon, CheckCircle2, Award, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function WhyKutambula() {
	const [openIndex, setOpenIndex] = useState<number | null>(0);
	const benefits = [
		{
			icon: Shield,
			title: 'Lojas Verificadas',
			description: 'Todas as lojas passam por um rigoroso processo de verificação para garantir qualidade e autenticidade'
		},
		{
			icon: Truck,
			title: 'Entrega Rápida',
			description: 'Produtos africanos autênticos entregues na sua porta em todo Portugal com rapidez e segurança'
		},
		{
			icon: CheckCircle2,
			title: 'Produtos Autênticos',
			description: 'Garantimos a autenticidade de todos os produtos alimentares e bebidas de origem africana'
		},
		{
			icon: HeadphonesIcon,
			title: 'Suporte 24/7',
			description: 'Equipa de apoio dedicada disponível a qualquer momento para ajudar com dúvidas e problemas'
		},
		{
			icon: Award,
			title: 'Melhor Qualidade',
			description: 'Selecionamos apenas produtos de alta qualidade de fornecedores confiáveis e certificados'
		},
		{
			icon: Clock,
			title: 'Compra Rápida',
			description: 'Processo de compra simplificado e intuitivo para uma experiência sem complicações'
		}
	];

	return (
		<section className="py-12 sm:py-16 md:py-20 bg-linear-to-br from-gray-50 via-white to-amber-50/30 relative overflow-hidden">
			{/* Decorative elements */}
			<div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
			<div className="absolute bottom-0 right-0 w-96 h-96 bg-tertiary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
			
			<div className="container mx-auto px-4 relative z-10">
				{/* Header */}
				<div className="text-center mb-10 sm:mb-12 md:mb-16">
					
					<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900">
						Por que Escolher o Kutambula
					</h2>
				
					<p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
						Conectamos a diáspora africana em Portugal aos sabores autênticos de casa com qualidade, confiança e conveniência
					</p>
				</div>

				{/* Accordion Benefits */}
				<div className="max-w-4xl mx-auto space-y-4">
					{benefits.map((benefit, index) => {
						const Icon = benefit.icon;
						const isOpen = openIndex === index;
						return (
							<div
								key={index}
								className="group bg-white rounded-2xl shadow-lg border-2 border-gray-100 hover:border-primary transition-all duration-300 overflow-hidden"
							>
								{/* Accordion Header */}
								<button
									onClick={() => setOpenIndex(isOpen ? null : index)}
									className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-gray-50/50 transition-colors duration-300"
								>
									<div className="flex items-center gap-4 flex-1">
										{/* Icon */}
										<div className="bg-primary/10 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
											<Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
										</div>
										
										{/* Title */}
										<h3 className="text-base sm:text-lg md:text-xl font-black text-gray-900 group-hover:text-primary transition-colors duration-300">
											{benefit.title}
										</h3>
									</div>

									{/* Chevron Icon */}
									<ChevronDown 
										className={`w-6 h-6 text-gray-400 transition-transform duration-300 shrink-0 ml-4 ${
											isOpen ? 'rotate-180 text-primary' : ''
										}`}
									/>
								</button>

								{/* Accordion Content */}
								<div 
									className={`overflow-hidden transition-all duration-500 ${
										isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
									}`}
								>
									<div className="px-5 sm:px-6 pb-5 sm:pb-6 pl-16 sm:pl-20">
										<div className="relative bg-gray-50 rounded-xl p-4 sm:p-5 border-l-4 border-primary">
											<p className="text-sm sm:text-base text-gray-700 leading-relaxed">
												{benefit.description}
											</p>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
				
			</div>
		</section>
	);
}

import { ArrowRight, TrendingUp, Globe } from 'lucide-react';

export default function AdvertiseHero() {
	return (
		<section className="relative overflow-hidden bg-secondary pt-16 pb-20 lg:pt-24 lg:pb-28">
			{/* Background Pattern & Effects */}
			<div className="absolute inset-0 opacity-10 african-pattern"></div>
			<div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
			<div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-tertiary/20 rounded-full blur-3xl"></div>

			<div className="container mx-auto px-4 relative z-10">
				<div className="grid lg:grid-cols-2 gap-12 items-center">

					{/* Text Content */}
					<div className="text-white space-y-8">
						<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
							<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
							<span className="text-sm font-medium text-gray-200">Kutambula Marketplace</span>
						</div>

						<h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
							Expanda seu Negócio para <span className="text-primary">Milhões</span> de Clientes
						</h1>

						<p className="text-lg text-gray-300 max-w-xl leading-relaxed">
							A plataforma líder para conectar produtores e vendedores de
							<span className="text-white font-bold"> alimentos</span> e
							<span className="text-white font-bold"> bebidas de origem africana</span>
							ao mercado global.
						</p>

						<div className="flex flex-col sm:flex-row gap-4">
							<button className="group bg-primary hover:bg-tertiary text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:translate-y-[-2px] shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-3">
								Começar a Anunciar
								<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
							</button>
							<button className="px-8 py-4 rounded-xl border border-white/20 hover:bg-white/10 text-white font-semibold transition-all duration-300 backdrop-blur-sm">
								Saber Mais
							</button>
						</div>

						<div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
							<div>
								<div className="text-3xl font-black text-white mb-1">15k+</div>
								<div className="text-sm text-gray-400">Vendedores Ativos</div>
							</div>
							<div>
								<div className="text-3xl font-black text-white mb-1">2M+</div>
								<div className="text-sm text-gray-400">Visitas Mensais</div>
							</div>
							<div>
								<div className="text-3xl font-black text-white mb-1">98%</div>
								<div className="text-sm text-gray-400">Satisfação</div>
							</div>
						</div>
					</div>

					{/* Visual Content */}
					<div className="relative">
						<div className="relative z-10 grid grid-cols-2 gap-4">
							<div className="space-y-4 mt-12">
								<div className="bg-white p-4 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300">
									<div className="h-32 bg-orange-100 rounded-xl mb-4 overflow-hidden relative group">
										<img
											src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop"
											alt="Produtos Alimentares"
											className="w-full h-full object-cover"
										/>
										<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
									</div>
									<h3 className="font-bold text-gray-900">Alimentos</h3>
									<p className="text-xs text-gray-500 mt-1">Grãos, Temperos e mais</p>
								</div>
								<div className="bg-primary/90 p-6 rounded-2xl shadow-xl text-white backdrop-blur-sm">
									<TrendingUp className="w-8 h-8 mb-3" />
									<div className="font-bold text-2xl mb-1">+125%</div>
									<div className="text-sm opacity-90">Crescimento em vendas</div>
								</div>
							</div>

							<div className="space-y-4">
								<div className="bg-white p-4 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300">
									<div className="h-40 bg-amber-100 rounded-xl mb-4 overflow-hidden relative group">
										<img
											src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=400&fit=crop"
											alt="Bebidas Africanas"
											className="w-full h-full object-cover"
										/>
										<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
									</div>
									<h3 className="font-bold text-gray-900">Bebidas</h3>
									<p className="text-xs text-gray-500 mt-1">Origem Africana</p>
								</div>
								<div className="bg-white/10 border border-white/20 p-6 rounded-2xl backdrop-blur-md text-white">
									<Globe className="w-8 h-8 mb-3 text-primary" />
									<div className="font-bold text-lg">Alcance Global</div>
									<div className="text-xs text-gray-300 mt-1">Venda para todo o mundo</div>
								</div>
							</div>
						</div>

						{/* Decorative Elements behind grid */}
						<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl -z-10"></div>
					</div>
				</div>
			</div>
		</section>
	);
}

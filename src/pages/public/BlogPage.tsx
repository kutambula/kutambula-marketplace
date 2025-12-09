import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight, Search, Tag, TrendingUp, BookOpen } from 'lucide-react';
import { useState } from 'react';

export default function BlogPage() {
	const [selectedCategory, setSelectedCategory] = useState('todos');
	const [searchTerm, setSearchTerm] = useState('');

	const categories = [
		{ id: 'todos', name: 'Todos', icon: '📚' },
		{ id: 'receitas', name: 'Receitas Africanas', icon: '🍲' },
		{ id: 'cultura', name: 'Cultura & Tradições', icon: '🎭' },
		{ id: 'saude', name: 'Saúde & Nutrição', icon: '🥗' },
		{ id: 'negocios', name: 'Negócios & Empreendedorismo', icon: '💼' },
		{ id: 'produtos', name: 'Guia de Produtos', icon: '🛒' },
		{ id: 'dicas', name: 'Dicas & Tutoriais', icon: '💡' },
	];

	const blogPosts = [
		{
			id: 1,
			title: 'Os Benefícios do Óleo de Palma na Culinária Africana',
			excerpt: 'Descubra como o óleo de palma vermelho é essencial na gastronomia africana e os seus benefícios nutricionais quando consumido com moderação.',
			image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&h=500&fit=crop',
			category: 'saude',
			author: 'Maria Santos',
			date: '2025-12-05',
			readTime: '5 min',
			featured: true,
			tags: ['óleo de palma', 'nutrição', 'culinária africana']
		},
		{
			id: 2,
			title: 'Receita Tradicional: Como Fazer Muamba de Galinha',
			excerpt: 'Aprenda passo a passo a preparar uma autêntica muamba de galinha angolana, um dos pratos mais emblemáticos da cozinha africana.',
			image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&h=500&fit=crop',
			category: 'receitas',
			author: 'Chef António',
			date: '2025-12-03',
			readTime: '8 min',
			featured: true,
			tags: ['receita', 'angola', 'muamba', 'galinha']
		},
		{
			id: 3,
			title: 'Guia Completo: Especiarias Africanas que Deve Ter na Cozinha',
			excerpt: 'Do piri-piri ao berbere, conheça as especiarias essenciais da culinária africana e como utilizá-las para realçar o sabor dos seus pratos.',
			image: 'https://images.unsplash.com/photo-1596040033229-a0b4d1ab7faa?w=800&h=500&fit=crop',
			category: 'produtos',
			author: 'Ana Fernandes',
			date: '2025-12-01',
			readTime: '6 min',
			featured: false,
			tags: ['especiarias', 'piri-piri', 'berbere', 'temperos']
		},
		{
			id: 4,
			title: 'A História do Café Etíope: Da Origem ao Seu Copo',
			excerpt: 'Uma viagem pela história fascinante do café, desde as terras altas da Etiópia até se tornar uma das bebidas mais consumidas do mundo.',
			image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=500&fit=crop',
			category: 'cultura',
			author: 'João Mendes',
			date: '2025-11-28',
			readTime: '7 min',
			featured: false,
			tags: ['café', 'etiópia', 'história', 'cultura']
		},
		{
			id: 5,
			title: 'Como Iniciar o Seu Negócio de Produtos Africanos em Portugal',
			excerpt: 'Dicas práticas e estratégias para empreendedores que desejam abrir uma loja de produtos africanos no mercado português.',
			image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=500&fit=crop',
			category: 'negocios',
			author: 'Carlos Silva',
			date: '2025-11-25',
			readTime: '10 min',
			featured: false,
			tags: ['empreendedorismo', 'negócios', 'portugal', 'dicas']
		},
		{
			id: 6,
			title: 'Funge: O Alimento Base da Culinária Angolana',
			excerpt: 'Tudo o que precisa saber sobre o funge, desde a sua preparação tradicional até as diferentes variações regionais em Angola.',
			image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&h=500&fit=crop',
			category: 'receitas',
			author: 'Teresa Domingos',
			date: '2025-11-22',
			readTime: '6 min',
			featured: false,
			tags: ['funge', 'angola', 'receita', 'tradição']
		},
		{
			id: 7,
			title: 'Os Superalimentos Africanos que Está a Ignorar',
			excerpt: 'Conheça alimentos africanos ricos em nutrientes como o baobab, moringa e fonio que podem revolucionar a sua alimentação.',
			image: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=800&h=500&fit=crop',
			category: 'saude',
			author: 'Dra. Luísa Gomes',
			date: '2025-11-20',
			readTime: '8 min',
			featured: false,
			tags: ['superalimentos', 'baobab', 'moringa', 'nutrição']
		},
		{
			id: 8,
			title: 'Dicas para Conservar Produtos Africanos Frescos',
			excerpt: 'Aprenda as melhores técnicas para armazenar e conservar produtos alimentares africanos mantendo a sua qualidade e sabor.',
			image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=500&fit=crop',
			category: 'dicas',
			author: 'Paulo Ribeiro',
			date: '2025-11-18',
			readTime: '5 min',
			featured: false,
			tags: ['conservação', 'armazenamento', 'dicas', 'produtos']
		},
		{
			id: 9,
			title: 'Celebrações Africanas: Comidas Típicas de Festividades',
			excerpt: 'Descubra os pratos tradicionais servidos nas principais celebrações africanas e o significado cultural por trás de cada receita.',
			image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=500&fit=crop',
			category: 'cultura',
			author: 'Mariana Costa',
			date: '2025-11-15',
			readTime: '9 min',
			featured: false,
			tags: ['festividades', 'tradições', 'cultura', 'celebrações']
		},
	];

	const filteredPosts = blogPosts.filter(post => {
		const matchesCategory = selectedCategory === 'todos' || post.category === selectedCategory;
		const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
							  post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
							  post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
		return matchesCategory && matchesSearch;
	});

	const featuredPosts = blogPosts.filter(post => post.featured);
	const popularTags = ['receitas', 'angola', 'especiarias', 'café', 'nutrição', 'tradição', 'dicas', 'empreendedorismo'];

	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		return date.toLocaleDateString('pt-PT', { day: 'numeric', month: 'long', year: 'numeric' });
	};

	return (
		<div className="min-h-screen bg-gray-50">
			<Header />

			{/* Hero Section */}
			<section className="relative bg-linear-to-br from-secondary via-secondary to-primary py-16 sm:py-20 md:py-24 overflow-hidden">
				{/* Decorative elements */}
				<div className="absolute inset-0 opacity-10">
					<div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
					<div className="absolute bottom-10 right-10 w-48 h-48 bg-primary rounded-full blur-3xl"></div>
				</div>

				<div className="container mx-auto px-4 relative z-10">
					<div className="text-center max-w-4xl mx-auto">
						<div className="flex items-center justify-center gap-3 mb-4">
							<BookOpen className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
							<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white">
								Blog Kutambula
							</h1>
						</div>
						<p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
							Receitas, dicas, cultura e tudo sobre a gastronomia africana. 
							Explore o nosso conteúdo e descubra novos sabores!
						</p>

						{/* Search Bar */}
						<div className="max-w-2xl mx-auto">
							<div className="relative">
								<input
									type="text"
									placeholder="Pesquisar artigos, receitas, dicas..."
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
									className="w-full px-6 py-4 pl-14 rounded-full text-gray-700 bg-white shadow-xl focus:outline-none focus:ring-4 focus:ring-white/30 text-base"
								/>
								<Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Categories Filter */}
			<section className="bg-white border-b border-gray-200 sticky top-[72px] z-40 shadow-sm">
				<div className="container mx-auto px-4">
					<div className="flex gap-2 py-4 overflow-x-auto scrollbar-hide">
						{categories.map((category) => (
							<button
								key={category.id}
								onClick={() => setSelectedCategory(category.id)}
								className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
									selectedCategory === category.id
										? 'bg-primary text-white shadow-lg'
										: 'bg-gray-100 text-gray-700 hover:bg-gray-200'
								}`}
							>
								<span>{category.icon}</span>
								<span>{category.name}</span>
							</button>
						))}
					</div>
				</div>
			</section>

			<div className="container mx-auto px-4 py-10 sm:py-12 md:py-16">
				{/* Featured Posts - Full Width */}
				{selectedCategory === 'todos' && searchTerm === '' && (
					<div className="mb-12">
						<h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-6 flex items-center gap-3">
							<TrendingUp className="w-7 h-7 text-primary" />
							Artigos em Destaque
						</h2>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
							{featuredPosts.map((post) => (
								<Link
									key={post.id}
									to={`/blog/${post.id}`}
									className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
								>
									<div className="relative h-64 lg:h-72 overflow-hidden">
										<img
											src={post.image}
											alt={post.title}
											className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
										/>
										<div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
										<div className="absolute top-4 left-4">
											<span className="bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full">
												{categories.find(c => c.id === post.category)?.name}
											</span>
										</div>
										<div className="absolute bottom-4 left-4 right-4">
											<h3 className="text-xl lg:text-2xl font-bold text-white mb-2 line-clamp-2 group-hover:text-primary transition-colors">
												{post.title}
											</h3>
											<p className="text-white/80 text-sm mb-3 line-clamp-2 hidden sm:block">
												{post.excerpt}
											</p>
											<div className="flex items-center gap-3 text-white/80 text-sm">
												<span className="flex items-center gap-1">
													<Calendar className="w-4 h-4" />
													{formatDate(post.date)}
												</span>
												<span className="flex items-center gap-1">
													<Clock className="w-4 h-4" />
													{post.readTime}
												</span>
											</div>
										</div>
									</div>
								</Link>
							))}
						</div>
					</div>
				)}

				{/* Main Grid with Sidebar */}
				<div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
					{/* Main Content - Takes 3 columns on xl */}
					<div className="xl:col-span-3">
						{/* All Posts Grid */}
						<div>
							<h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-6 flex items-center gap-3">
								<BookOpen className="w-7 h-7 text-primary" />
								{selectedCategory === 'todos' ? 'Todos os Artigos' : categories.find(c => c.id === selectedCategory)?.name}
								<span className="text-base font-normal text-gray-500">({filteredPosts.length})</span>
							</h2>

							{filteredPosts.length > 0 ? (
								<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
									{filteredPosts.map((post) => (
										<Link
											key={post.id}
											to={`/blog/${post.id}`}
											className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-primary"
										>
											<div className="relative h-48 overflow-hidden">
												<img
													src={post.image}
													alt={post.title}
													className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
												/>
												<div className="absolute top-3 left-3">
													<span className="bg-white/95 backdrop-blur-sm text-primary text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
														{categories.find(c => c.id === post.category)?.icon} {categories.find(c => c.id === post.category)?.name}
													</span>
												</div>
											</div>
											<div className="p-5">
												<h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
													{post.title}
												</h3>
												<p className="text-sm text-gray-600 mb-4 line-clamp-2">
													{post.excerpt}
												</p>
												<div className="flex items-center justify-between text-sm">
													<div className="flex items-center gap-2 text-gray-500">
														<User className="w-4 h-4" />
														<span>{post.author}</span>
													</div>
													<div className="flex items-center gap-2 text-gray-500">
														<Clock className="w-4 h-4" />
														<span>{post.readTime}</span>
													</div>
												</div>
												<div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
													<span className="text-xs text-gray-400">{formatDate(post.date)}</span>
													<span className="flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
														Ler mais <ArrowRight className="w-4 h-4" />
													</span>
												</div>
											</div>
										</Link>
									))}
								</div>
							) : (
								<div className="text-center py-16 bg-white rounded-2xl shadow-md">
									<BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
									<h3 className="text-xl font-bold text-gray-700 mb-2">Nenhum artigo encontrado</h3>
									<p className="text-gray-500 mb-6">Tente outra categoria ou termo de pesquisa</p>
									<button
										onClick={() => { setSelectedCategory('todos'); setSearchTerm(''); }}
										className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-tertiary transition-colors"
									>
										Ver todos os artigos
									</button>
								</div>
							)}
						</div>
					</div>

					{/* Sidebar - Takes 1 column on xl */}
					<div className="xl:col-span-1">
						<div className="sticky top-[140px] space-y-6">
							{/* Popular Tags */}
							<div className="bg-white rounded-2xl p-6 shadow-md border-2 border-gray-100">
								<h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
									<Tag className="w-5 h-5 text-primary" />
									Tags Populares
								</h3>
								<div className="flex flex-wrap gap-2">
									{popularTags.map((tag) => (
										<button
											key={tag}
											onClick={() => setSearchTerm(tag)}
											className="bg-gray-100 hover:bg-primary hover:text-white text-gray-700 text-sm font-medium px-3 py-1.5 rounded-full transition-colors"
										>
											#{tag}
										</button>
									))}
								</div>
							</div>

							{/* Newsletter */}
							<div className="bg-linear-to-br from-primary to-tertiary rounded-2xl p-6 shadow-lg text-white">
								<h3 className="text-lg font-bold mb-2">📬 Newsletter</h3>
								<p className="text-white/90 text-sm mb-4">
									Receba as últimas receitas e dicas diretamente no seu email.
								</p>
								<input
									type="email"
									placeholder="O seu email"
									className="w-full px-4 py-3 rounded-lg bg-white text-gray-700 placeholder-gray-400 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-white/50"
								/>
								<button className="w-full bg-white text-primary font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors">
									Subscrever
								</button>
							</div>

							{/* CTA - Sell Products */}
							<div className="bg-white rounded-2xl p-6 shadow-md border-2 border-gray-100">
								<div className="text-center">
									<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
										<i className='bx bx-store-alt text-3xl text-primary'></i>
									</div>
									<h3 className="text-lg font-bold text-gray-900 mb-2">Vende Produtos Africanos?</h3>
									<p className="text-sm text-gray-600 mb-4">
										Junte-se ao Kutambula e alcance milhares de clientes em Portugal e Europa.
									</p>
									<Link
										to="/anuncie"
										className="block w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-tertiary transition-colors"
									>
										Começar a Vender
									</Link>
								</div>
							</div>

							{/* Categories Quick Access */}
							<div className="bg-white rounded-2xl p-6 shadow-md border-2 border-gray-100">
								<h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
									<BookOpen className="w-5 h-5 text-primary" />
									Categorias
								</h3>
								<div className="space-y-2">
									{categories.slice(1).map((category) => (
										<button
											key={category.id}
											onClick={() => setSelectedCategory(category.id)}
											className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all ${
												selectedCategory === category.id
													? 'bg-primary text-white'
													: 'bg-gray-50 text-gray-700 hover:bg-gray-100'
											}`}
										>
											<span className="text-lg">{category.icon}</span>
											<span className="font-medium text-sm">{category.name}</span>
										</button>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}

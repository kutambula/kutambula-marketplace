import { useState } from 'react';
import { MapPin, Phone, Mail, Star, Package, Shield, TrendingUp, Grid, List, SlidersHorizontal, Heart, Share2, MessageCircle } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { useParams } from 'react-router-dom';
import type { ProductReturn } from '../../types/interfaces';
import { useQuery } from '@tanstack/react-query';

export interface organizationResponse {
    banner: string
    id: string
    logo: string
    name: string
    specialties: [string]
    metadata: string | null,
    verified: boolean,
    averageRating: number,
    category: string | null,
    description: string,
    ratingsCount: number,
    tags: [String]
    address: string
    phone: string
    email: string
    slug: string
}

export default function StorePage() {
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [activeTab, setActiveTab] = useState<'products' | 'about' | 'reviews'>('products');
    const { storeId } = useParams();
    const [page, setPage] = useState(1);
    const [limit] = useState(5);

    const { data: store } = useQuery<organizationResponse | null>({
        queryKey: ['stores', storeId, page, limit],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/organization/${storeId}`);
            if (!res.ok) throw new Error('Network response was not ok');
            return res.json() as Promise<organizationResponse>;
        },
    });

    const { data: products, isLoading, error } = useQuery<ProductReturn | null>({
        queryKey: ['products', storeId, page, limit],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/product/find/${storeId}?limit=${limit}&page=${page}`);
            if (!res.ok) throw new Error('Network response was not ok');
            return res.json() as Promise<ProductReturn>;
        },
    });

    const totalPages = products?.total || 1;

    // Estatísticas da loja
    const stats = [
        { icon: Package, label: 'Produtos', value: '1,250+', color: 'text-blue-600', bg: 'bg-blue-50' },
        { icon: Star, label: 'Avaliação', value: '4.8/5.0', color: 'text-yellow-600', bg: 'bg-yellow-50' },
        { icon: TrendingUp, label: 'Vendas', value: '10k+', color: 'text-green-600', bg: 'bg-green-50' },
        { icon: Shield, label: 'Verificada', value: 'Oficial', color: 'text-purple-600', bg: 'bg-purple-50' }
    ];

    console.log(products)
    console.log(store)

    // Avaliações
    const reviews = [
        {
            id: 1,
            userName: 'João Silva',
            userAvatar: 'https://i.pravatar.cc/150?img=12',
            rating: 5,
            date: '15 de Out, 2025',
            comment: 'Excelente loja! Produtos de qualidade e entrega rápida. Recomendo muito!',
            helpful: 45
        },
        {
            id: 2,
            userName: 'Maria Santos',
            userAvatar: 'https://i.pravatar.cc/150?img=23',
            rating: 5,
            date: '10 de Out, 2025',
            comment: 'Atendimento impecável. Comprei um notebook e chegou antes do prazo. Produto original e bem embalado.',
            helpful: 38
        },
        {
            id: 3,
            userName: 'Pedro Costa',
            userAvatar: 'https://i.pravatar.cc/150?img=33',
            rating: 4,
            date: '05 de Out, 2025',
            comment: 'Boa loja, preços competitivos. Única observação é que o atendimento poderia ser mais rápido.',
            helpful: 22
        },
        {
            id: 4,
            userName: 'Ana Ferreira',
            userAvatar: 'https://i.pravatar.cc/150?img=45',
            rating: 5,
            date: '01 de Out, 2025',
            comment: 'Melhor loja de tecnologia que já comprei! Produtos originais com garantia. Voltarei a comprar com certeza.',
            helpful: 56
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Banner da Loja */}
            <section className="relative h-80 overflow-hidden">
                <img
                    src={store?.banner}
                    alt={store?.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

                {/* Botões de Ação Superior */}
                <div className="absolute top-6 right-6 flex gap-3">
                    <button className="bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110">
                        <Share2 className="w-5 h-5 text-gray-700" />
                    </button>
                    <button className="bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110">
                        <Heart className="w-5 h-5 text-gray-700" />
                    </button>
                </div>
            </section>

            {/* Informações da Loja */}
            <section className="container mx-auto px-4 -mt-24 relative z-10">
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 md:p-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        {/* Logo */}
                        <div className="relative shrink-0">
                            <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-white">
                                <img
                                    src={store?.logo}
                                    alt={`${store?.name} logo`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {store?.verified && (
                                <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white p-2 rounded-full shadow-lg">
                                    <Shield className="w-5 h-5" />
                                </div>
                            )}
                        </div>

                        {/* Informações Principais */}
                        <div className="flex-1">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                                <div>
                                    <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
                                        {store?.name}
                                    </h1>
                                    <p className="text-gray-600 font-medium mb-3">{store?.category}</p>

                                    {/* Avaliação */}
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="flex items-center gap-1">
                                            <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                                            <span className="font-bold text-lg text-gray-900">{store?.averageRating}</span>
                                        </div>
                                        <span className="text-gray-500">({store?.ratingsCount.toLocaleString()} avaliações)</span>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {store?.specialties.map((tag, index) => (
                                            <span key={index} className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Botões de Ação */}
                                <div className="flex flex-col gap-3 w-full md:w-auto">
                                    <button className="bg-primary hover:bg-tertiary text-white font-bold py-3 px-6 rounded-xl transition-all hover:shadow-lg flex items-center justify-center gap-2">
                                        <MessageCircle className="w-5 h-5" />
                                        Contactar Loja
                                    </button>
                                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-3 px-6 rounded-xl transition-all border-2 border-gray-300 flex items-center justify-center gap-2">
                                        <Heart className="w-5 h-5" />
                                        Seguir ({(68 / 1000).toFixed(1)}k)
                                    </button>
                                </div>
                            </div>

                            {/* Informações de Contato */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                                <div className="flex items-center gap-2 text-sm">
                                    <MapPin className="w-4 h-4 text-gray-500" />
                                    <span className="text-gray-700">{store?.address}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <Phone className="w-4 h-4 text-gray-500" />
                                    <span className="text-gray-700">{store?.phone}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <Mail className="w-4 h-4 text-gray-500" />
                                    <span className="text-gray-700">{store?.email}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Estatísticas */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-lg transition-shadow">
                            <div className={`w-12 h-12 ${stat.bg} rounded-lg flex items-center justify-center mb-3`}>
                                <stat.icon className={`w-6 h-6 ${stat.color}`} />
                            </div>
                            <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                            <p className="text-2xl font-black text-gray-900">{stat.value}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Tabs e Conteúdo */}
            <section className="container mx-auto px-4 py-8">
                {/* Tabs */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
                    <div className="flex border-b border-gray-200 overflow-x-auto">
                        <button
                            onClick={() => setActiveTab('products')}
                            className={`flex-1 md:flex-none px-6 py-4 font-bold transition-colors border-b-2 ${activeTab === 'products'
                                ? 'border-primary text-primary'
                                : 'border-transparent text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            Produtos ({products?.total})
                        </button>
                        <button
                            onClick={() => setActiveTab('about')}
                            className={`flex-1 md:flex-none px-6 py-4 font-bold transition-colors border-b-2 ${activeTab === 'about'
                                ? 'border-primary text-primary'
                                : 'border-transparent text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            Sobre a Loja
                        </button>
                        <button
                            onClick={() => setActiveTab('reviews')}
                            className={`flex-1 md:flex-none px-6 py-4 font-bold transition-colors border-b-2 ${activeTab === 'reviews'
                                ? 'border-primary text-primary'
                                : 'border-transparent text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            Avaliações ({reviews.length})
                        </button>
                    </div>
                </div>

                {/* Conteúdo dos Tabs */}
                {activeTab === 'products' && (
                    <>
                        {/* Controles de Produtos */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <p className="text-gray-600">
                                    Mostrando <span className="font-bold text-gray-900">{(products?.page || 0) * (products?.data?.length || 1)}</span> de <span className="font-bold text-gray-900">{products?.total}</span> produtos
                                </p>

                                <div className="flex items-center gap-3">
                                    {/* Ordenação */}
                                    <select className="bg-gray-50 border-2 border-gray-200 hover:border-primary focus:border-primary rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none cursor-pointer transition-colors">
                                        <option value="relevance">Mais Relevantes</option>
                                        <option value="price-low">Menor Preço</option>
                                        <option value="price-high">Maior Preço</option>
                                        <option value="newest">Mais Recentes</option>
                                        <option value="rating">Melhor Avaliação</option>
                                    </select>

                                    {/* Filtros Mobile */}
                                    <button className="md:hidden flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                                        <SlidersHorizontal className="w-4 h-4" />
                                        <span className="text-sm font-medium">Filtros</span>
                                    </button>

                                    {/* Visualização */}
                                    <div className="hidden md:flex items-center gap-1 bg-gray-100 rounded-lg p-1">
                                        <button
                                            onClick={() => setViewMode('grid')}
                                            className={`p-2 rounded-md transition-colors ${viewMode === 'grid'
                                                ? 'bg-white text-primary shadow-sm'
                                                : 'text-gray-600 hover:text-gray-800'
                                                }`}
                                        >
                                            <Grid className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => setViewMode('list')}
                                            className={`p-2 rounded-md transition-colors ${viewMode === 'list'
                                                ? 'bg-white text-primary shadow-sm'
                                                : 'text-gray-600 hover:text-gray-800'
                                                }`}
                                        >
                                            <List className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Grid de Produtos */}
                        <div className={
                            viewMode === 'grid'
                                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6'
                                : 'flex flex-col gap-4'
                        }>
                            {products?.data && products.data.map((product) => (
                                viewMode === 'grid' ? (
                                    <div
                                        key={product.id}
                                        className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300 cursor-pointer group"
                                    >
                                        <div className="aspect-square bg-gray-100 relative overflow-hidden">
                                            <img
                                                src={product.images[0]}
                                                alt={product.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />

                                            <div className="absolute top-2 left-2 right-2 flex justify-between items-start">
                                                {product.frete && (
                                                    <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded shadow-lg">
                                                        Frete Grátis
                                                    </span>
                                                )}
                                                {product.discount_percent > 0 && (
                                                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                                                        -{product.discount_percent}%
                                                    </span>
                                                )}
                                            </div>

                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                <button className="bg-white text-gray-900 font-semibold px-4 py-2 rounded-lg hover:bg-primary hover:text-white transform scale-90 group-hover:scale-100 transition-all duration-300 shadow-xl text-sm">
                                                    Ver Detalhes
                                                </button>
                                            </div>
                                        </div>

                                        <div className="p-3 space-y-2">
                                            <h3 className="font-semibold text-sm text-gray-900 line-clamp-2 group-hover:text-primary transition-colors h-10">
                                                {product.name}
                                            </h3>

                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-1 text-xs">
                                                    <span className="text-yellow-500">★</span>
                                                    <span className="font-semibold text-gray-900">{product.averageRating}</span>
                                                    <span className="text-gray-400">({product.ratingsCount})</span>
                                                </div>
                                                {product.stockQuantity > 0 ? (
                                                    <span className="text-xs text-green-600 font-medium">Em estoque</span>
                                                ) : (
                                                    <span className="text-xs text-red-600 font-medium">Esgotado</span>
                                                )}
                                            </div>

                                            <div className="pt-2 border-t border-gray-100">
                                                <p className="text-xl font-black text-primary">
                                                    {product.price.toLocaleString('pt-AO', {
                                                        style: 'currency',
                                                        currency: 'AOA'
                                                    })}
                                                </p>
                                                {product.price > product.price && (
                                                    <p className="text-xs text-gray-400 line-through">
                                                        {product.price.toLocaleString('pt-AO', {
                                                            style: 'currency',
                                                            currency: 'AOA'
                                                        })}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div
                                        key={product.id}
                                        className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300 cursor-pointer group flex"
                                    >
                                        <div className="w-48 h-48 bg-gray-100 relative overflow-hidden shrink-0">
                                            <img
                                                src={product.images[0]}
                                                alt={product.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            {product.discount_percent > 0 && (
                                                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                                                    -{product.discount_percent}%
                                                </span>
                                            )}
                                        </div>

                                        <div className="flex-1 p-4 flex flex-col justify-between">
                                            <div>
                                                <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                                    {product.name}
                                                </h3>

                                                <div className="flex items-center gap-2 mb-3">
                                                    <div className="flex items-center gap-1">
                                                        <span className="text-yellow-500 font-bold">★</span>
                                                        <span className="font-semibold text-gray-900">{product.averageRating}</span>
                                                    </div>
                                                    <span className="text-gray-400 text-sm">({product.ratingsCount} avaliações)</span>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-3">
                                                    {product.frete && (
                                                        <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                                                            Frete Grátis
                                                        </span>
                                                    )}
                                                    {product.stockQuantity > 0 ? (
                                                        <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                                                            Em estoque
                                                        </span>
                                                    ) : (
                                                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full">
                                                            Esgotado
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="flex items-end justify-between">
                                                <div>
                                                    {product.price > product.price && (
                                                        <p className="text-sm text-gray-400 line-through mb-1">
                                                            {product.price.toLocaleString('pt-AO', {
                                                                style: 'currency',
                                                                currency: 'AOA'
                                                            })}
                                                        </p>
                                                    )}
                                                    <p className="text-3xl font-black text-primary">
                                                        {product.price.toLocaleString('pt-AO', {
                                                            style: 'currency',
                                                            currency: 'AOA'
                                                        })}
                                                    </p>
                                                </div>
                                                <button
                                                    disabled={!(product.stockQuantity > 0)}
                                                    className={`px-6 py-3 text-sm font-bold rounded-xl transition-all duration-300 ${product.stockQuantity > 0
                                                        ? 'bg-primary hover:bg-tertiary text-white hover:shadow-lg'
                                                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                                        }`}
                                                >
                                                    {product.stockQuantity > 0 ? 'Adicionar ao Carrinho' : 'Indisponível'}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </>
                )}

                {activeTab === 'about' && (
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
                        <h2 className="text-2xl font-black text-gray-900 mb-4">Sobre a Loja</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            {store?.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="space-y-3">
                                <h3 className="font-bold text-gray-900 mb-3">Informações de Contato</h3>
                                <div className="flex items-center gap-3 text-gray-700">
                                    <MapPin className="w-5 h-5 text-primary" />
                                    <span>{store?.address}</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-700">
                                    <Phone className="w-5 h-5 text-primary" />
                                    <span>{store?.phone}</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-700">
                                    <Mail className="w-5 h-5 text-primary" />
                                    <span>{store?.email}</span>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <h3 className="font-bold text-gray-900 mb-3">Desempenho</h3>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Tempo de Resposta:</span>
                                        <span className="font-bold text-gray-900">500</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Taxa de Resposta:</span>
                                        <span className="font-bold text-green-600">1500</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Membro desde:</span>
                                        <span className="font-bold text-gray-900">26942</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                            <div className="flex items-start gap-4">
                                <Shield className="w-8 h-8 text-blue-600 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-blue-900 mb-2">Loja Verificada</h4>
                                    <p className="text-blue-800 text-sm">
                                        Esta loja foi verificada pela plataforma Kutambula Marketplace. Todos os produtos são originais e acompanhados de garantia oficial.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'reviews' && (
                    <div className="space-y-6">
                        {/* Resumo de Avaliações */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="text-center md:text-left">
                                    <div className="text-6xl font-black text-gray-900 mb-2">{store?.averageRating}</div>
                                    <div className="flex items-center justify-center md:justify-start gap-1 mb-2">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star
                                                key={star}
                                                className={`w-6 h-6 ${star <= Math.round(store?.ratingsCount || 0)
                                                    ? 'fill-yellow-500 text-yellow-500'
                                                    : 'text-gray-300'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <p className="text-gray-600">{store?.averageRating.toLocaleString()} avaliações</p>
                                </div>

                                <div className="flex-1">
                                    {[5, 4, 3, 2, 1].map((stars) => (
                                        <div key={stars} className="flex items-center gap-3 mb-2">
                                            <span className="text-sm text-gray-600 w-12">{stars} ★</span>
                                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                                                <div
                                                    className="bg-yellow-500 h-2 rounded-full"
                                                    style={{ width: `${stars === 5 ? 75 : stars === 4 ? 20 : stars === 3 ? 3 : stars === 2 ? 1 : 1}%` }}
                                                />
                                            </div>
                                            <span className="text-sm text-gray-600 w-12 text-right">
                                                {stars === 5 ? '75%' : stars === 4 ? '20%' : stars === 3 ? '3%' : stars === 2 ? '1%' : '1%'}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Lista de Avaliações */}
                        {reviews.map((review) => (
                            <div key={review.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                                <div className="flex items-start gap-4">
                                    <img
                                        src={review.userAvatar}
                                        alt={review.userName}
                                        className="w-12 h-12 rounded-full"
                                    />
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <h4 className="font-bold text-gray-900">{review.userName}</h4>
                                            <span className="text-sm text-gray-500">{review.date}</span>
                                        </div>

                                        <div className="flex items-center gap-1 mb-3">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star
                                                    key={star}
                                                    className={`w-4 h-4 ${star <= review.rating
                                                        ? 'fill-yellow-500 text-yellow-500'
                                                        : 'text-gray-300'
                                                        }`}
                                                />
                                            ))}
                                        </div>

                                        <p className="text-gray-700 mb-3">{review.comment}</p>

                                        <button className="text-sm text-gray-500 hover:text-primary transition-colors">
                                            👍 Útil ({review.helpful})
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            <Footer />
        </div>
    );
}

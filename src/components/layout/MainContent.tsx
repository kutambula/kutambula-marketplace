
import { Grid, List, SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';

export default function MainContent() {
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    // Dados de exemplo dos produtos
    const products = [
        {
            id: 1,
            title: 'Smartphone Galaxy Pro Max',
            image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
            price: 4999.00,
            originalPrice: 6999.00,
            rating: 4.9,
            totalReviews: 342,
            storeName: 'TechWorld Store',
            storeVerified: true,
            inStock: true,
            freeShipping: true,
            discount: 29,
            badge: 'Novidade'
        },
        {
            id: 2,
            title: 'Notebook Ultra Slim i7 16GB',
            image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop',
            price: 8499.90,
            originalPrice: 11999.90,
            rating: 4.8,
            totalReviews: 567,
            storeName: 'TechWorld Store',
            storeVerified: true,
            inStock: true,
            freeShipping: true,
            discount: 29,
            badge: 'Mais Vendido'
        },
        {
            id: 3,
            title: 'Fone Bluetooth Premium Cancelamento de Ruído',
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
            price: 299.99,
            originalPrice: 499.99,
            rating: 4.7,
            totalReviews: 892,
            storeName: 'TechWorld Store',
            storeVerified: true,
            inStock: true,
            freeShipping: true,
            discount: 40
        },
        {
            id: 4,
            title: 'Tênis Running Performance Pro',
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
            price: 349.90,
            originalPrice: 499.90,
            rating: 4.6,
            totalReviews: 234,
            storeName: 'Sports & Fitness',
            storeVerified: true,
            inStock: true,
            freeShipping: true,
            discount: 30
        },
        {
            id: 5,
            title: 'Smartwatch Fitness Tracker GPS',
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
            price: 599.00,
            originalPrice: 899.00,
            rating: 4.8,
            totalReviews: 445,
            storeName: 'TechWorld Store',
            storeVerified: true,
            inStock: true,
            freeShipping: true,
            discount: 33
        },
        {
            id: 6,
            title: 'Mochila Executiva Laptop 15.6"',
            image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
            price: 189.90,
            originalPrice: 289.90,
            rating: 4.5,
            totalReviews: 156,
            storeName: 'Fashion Hub',
            storeVerified: true,
            inStock: true,
            freeShipping: false,
            discount: 34
        },
        {
            id: 7,
            title: 'Cadeira Gamer Ergonômica RGB',
            image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=400&h=400&fit=crop',
            price: 1299.00,
            originalPrice: 1899.00,
            rating: 4.9,
            totalReviews: 678,
            storeName: 'Home Decor Plus',
            storeVerified: true,
            inStock: false,
            freeShipping: true,
            discount: 32,
            badge: 'Popular'
        },
        {
            id: 8,
            title: 'Kit Teclado e Mouse Mecânico',
            image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop',
            price: 449.90,
            originalPrice: 699.90,
            rating: 4.7,
            totalReviews: 321,
            storeName: 'TechWorld Store',
            storeVerified: true,
            inStock: true,
            freeShipping: true,
            discount: 36
        }
    ];

    return (
        <main className="flex-1 min-w-0">
            {/* Header do Conteúdo */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-6 mb-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    {/* Título e Quantidade */}
                    <div>
                        <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-1">Produtos em Destaque</h1>
                        <p className="text-sm text-gray-600">Mostrando 1-20 de 500 produtos</p>
                    </div>

                    {/* Controles */}
                    <div className="flex items-center gap-3">
                        {/* Ordenação */}
                        <select className="bg-gray-50 border-2 border-gray-200 hover:border-primary focus:border-primary rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none cursor-pointer transition-colors">
                            <option value="relevance">Mais Relevantes</option>
                            <option value="price-low">Menor Preço</option>
                            <option value="price-high">Maior Preço</option>
                            <option value="newest">Mais Recentes</option>
                            <option value="rating">Melhor Avaliação</option>
                        </select>

                        {/* Botão de Filtros Mobile */}
                        <button className="lg:hidden flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                            <SlidersHorizontal className="w-4 h-4" />
                            <span className="text-sm font-medium">Filtros</span>
                        </button>

                        {/* Visualização */}
                        <div className="hidden md:flex items-center gap-1 bg-gray-100 rounded-lg p-1">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-2 rounded-md transition-colors ${
                                    viewMode === 'grid'
                                        ? 'bg-white text-primary shadow-sm'
                                        : 'text-gray-600 hover:text-gray-800'
                                }`}
                                aria-label="Grid View"
                            >
                                <Grid className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-2 rounded-md transition-colors ${
                                    viewMode === 'list'
                                        ? 'bg-white text-primary shadow-sm'
                                        : 'text-gray-600 hover:text-gray-800'
                                }`}
                                aria-label="List View"
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
                    ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6'
                    : 'flex flex-col gap-4'
            }>
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300 cursor-pointer group"
                    >
                        {/* Imagem do Produto */}
                        <div className="aspect-square bg-gray-100 relative overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            
                            {/* Badges Superior */}
                            <div className="absolute top-3 left-3 right-3 flex justify-between items-start gap-2">
                                <div className="flex flex-col gap-2">
                                    {product.badge && (
                                        <span className="bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg inline-block">
                                            {product.badge}
                                        </span>
                                    )}
                                    {product.freeShipping && (
                                        <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded shadow-lg inline-block">
                                            Frete Grátis
                                        </span>
                                    )}
                                </div>
                                {product.discount > 0 && (
                                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                                        -{product.discount}%
                                    </span>
                                )}
                            </div>

                            {/* Botão de Ação Rápida (aparece no hover) */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <button className="bg-white text-gray-900 font-bold px-6 py-3 rounded-xl hover:bg-primary hover:text-white transform scale-90 group-hover:scale-100 transition-all duration-300 shadow-xl">
                                    Ver Detalhes
                                </button>
                            </div>
                        </div>

                        {/* Informações do Produto */}
                        <div className="p-4 space-y-3">
                            {/* Nome da Loja */}
                            <div className="flex items-center gap-1 text-xs text-gray-600">
                                <span>🏪</span>
                                <span className="font-medium truncate">{product.storeName}</span>
                                {product.storeVerified && (
                                    <span className="text-blue-500 shrink-0">✓</span>
                                )}
                            </div>

                            {/* Título do Produto */}
                            <h3 className="font-semibold text-gray-900 line-clamp-2 min-h-10 group-hover:text-primary transition-colors">
                                {product.title}
                            </h3>

                            {/* Avaliação */}
                            <div className="flex items-center gap-1 text-sm">
                                <div className="flex items-center gap-1">
                                    <span className="text-yellow-500 font-bold">★</span>
                                    <span className="font-semibold text-gray-900">{product.rating}</span>
                                </div>
                                <span className="text-gray-400">({product.totalReviews})</span>
                            </div>

                            {/* Preços */}
                            <div className="space-y-1">
                                {product.originalPrice > product.price && (
                                    <p className="text-sm text-gray-400 line-through">
                                        {product.originalPrice.toLocaleString('pt-AO', { 
                                            style: 'currency', 
                                            currency: 'AOA' 
                                        })}
                                    </p>
                                )}
                                <p className="text-2xl font-black text-primary">
                                    {product.price.toLocaleString('pt-AO', { 
                                        style: 'currency', 
                                        currency: 'AOA' 
                                    })}
                                </p>
                            </div>

                            {/* Status e Botão */}
                            <div className="pt-3 border-t border-gray-100 space-y-3">
                                {/* Status de Estoque */}
                                {product.inStock ? (
                                    <span className="text-xs text-green-600 font-medium flex items-center gap-1">
                                        <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                                        Em estoque
                                    </span>
                                ) : (
                                    <span className="text-xs text-red-600 font-medium flex items-center gap-1">
                                        <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                                        Esgotado
                                    </span>
                                )}

                                {/* Botão de Adicionar */}
                                <button 
                                    disabled={!product.inStock}
                                    className={`w-full py-3 text-sm font-bold rounded-xl transition-all duration-300 transform active:scale-95 ${
                                        product.inStock
                                            ? 'bg-primary hover:bg-tertiary text-white hover:shadow-lg'
                                            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                    }`}
                                >
                                    {product.inStock ? 'Adicionar ao Carrinho' : 'Indisponível'}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Paginação */}
            <div className="mt-8 flex justify-center">
                <div className="flex items-center gap-2">
                    <button className="px-4 py-2 bg-white border-2 border-gray-200 hover:border-primary rounded-lg font-medium text-gray-700 hover:text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                        Anterior
                    </button>
                    {[1, 2, 3, 4, 5].map((page) => (
                        <button
                            key={page}
                            className={`hidden md:block w-10 h-10 rounded-lg font-medium transition-colors ${
                                page === 1
                                    ? 'bg-primary text-white'
                                    : 'bg-white border-2 border-gray-200 hover:border-primary text-gray-700 hover:text-primary'
                            }`}
                        >
                            {page}
                        </button>
                    ))}
                    <button className="px-4 py-2 bg-primary hover:bg-tertiary text-white rounded-lg font-medium transition-colors">
                        Próximo
                    </button>
                </div>
            </div>
        </main>
    );
}
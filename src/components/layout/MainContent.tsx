
import { Grid, List, SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';

export default function MainContent() {
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    // Produto mais vendido
    const topProduct = {
        id: 99,
        title: 'iPhone 15 Pro Max 256GB',
        images: [
            'https://images.unsplash.com/photo-1592286927505-ed6d6d3b5d75?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1611472173362-3f53dbd65d80?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1510878302144-0b6653b15b4f?w=400&h=400&fit=crop'
        ],
        price: 12999.00,
        originalPrice: 15999.00,
        rating: 5.0,
        totalReviews: 1543,
        storeName: 'Apple Store Official',
        storeVerified: true,
        inStock: true,
        freeShipping: true,
        discount: 19,
        badge: '🔥 Mais Vendido',
        soldCount: 2567
    };

    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

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
        <div className="flex gap-6">
            {/* Conteúdo Principal */}
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
                        viewMode === 'grid' ? (
                            // Vista em Grade (Compacta)
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
                                    
                                    {/* Badges */}
                                    <div className="absolute top-2 left-2 right-2 flex justify-between items-start">
                                        {product.freeShipping && (
                                            <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded shadow-lg">
                                                Frete Grátis
                                            </span>
                                        )}
                                        {product.discount > 0 && (
                                            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                                                -{product.discount}%
                                            </span>
                                        )}
                                    </div>

                                    {/* Botão de Ação Rápida */}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <button className="bg-white text-gray-900 font-semibold px-4 py-2 rounded-lg hover:bg-primary hover:text-white transform scale-90 group-hover:scale-100 transition-all duration-300 shadow-xl text-sm">
                                            Ver Detalhes
                                        </button>
                                    </div>
                                </div>

                                {/* Informações Compactas */}
                                <div className="p-3 space-y-2">
                                    {/* Título */}
                                    <h3 className="font-semibold text-sm text-gray-900 line-clamp-2 group-hover:text-primary transition-colors h-10">
                                        {product.title}
                                    </h3>

                                    {/* Avaliação e Preço */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-1 text-xs">
                                            <span className="text-yellow-500">★</span>
                                            <span className="font-semibold text-gray-900">{product.rating}</span>
                                            <span className="text-gray-400">({product.totalReviews})</span>
                                        </div>
                                        {product.inStock ? (
                                            <span className="text-xs text-green-600 font-medium">Em estoque</span>
                                        ) : (
                                            <span className="text-xs text-red-600 font-medium">Esgotado</span>
                                        )}
                                    </div>

                                    {/* Preço */}
                                    <div className="pt-2 border-t border-gray-100">
                                        <p className="text-xl font-black text-primary">
                                            {product.price.toLocaleString('pt-AO', { 
                                                style: 'currency', 
                                                currency: 'AOA' 
                                            })}
                                        </p>
                                        {product.originalPrice > product.price && (
                                            <p className="text-xs text-gray-400 line-through">
                                                {product.originalPrice.toLocaleString('pt-AO', { 
                                                    style: 'currency', 
                                                    currency: 'AOA' 
                                                })}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            // Vista em Lista (Detalhada)
                            <div
                                key={product.id}
                                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300 cursor-pointer group flex"
                            >
                                {/* Imagem */}
                                <div className="w-48 h-48 bg-gray-100 relative overflow-hidden shrink-0">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    {product.discount > 0 && (
                                        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                                            -{product.discount}%
                                        </span>
                                    )}
                                </div>

                                {/* Conteúdo */}
                                <div className="flex-1 p-4 flex flex-col justify-between">
                                    <div>
                                        {/* Loja */}
                                        <div className="flex items-center gap-1 text-xs text-gray-600 mb-2">
                                            <span>🏪</span>
                                            <span className="font-medium">{product.storeName}</span>
                                            {product.storeVerified && (
                                                <span className="text-blue-500">✓</span>
                                            )}
                                        </div>

                                        {/* Título */}
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                            {product.title}
                                        </h3>

                                        {/* Avaliação */}
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="flex items-center gap-1">
                                                <span className="text-yellow-500 font-bold">★</span>
                                                <span className="font-semibold text-gray-900">{product.rating}</span>
                                            </div>
                                            <span className="text-gray-400 text-sm">({product.totalReviews} avaliações)</span>
                                        </div>

                                        {/* Badges */}
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            {product.badge && (
                                                <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
                                                    {product.badge}
                                                </span>
                                            )}
                                            {product.freeShipping && (
                                                <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                                                    Frete Grátis
                                                </span>
                                            )}
                                            {product.inStock ? (
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

                                    {/* Preço e Ação */}
                                    <div className="flex items-end justify-between">
                                        <div>
                                            {product.originalPrice > product.price && (
                                                <p className="text-sm text-gray-400 line-through mb-1">
                                                    {product.originalPrice.toLocaleString('pt-AO', { 
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
                                            disabled={!product.inStock}
                                            className={`px-6 py-3 text-sm font-bold rounded-xl transition-all duration-300 ${
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
                        )
                    ))}
                </div>
            </main>
 
            {/* Sidebar Direita - Produto Mais Vendido*/}
            <aside className="hidden xl:block w-96 shrink-0">
                <div className="sticky top-6">
                    <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-xl">
                        {/* Header */}
                        <div className="bg-white border-b-2 border-gray-200 p-5">
                            <h3 className="text-xl font-black flex items-center gap-2 text-gray-900">
                                <span className="text-3xl">🔥</span>
                                Mais Vendido
                            </h3>
                            <p className="text-sm text-gray-600 mt-1 font-semibold">
                                {topProduct.soldCount.toLocaleString()} unidades vendidas
                            </p>
                        </div>

                        {/* Galeria de Imagens */}
                        <div className="relative bg-gray-50">
                            {/* Imagem Principal */}
                            <div className="relative h-80 bg-white">
                                <img
                                    src={topProduct.images[selectedImageIndex]}
                                    alt={topProduct.title}
                                    className="w-full h-full object-cover"
                                />
                                {topProduct.discount > 0 && (
                                    <div className="absolute top-4 right-4">
                                        <span className="bg-red-500 text-white text-base font-bold px-4 py-2 rounded-full shadow-xl animate-pulse">
                                            -{topProduct.discount}%
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Miniaturas */}
                            <div className="flex gap-2 p-3 bg-gray-50 overflow-x-auto">
                                {topProduct.images.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImageIndex(index)}
                                        className={`relative shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                                            selectedImageIndex === index
                                                ? 'border-primary shadow-md scale-105'
                                                : 'border-gray-300 hover:border-gray-400 opacity-70 hover:opacity-100'
                                        }`}
                                    >
                                        <img
                                            src={image}
                                            alt={`${topProduct.title} - imagem ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Conteúdo */}
                        <div className="p-5 bg-white space-y-4">
                            {/* Loja */}
                            <div className="flex items-center gap-1.5 text-sm text-gray-600">
                                <span className="text-base">🏪</span>
                                <span className="font-semibold">{topProduct.storeName}</span>
                                {topProduct.storeVerified && (
                                    <span className="text-blue-500 text-base">✓</span>
                                )}
                            </div>

                            {/* Título */}
                            <h4 className="font-black text-gray-900 text-xl leading-tight">
                                {topProduct.title}
                            </h4>

                            {/* Avaliação */}
                            <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
                                <div className="flex items-center gap-1">
                                    <span className="text-yellow-500 font-bold text-xl">★</span>
                                    <span className="font-black text-gray-900 text-lg">{topProduct.rating}</span>
                                </div>
                                <span className="text-gray-500 text-sm font-medium">({topProduct.totalReviews} avaliações)</span>
                            </div>

                            {/* Badges */}
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full border border-green-200">
                                    ✓ Frete Grátis
                                </span>
                                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1.5 rounded-full border border-blue-200">
                                    ✓ Em Estoque
                                </span>
                            </div>

                            {/* Preço */}
                            <div className="pt-4 border-t border-gray-200 bg-linear-to-br from-primary/5 to-tertiary/5 -mx-5 px-5 py-4">
                                {topProduct.originalPrice > topProduct.price && (
                                    <p className="text-base text-gray-500 line-through mb-2 font-medium">
                                        {topProduct.originalPrice.toLocaleString('pt-AO', { 
                                            style: 'currency', 
                                            currency: 'AOA' 
                                        })}
                                    </p>
                                )}
                                <p className="text-4xl font-black text-primary mb-2">
                                    {topProduct.price.toLocaleString('pt-AO', { 
                                        style: 'currency', 
                                        currency: 'AOA' 
                                    })}
                                </p>
                                <div className="flex items-center gap-2">
                                    <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                                        Economize
                                    </span>
                                    <span className="text-green-700 font-bold text-sm">
                                        {(topProduct.originalPrice - topProduct.price).toLocaleString('pt-AO', { 
                                            style: 'currency', 
                                            currency: 'AOA' 
                                        })}
                                    </span>
                                </div>
                            </div>

                            {/* Botões */}
                            <div className="space-y-3 pt-2">
                                <button className="w-full bg-primary hover:bg-tertiary text-white font-bold py-4 rounded-xl transition-all duration-300 hover:shadow-xl transform hover:scale-[1.02] text-base">
                                    🛒 Adicionar ao Carrinho
                                </button>
                                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-3 rounded-xl transition-all duration-300 border-2 border-gray-300 hover:border-gray-400">
                                    👁️ Ver Detalhes Completos
                                </button>
                            </div>

                            {/* Info Extra */}
                            <div className="pt-4 border-t border-gray-200 text-sm text-gray-700 space-y-2.5">
                                <p className="flex items-center gap-3">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span className="font-medium">Garantia oficial de 1 ano</span>
                                </p>
                                <p className="flex items-center gap-3">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span className="font-medium">Devolução grátis em 7 dias</span>
                                </p>
                                <p className="flex items-center gap-3">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span className="font-medium">Pagamento 100% seguro</span>
                                </p>
                                <p className="flex items-center gap-3">
                                    <span className="text-green-600 font-bold">✓</span>
                                    <span className="font-medium">Produto lacrado e original</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
}
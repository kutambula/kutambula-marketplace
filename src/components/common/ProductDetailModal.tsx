import { useState } from 'react';
import { X, Heart, Share2, Star, ShoppingCart, Truck, Shield, RotateCcw, Package, Store, MessageCircle, ThumbsUp, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    product: {
        id: number;
        title: string;
        images: string[];
        price: number;
        originalPrice: number;
        rating: number;
        totalReviews: number;
        description: string;
        storeName: string;
        storeVerified: boolean;
        storeId: number;
        inStock: boolean;
        freeShipping: boolean;
        discount: number;
        category: string;
        brand?: string;
        specifications?: { label: string; value: string }[];
        features?: string[];
    };
}

export default function ProductDetailModal({ isOpen, onClose, product }: ProductDetailModalProps) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState<'description' | 'specifications' | 'reviews'>('description');

    // Dados mockados de avaliações
    const reviews = [
        {
            id: 1,
            userName: 'João Silva',
            userAvatar: 'https://i.pravatar.cc/150?img=12',
            rating: 5,
            date: '20 de Out, 2025',
            comment: 'Produto excelente! Superou minhas expectativas. A qualidade é top e a entrega foi super rápida.',
            helpful: 42,
            images: [
                'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop',
                'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=200&h=200&fit=crop'
            ]
        },
        {
            id: 2,
            userName: 'Maria Santos',
            userAvatar: 'https://i.pravatar.cc/150?img=23',
            rating: 5,
            date: '18 de Out, 2025',
            comment: 'Muito bom! Exatamente como descrito. Recomendo!',
            helpful: 28
        },
        {
            id: 3,
            userName: 'Pedro Costa',
            userAvatar: 'https://i.pravatar.cc/150?img=33',
            rating: 4,
            date: '15 de Out, 2025',
            comment: 'Bom produto, mas poderia ter mais acessórios inclusos. No geral, estou satisfeito com a compra.',
            helpful: 15
        }
    ];

    const relatedProducts = [
        {
            id: 101,
            title: 'Produto Relacionado 1',
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop',
            price: 599.00,
            rating: 4.7
        },
        {
            id: 102,
            title: 'Produto Relacionado 2',
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop',
            price: 299.99,
            rating: 4.8
        },
        {
            id: 103,
            title: 'Produto Relacionado 3',
            image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=200&h=200&fit=crop',
            price: 249.90,
            rating: 4.6
        },
        {
            id: 104,
            title: 'Produto Relacionado 4',
            image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=200&h=200&fit=crop',
            price: 1299.00,
            rating: 4.9
        }
    ];

    if (!isOpen) return null;

    const nextImage = () => {
        setSelectedImageIndex((prev) => (prev + 1) % product.images.length);
    };

    const prevImage = () => {
        setSelectedImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
    };

    const handleQuantityChange = (type: 'increment' | 'decrement') => {
        if (type === 'increment') {
            setQuantity((prev) => prev + 1);
        } else if (type === 'decrement' && quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };

    return (
        <div className="fixed inset-0 z-50 overflow-hidden">
            {/* Overlay */}
            <div 
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="absolute inset-0 sm:inset-4 md:inset-8 lg:inset-12 bg-white sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-3 sm:p-4 md:p-6 border-b border-gray-200 bg-white sticky top-0 z-10">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 line-clamp-1">
                        Detalhes do Produto
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto">
                    <div className="max-w-7xl mx-auto p-3 sm:p-4 md:p-6 lg:p-8">
                        {/* Grid Principal */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
                            {/* Coluna Esquerda - Galeria */}
                            <div className="space-y-3 sm:space-y-4">
                                {/* Imagem Principal */}
                                <div className="relative aspect-square bg-gray-100 rounded-xl sm:rounded-2xl overflow-hidden group">
                                    <img
                                        src={product.images[selectedImageIndex]}
                                        alt={product.title}
                                        className="w-full h-full object-cover"
                                    />
                                    
                                    {/* Badges */}
                                    <div className="absolute top-2 sm:top-4 left-2 sm:left-4 right-2 sm:right-4 flex justify-between items-start">
                                        {product.freeShipping && (
                                            <span className="bg-green-500 text-white text-xs sm:text-sm font-bold px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg shadow-lg">
                                                Frete Grátis
                                            </span>
                                        )}
                                        {product.discount > 0 && (
                                            <span className="bg-red-500 text-white text-xs sm:text-sm font-bold px-2 sm:px-3 py-1.5 sm:py-2 rounded-full shadow-lg animate-pulse">
                                                -{product.discount}%
                                            </span>
                                        )}
                                    </div>

                                    {/* Navegação de Imagens */}
                                    {product.images.length > 1 && (
                                        <>
                                            <button
                                                onClick={prevImage}
                                                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                                            >
                                                <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800" />
                                            </button>
                                            <button
                                                onClick={nextImage}
                                                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                                            >
                                                <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800" />
                                            </button>
                                        </>
                                    )}
                                </div>

                                {/* Miniaturas */}
                                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-1.5 sm:gap-2">
                                    {product.images.map((image, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedImageIndex(index)}
                                            className={`aspect-square rounded-md sm:rounded-lg overflow-hidden border-2 transition-all ${
                                                selectedImageIndex === index
                                                    ? 'border-primary shadow-md scale-105'
                                                    : 'border-gray-300 hover:border-gray-400 opacity-70 hover:opacity-100'
                                            }`}
                                        >
                                            <img
                                                src={image}
                                                alt={`${product.title} - ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Coluna Direita - Informações */}
                            <div className="space-y-4 sm:space-y-6">
                                {/* Loja */}
                                <div className="flex items-center gap-2 text-xs sm:text-sm">
                                    <Store className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
                                    <span className="font-semibold text-gray-700">{product.storeName}</span>
                                    {product.storeVerified && (
                                        <span className="text-blue-500">✓ Verificada</span>
                                    )}
                                </div>

                                {/* Título */}
                                <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 leading-tight">
                                    {product.title}
                                </h1>

                                {/* Categoria e Marca */}
                                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                    <span className="bg-gray-100 text-gray-700 text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-full">
                                        {product.category}
                                    </span>
                                    {product.brand && (
                                        <span className="bg-blue-100 text-blue-700 text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-full">
                                            {product.brand}
                                        </span>
                                    )}
                                </div>

                                {/* Avaliação */}
                                <div className="flex items-center gap-2 sm:gap-3 pb-3 sm:pb-4 border-b border-gray-200">
                                    <div className="flex items-center gap-1">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star
                                                key={star}
                                                className={`w-4 h-4 sm:w-5 sm:h-5 ${
                                                    star <= Math.round(product.rating)
                                                        ? 'fill-yellow-500 text-yellow-500'
                                                        : 'text-gray-300'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                    <span className="font-bold text-gray-900 text-sm sm:text-base">{product.rating}</span>
                                    <span className="text-gray-500 text-xs sm:text-sm">({product.totalReviews} avaliações)</span>
                                </div>

                                {/* Preço */}
                                <div className="bg-linear-to-br from-primary/5 to-tertiary/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-primary/20">
                                    {product.originalPrice > product.price && (
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2">
                                            <span className="text-base sm:text-lg text-gray-500 line-through">
                                                {product.originalPrice.toLocaleString('pt-AO', {
                                                    style: 'currency',
                                                    currency: 'AOA'
                                                })}
                                            </span>
                                            <span className="bg-green-500 text-white text-xs sm:text-sm font-bold px-2 sm:px-3 py-1 rounded-full">
                                                Economize {((product.originalPrice - product.price) / product.originalPrice * 100).toFixed(0)}%
                                            </span>
                                        </div>
                                    )}
                                    <div className="text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-1 sm:mb-2">
                                        {product.price.toLocaleString('pt-AO', {
                                            style: 'currency',
                                            currency: 'AOA'
                                        })}
                                    </div>
                                    <p className="text-xs sm:text-sm text-gray-600">
                                        {product.freeShipping ? '✓ Frete grátis' : 'Frete calculado no checkout'}
                                    </p>
                                </div>

                                {/* Status */}
                                <div className="flex items-center gap-3 sm:gap-4">
                                    {product.inStock ? (
                                        <span className="flex items-center gap-2 text-green-600 font-bold text-sm sm:text-base">
                                            <span className="w-2 h-2 sm:w-3 sm:h-3 bg-green-600 rounded-full"></span>
                                            Em estoque
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-2 text-red-600 font-bold text-sm sm:text-base">
                                            <span className="w-2 h-2 sm:w-3 sm:h-3 bg-red-600 rounded-full"></span>
                                            Fora de estoque
                                        </span>
                                    )}
                                </div>

                                {/* Quantidade */}
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                    <span className="font-bold text-gray-900 text-sm sm:text-base">Quantidade:</span>
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => handleQuantityChange('decrement')}
                                            className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 hover:bg-gray-200 rounded-lg font-bold transition-colors text-sm sm:text-base"
                                            disabled={quantity <= 1}
                                        >
                                            -
                                        </button>
                                        <span className="w-12 sm:w-16 text-center font-bold text-base sm:text-lg">{quantity}</span>
                                        <button
                                            onClick={() => handleQuantityChange('increment')}
                                            className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 hover:bg-gray-200 rounded-lg font-bold transition-colors text-sm sm:text-base"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                {/* Botões de Ação */}
                                <div className="space-y-2 sm:space-y-3">
                                    <button
                                        disabled={!product.inStock}
                                        className={`w-full py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg flex items-center justify-center gap-2 sm:gap-3 transition-all ${
                                            product.inStock
                                                ? 'bg-primary hover:bg-tertiary text-white hover:shadow-xl transform hover:scale-[1.02]'
                                                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                        }`}
                                    >
                                        <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
                                        <span className="hidden sm:inline">
                                            {product.inStock ? 'Adicionar ao Carrinho' : 'Produto Indisponível'}
                                        </span>
                                        <span className="sm:hidden">
                                            {product.inStock ? 'Adicionar' : 'Indisponível'}
                                        </span>
                                    </button>
                                    
                                    <div className="flex gap-2 sm:gap-3">
                                        <button className="flex-1 py-2.5 sm:py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 sm:gap-2 text-sm sm:text-base">
                                            <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                                            <span className="hidden sm:inline">Favoritar</span>
                                        </button>
                                        <button className="flex-1 py-2.5 sm:py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 sm:gap-2 text-sm sm:text-base">
                                            <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
                                            <span className="hidden sm:inline">Compartilhar</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Benefícios */}
                                <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-gray-200">
                                    <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-700">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                                            <Truck className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <p className="font-bold">Entrega Rápida</p>
                                            <p className="text-xs text-gray-500">Em até 7 dias</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-700">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-50 rounded-lg flex items-center justify-center">
                                            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                                        </div>
                                        <div>
                                            <p className="font-bold">Compra Segura</p>
                                            <p className="text-xs text-gray-500">100% protegida</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-700">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                                            <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                                        </div>
                                        <div>
                                            <p className="font-bold">Devolução Grátis</p>
                                            <p className="text-xs text-gray-500">Até 7 dias</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-700">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-50 rounded-lg flex items-center justify-center">
                                            <Package className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                                        </div>
                                        <div>
                                            <p className="font-bold">Garantia Oficial</p>
                                            <p className="text-xs text-gray-500">1 ano</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="border-t border-gray-200 pt-6 sm:pt-8">
                            <div className="flex border-b border-gray-200 mb-4 sm:mb-6 overflow-x-auto">
                                <button
                                    onClick={() => setActiveTab('description')}
                                    className={`px-3 sm:px-6 py-2 sm:py-3 font-bold transition-colors border-b-2 whitespace-nowrap text-sm sm:text-base ${
                                        activeTab === 'description'
                                            ? 'border-primary text-primary'
                                            : 'border-transparent text-gray-500 hover:text-gray-700'
                                    }`}
                                >
                                    Descrição
                                </button>
                                {product.specifications && product.specifications.length > 0 && (
                                    <button
                                        onClick={() => setActiveTab('specifications')}
                                        className={`px-3 sm:px-6 py-2 sm:py-3 font-bold transition-colors border-b-2 whitespace-nowrap text-sm sm:text-base ${
                                            activeTab === 'specifications'
                                                ? 'border-primary text-primary'
                                                : 'border-transparent text-gray-500 hover:text-gray-700'
                                        }`}
                                    >
                                        Especificações
                                    </button>
                                )}
                                <button
                                    onClick={() => setActiveTab('reviews')}
                                    className={`px-3 sm:px-6 py-2 sm:py-3 font-bold transition-colors border-b-2 whitespace-nowrap text-sm sm:text-base ${
                                        activeTab === 'reviews'
                                            ? 'border-primary text-primary'
                                            : 'border-transparent text-gray-500 hover:text-gray-700'
                                    }`}
                                >
                                    Avaliações ({reviews.length})
                                </button>
                            </div>

                            {/* Conteúdo das Tabs */}
                            {activeTab === 'description' && (
                                <div className="prose max-w-none">
                                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">
                                        {product.description}
                                    </p>
                                    
                                    {product.features && product.features.length > 0 && (
                                        <div className="mt-4 sm:mt-6">
                                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Características Principais:</h3>
                                            <ul className="space-y-1.5 sm:space-y-2">
                                                {product.features.map((feature, index) => (
                                                    <li key={index} className="flex items-start gap-2 sm:gap-3">
                                                        <span className="text-primary font-bold">✓</span>
                                                        <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            )}

                            {activeTab === 'specifications' && product.specifications && (
                                <div className="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
                                    <div className="grid gap-2 sm:gap-3">
                                        {product.specifications.map((spec, index) => (
                                            <div
                                                key={index}
                                                className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 py-2 sm:py-3 border-b border-gray-200 last:border-0"
                                            >
                                                <span className="font-bold text-gray-900 text-sm sm:text-base">{spec.label}:</span>
                                                <span className="text-gray-700 text-sm sm:text-base">{spec.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === 'reviews' && (
                                <div className="space-y-4 sm:space-y-6">
                                    {/* Resumo de Avaliações */}
                                    <div className="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6 flex flex-col md:flex-row gap-4 sm:gap-6 items-center">
                                        <div className="text-center">
                                            <div className="text-4xl sm:text-5xl font-black text-gray-900 mb-2">{product.rating}</div>
                                            <div className="flex items-center justify-center gap-1 mb-2">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <Star
                                                        key={star}
                                                        className={`w-4 h-4 sm:w-5 sm:h-5 ${
                                                            star <= Math.round(product.rating)
                                                                ? 'fill-yellow-500 text-yellow-500'
                                                                : 'text-gray-300'
                                                        }`}
                                                    />
                                                ))}
                                            </div>
                                            <p className="text-gray-600 text-sm sm:text-base">{product.totalReviews} avaliações</p>
                                        </div>
                                        
                                        <div className="flex-1 w-full">
                                            {[5, 4, 3, 2, 1].map((stars) => (
                                                <div key={stars} className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                                                    <span className="text-xs sm:text-sm text-gray-600 w-8 sm:w-12">{stars} ★</span>
                                                    <div className="flex-1 bg-gray-200 rounded-full h-1.5 sm:h-2">
                                                        <div
                                                            className="bg-yellow-500 h-1.5 sm:h-2 rounded-full"
                                                            style={{
                                                                width: `${stars === 5 ? 70 : stars === 4 ? 20 : stars === 3 ? 5 : stars === 2 ? 3 : 2}%`
                                                            }}
                                                        />
                                                    </div>
                                                    <span className="text-xs sm:text-sm text-gray-600 w-8 sm:w-12 text-right">
                                                        {stars === 5 ? '70%' : stars === 4 ? '20%' : stars === 3 ? '5%' : stars === 2 ? '3%' : '2%'}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Lista de Avaliações */}
                                    {reviews.map((review) => (
                                        <div key={review.id} className="bg-white border border-gray-200 rounded-lg sm:rounded-xl p-4 sm:p-6">
                                            <div className="flex items-start gap-3 sm:gap-4">
                                                <img
                                                    src={review.userAvatar}
                                                    alt={review.userName}
                                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                                                />
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-1 sm:gap-0">
                                                        <h4 className="font-bold text-gray-900 text-sm sm:text-base">{review.userName}</h4>
                                                        <span className="text-xs sm:text-sm text-gray-500">{review.date}</span>
                                                    </div>
                                                    
                                                    <div className="flex items-center gap-1 mb-2 sm:mb-3">
                                                        {[1, 2, 3, 4, 5].map((star) => (
                                                            <Star
                                                                key={star}
                                                                className={`w-3 h-3 sm:w-4 sm:h-4 ${
                                                                    star <= review.rating
                                                                        ? 'fill-yellow-500 text-yellow-500'
                                                                        : 'text-gray-300'
                                                                }`}
                                                            />
                                                        ))}
                                                    </div>

                                                    <p className="text-gray-700 mb-2 sm:mb-3 text-sm sm:text-base">{review.comment}</p>

                                                    {review.images && review.images.length > 0 && (
                                                        <div className="flex gap-1.5 sm:gap-2 mb-2 sm:mb-3 overflow-x-auto">
                                                            {review.images.map((img, idx) => (
                                                                <img
                                                                    key={idx}
                                                                    src={img}
                                                                    alt={`Review image ${idx + 1}`}
                                                                    className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg border border-gray-200 shrink-0"
                                                                />
                                                            ))}
                                                        </div>
                                                    )}

                                                    <button className="text-xs sm:text-sm text-gray-500 hover:text-primary transition-colors flex items-center gap-1 sm:gap-2">
                                                        <ThumbsUp className="w-3 h-3 sm:w-4 sm:h-4" />
                                                        Útil ({review.helpful})
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    <button className="w-full py-2.5 sm:py-3 border-2 border-gray-300 hover:border-primary text-gray-900 font-bold rounded-lg sm:rounded-xl transition-all text-sm sm:text-base">
                                        Ver Todas as Avaliações
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Produtos Relacionados */}
                        <div className="border-t border-gray-200 pt-6 sm:pt-8 mt-6 sm:mt-8">
                            <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-4 sm:mb-6">Produtos Relacionados</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                                {relatedProducts.map((related) => (
                                    <div
                                        key={related.id}
                                        className="bg-white border border-gray-200 rounded-lg sm:rounded-xl overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
                                    >
                                        <div className="aspect-square bg-gray-100 relative overflow-hidden">
                                            <img
                                                src={related.image}
                                                alt={related.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="p-2 sm:p-3">
                                            <h4 className="font-semibold text-xs sm:text-sm text-gray-900 line-clamp-2 mb-1 sm:mb-2">
                                                {related.title}
                                            </h4>
                                            <div className="flex items-center gap-1 text-xs mb-1 sm:mb-2">
                                                <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                                                <span className="font-semibold">{related.rating}</span>
                                            </div>
                                            <p className="text-sm sm:text-lg font-black text-primary">
                                                {related.price.toLocaleString('pt-AO', {
                                                    style: 'currency',
                                                    currency: 'AOA'
                                                })}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Botão Contactar Loja */}
                        <div className="border-t border-gray-200 pt-6 sm:pt-8 mt-6 sm:mt-8">
                            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
                                <div className="text-center md:text-left">
                                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                                        Tem dúvidas sobre este produto?
                                    </h4>
                                    <p className="text-gray-600 text-sm sm:text-base">
                                        Entre em contato diretamente com o vendedor
                                    </p>
                                </div>
                                <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl transition-all flex items-center justify-center gap-2 whitespace-nowrap text-sm sm:text-base">
                                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                                    <span className="hidden sm:inline">Contactar Vendedor</span>
                                    <span className="sm:hidden">Contactar</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

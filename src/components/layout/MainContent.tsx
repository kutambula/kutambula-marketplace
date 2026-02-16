
import { useState } from 'react';
import { Star, ShoppingCart, Truck, Store, Eye, Tag, Package } from 'lucide-react';
import ProductDetailModal from '../common/ProductDetailModal';

export default function MainContent() {
    const viewMode = 'grid';
    const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleProductClick = (product: typeof products[0]) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };


    // Dados de exemplo dos produtos
    const products = [
        {
            id: 1,
            title: 'Café Etíope Yirgacheffe Premium 250g',
            image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=400&fit=crop',
            images: [
                'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=400&fit=crop',
                'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop',
                'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=400&fit=crop',
                'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop'
            ],
            price: 24.90,
            originalPrice: 34.90,
            rating: 4.9,
            totalReviews: 342,
            description: 'Café premium da região de Yirgacheffe, Etiópia. Grãos selecionados com notas florais e cítricas, torrado artesanalmente. Intensidade média-alta com sabor frutado e aroma inconfundível.',
            storeName: 'Café Africano Premium',
            storeVerified: true,
            storeId: 5,
            inStock: true,
            freeShipping: true,
            discount: 29,
            badge: 'Novidade',
            category: 'Cafés & Infusões',
            brand: 'Yirgacheffe',
            specifications: [
                { label: 'Origem', value: 'Etiópia, Yirgacheffe' },
                { label: 'Altitude', value: '1700-2200m' },
                { label: 'Torra', value: 'Média' },
                { label: 'Peso Líquido', value: '250g' },
                { label: 'Tipo de Grão', value: '100% Arábica' },
                { label: 'Validade', value: '12 meses' },
                { label: 'Intensidade', value: '7/10' }
            ],
            features: [
                'Grãos 100% arábica de altitude elevada',
                'Notas de limão, bergamota e flores',
                'Torrado artesanalmente em pequenos lotes',
                'Acidez vibrante e corpo médio',
                'Certificação de comércio justo',
                'Embalagem com válvula de frescor',
                'Ideal para métodos filtrados e espresso'
            ]
        },
        {
            id: 2,
            title: 'Molho Piri-Piri Tradicional Africano 150ml',
            image: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=400&h=400&fit=crop',
            images: [
                'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=400&h=400&fit=crop',
                'https://images.unsplash.com/photo-1596040033229-a0b4d1ab7faa?w=400&h=400&fit=crop',
                'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&h=400&fit=crop'
            ],
            price: 12.90,
            originalPrice: 18.90,
            rating: 4.8,
            totalReviews: 567,
            description: 'Molho Piri-Piri autêntico, feito com malaguetas africanas frescas. Picância equilibrada com notas cítricas e alho. Perfeito para carnes grelhadas, frango e mariscos.',
            storeName: 'Aromas da Savana',
            storeVerified: true,
            storeId: 4,
            inStock: true,
            freeShipping: true,
            discount: 32,
            badge: 'Mais Vendido',
            category: 'Temperos & Molhos',
            brand: 'Aromas da Savana',
            specifications: [
                { label: 'Volume', value: '150ml' },
                { label: 'Origem', value: 'Moçambique' },
                { label: 'Picância', value: '7/10' },
                { label: 'Ingredientes', value: 'Natural' },
                { label: 'Conservação', value: 'Após abrir: refrigerar' },
                { label: 'Validade', value: '18 meses' }
            ],
            features: [
                'Receita tradicional moçambicana',
                'Malaguetas africanas frescas',
                'Sem conservantes artificiais',
                'Picância média-alta equilibrada',
                'Notas cítricas de limão',
                'Versatile para diversas receitas',
                'Garrafa de vidro com dosador'
            ]
        },
        {
            id: 3,
            title: 'Chá Rooibos Vermelho Sul-Africano 50g',
            image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=400&fit=crop',
            images: [
                'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=400&fit=crop',
                'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&h=400&fit=crop',
                'https://images.unsplash.com/photo-1597318112811-f5eaa4500112?w=400&h=400&fit=crop'
            ],
            price: 15.99,
            originalPrice: 25.99,
            rating: 4.7,
            totalReviews: 892,
            description: 'Chá Rooibos vermelho premium da África do Sul. Naturalmente sem cafeína, rico em antioxidantes e com sabor naturalmente doce. Perfeito para qualquer hora do dia.',
            storeName: 'Bebidas Ancestrais',
            storeVerified: true,
            storeId: 2,
            inStock: true,
            freeShipping: true,
            discount: 38,
            category: 'Bebidas Artesanais',
            brand: 'Rooibos Premium',
            specifications: [
                { label: 'Peso', value: '50g (25 saquetas)' },
                { label: 'Origem', value: 'África do Sul' },
                { label: 'Cafeína', value: 'Sem cafeína' },
                { label: 'Tipo', value: 'Rooibos vermelho' },
                { label: 'Certificação', value: 'Orgânico' }
            ],
            features: [
                'Naturalmente sem cafeína',
                'Rico em antioxidantes',
                'Sabor naturalmente doce',
                'Sem adição de açúcar',
                'Propriedades relaxantes',
                'Pode ser consumido quente ou frio',
                'Embalagem com 25 saquetas'
            ]
        },
        {
            id: 4,
            title: 'Mistura de Especiarias Berbere Etíope 100g',
            image: 'https://images.unsplash.com/photo-1596040033229-a0b4d1ab7faa?w=400&h=400&fit=crop',
            images: [
                'https://images.unsplash.com/photo-1596040033229-a0b4d1ab7faa?w=400&h=400&fit=crop',
                'https://images.unsplash.com/photo-1599909533730-f9d49ad7ca3c?w=400&h=400&fit=crop',
                'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=400&h=400&fit=crop'
            ],
            price: 18.90,
            originalPrice: 26.90,
            rating: 4.6,
            totalReviews: 234,
            description: 'Mistura autêntica de especiarias etíopes Berbere. Combinação complexa de pimentas, coentro, gengibre e especiarias aromáticas. Essencial para pratos tradicionais africanos.',
            storeName: 'Aromas da Savana',
            storeVerified: true,
            storeId: 4,
            inStock: true,
            freeShipping: false,
            discount: 30,
            category: 'Temperos & Molhos',
            brand: 'Berbere Original',
            specifications: [
                { label: 'Peso', value: '100g' },
                { label: 'Origem', value: 'Etiópia' },
                { label: 'Ingredientes', value: '12 especiarias' },
                { label: 'Picância', value: '6/10' }
            ],
            features: [
                'Mistura de 12 especiarias autênticas',
                'Receita tradicional etíope',
                'Pimentas, coentro, gengibre e mais',
                'Ideal para ensopados e carnes',
                'Sabor complexo e aromático',
                'Embalagem hermética'
            ]
        },
        {
            id: 5,
            title: 'Óleo de Palma Vermelho Natural 500ml',
            image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop',
            images: [
                'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=400&fit=crop',
                'https://images.unsplash.com/photo-1609501676725-7186f017a4b0?w=400&h=400&fit=crop',
                'https://images.unsplash.com/photo-1608889825103-eb5ed706a1dc?w=400&h=400&fit=crop'
            ],
            price: 22.00,
            originalPrice: 32.00,
            rating: 4.8,
            totalReviews: 445,
            description: 'Óleo de palma vermelho 100% natural, extraído de forma sustentável. Rico em vitamina A e carotenoides. Essencial para a culinária africana autêntica.',
            storeName: 'Óleos & Manteigas',
            storeVerified: true,
            storeId: 8,
            inStock: true,
            freeShipping: true,
            discount: 31,
            category: 'Óleos Naturais',
            brand: 'PalmaViva',
            specifications: [
                { label: 'Volume', value: '500ml' },
                { label: 'Origem', value: 'Gana' },
                { label: 'Extração', value: 'Prensado a frio' },
                { label: 'Certificação', value: 'Sustentável' },
                { label: 'Validade', value: '12 meses' }
            ],
            features: [
                'Óleo 100% natural e puro',
                'Rico em vitamina A',
                'Extraído de forma sustentável',
                'Sabor característico e autêntico',
                'Ideal para frituras e refogados',
                'Garrafa de vidro escuro',
                'Certificação de origem'
            ]
        },
        {
            id: 6,
            title: 'Farinha de Mandioca Fina (Fubá) 1kg',
            image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop',
            images: [
                'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop',
                'https://images.unsplash.com/photo-1595855759920-86582396756a?w=400&h=400&fit=crop'
            ],
            price: 8.90,
            originalPrice: 12.90,
            rating: 4.5,
            totalReviews: 156,
            description: 'Farinha de mandioca fina premium para preparar fufu, pirão e outros pratos tradicionais africanos. Produto natural, sem conservantes.',
            storeName: 'Grãos da Terra',
            storeVerified: true,
            storeId: 7,
            inStock: true,
            freeShipping: false,
            discount: 31,
            category: 'Cereais & Legumes',
            brand: 'Terra Africana',
            specifications: [
                { label: 'Peso', value: '1kg' },
                { label: 'Origem', value: 'Angola' },
                { label: 'Tipo', value: 'Fina' },
                { label: 'Validade', value: '6 meses' }
            ],
            features: [
                'Farinha 100% natural',
                'Textura fina e uniforme',
                'Ideal para fufu e pirão',
                'Sem conservantes',
                'Rica em carboidratos',
                'Embalagem hermética'
            ]
        },
        {
            id: 7,
            title: 'Concentrado de Bissap (Hibisco) 750ml',
            image: 'https://images.unsplash.com/photo-1560512823-829485b8bf24?w=400&h=400&fit=crop',
            images: [
                'https://images.unsplash.com/photo-1560512823-829485b8bf24?w=400&h=400&fit=crop',
                'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=400&fit=crop'
            ],
            price: 16.90,
            originalPrice: 24.90,
            rating: 4.9,
            totalReviews: 678,
            description: 'Concentrado natural de flor de hibisco (Bissap) para preparar a refrescante bebida africana. Rico em vitamina C e antioxidantes. Sabor autêntico e natural.',
            storeName: 'Bebidas Ancestrais',
            storeVerified: true,
            storeId: 2,
            inStock: true,
            freeShipping: true,
            discount: 32,
            badge: 'Popular',
            category: 'Bebidas Artesanais',
            brand: 'Bissap Natural',
            specifications: [
                { label: 'Volume', value: '750ml (rende 7L)' },
                { label: 'Origem', value: 'Senegal' },
                { label: 'Ingredientes', value: '100% natural' },
                { label: 'Açúcar', value: 'Sem açúcar adicionado' },
                { label: 'Validade', value: '12 meses' }
            ],
            features: [
                'Flor de hibisco 100% natural',
                'Rico em vitamina C',
                'Propriedades antioxidantes',
                'Rende até 7 litros de bebida',
                'Sem conservantes artificiais',
                'Sabor refrescante e único',
                'Pode ser servido quente ou frio'
            ]
        },
        {
            id: 8,
            title: 'Chin Chin Crocante Tradicional 200g',
            image: 'https://images.unsplash.com/photo-1514517521153-1be72277b32f?w=400&h=400&fit=crop',
            images: [
                'https://images.unsplash.com/photo-1514517521153-1be72277b32f?w=400&h=400&fit=crop',
                'https://images.unsplash.com/photo-1587241321921-91a834d6d191?w=400&h=400&fit=crop'
            ],
            price: 9.90,
            originalPrice: 14.90,
            rating: 4.7,
            totalReviews: 321,
            description: 'Snack africano crocante e delicioso, feito com farinha de trigo, leite e especiarias. Perfeito para lanches e festas. Receita tradicional nigeriana.',
            storeName: 'Doçura Africana',
            storeVerified: true,
            storeId: 6,
            inStock: true,
            freeShipping: false,
            discount: 34,
            category: 'Doces & Snacks',
            brand: 'ChinChin Original',
            specifications: [
                { label: 'Peso', value: '200g' },
                { label: 'Origem', value: 'Nigéria' },
                { label: 'Sabor', value: 'Tradicional' },
                { label: 'Validade', value: '60 dias' }
            ],
            features: [
                'Receita tradicional nigeriana',
                'Textura crocante irresistível',
                'Feito com ingredientes naturais',
                'Sabor levemente adocicado',
                'Perfeito para lanches',
                'Embalagem hermética'
            ]
        }
    ];

    return (
        <div className="flex gap-4 lg:gap-6">
            {/* Conteúdo Principal */}
            <main className="flex-1 min-w-0">
                {/* Header da Home - Estilo melhorado e centralizado */}
                <div className="mb-8 sm:mb-10 md:mb-12">
                    <div className="text-center">
                        {/* Título com Ícone */}
                       
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text">
                                Produtos Africanos Autênticos
                        </h2>
                        
                        {/* Descrição */}
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
                            Descubra sabores únicos e produtos tradicionais, direto de vendedores verificados de toda a África
                        </p>
                    </div>
                </div>
                    
                {/* Grid de Produtos */}
                <div className={
                    viewMode === 'grid'
                        ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6'
                        : 'flex flex-col gap-3 sm:gap-4'
                }>
                    {products.map((product) => (
                        viewMode === 'grid' ? (
                            // Vista em Grade (Overlay Design)
                            <div
                                key={product.id}
                                onClick={() => handleProductClick(product)}
                                className="bg-white rounded-xl sm:rounded-2xl shadow-md border-2 border-transparent overflow-hidden hover:shadow-2xl hover:border-primary/30 transition-all duration-500 cursor-pointer group relative"
                            >
                                {/* Imagem com Overlay de Informações */}
                                <div className="aspect-square bg-linear-to-br from-gray-50 to-gray-100 relative overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    
                                    {/* Gradiente Base Sempre Visível */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
                                    
                                    {/* Badges Top */}
                                    <div className="absolute top-2 sm:top-3 left-2 sm:left-3 right-2 sm:right-3 flex justify-between items-start gap-1 z-10">
                                        <div className="flex flex-wrap gap-1.5">
                                            {product.freeShipping && (
                                                <span className="bg-linear-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-2 py-1 rounded-lg shadow-lg backdrop-blur-sm flex items-center gap-1">
                                                    <Truck className="w-3 h-3" />
                                                    <span className="hidden sm:inline">Grátis</span>
                                                </span>
                                            )}
                                            {product.badge && (
                                                <span className="bg-linear-to-r from-amber-500 to-orange-600 text-white text-xs font-bold px-2 py-1 rounded-lg shadow-lg backdrop-blur-sm flex items-center gap-1">
                                                    <Tag className="w-3 h-3" />
                                                    <span>{product.badge}</span>
                                                </span>
                                            )}
                                        </div>
                                        {product.discount > 0 && (
                                            <span className="bg-linear-to-br from-red-500 to-red-600 text-white text-xs sm:text-sm font-black px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-xl shadow-xl backdrop-blur-sm border-2 border-white/30">
                                                -{product.discount}%
                                            </span>
                                        )}
                                    </div>

                                    {/* Botão Ver Detalhes - Centro */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                                        <button 
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleProductClick(product);
                                            }}
                                            className="bg-white text-gray-900 font-bold px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl hover:bg-primary hover:text-white transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-2xl text-xs sm:text-sm border-2 border-primary/20 flex items-center gap-2"
                                        >
                                            <Eye className="w-4 h-4" />
                                            <span className="hidden sm:inline">Ver Detalhes</span>
                                            <span className="sm:hidden">Ver</span>
                                        </button>
                                    </div>

                                    {/* Informações Overlay - Bottom */}
                                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white z-10">
                                        {/* Loja */}
                                        <div className="flex items-center gap-1.5 text-xs mb-2">
                                            <Store className="w-3 h-3" />
                                            <span className="font-semibold truncate">{product.storeName}</span>
                                            {product.storeVerified && (
                                                <div className="w-3.5 h-3.5 rounded-full bg-blue-500 flex items-center justify-center">
                                                    <span className="text-white text-[8px] font-bold">✓</span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Título */}
                                        <h3 className="font-bold text-sm sm:text-base text-white line-clamp-2 mb-2 leading-snug drop-shadow-lg">
                                            {product.title}
                                        </h3>

                                        {/* Categoria e Avaliação */}
                                        <div className="flex items-center justify-between gap-2 mb-3">
                                            <div className="flex items-center gap-1 bg-amber-500/20 backdrop-blur-sm px-2 py-0.5 rounded-lg border border-amber-400/30">
                                                <Package className="w-3 h-3 text-amber-300" />
                                                <span className="text-[10px] sm:text-xs font-semibold text-amber-100">
                                                    {product.category}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-lg">
                                                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                                                <span className="font-bold text-xs">{product.rating}</span>
                                                <span className="text-[10px] text-white/80 hidden sm:inline">({product.totalReviews})</span>
                                            </div>
                                        </div>

                                        {/* Preço e Ação */}
                                        <div className="flex items-end justify-between gap-2">
                                            <div>
                                                {product.originalPrice > product.price && (
                                                    <p className="text-[10px] sm:text-xs text-white/70 line-through leading-tight">
                                                        €{product.originalPrice.toLocaleString('pt-PT', { 
                                                            minimumFractionDigits: 2,
                                                            maximumFractionDigits: 2
                                                        })}
                                                    </p>
                                                )}
                                                <p className="text-xl sm:text-2xl font-black text-white leading-tight drop-shadow-lg">
                                                    €{product.price.toLocaleString('pt-PT', { 
                                                        minimumFractionDigits: 2,
                                                        maximumFractionDigits: 2
                                                    })}
                                                </p>
                                            </div>
                                            <button
                                                disabled={!product.inStock}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    // Adicionar ao carrinho
                                                }}
                                                className={`p-2 sm:p-2.5 rounded-lg transition-all duration-300 transform hover:scale-110 shadow-lg ${
                                                    product.inStock
                                                        ? 'bg-primary hover:bg-tertiary text-white'
                                                        : 'bg-gray-400 text-gray-200 cursor-not-allowed'
                                                }`}
                                                aria-label="Adicionar ao carrinho"
                                            >
                                                <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Indicador de Stock Esgotado */}
                                    {!product.inStock && (
                                        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-20">
                                            <span className="bg-red-500 text-white font-black px-4 py-2 rounded-xl text-sm shadow-xl">
                                                Esgotado
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ) : (
                            // Vista em Lista (Overlay Design)
                            <div
                                key={product.id}
                                onClick={() => handleProductClick(product)}
                                className="bg-white rounded-xl sm:rounded-2xl shadow-md border-2 border-transparent overflow-hidden hover:shadow-2xl hover:border-primary/30 transition-all duration-500 cursor-pointer group flex flex-col sm:flex-row"
                            >
                                {/* Imagem com Overlay */}
                                <div className="w-full h-64 sm:w-56 sm:h-auto md:w-72 bg-linear-to-br from-gray-50 to-gray-100 relative overflow-hidden shrink-0">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    
                                    {/* Gradiente Base */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
                                    
                                    {/* Badges Top */}
                                    <div className="absolute top-3 right-3 flex flex-col gap-2 items-end z-10">
                                        {product.discount > 0 && (
                                            <span className="bg-linear-to-br from-red-500 to-red-600 text-white text-sm font-black px-3 py-1.5 rounded-xl shadow-xl backdrop-blur-sm border-2 border-white/30">
                                                -{product.discount}%
                                            </span>
                                        )}
                                        {product.badge && (
                                            <span className="bg-linear-to-r from-amber-500 to-orange-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg backdrop-blur-sm flex items-center gap-1.5">
                                                <Tag className="w-3.5 h-3.5" />
                                                <span>{product.badge}</span>
                                            </span>
                                        )}
                                    </div>

                                    {/* Info Overlay Bottom */}
                                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white z-10">
                                        <div className="flex items-center gap-1.5 text-xs mb-2">
                                            <Store className="w-3.5 h-3.5" />
                                            <span className="font-semibold">{product.storeName}</span>
                                            {product.storeVerified && (
                                                <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
                                                    <span className="text-white text-[9px] font-bold">✓</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-lg">
                                                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                                                <span className="font-bold text-sm">{product.rating}</span>
                                            </div>
                                            <div className="flex items-center gap-1 bg-amber-500/20 backdrop-blur-sm px-2 py-1 rounded-lg border border-amber-400/30">
                                                <Package className="w-3.5 h-3.5 text-amber-300" />
                                                <span className="text-xs font-semibold text-amber-100">{product.category}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {!product.inStock && (
                                        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-20">
                                            <span className="bg-red-500 text-white font-black px-5 py-2 rounded-xl text-base shadow-xl">
                                                Esgotado
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Conteúdo */}
                                <div className="flex-1 p-4 sm:p-5 md:p-6 flex flex-col justify-between">
                                    <div>
                                        {/* Título */}
                                        <h3 className="font-black text-lg sm:text-xl md:text-2xl text-gray-900 mb-4 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                                            {product.title}
                                        </h3>

                                        {/* Descrição curta */}
                                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                                            {product.description}
                                        </p>

                                        {/* Badges de características */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {product.freeShipping && (
                                                <span className="bg-linear-to-r from-green-500 to-emerald-600 text-white text-xs sm:text-sm font-bold px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1.5">
                                                    <Truck className="w-3.5 h-3.5" />
                                                    <span>Frete Grátis</span>
                                                </span>
                                            )}
                                            {product.inStock && (
                                                <span className="bg-green-50 text-green-700 text-xs sm:text-sm font-bold px-3 py-1.5 rounded-lg border-2 border-green-200 flex items-center gap-1.5">
                                                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                                    <span>Em estoque</span>
                                                </span>
                                            )}
                                        </div>

                                        {/* Reviews */}
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <div className="flex items-center gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`w-4 h-4 ${
                                                            i < Math.floor(product.rating)
                                                                ? 'fill-amber-400 text-amber-400'
                                                                : 'fill-gray-300 text-gray-300'
                                                        }`}
                                                    />
                                                ))}
                                            </div>
                                            <span className="font-semibold text-gray-900">{product.rating}</span>
                                            <span className="text-gray-400">({product.totalReviews} avaliações)</span>
                                        </div>
                                    </div>

                                    {/* Preço e Ação */}
                                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-4 border-t-2 border-gray-100 mt-4">
                                        <div>
                                            {product.originalPrice > product.price && (
                                                <div className="flex items-center gap-2 mb-2">
                                                    <p className="text-base text-gray-400 line-through">
                                                        €{product.originalPrice.toLocaleString('pt-PT', { 
                                                            minimumFractionDigits: 2,
                                                            maximumFractionDigits: 2
                                                        })}
                                                    </p>
                                                    <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg">
                                                        Poupa €{(product.originalPrice - product.price).toLocaleString('pt-PT', { 
                                                            minimumFractionDigits: 2,
                                                            maximumFractionDigits: 2
                                                        })}
                                                    </span>
                                                </div>
                                            )}
                                            <p className="text-3xl sm:text-4xl font-black text-primary">
                                                €{product.price.toLocaleString('pt-PT', { 
                                                    minimumFractionDigits: 2,
                                                    maximumFractionDigits: 2
                                                })}
                                            </p>
                                        </div>
                                        <button 
                                            disabled={!product.inStock}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                // Adicionar ao carrinho
                                            }}
                                            className={`px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold rounded-xl transition-all duration-300 w-full sm:w-auto shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2 ${
                                                product.inStock
                                                    ? 'bg-linear-to-r from-primary to-tertiary text-white hover:from-tertiary hover:to-primary'
                                                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                            }`}
                                        >
                                            {product.inStock ? (
                                                <>
                                                    <ShoppingCart className="w-5 h-5" />
                                                    <span className="hidden sm:inline">Adicionar ao Carrinho</span>
                                                    <span className="sm:hidden">Adicionar</span>
                                                </>
                                            ) : (
                                                'Indisponível'
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    ))}
                </div>

                {/* Botão Ver Mais Produtos */}
                <div className="mt-8 sm:mt-12 flex justify-center">
                    <button className="group relative inline-flex items-center gap-3 px-8 sm:px-12 py-4 sm:py-5 bg-linear-to-r from-primary to-primary hover:from-tertiary hover:to-primary text-white font-bold text-base sm:text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                        {/* Background Animation */}
                        <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        
                        {/* Content */}
                        <Package className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
                        <span className="relative z-10">Ver Mais Produtos</span>
                        <div className="relative z-10 flex items-center gap-1">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-75"></div>
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-150"></div>
                        </div>
                    </button>
                </div>
            </main>

            {/* Product Detail Modal */}
            {selectedProduct && (
                <ProductDetailModal 
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    product={selectedProduct}
                />
            )}
        </div>
    );
}
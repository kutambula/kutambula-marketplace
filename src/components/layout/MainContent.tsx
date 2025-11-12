
import { useState } from 'react';
import { Grid, List, SlidersHorizontal } from 'lucide-react';
import ProductDetailModal from '../common/ProductDetailModal';

export default function MainContent() {
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
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
            title: 'Smartphone Galaxy Pro Max',
            image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
            images: [
                'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
                'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop',
                'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop',
                'https://images.unsplash.com/photo-1603791239531-2cb8a097df6a?w=400&h=400&fit=crop'
            ],
            price: 4999.00,
            originalPrice: 6999.00,
            rating: 4.9,
            totalReviews: 342,
            description: 'O Smartphone Galaxy Pro Max é o topo de linha que você estava esperando. Com tela AMOLED de 6.8", processador octa-core de última geração e câmera tripla de 108MP, este smartphone oferece performance excepcional para todas as suas necessidades.',
            storeName: 'TechWorld Store',
            storeVerified: true,
            storeId: 1,
            inStock: true,
            freeShipping: true,
            discount: 29,
            badge: 'Novidade',
            category: 'Smartphones',
            brand: 'Galaxy',
            specifications: [
                { label: 'Processador', value: 'Snapdragon 8 Gen 2' },
                { label: 'Memória RAM', value: '12GB' },
                { label: 'Armazenamento', value: '256GB' },
                { label: 'Tela', value: '6.8" AMOLED 120Hz' },
                { label: 'Câmera Principal', value: '108MP + 12MP + 10MP' },
                { label: 'Bateria', value: '5000mAh' },
                { label: 'Sistema', value: 'Android 14' }
            ],
            features: [
                'Tela AMOLED de 6.8" com taxa de atualização de 120Hz',
                'Processador Snapdragon 8 Gen 2 de última geração',
                'Câmera tripla com sensor principal de 108MP',
                'Bateria de 5000mAh com carregamento rápido de 65W',
                '12GB de RAM e 256GB de armazenamento interno',
                'Resistente à água e poeira (IP68)',
                '5G e Wi-Fi 6E'
            ]
        },
        {
            id: 2,
            title: 'Notebook Ultra Slim i7 16GB',
            image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop',
            images: [
                'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop',
                'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop',
                'https://images.unsplash.com/photo-1602080858428-57174f9431cf?w=400&h=400&fit=crop'
            ],
            price: 8499.90,
            originalPrice: 11999.90,
            rating: 4.8,
            totalReviews: 567,
            description: 'Notebook ultrafino e poderoso com processador Intel Core i7 de 11ª geração, 16GB de RAM e SSD de 512GB. Perfeito para trabalho, estudos e entretenimento.',
            storeName: 'TechWorld Store',
            storeVerified: true,
            storeId: 1,
            inStock: true,
            freeShipping: true,
            discount: 29,
            badge: 'Mais Vendido',
            category: 'Notebooks',
            brand: 'UltraBook',
            specifications: [
                { label: 'Processador', value: 'Intel Core i7-11800H' },
                { label: 'Memória RAM', value: '16GB DDR4' },
                { label: 'Armazenamento', value: '512GB SSD NVMe' },
                { label: 'Tela', value: '15.6" Full HD IPS' },
                { label: 'Placa de Vídeo', value: 'NVIDIA GeForce MX450' },
                { label: 'Peso', value: '1.8kg' }
            ],
            features: [
                'Design ultrafino com apenas 1.8cm de espessura',
                'Tela Full HD de 15.6" com bordas finas',
                'Bateria de longa duração (até 10 horas)',
                'Teclado retroiluminado',
                'Leitor de impressão digital',
                'Conexões: USB-C, HDMI, USB 3.0'
            ]
        },
        {
            id: 3,
            title: 'Fone Bluetooth Premium Cancelamento de Ruído',
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
            images: [
                'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
                'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=400&fit=crop',
                'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop'
            ],
            price: 299.99,
            originalPrice: 499.99,
            rating: 4.7,
            totalReviews: 892,
            description: 'Fone de ouvido Bluetooth premium com cancelamento ativo de ruído, qualidade de som excepcional e bateria de longa duração.',
            storeName: 'TechWorld Store',
            storeVerified: true,
            storeId: 1,
            inStock: true,
            freeShipping: true,
            discount: 40,
            category: 'Áudio',
            brand: 'SoundPro',
            specifications: [
                { label: 'Conectividade', value: 'Bluetooth 5.2' },
                { label: 'Cancelamento de Ruído', value: 'ANC Ativo' },
                { label: 'Bateria', value: 'Até 30 horas' },
                { label: 'Drivers', value: '40mm' },
                { label: 'Peso', value: '250g' }
            ],
            features: [
                'Cancelamento ativo de ruído (ANC)',
                'Bluetooth 5.2 com conexão estável',
                'Bateria de até 30 horas',
                'Almofadas confortáveis em couro sintético',
                'Microfone integrado para chamadas',
                'Dobrável e com estojo rígido'
            ]
        },
        {
            id: 4,
            title: 'Tênis Running Performance Pro',
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
            images: [
                'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
                'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop',
                'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop'
            ],
            price: 349.90,
            originalPrice: 499.90,
            rating: 4.6,
            totalReviews: 234,
            description: 'Tênis de corrida com tecnologia de amortecimento avançada, ideal para treinos e competições.',
            storeName: 'Sports & Fitness',
            storeVerified: true,
            storeId: 4,
            inStock: true,
            freeShipping: true,
            discount: 30,
            category: 'Calçados Esportivos',
            brand: 'RunPro',
            specifications: [
                { label: 'Material', value: 'Mesh respirável' },
                { label: 'Solado', value: 'Borracha de alta tração' },
                { label: 'Amortecimento', value: 'Tecnologia Air Pro' },
                { label: 'Peso', value: '280g (tamanho 40)' }
            ],
            features: [
                'Tecnologia de amortecimento Air Pro',
                'Material mesh ultra respirável',
                'Solado com alta tração',
                'Design ergonômico',
                'Ideal para corridas de longa distância'
            ]
        },
        {
            id: 5,
            title: 'Smartwatch Fitness Tracker GPS',
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
            images: [
                'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
                'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=400&fit=crop',
                'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&h=400&fit=crop'
            ],
            price: 599.00,
            originalPrice: 899.00,
            rating: 4.8,
            totalReviews: 445,
            description: 'Smartwatch completo com GPS, monitor cardíaco, múltiplos modos esportivos e bateria de longa duração.',
            storeName: 'TechWorld Store',
            storeVerified: true,
            storeId: 1,
            inStock: true,
            freeShipping: true,
            discount: 33,
            category: 'Wearables',
            brand: 'FitWatch',
            specifications: [
                { label: 'Tela', value: '1.4" AMOLED' },
                { label: 'GPS', value: 'GPS + GLONASS' },
                { label: 'Bateria', value: 'Até 14 dias' },
                { label: 'Resistência', value: '5ATM' },
                { label: 'Conectividade', value: 'Bluetooth 5.0' }
            ],
            features: [
                'Tela AMOLED de 1.4" sempre ativa',
                'GPS integrado para rastreamento preciso',
                'Monitor cardíaco 24/7',
                'Mais de 100 modos esportivos',
                'Resistente à água (5ATM)',
                'Bateria de até 14 dias'
            ]
        },
        {
            id: 6,
            title: 'Mochila Executiva Laptop 15.6"',
            image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
            images: [
                'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
                'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=400&h=400&fit=crop'
            ],
            price: 189.90,
            originalPrice: 289.90,
            rating: 4.5,
            totalReviews: 156,
            description: 'Mochila executiva premium com compartimento acolchoado para laptop até 15.6", múltiplos bolsos organizadores e design elegante.',
            storeName: 'Fashion Hub',
            storeVerified: true,
            storeId: 2,
            inStock: true,
            freeShipping: false,
            discount: 34,
            category: 'Acessórios',
            brand: 'BagPro',
            specifications: [
                { label: 'Capacidade', value: '25 litros' },
                { label: 'Material', value: 'Nylon balístico' },
                { label: 'Compartimento Laptop', value: 'Até 15.6"' },
                { label: 'Dimensões', value: '45x30x15cm' }
            ],
            features: [
                'Compartimento acolchoado para laptop',
                'Múltiplos bolsos organizadores',
                'Alças e costas acolchoadas',
                'Material resistente à água',
                'Porta USB para powerbank',
                'Design executivo moderno'
            ]
        },
        {
            id: 7,
            title: 'Cadeira Gamer Ergonômica RGB',
            image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=400&h=400&fit=crop',
            images: [
                'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=400&h=400&fit=crop',
                'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=400&h=400&fit=crop'
            ],
            price: 1299.00,
            originalPrice: 1899.00,
            rating: 4.9,
            totalReviews: 678,
            description: 'Cadeira gamer profissional com design ergonômico, iluminação RGB e ajustes múltiplos para máximo conforto.',
            storeName: 'Home Decor Plus',
            storeVerified: true,
            storeId: 3,
            inStock: false,
            freeShipping: true,
            discount: 32,
            badge: 'Popular',
            category: 'Mobiliário',
            brand: 'GameChair',
            specifications: [
                { label: 'Material', value: 'Couro sintético PU' },
                { label: 'Peso suportado', value: 'Até 150kg' },
                { label: 'Ajuste de altura', value: 'Sim' },
                { label: 'Reclinável', value: 'Até 180°' },
                { label: 'Iluminação', value: 'RGB' }
            ],
            features: [
                'Design ergonômico para longas sessões',
                'Iluminação RGB personalizável',
                'Reclinável até 180°',
                'Almofadas para lombar e pescoço',
                'Base giratória 360°',
                'Rodas silenciosas'
            ]
        },
        {
            id: 8,
            title: 'Kit Teclado e Mouse Mecânico',
            image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop',
            images: [
                'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop',
                'https://images.unsplash.com/photo-1595225476474-87563907a212?w=400&h=400&fit=crop'
            ],
            price: 449.90,
            originalPrice: 699.90,
            rating: 4.7,
            totalReviews: 321,
            description: 'Kit completo com teclado mecânico RGB e mouse gamer de alta precisão, perfeito para jogos e trabalho.',
            storeName: 'TechWorld Store',
            storeVerified: true,
            storeId: 1,
            inStock: true,
            freeShipping: true,
            discount: 36,
            category: 'Periféricos',
            brand: 'GameGear',
            specifications: [
                { label: 'Teclado', value: 'Mecânico RGB' },
                { label: 'Switches', value: 'Blue switches' },
                { label: 'Mouse DPI', value: 'Até 16000 DPI' },
                { label: 'Conectividade', value: 'USB com fio' }
            ],
            features: [
                'Teclado mecânico com switches blue',
                'Iluminação RGB sincronizada',
                'Mouse gamer com 16000 DPI',
                'Teclas anti-ghosting',
                '8 botões programáveis no mouse',
                'Software de customização'
            ]
        }
    ];



    return (
        <div className="flex gap-4 lg:gap-6">
            {/* Conteúdo Principal */}
            <main className="flex-1 min-w-0">
                {/* Header do Conteúdo */}
                <div className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-200 p-3 sm:p-4 md:p-6 mb-4 sm:mb-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                        {/* Título e Quantidade */}
                        <div>
                            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-1">Produtos em Destaque</h1>
                            <p className="text-xs sm:text-sm text-gray-600">Mostrando 1-20 de 500 produtos</p>
                        </div>

                        {/* Controles */}
                        <div className="flex items-center gap-2 sm:gap-3">
                            {/* Ordenação */}
                            <select className="bg-gray-50 border-2 border-gray-200 hover:border-primary focus:border-primary rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-700 focus:outline-none cursor-pointer transition-colors flex-1 sm:flex-none min-w-0">
                                <option value="relevance">Relevantes</option>
                                <option value="price-low">Menor Preço</option>
                                <option value="price-high">Maior Preço</option>
                                <option value="newest">Recentes</option>
                                <option value="rating">Avaliação</option>
                            </select>

                            {/* Botão de Filtros Mobile */}
                            <button className="lg:hidden flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-xs sm:text-sm shrink-0">
                                <SlidersHorizontal className="w-3 h-3 sm:w-4 sm:h-4" />
                                <span className="font-medium hidden xs:inline">Filtros</span>
                            </button>

                            {/* Visualização - Hidden on small mobile */}
                            <div className="hidden sm:flex items-center gap-1 bg-gray-100 rounded-lg p-1">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-1.5 sm:p-2 rounded-md transition-colors ${
                                        viewMode === 'grid'
                                            ? 'bg-white text-primary shadow-sm'
                                            : 'text-gray-600 hover:text-gray-800'
                                    }`}
                                    aria-label="Grid View"
                                >
                                    <Grid className="w-3 h-3 sm:w-4 sm:h-4" />
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-1.5 sm:p-2 rounded-md transition-colors ${
                                        viewMode === 'list'
                                            ? 'bg-white text-primary shadow-sm'
                                            : 'text-gray-600 hover:text-gray-800'
                                    }`}
                                    aria-label="List View"
                                >
                                    <List className="w-3 h-3 sm:w-4 sm:h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                    
                {/* Grid de Produtos */}
                <div className={
                    viewMode === 'grid'
                        ? 'grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6'
                        : 'flex flex-col gap-3 sm:gap-4'
                }>
                    {products.map((product) => (
                        viewMode === 'grid' ? (
                            // Vista em Grade (Compacta)
                            <div
                                key={product.id}
                                onClick={() => handleProductClick(product)}
                                className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300 cursor-pointer group"
                            >
                                {/* Imagem do Produto */}
                                <div className="aspect-square bg-gray-100 relative overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    
                                    {/* Badges */}
                                    <div className="absolute top-1 sm:top-2 left-1 sm:left-2 right-1 sm:right-2 flex justify-between items-start">
                                        {product.freeShipping && (
                                            <span className="bg-green-500 text-white text-xs font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded shadow-lg">
                                                <span className="hidden sm:inline">Frete Grátis</span>
                                                <span className="sm:hidden">Grátis</span>
                                            </span>
                                        )}
                                        {product.discount > 0 && (
                                            <span className="bg-red-500 text-white text-xs font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full shadow-lg">
                                                -{product.discount}%
                                            </span>
                                        )}
                                    </div>

                                    {/* Botão de Ação Rápida */}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <button 
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleProductClick(product);
                                            }}
                                            className="bg-white text-gray-900 font-semibold px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-primary hover:text-white transform scale-90 group-hover:scale-100 transition-all duration-300 shadow-xl text-xs sm:text-sm"
                                        >
                                            <span className="hidden sm:inline">Ver Detalhes</span>
                                            <span className="sm:hidden">Ver</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Informações Compactas */}
                                <div className="p-2 sm:p-3 space-y-1.5 sm:space-y-2">
                                    {/* Título */}
                                    <h3 className="font-semibold text-xs sm:text-sm text-gray-900 line-clamp-2 group-hover:text-primary transition-colors h-8 sm:h-10">
                                        {product.title}
                                    </h3>

                                    {/* Avaliação e Preço */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-0.5 sm:gap-1 text-xs">
                                            <span className="text-yellow-500">★</span>
                                            <span className="font-semibold text-gray-900">{product.rating}</span>
                                            <span className="text-gray-400 hidden sm:inline">({product.totalReviews})</span>
                                        </div>
                                        {product.inStock ? (
                                            <span className="text-xs text-green-600 font-medium hidden sm:inline">Em estoque</span>
                                        ) : (
                                            <span className="text-xs text-red-600 font-medium">Esgotado</span>
                                        )}
                                    </div>

                                    {/* Preço */}
                                    <div className="pt-1.5 sm:pt-2 border-t border-gray-100">
                                        <p className="text-sm sm:text-lg md:text-xl font-black text-primary leading-tight">
                                            €{product.price.toLocaleString('pt-PT', { 
                                                minimumFractionDigits: 0,
                                                maximumFractionDigits: 0
                                            })}
                                        </p>
                                        {product.originalPrice > product.price && (
                                            <p className="text-xs text-gray-400 line-through">
                                                €{product.originalPrice.toLocaleString('pt-PT', { 
                                                    minimumFractionDigits: 0,
                                                    maximumFractionDigits: 0
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
                                onClick={() => handleProductClick(product)}
                                className="bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300 cursor-pointer group flex flex-col sm:flex-row"
                            >
                                {/* Imagem */}
                                <div className="w-full h-48 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-gray-100 relative overflow-hidden shrink-0">
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
                                <div className="flex-1 p-3 sm:p-4 flex flex-col justify-between">
                                    <div>
                                        {/* Loja */}
                                        <div className="flex items-center gap-1 text-xs text-gray-600 mb-2">
                                            <span>🏪</span>
                                            <span className="font-medium truncate">{product.storeName}</span>
                                            {product.storeVerified && (
                                                <span className="text-blue-500">✓</span>
                                            )}
                                        </div>

                                        {/* Título */}
                                        <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                            {product.title}
                                        </h3>

                                        {/* Avaliação */}
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="flex items-center gap-1">
                                                <span className="text-yellow-500 font-bold">★</span>
                                                <span className="font-semibold text-gray-900">{product.rating}</span>
                                            </div>
                                            <span className="text-gray-400 text-sm hidden sm:inline">({product.totalReviews} avaliações)</span>
                                            <span className="text-gray-400 text-sm sm:hidden">({product.totalReviews})</span>
                                        </div>

                                        {/* Badges - Simplified for mobile */}
                                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3">
                                            {product.badge && (
                                                <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 sm:px-3 py-1 rounded-full">
                                                    {product.badge}
                                                </span>
                                            )}
                                            {product.freeShipping && (
                                                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 sm:px-3 py-1 rounded-full">
                                                    <span className="hidden sm:inline">Frete Grátis</span>
                                                    <span className="sm:hidden">Grátis</span>
                                                </span>
                                            )}
                                            {product.inStock ? (
                                                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 sm:px-3 py-1 rounded-full">
                                                    <span className="hidden sm:inline">Em estoque</span>
                                                    <span className="sm:hidden">Disponível</span>
                                                </span>
                                            ) : (
                                                <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 sm:px-3 py-1 rounded-full">
                                                    Esgotado
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Preço e Ação */}
                                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                                        <div>
                                            {product.originalPrice > product.price && (
                                                <p className="text-sm text-gray-400 line-through mb-1">
                                                    €{product.originalPrice.toLocaleString('pt-PT', { 
                                                        minimumFractionDigits: 0,
                                                        maximumFractionDigits: 0
                                                    })}
                                                </p>
                                            )}
                                            <p className="text-2xl sm:text-3xl font-black text-primary">
                                                €{product.price.toLocaleString('pt-PT', { 
                                                    minimumFractionDigits: 0,
                                                    maximumFractionDigits: 0
                                                })}
                                            </p>
                                        </div>
                                        <button 
                                            disabled={!product.inStock}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                // Adicionar ao carrinho
                                            }}
                                            className={`px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold rounded-lg sm:rounded-xl transition-all duration-300 w-full sm:w-auto ${
                                                product.inStock
                                                    ? 'bg-primary hover:bg-tertiary text-white hover:shadow-lg'
                                                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                            }`}
                                        >
                                            <span className="hidden sm:inline">{product.inStock ? 'Adicionar ao Carrinho' : 'Indisponível'}</span>
                                            <span className="sm:hidden">{product.inStock ? 'Adicionar' : 'Indisponível'}</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    ))}
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

import { Grid, List, SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';

export default function MainContent() {
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

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
                {/* Placeholder para produtos */}
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200 cursor-pointer group"
                    >
                        {/* Imagem do Produto */}
                        <div className="aspect-square bg-gray-100 relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 border-4 border-gray-200 border-t-primary rounded-full animate-spin"></div>
                            </div>
                        </div>

                        {/* Informações do Produto */}
                        <div className="p-4 space-y-2">
                            <h3 className="font-semibold text-gray-800 line-clamp-2 group-hover:text-primary transition-colors">
                                Nome do Produto {i + 1}
                            </h3>
                            <div className="flex items-center gap-1">
                                <span className="text-xs text-gray-500">★★★★☆</span>
                                <span className="text-xs text-gray-500">(4.0)</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-xl font-bold text-primary">
                                    {(Math.random() * 1000 + 100).toFixed(2)} Kz
                                </span>
                                <button className="px-4 py-2 bg-primary hover:bg-tertiary text-white text-sm font-medium rounded-lg transition-all duration-200 active:scale-95">
                                    Adicionar
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
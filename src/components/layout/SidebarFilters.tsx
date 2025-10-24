// SidebarFilters.tsx
import { Filter, MapPin, Tag, DollarSign, Star } from 'lucide-react';

export default function SidebarFilters() {
  return (
    <aside className="hidden h-screen lg:block w-64 xl:w-72 shrink-0 sticky top-[88px]  overflow-y-auto">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-2 pb-4 border-b border-gray-200">
          <Filter className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-semibold text-gray-800">Filtros</h2>
        </div>

        {/* Categoria */}
        <div className="space-y-3">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <Tag className="w-4 h-4 text-gray-500" />
            Categoria
          </label>
          <select className="w-full bg-gray-50 border-2 border-gray-200 hover:border-primary focus:border-primary rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none cursor-pointer transition-colors">
            <option value="">Todas as Categorias</option>
            <option value="eletronicos">Eletrônicos</option>
            <option value="moda">Moda</option>
            <option value="casa">Casa & Jardim</option>
            <option value="esportes">Esportes</option>
            <option value="livros">Livros</option>
            <option value="brinquedos">Brinquedos</option>
          </select>
        </div>

        {/* Localização */}
        <div className="space-y-3">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <MapPin className="w-4 h-4 text-gray-500" />
            Localização
          </label>
          <input
            type="text"
            placeholder="Digite a cidade..."
            className="w-full bg-gray-50 border-2 border-gray-200 hover:border-primary focus:border-primary rounded-lg px-3 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none transition-colors"
          />
        </div>

        {/* Preço */}
        <div className="space-y-3">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <DollarSign className="w-4 h-4 text-gray-500" />
            Faixa de Preço
          </label>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="number"
              placeholder="Mín"
              className="w-full bg-gray-50 border-2 border-gray-200 hover:border-primary focus:border-primary rounded-lg px-3 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none transition-colors"
            />
            <input
              type="number"
              placeholder="Máx"
              className="w-full bg-gray-50 border-2 border-gray-200 hover:border-primary focus:border-primary rounded-lg px-3 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Avaliação */}
        <div className="space-y-3">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <Star className="w-4 h-4 text-gray-500" />
            Avaliação Mínima
          </label>
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <label key={rating} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="radio"
                  name="rating"
                  value={rating}
                  className="w-4 h-4 text-primary border-gray-300 focus:ring-primary cursor-pointer"
                />
                <div className="flex items-center gap-1">
                  {[...Array(rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                  {[...Array(5 - rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gray-300" />
                  ))}
                </div>
                <span className="text-sm text-gray-600 group-hover:text-gray-800">e acima</span>
              </label>
            ))}
          </div>
        </div>

        {/* Botões de Ação */}
        <div className="pt-4 border-t border-gray-200 space-y-2">
          <button className="w-full bg-primary hover:bg-tertiary text-white font-medium py-2.5 rounded-lg transition-all duration-200 hover:shadow-md active:scale-95">
            Aplicar Filtros
          </button>
          <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 rounded-lg transition-colors duration-200">
            Limpar Filtros
          </button>
        </div>
      </div>
    </aside>
  );
}

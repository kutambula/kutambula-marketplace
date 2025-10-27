import { useState } from 'react';
import { Star, Send, ThumbsUp, User } from 'lucide-react';

interface Comment {
    id: number;
    author: string;
    avatar?: string;
    rating: number;
    date: string;
    content: string;
    likes: number;
    verified: boolean;
}

interface CommentsProps {
    productId: number;
}

export default function Comments({ productId }: CommentsProps) {
    const [comments] = useState<Comment[]>([
        {
            id: 1,
            author: 'João Silva',
            rating: 5,
            date: '2025-10-20',
            content: 'Excelente produto! Superou minhas expectativas. A qualidade é muito boa e chegou rápido.',
            likes: 12,
            verified: true
        },
        {
            id: 2,
            author: 'Maria Santos',
            rating: 4,
            date: '2025-10-18',
            content: 'Bom produto, mas poderia ter mais opções de cores. No geral, estou satisfeita com a compra.',
            likes: 8,
            verified: true
        },
        {
            id: 3,
            author: 'Pedro Costa',
            rating: 5,
            date: '2025-10-15',
            content: 'Recomendo! Muito bom mesmo, vale cada centavo.',
            likes: 15,
            verified: false
        }
    ]);

    const [newComment, setNewComment] = useState('');
    const [newRating, setNewRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newComment.trim() && newRating > 0) {
            // Aqui você adicionaria a lógica para enviar o comentário
            console.log('Novo comentário:', { comment: newComment, rating: newRating, productId });
            setNewComment('');
            setNewRating(0);
        }
    };

    const averageRating = comments.reduce((acc, comment) => acc + comment.rating, 0) / comments.length;

    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6 space-y-6">
            {/* Cabeçalho */}
            <div className="border-b border-gray-200 pb-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Avaliações de Clientes</h2>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                        <span className="text-3xl font-bold text-gray-900">{averageRating.toFixed(1)}</span>
                        <span className="text-gray-500">de 5</span>
                    </div>
                    <div className="text-sm text-gray-600">
                        ({comments.length} {comments.length === 1 ? 'avaliação' : 'avaliações'})
                    </div>
                </div>
            </div>

            {/* Formulário de Novo Comentário */}
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-4 space-y-4">
                <h3 className="font-semibold text-gray-900">Deixe sua avaliação</h3>
                
                {/* Sistema de Rating */}
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Sua nota:</span>
                    <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                onClick={() => setNewRating(star)}
                                onMouseEnter={() => setHoverRating(star)}
                                onMouseLeave={() => setHoverRating(0)}
                                className="transition-transform hover:scale-110"
                            >
                                <Star 
                                    className={`w-6 h-6 ${
                                        star <= (hoverRating || newRating) 
                                            ? 'text-yellow-500 fill-yellow-500' 
                                            : 'text-gray-300'
                                    }`}
                                />
                            </button>
                        ))}
                    </div>
                    {newRating > 0 && (
                        <span className="text-sm font-medium text-gray-700">({newRating}/5)</span>
                    )}
                </div>

                {/* Campo de Comentário */}
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Compartilhe sua experiência com este produto..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                    rows={4}
                />

                {/* Botão de Enviar */}
                <button
                    type="submit"
                    disabled={!newComment.trim() || newRating === 0}
                    className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-tertiary transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                    <Send className="w-4 h-4" />
                    Publicar Avaliação
                </button>
            </form>

            {/* Lista de Comentários */}
            <div className="space-y-4">
                {comments.map((comment) => (
                    <div key={comment.id} className="border-b border-gray-100 pb-4 last:border-0">
                        <div className="flex items-start gap-4">
                            {/* Avatar */}
                            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                                {comment.avatar ? (
                                    <img src={comment.avatar} alt={comment.author} className="w-full h-full rounded-full object-cover" />
                                ) : (
                                    <User className="w-6 h-6 text-gray-400" />
                                )}
                            </div>

                            {/* Conteúdo */}
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <h4 className="font-semibold text-gray-900">{comment.author}</h4>
                                    {comment.verified && (
                                        <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                                            Compra Verificada
                                        </span>
                                    )}
                                </div>

                                {/* Rating e Data */}
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="flex gap-0.5">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star
                                                key={star}
                                                className={`w-4 h-4 ${
                                                    star <= comment.rating
                                                        ? 'text-yellow-500 fill-yellow-500'
                                                        : 'text-gray-300'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-xs text-gray-500">
                                        {new Date(comment.date).toLocaleDateString('pt-AO', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </span>
                                </div>

                                {/* Comentário */}
                                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                                    {comment.content}
                                </p>

                                {/* Ações */}
                                <div className="flex items-center gap-4">
                                    <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-primary transition-colors">
                                        <ThumbsUp className="w-4 h-4" />
                                        <span>Útil ({comment.likes})</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

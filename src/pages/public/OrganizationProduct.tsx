import { useParams } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { useCreateProduct } from '../../hooks/useCreateProduct';
import { useState } from 'react';

export default function OrganizationProduct() {
    const { organization } = useParams();

    const createProductMutation = useCreateProduct();

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        category: "",
        cover: "",
        tags: [] as string[],
        images: [] as string[],
        price: 0,
        stockQuantity: 0,
        sku: "",
        expiresAt: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleArrayChange = (e: React.ChangeEvent<HTMLInputElement>, field: "tags" | "images") => {
        setFormData(prev => ({
            ...prev,
            [field]: e.target.value.split(",").map(v => v.trim())
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!organization) return;

        try {
            await createProductMutation.mutate({
                ...formData,
                organizationId: organization,
                price: Number(formData.price),
                stockQuantity: Number(formData.stockQuantity),
                expiresAt: formData.expiresAt ? new Date(formData.expiresAt).toISOString() : undefined,
            }, {
                onSuccess: (data) => alert(`Produto ${data.name} criado com sucesso!`),
                onError: (error: any) => alert(error.message || "Erro ao criar produto"),
            });
        } catch (err: any) {
            alert(err.message || "Erro ao criar produto");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />

            <main className="flex-1 p-6 max-w-2xl mx-auto">
                <h1 className="text-2xl font-bold mb-6">Criar Produto</h1>

                <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nome do produto"
                        required
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Descrição"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <input
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        placeholder="Categoria"
                        required
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <input
                        name="tags"
                        value={formData.tags.join(",")}
                        onChange={(e) => handleArrayChange(e, "tags")}
                        placeholder="Tags (separadas por vírgula)"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <input
                        name="images"
                        value={formData.images.join(",")}
                        onChange={(e) => handleArrayChange(e, "images")}
                        placeholder="URLs das imagens (separadas por vírgula)"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <input
                        name="cover"
                        value={formData.cover}
                        onChange={handleChange}
                        placeholder="URL da capa do produto"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <input
                        name="price"
                        type="number"
                        step="0.01"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="Preço"
                        required
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <input
                        name="stockQuantity"
                        type="number"
                        value={formData.stockQuantity}
                        onChange={handleChange}
                        placeholder="Quantidade em estoque"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <input
                        name="sku"
                        value={formData.sku}
                        onChange={handleChange}
                        placeholder="SKU"
                        required
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <input
                        name="expiresAt"
                        type="date"
                        value={formData.expiresAt}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <button
                        type="submit"
                        disabled={createProductMutation.isPending}
                        className="w-full py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 disabled:opacity-50"
                    >
                        {createProductMutation.isPending ? "Criando..." : "Criar Produto"}
                    </button>
                </form>
            </main>

            <Footer />
        </div>
    );
}

import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import type { ProductReturn } from '../../types/interfaces';

export default function Organization() {
    const { organization } = useParams();
    const [page, setPage] = useState(1);
    const [limit] = useState(5);

    const { data, isLoading, error } = useQuery<ProductReturn | null>({
        queryKey: ['products', organization, page, limit],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/product/find/${organization}?limit=${limit}&page=${page}`);
            if (!res.ok) throw new Error('Network response was not ok');
            return res.json() as Promise<ProductReturn>;
        },
    });

    const totalPages = data?.total || 1;

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <div className="flex gap-4 p-4 bg-white shadow">
                <Link
                    to={`/dashboard/${organization}/product`}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    New Product
                </Link>
                <Link
                    to={`/dashboard/${organization}/setting`}
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                >
                    Setting
                </Link>
            </div>

            <main className="flex-1 p-4">
                {isLoading && <p>Loading...</p>}
                {error && <p className="text-red-500">{(error as Error).message}</p>}

                {data?.data?.length ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.data.map((product) => (
                            <div
                                key={product.id}
                                className="relative bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition"
                            >
                                {/* Capa como background */}
                                <div
                                    className="h-48 bg-cover bg-center"
                                    style={{
                                        backgroundImage: `url('${product.cover || "https://via.placeholder.com/300x200"}')`,
                                    }}
                                />

                                {/* Conteúdo */}
                                <div className="p-4 flex flex-col gap-2">
                                    {/* Thumbnail da primeira imagem */}
                                    <div className="absolute top-6 left-4">
                                        <img
                                            src={product.images[0] || "https://via.placeholder.com/56"}
                                            alt={product.name}
                                            className="w-14 h-14 rounded-md border-2 border-white object-cover"
                                        />
                                    </div>

                                    <div className="mt-6">
                                        <h3 className="text-lg font-semibold">{product.name}</h3>
                                        <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
                                        <p className="font-bold mt-2">Price: ${product.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                ) : (
                    !isLoading && <p>No products found.</p>
                )}

                {data?.total && data.total > 1 && (
                    <div className="flex justify-center gap-2 mt-6">
                        <button
                            onClick={() => setPage((p) => Math.max(p - 1, 1))}
                            disabled={page === 1}
                            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                        >
                            Prev
                        </button>
                        <span className="px-3 py-1">
                            Page {(page * limit)} of {totalPages}
                        </span>
                        <button
                            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                            disabled={((page * limit)) >= totalPages}
                            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}

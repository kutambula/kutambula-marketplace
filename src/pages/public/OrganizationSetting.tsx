import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { useUpdateOrganization } from '../../hooks/useOrganization';
import { queryClient } from '../../main';

export interface organizationResponse {
    banner: string
    id: string
    logo: string
    name: string
    specialties: string[]
    metadata: string | null
    verified: boolean
    averageRating: number
    category: string | null
    description: string
    ratingsCount: number
    tags: string[]
    address: string
    phone: string
    email: string
    slug: string
}

export default function OrganizationSetting() {
    const { organization: storeId } = useParams();


    const { data: store } = useQuery<organizationResponse | null>({
        queryKey: ['stores', storeId],
        enabled: !!storeId,
        queryFn: async () => {
            const res = await fetch(
                `${import.meta.env.VITE_API_URL}/organization/${storeId}`
            );
            if (!res.ok) throw new Error('Network response was not ok');
            return res.json();
        },
    });

    const updateOrganizationMutation = useUpdateOrganization(storeId!)

    const [formData, setFormData] = useState({
        name: '',
        address: '',
        email: '',
        phone: '',
        tags: [] as string[],
        logo: '',
        description: '',
        specialties: [] as string[],
        banner: '',
    });

    // Preencher formulário quando os dados chegarem
    useEffect(() => {
        if (store) {
            setFormData({
                name: store.name || '',
                address: store.address || '',
                email: store.email || '',
                phone: store.phone || '',
                tags: store.tags || [],
                logo: store.logo || '',
                description: store.description || '',
                specialties: store.specialties || [],
                banner: store.banner || '',
            });
        }
    }, [store]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleArrayChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        field: 'tags' | 'specialties'
    ) => {
        const { value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [field]: value.split(',').map((v) => v.trim()),
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!storeId) return;

        updateOrganizationMutation.mutate(
            {
                id: storeId,
                ...formData,
            },
            {
                onSuccess: () => {
                    queryClient.invalidateQueries({ queryKey: ['stores', storeId] })
                    alert('Organização atualizada com sucesso!');
                },
                onError: (error: any) => {
                    alert(error.message);
                },
            }
        );
    };

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="p-4">
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">

                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nome"
                        required
                    />

                    <input
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Endereço"
                        required
                    />

                    <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                    />

                    <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Telefone"
                        required
                    />

                    <input
                        name="tags"
                        value={formData.tags.join(',')}
                        onChange={(e) => handleArrayChange(e, 'tags')}
                        placeholder="Tags (separadas por vírgula)"
                    />

                    <input
                        name="specialties"
                        value={formData.specialties.join(',')}
                        onChange={(e) => handleArrayChange(e, 'specialties')}
                        placeholder="Especialidades (separadas por vírgula)"
                    />

                    <input
                        name="logo"
                        value={formData.logo}
                        onChange={handleChange}
                        placeholder="URL do Logo"
                    />

                    <input
                        name="banner"
                        value={formData.banner}
                        onChange={handleChange}
                        placeholder="URL do Banner"
                    />

                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Descrição"
                    />

                    <button
                        type="submit"
                        disabled={updateOrganizationMutation.isPending}
                    >
                        {updateOrganizationMutation.isPending
                            ? 'Atualizando...'
                            : 'Atualizar Organização'}
                    </button>
                </form>
            </main>

            <Footer />
        </div>
    );
}

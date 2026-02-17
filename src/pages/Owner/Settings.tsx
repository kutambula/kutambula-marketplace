import { useState, useEffect, useRef, useMemo } from "react";
import ContainerOwner from "../../components/layout/Owner/Container";
import {
    Store,
    Image as ImageIcon,
    MapPin,
    Phone,
    Mail,
    Globe,
    Save,
    Trash2,
    Loader2,
    CheckCircle2
} from "lucide-react";
import Input from "../../components/common/Form/Input";
import Button from "../../components/common/Form/Button";
import { useOrganization } from "../../hooks/useOrganization";
import { authClient } from "../../lib/auth-client";
import { uploadImageToCloudinary, validateImageFile } from "../../utils/cloudinary.utils";

export default function SettingsOwner() {
    const { useGetOrganization, useUpdateOrganization } = useOrganization();
    const { data: session, isPending: isSessionPending } = authClient.useSession();
    const { data: organizations, isPending: isOrgListPending } = authClient.useListOrganizations();

    // Get active organization from session or fallback to the first organization
    const activeOrgId = (session?.user as any)?.activeOrganizationId || organizations?.[0]?.id || "";

    const { data: orgData, isLoading: isLoadingOrg, refetch } = useGetOrganization(activeOrgId);
    const updateOrgMutation = useUpdateOrganization(activeOrgId || "");

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        email: "",
        phone: "",
        address: "",
        website: "",
        logo: "",
        banner: ""
    });

    const [isSaving, setIsSaving] = useState(false);
    const [saveSuccess, setSaveSuccess] = useState(false);
    const [uploadingField, setUploadingField] = useState<string | null>(null);

    const logoInputRef = useRef<HTMLInputElement>(null);
    const bannerInputRef = useRef<HTMLInputElement>(null);

    // Sync formData with orgData when fetched
    useEffect(() => {
        const org = (orgData as any)?.data ?? orgData;
        if (org) {
            setFormData({
                name: org.name || "",
                description: org.description || "",
                email: org.email || "",
                phone: org.phone || "",
                address: org.address || "",
                website: org.website || "",
                logo: org.logo || "",
                banner: org.banner || ""
            });
        }
    }, [orgData]);

    const isDirty = useMemo(() => {
        const org = (orgData as any)?.data ?? orgData;
        if (!org) return false;

        return (
            formData.name !== (org.name || "") ||
            formData.description !== (org.description || "") ||
            formData.email !== (org.email || "") ||
            formData.phone !== (org.phone || "") ||
            formData.address !== (org.address || "") ||
            formData.website !== (org.website || "") ||
            formData.logo !== (org.logo || "") ||
            formData.banner !== (org.banner || "")
        );
    }, [formData, orgData]);

    const handleSave = async () => {
        if (!activeOrgId) return;

        setIsSaving(true);
        try {
            await updateOrgMutation.mutateAsync(formData);
            setSaveSuccess(true);
            refetch();
            setTimeout(() => setSaveSuccess(false), 3000);
        } catch (error) {
            console.error("Error updating organization:", error);
        } finally {
            setIsSaving(false);
        }
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, field: 'logo' | 'banner') => {
        const file = e.target.files?.[0];
        if (!file) return;

        const validation = validateImageFile(file);
        if (!validation.valid) {
            alert(validation.error);
            return;
        }

        setUploadingField(field);
        try {
            const url = await uploadImageToCloudinary(file, { folder: "kutambula_orgs" });
            if (url) {
                setFormData(prev => ({ ...prev, [field]: url }));
                // Auto-save when image is uploaded
                await updateOrgMutation.mutateAsync({ [field]: url });
                refetch();
            }
        } catch (error) {
            console.error(`Error uploading ${field}:`, error);
        } finally {
            setUploadingField(null);
        }
    };

    if (isSessionPending || isOrgListPending || isLoadingOrg) {
        return (
            <ContainerOwner>
                <div className="flex items-center justify-center min-h-[60vh]">
                    <Loader2 className="w-10 h-10 text-primary animate-spin" />
                </div>
            </ContainerOwner>
        );
    }

    if (!activeOrgId) {
        return (
            <ContainerOwner>
                <div className="flex flex-col items-center justify-center min-h-[60vh] text-center gap-3">
                    <Store className="w-10 h-10 text-primary" />
                    <h2 className="text-lg font-bold text-gray-900">Nenhuma organização ativa</h2>
                    <p className="text-sm text-gray-500 max-w-md">
                        Crie ou selecione uma organização para configurar as informações da sua loja.
                    </p>
                </div>
            </ContainerOwner>
        );
    }

    return (
        <ContainerOwner>
            <div className="max-w-[1600px] mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-gray-100 pb-8">
                    <div>
                        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Configurações da Loja</h1>
                        <p className="text-gray-500 text-sm mt-2 font-medium">Personalize a identidade da sua marca e canais de atendimento.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left Side: Forms */}
                    <div className="md:col-span-2 space-y-6">
                        {/* Basic Info */}
                        <div className="bg-white p-8 rounded-4xl border border-gray-100 shadow-sm space-y-6">
                            <h3 className="font-bold text-gray-900 flex items-center gap-2">
                                <Store className="w-5 h-5 text-primary" />
                                Informações Básicas
                            </h3>

                            <div className="space-y-4">
                                <Input
                                    label="Nome da Loja"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    fullWidth
                                    className="rounded-2xl"
                                />
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-widest">Descrição da Loja</label>
                                    <textarea
                                        rows={4}
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                        className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-3xl text-sm font-medium focus:outline-none focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/5 transition-all resize-none shadow-inner"
                                        placeholder="Conte a história da sua marca..."
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="bg-white p-8 rounded-4xl border border-gray-100 shadow-sm space-y-6">
                            <h3 className="font-bold text-gray-900 flex items-center gap-2">
                                <Mail className="w-5 h-5 text-primary" />
                                Contato e Localização
                            </h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Input
                                    label="Email Comercial"
                                    type="email"
                                    icon={<Mail className="w-4 h-4" />}
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    fullWidth
                                    className="rounded-2xl"
                                />
                                <Input
                                    label="Telefone"
                                    icon={<Phone className="w-4 h-4" />}
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    fullWidth
                                    className="rounded-2xl"
                                />
                                <Input
                                    label="Website (Opcional)"
                                    icon={<Globe className="w-4 h-4" />}
                                    value={formData.website}
                                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                                    fullWidth
                                    className="rounded-2xl"
                                />
                                <Input
                                    label="Endereço"
                                    icon={<MapPin className="w-4 h-4" />}
                                    value={formData.address}
                                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                    fullWidth
                                    className="rounded-2xl"
                                />
                            </div>
                        </div>

                        {/* Danger Zone */}
                        <div className="bg-red-50/50 p-8 rounded-4xl border border-red-100 space-y-4">
                            <h3 className="font-bold text-red-900 flex items-center gap-2">
                                <Trash2 className="w-5 h-5" />
                                Zona de Perigo
                            </h3>
                            <p className="text-red-700/80 text-sm font-medium">Ao encerrar sua loja, todos os seus produtos e dados serão removidos permanentemente. Esta ação é irreversível.</p>
                            <button className="px-6 py-3 bg-red-600 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-red-700 transition-all shadow-lg shadow-red-200 active:scale-95">
                                Encerrar Atividades
                            </button>
                        </div>
                    </div>

                    {/* Right Side: Visuals */}
                    <div className="space-y-6">
                        {/* Logo Upload */}
                        <div className="bg-white p-6 rounded-4xl border border-gray-100 shadow-sm text-center">
                            <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-widest">Logo da Loja</h3>
                            <input
                                type="file"
                                ref={logoInputRef}
                                className="hidden"
                                accept="image/*"
                                onChange={(e) => handleImageUpload(e, 'logo')}
                            />
                            <div className="relative inline-block group">
                                <div className="w-40 h-40 rounded-full bg-gray-50 border-4 border-white shadow-xl flex items-center justify-center overflow-hidden transition-all group-hover:ring-4 group-hover:ring-primary/10">
                                    {formData.logo ? (
                                        <img src={formData.logo} alt="Logo" className="w-full h-full object-cover" />
                                    ) : (
                                        <Store className="w-16 h-16 text-gray-200" />
                                    )}
                                    {uploadingField === 'logo' && (
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                            <Loader2 className="w-8 h-8 text-white animate-spin" />
                                        </div>
                                    )}
                                </div>
                                <button
                                    onClick={() => logoInputRef.current?.click()}
                                    className="absolute bottom-1 right-1 p-3 bg-primary text-white rounded-full shadow-2xl hover:bg-tertiary transition-transform active:scale-95 border-4 border-white"
                                >
                                    <ImageIcon className="w-5 h-5" />
                                </button>
                            </div>
                            <p className="text-[10px] font-bold text-gray-400 mt-6 leading-relaxed uppercase tracking-widest">
                                PNG ou JPG, 512x512px. Máximo 2MB.
                            </p>
                        </div>

                        {/* Banner Upload */}
                        <div className="bg-white p-6 rounded-4xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-widest">Banner da Loja</h3>
                            <input
                                type="file"
                                ref={bannerInputRef}
                                className="hidden"
                                accept="image/*"
                                onChange={(e) => handleImageUpload(e, 'banner')}
                            />
                            <div
                                onClick={() => bannerInputRef.current?.click()}
                                className="w-full h-40 rounded-3xl bg-gray-50 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-4 group hover:border-primary/40 hover:bg-orange-50/30 transition-all cursor-pointer overflow-hidden relative"
                            >
                                {formData.banner ? (
                                    <img src={formData.banner} alt="Banner" className="w-full h-full object-cover" />
                                ) : (
                                    <>
                                        <div className="p-3 bg-white rounded-2xl shadow-sm text-gray-300 group-hover:text-primary transition-colors">
                                            <ImageIcon className="w-8 h-8" />
                                        </div>
                                        <span className="text-[10px] font-black text-gray-400 group-hover:text-primary transition-colors uppercase tracking-[0.2em]">Upload Banner</span>
                                    </>
                                )}
                                {uploadingField === 'banner' && (
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                        <Loader2 className="w-8 h-8 text-white animate-spin" />
                                    </div>
                                )}
                            </div>
                            <p className="text-[10px] font-bold text-gray-400 mt-6 leading-relaxed text-center uppercase tracking-widest">
                                Recomendado: 1920x400px.
                            </p>
                        </div>

                        {/* Quick Save Card */}
                        <div className="bg-linear-to-br from-primary via-primary to-secondary p-10 rounded-4xl text-white shadow-2xl relative overflow-hidden group border border-white/10">
                            <div className="relative z-10">
                                <h4 className="text-xl font-black mb-2 uppercase tracking-tight">Guardar Configurações</h4>
                                <p className="text-sm font-bold text-white/80 mb-8 leading-relaxed">Certifique-se de que todas as informações corporativas estão corretas antes de finalizar.</p>
                                <Button
                                    variant="ghost"
                                    fullWidth
                                    onClick={handleSave}
                                    disabled={isSaving || !isDirty}
                                    icon={saveSuccess ? <CheckCircle2 className="w-5 h-5" /> : isSaving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
                                    className={`${saveSuccess ? 'bg-green-500 hover:bg-green-600 text-white' : isDirty ? 'bg-white text-primary hover:bg-orange-50' : 'bg-white/90 text-primary cursor-not-allowed'} rounded-2xl py-4 font-black shadow-xl transition-all active:scale-95`}
                                >
                                    {saveSuccess ? "Salvo com Sucesso!" : isSaving ? "A guardar..." : "Salvar Alterações"}
                                </Button>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl opacity-30" />
                            <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary/30 rounded-full -ml-20 -mb-20 blur-2xl opacity-50" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width=%2220%22%20height=%2220%22%20viewBox=%220%200%2020%2020%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.05%22%20fill-rule=%22evenodd%22%3E%3Ccircle%20cx=%223%22%20cy=%223%22%20r=%223%22/%3E%3Ccircle%20cx=%2213%22%20cy=%2213%22%20r=%223%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30 pointer-events-none" />
                        </div>
                    </div>
                </div>
            </div>
        </ContainerOwner>
    );
}

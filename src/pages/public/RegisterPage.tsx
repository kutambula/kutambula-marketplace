import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Chrome, Facebook, Apple, Eye, EyeOff, User, Building2, ChevronDown, CheckCircle2 } from 'lucide-react';
import icon5 from '../../assets/images/icon.png';
import sidebarImage from '../../assets/images/registration_sidebar.png';
import { useRegister } from '../../hooks/useRegister';
import { handlerProvider } from '../../hooks/useAuth';

export default function RegisterPage() {
    const [accountType, setAccountType] = useState<"personal" | "business">('personal');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        businessName: '',
        email: '',
        password: '',
        country: 'Angola',
        onlyBuying: false
    });

    const muatationRegister = useRegister();
    const navigate = useNavigate();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value, type } = e.target as HTMLInputElement;
        const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
        setFormData(prev => ({ ...prev, [id]: val }));
    };

    const handlerCreateUser = async (e: any) => {
        e.preventDefault()

        muatationRegister.mutate({
            email: formData.email,
            firstName: formData.firstName,
            lastName: formData.lastName,
            businessName: formData.businessName,
            password: formData.password,
            country: formData.country,
            onlyBuying: formData.onlyBuying,
            accountType,
        }, {
            onSuccess: () => {
                navigate("/login")
            },
            onError: (error: Error) => {
                setError(error.message)
                console.error(error)
            }
        })
    }

    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-white">
            {/* Left Side: Image (Hidden on mobile) */}
            <div className="hidden lg:flex lg:w-1/2 overflow-hidden h-screen sticky top-0">
                <img
                    src={sidebarImage}
                    alt="Kutambula Marketplace"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-tr from-black/80 via-black/40 to-transparent flex flex-col justify-center p-16 xl:p-24">
                    <div className="max-w-xl">
                        <h2 className="text-4xl xl:text-6xl font-black text-white mb-8 leading-tight drop-shadow-2xl">
                            Sabores Autênticos de África
                        </h2>
                        <div className="w-24 h-2 bg-primary mb-8 rounded-full"></div>
                        <p className="text-lg xl:text-2xl text-white/95 font-semibold leading-relaxed drop-shadow-lg">
                            Junte-se à maior comunidade de comércio africano e descubra produtos únicos de todo o continente.
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Side: Form */}
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 min-h-screen bg-background/30 overflow-y-auto">
                <div className="w-full max-w-[480px] py-4 sm:py-6">
                    {/* Header */}
                    <div className="flex flex-col items-center mb-4">
                        <Link to="/" className="mb-3 hover:scale-105 transition-transform">
                            <img src={icon5} alt="Kutambula" className="w-16 sm:w-16 object-contain" />
                        </Link>
                        <h1 className="text-xl sm:text-2xl font-black text-secondary text-center mb-1">
                            Criar uma conta
                        </h1>
                        <p className="text-xs text-gray-500 font-medium">
                            Já tem uma conta?{' '}
                            <Link to="/login" className="text-primary hover:text-tertiary font-bold transition-colors underline-offset-4 hover:underline">
                                Iniciar sessão
                            </Link>
                        </p>
                    </div>

                    {/* Account Type Toggle */}
                    <div className="flex p-1 bg-gray-100 rounded-xl mb-4 border border-gray-200">
                        <button
                            onClick={() => setAccountType('personal')}
                            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold transition-all ${accountType === 'personal'
                                ? 'bg-white text-primary shadow-sm ring-1 ring-black/5'
                                : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            <User size={14} />
                            Pessoal
                        </button>
                        <button
                            onClick={() => setAccountType('business')}
                            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold transition-all ${accountType === 'business'
                                ? 'bg-white text-primary shadow-sm ring-1 ring-black/5'
                                : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            <Building2 size={14} />
                            Empresarial
                        </button>
                    </div>

                    {/* Context Text for Business */}
                    {accountType === 'business' && (
                        <div className="mb-4 p-3 bg-orange-50 rounded-xl border border-amber-100">
                            <p className="text-[11px] text-amber-800 leading-tight font-medium">
                                Continue com o registro como empresa ou organização sem fins lucrativos, ou se planeja vender em grande volume.
                            </p>
                        </div>
                    )}

                    <form className="space-y-3" onSubmit={handlerCreateUser}>
                        {accountType === 'personal' ? (
                            <div className="grid grid-cols-2 gap-3">
                                {/* First Name */}
                                <div className="space-y-1">
                                    <label htmlFor="firstName" className="block text-xs font-bold text-gray-700 ml-1">
                                        Nome
                                    </label>
                                    <input
                                        id="firstName"
                                        type="text"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2.5 bg-white border-2 border-gray-100 rounded-xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-sm font-semibold placeholder:text-gray-400"
                                        placeholder="João"
                                    />
                                </div>
                                {/* Last Name */}
                                <div className="space-y-1">
                                    <label htmlFor="lastName" className="block text-xs font-bold text-gray-700 ml-1">
                                        Sobrenome
                                    </label>
                                    <input
                                        id="lastName"
                                        type="text"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2.5 bg-white border-2 border-gray-100 rounded-xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-sm font-semibold placeholder:text-gray-400"
                                        placeholder="Silva"
                                    />
                                </div>
                            </div>
                        ) : (
                            /* Business Name */
                            <div className="space-y-1">
                                <label htmlFor="businessName" className="block text-xs font-bold text-gray-700 ml-1">
                                    Nome da Empresa
                                </label>
                                <input
                                    id="businessName"
                                    type="text"
                                    value={formData.businessName}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2.5 bg-white border-2 border-gray-100 rounded-xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-sm font-semibold placeholder:text-gray-400"
                                    placeholder="Nome da sua empresa"
                                />
                            </div>
                        )}

                        {/* Email Input */}
                        <div className="space-y-1">
                            <label htmlFor="email" className="block text-xs font-bold text-gray-700 ml-1">
                                {accountType === 'personal' ? 'Email' : 'Email da Empresa'}
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2.5 bg-white border-2 border-gray-100 rounded-xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-sm font-semibold placeholder:text-gray-400"
                                placeholder="ex: joao@email.com"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="space-y-1">
                            <label htmlFor="password" className="block text-xs font-bold text-gray-700 ml-1">
                                Senha
                            </label>
                            <div className="relative group">
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2.5 bg-white border-2 border-gray-100 rounded-xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-sm font-semibold placeholder:text-gray-400 pr-10"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors p-1"
                                >
                                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                </button>
                            </div>
                        </div>

                        {/* Business Location Section */}
                        {accountType === 'business' && (
                            <div className="space-y-3 pt-1">
                                <div className="space-y-1">
                                    <label htmlFor="country" className="block text-xs font-bold text-gray-700 ml-1">
                                        Onde sua empresa está registrada?
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="country"
                                            value={formData.country}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2.5 bg-white border-2 border-gray-100 rounded-xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-sm font-semibold appearance-none cursor-pointer"
                                        >
                                            <option value="Angola">Angola</option>
                                            <option value="Brasil">Brasil</option>
                                            <option value="Portugal">Portugal</option>
                                            <option value="Cabo Verde">Cabo Verde</option>
                                            <option value="Moçambique">Moçambique</option>
                                            <option value="Outro">Outro</option>
                                        </select>
                                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                                    </div>
                                    <p className="text-[10px] text-gray-400 ml-1">
                                        Se sua empresa não estiver registrada, selecione seu país de residência.
                                    </p>
                                </div>

                                <label className="flex items-start gap-2 cursor-pointer group p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                    <div className="relative flex items-center mt-0.5">
                                        <input
                                            id="onlyBuying"
                                            type="checkbox"
                                            checked={formData.onlyBuying}
                                            onChange={handleInputChange}
                                            className="peer appearance-none w-4 h-4 border-2 border-gray-300 rounded-md checked:bg-primary checked:border-primary transition-all cursor-pointer"
                                        />
                                        <CheckCircle2 className="absolute w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
                                    </div>
                                    <span className="text-[10px] font-bold text-gray-600 group-hover:text-secondary transition-colors">
                                        Estou interessado apenas em comprar no Kutambula por enquanto
                                    </span>
                                </label>
                            </div>
                        )}

                        {/* Terms & Privacy */}
                        <div className="pt-1">
                            <p className="text-[10px] leading-tight text-gray-500 font-medium px-1">
                                Ao selecionar <span className="font-bold text-secondary">Criar conta {accountType === 'personal' ? 'pessoal' : 'empresarial'}</span>, você concorda com nosso{' '}
                                <Link to="/terms" className="text-primary hover:underline">Contrato do Usuário</Link> e reconhece a leitura de nosso{' '}
                                <Link to="/privacy" className="text-primary hover:underline">Aviso de Privacidade</Link>.
                            </p>
                        </div>

                        <span className='text-red text-sm'>{error}</span>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={muatationRegister.isPending}
                            className="w-full bg-primary hover:bg-tertiary text-white font-black py-3 rounded-xl shadow-md hover:shadow-primary/20 transition-all duration-300 active:scale-[0.98] transform mt-1 text-sm"
                        >
                            {muatationRegister.isPending
                                ? 'Criando conta...'
                                : `Criar conta ${accountType === 'personal' ? 'pessoal' : 'empresarial'}`
                            }
                        </button>
                    </form>

                    {/* Social Login Divider (Only for Personal) */}
                    {accountType === 'personal' && (
                        <>
                            <div className="relative my-4">
                                <div className="absolute inset-0 flex items-center">
                                    <span className="w-full border-t border-gray-100"></span>
                                </div>
                                <div className="relative flex justify-center text-[10px] uppercase">
                                    <span className="px-2 text-gray-400 font-bold tracking-widest bg-gray-50/50 rounded-full">ou continue com</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-3">
                                <button
                                    onClick={() => handlerProvider('google')}
                                    className="flex items-center justify-center py-2 border-2 border-gray-100 rounded-xl hover:bg-white hover:border-gray-200 transition-all active:scale-[0.98] bg-white shadow-sm" title="Google">
                                    <Chrome className="w-4 h-4 text-[#4285F4]" />
                                </button>
                                <button
                                    onClick={() => handlerProvider('google')}
                                    className="flex items-center justify-center py-2 border-2 border-gray-100 rounded-xl hover:bg-white hover:border-gray-200 transition-all active:scale-[0.98] bg-white shadow-sm" title="Apple">
                                    <Apple className="w-4 h-4 text-black" />
                                </button>
                                <button
                                    onClick={() => handlerProvider('google')}
                                    className="flex items-center justify-center py-2 border-2 border-gray-100 rounded-xl hover:bg-white hover:border-gray-200 transition-all active:scale-[0.98] bg-white shadow-sm" title="Facebook">
                                    <Facebook className="w-4 h-4 text-[#1877F2]" />
                                </button>
                            </div>
                        </>
                    )}

                    {/* Footer Links */}
                    <div className="mt-6 flex justify-center gap-4 text-[10px] font-bold text-gray-400 border-t border-gray-100 pt-3">
                        <Link to="/ajuda" className="hover:text-primary transition-colors">Ajuda</Link>
                        <Link to="/privacidade" className="hover:text-primary transition-colors">Privacidade</Link>
                        <Link to="/termos" className="hover:text-primary transition-colors">Termos</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

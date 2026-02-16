import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, User, Building2, CheckCircle2 } from 'lucide-react';
import icon5 from '../../assets/images/icon.png';
import sidebarImage from '../../assets/images/registration_sidebar.png';
import { useRegister } from '../../hooks/useRegister';
import { handlerProvider } from '../../hooks/useAuth';
import Input from '../../components/common/Form/Input';
import Button from '../../components/common/Form/Button';
import Select from '../../components/common/Form/Select';

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
                                <Input
                                    id="firstName"
                                    type="text"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    placeholder="João"
                                    label="Nome"
                                />
                                {/* Last Name */}
                                <Input
                                    id="lastName"
                                    type="text"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    placeholder="Silva"
                                    label="Sobrenome"
                                />
                            </div>
                        ) : (
                            /* Business Name */
                            <Input
                                id="businessName"
                                type="text"
                                value={formData.businessName}
                                onChange={handleInputChange}
                                placeholder="Nome da sua empresa"
                                label="Nome da Empresa"
                                fullWidth
                            />
                        )}

                        {/* Email Input */}
                        <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="ex: joao@email.com"
                            label={accountType === 'personal' ? 'Email' : 'Email da Empresa'}
                            fullWidth
                        />

                        {/* Password Input */}
                        <Input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="••••••••"
                            label="Senha"
                            fullWidth
                            iconPosition="right"
                            icon={
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="text-gray-400 hover:text-primary transition-colors p-1"
                                >
                                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                </button>
                            }
                        />

                        {/* Business Location Section */}
                        {accountType === 'business' && (
                            <div className="space-y-3 pt-1">
                                <Select
                                    id="country"
                                    value={formData.country}
                                    onChange={handleInputChange}
                                    label="Onde sua empresa está registrada?"
                                    options={[
                                        { value: 'Angola', label: 'Angola' },
                                        { value: 'Brasil', label: 'Brasil' },
                                        { value: 'Portugal', label: 'Portugal' },
                                        { value: 'Cabo Verde', label: 'Cabo Verde' },
                                        { value: 'Moçambique', label: 'Moçambique' },
                                        { value: 'Outro', label: 'Outro' }
                                    ]}
                                    fullWidth
                                    helperText="Se sua empresa não estiver registrada, selecione seu país de residência."
                                />

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

                        <span className='text-red-600 text-sm'>{error}</span>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            disabled={muatationRegister.isPending}
                            variant="primary"
                            size="lg"
                            fullWidth
                            className="mt-1"
                        >
                            {muatationRegister.isPending
                                ? 'Criando conta...'
                                : `Criar conta ${accountType === 'personal' ? 'pessoal' : 'empresarial'}`
                            }
                        </Button>
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
                                <Button
                                    onClick={() => handlerProvider('google')}
                                    variant="outline"
                                    icon={
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                                        </svg>
                                    }
                                    title="Google"
                                    className="py-2"
                                />
                                <Button
                                    onClick={() => handlerProvider('google')}
                                    variant="outline"
                                    icon={
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                                        </svg>
                                    }
                                    title="Apple"
                                    className="py-2"
                                />
                                <Button
                                    onClick={() => handlerProvider('google')}
                                    variant="outline"
                                    icon={
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2"/>
                                        </svg>
                                    }
                                    title="Facebook"
                                    className="py-2"
                                />
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

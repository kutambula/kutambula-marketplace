import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Chrome, Facebook, Apple, Eye, EyeOff, User, Building2 } from 'lucide-react';
import icon5 from '../../assets/images/icon5.png';

export default function RegisterPage() {
    const [accountType, setAccountType] = useState('personal');
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
            {/* Logo Section */}
            <div className="mb-6 w-full max-w-sm flex justify-center">
                <Link to="/" className="group">
                    <img
                        src={icon5}
                        alt="Kutambula Marketplace"
                        className="w-48 sm:w-56 object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                </Link>
            </div>

            {/* Register Card */}
            <div className="w-full max-w-[480px] bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-10">
                <div className="text-center mb-8">
                    <h1 className="text-2xl sm:text-3xl font-black text-secondary mb-2">
                        Criar uma conta
                    </h1>
                    <p className="text-sm text-gray-500 font-medium">
                        Já tem uma conta?{' '}
                        <Link to="/login" className="text-primary hover:text-tertiary font-bold transition-colors underline-offset-4 hover:underline">
                            Iniciar sessão
                        </Link>
                    </p>
                </div>

                {/* Account Type Toggle */}
                <div className="flex p-1 bg-gray-50 rounded-2xl mb-8 border border-gray-100">
                    <button
                        onClick={() => setAccountType('personal')}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all ${accountType === 'personal'
                                ? 'bg-white text-primary shadow-sm ring-1 ring-black/5'
                                : 'text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        <User size={18} />
                        Pessoal
                    </button>
                    <button
                        onClick={() => setAccountType('business')}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all ${accountType === 'business'
                                ? 'bg-white text-primary shadow-sm ring-1 ring-black/5'
                                : 'text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        <Building2 size={18} />
                        Empresarial
                    </button>
                </div>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-4">
                        {/* First Name */}
                        <div className="space-y-2">
                            <label htmlFor="firstName" className="block text-sm font-bold text-gray-700 ml-1">
                                Nome
                            </label>
                            <input
                                id="firstName"
                                type="text"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-gray-900 font-semibold placeholder:text-gray-400"
                                placeholder="João"
                            />
                        </div>
                        {/* Last Name */}
                        <div className="space-y-2">
                            <label htmlFor="lastName" className="block text-sm font-bold text-gray-700 ml-1">
                                Sobrenome
                            </label>
                            <input
                                id="lastName"
                                type="text"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-gray-900 font-semibold placeholder:text-gray-400"
                                placeholder="Silva"
                            />
                        </div>
                    </div>

                    {/* Email Input */}
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-bold text-gray-700 ml-1">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-gray-900 font-semibold placeholder:text-gray-400"
                            placeholder="ex: joao@email.com"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="space-y-2">
                        <label htmlFor="password" className="block text-sm font-bold text-gray-700 ml-1">
                            Senha
                        </label>
                        <div className="relative group">
                            <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                value={formData.password}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-gray-900 font-semibold placeholder:text-gray-400 pr-12"
                                placeholder="••••••••"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors p-1"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    {/* Terms & Privacy */}
                    <p className="text-[11px] leading-relaxed text-gray-500 font-medium px-1">
                        Ao selecionar <span className="font-bold text-secondary">Criar conta {accountType === 'personal' ? 'pessoal' : 'empresarial'}</span>, você concorda com nosso{' '}
                        <Link to="/terms" className="text-primary hover:underline">Contrato do Usuário</Link> e reconhece a leitura de nosso{' '}
                        <Link to="/privacy" className="text-primary hover:underline">Aviso de Privacidade do Usuário</Link>.
                    </p>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-primary hover:bg-tertiary text-white font-black py-4 rounded-2xl shadow-lg hover:shadow-primary/20 transition-all duration-300 active:scale-[0.98] transform mt-2"
                    >
                        Criar conta {accountType === 'personal' ? 'pessoal' : 'empresarial'}
                    </button>
                </form>

                {/* Divider */}
                <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-gray-100"></span>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-4 text-gray-400 font-bold tracking-widest">ou continue com</span>
                    </div>
                </div>

                {/* Social Logins */}
                <div className="grid grid-cols-3 gap-3">
                    <button className="flex items-center justify-center p-3.5 border-2 border-gray-100 rounded-2xl hover:bg-gray-50 hover:border-gray-200 transition-all active:scale-[0.98]" title="Google">
                        <Chrome className="w-5 h-5 text-[#4285F4]" />
                    </button>
                    <button className="flex items-center justify-center p-3.5 border-2 border-gray-100 rounded-2xl hover:bg-gray-50 hover:border-gray-200 transition-all active:scale-[0.98]" title="Apple">
                        <Apple className="w-5 h-5 text-black" />
                    </button>
                    <button className="flex items-center justify-center p-3.5 border-2 border-gray-100 rounded-2xl hover:bg-gray-50 hover:border-gray-200 transition-all active:scale-[0.98]" title="Facebook">
                        <Facebook className="w-5 h-5 text-[#1877F2]" />
                    </button>
                </div>
            </div>

            {/* Footer Links */}
            <div className="mt-8 flex gap-6 text-xs font-bold text-gray-400">
                <Link to="/ajuda" className="hover:text-primary transition-colors">Ajuda</Link>
                <Link to="/privacidade" className="hover:text-primary transition-colors">Privacidade</Link>
                <Link to="/termos" className="hover:text-primary transition-colors">Termos</Link>
            </div>
        </div>
    );
}

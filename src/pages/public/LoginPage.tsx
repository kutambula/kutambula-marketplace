import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Chrome, Facebook, Apple, Eye, EyeOff } from 'lucide-react';
import icon4 from '../../assets/images/icon5.png';

export default function LoginPage() {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
            {/* Logo Section */}
            <div className="mb-8 w-full max-w-sm flex justify-center">
                <Link to="/" className="group">
                    <img
                        src={icon4}
                        alt="Kutambula Marketplace"
                        className="w-48 sm:w-60 object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                </Link>
            </div>

            {/* Login Card */}
            <div className="w-full max-w-[420px] bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-10">
                <div className="text-center mb-8">
                    <h1 className="text-2xl sm:text-3xl font-black text-secondary mb-2">
                        Inicie sessão na sua conta
                    </h1>
                    <p className="text-sm text-gray-500 font-medium">
                        Novo no Kutambula?{' '}
                        <Link to="/register" className="text-primary hover:text-tertiary font-bold transition-colors underline-offset-4 hover:underline">
                            Criar conta
                        </Link>
                    </p>
                </div>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    {/* Identifier Input */}
                    <div className="space-y-2">
                        <label htmlFor="identifier" className="block text-sm font-bold text-gray-700 ml-1">
                            E-mail ou nome de utilizador
                        </label>
                        <input
                            id="identifier"
                            type="text"
                            value={identifier}
                            onChange={(e) => setIdentifier(e.target.value)}
                            className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-gray-900 font-semibold placeholder:text-gray-400"
                            placeholder="ex: joao@email.com"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="space-y-2">
                        <div className="flex items-center justify-between px-1">
                            <label htmlFor="password" className="block text-sm font-bold text-gray-700">
                                Senha
                            </label>
                            <Link to="/forgot-password" title="Esqueceu a senha?" className="text-xs font-bold text-primary hover:text-tertiary transition-colors">
                                Esqueceu a senha?
                            </Link>
                        </div>
                        <div className="relative group">
                            <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-gray-900 font-semibold placeholder:text-gray-400 pr-12"
                                placeholder="••••••••"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors p-1"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>

                    {/* Stay Signed In Checkbox */}
                    <label className="flex items-center gap-3 cursor-pointer group w-fit">
                        <div className="relative flex items-center">
                            <input
                                type="checkbox"
                                className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-lg checked:bg-primary checked:border-primary transition-all cursor-pointer"
                            />
                            <svg className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none left-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div>
                        <span className="text-sm font-bold text-gray-600 group-hover:text-secondary transition-colors">
                            Manter a sessão iniciada
                        </span>
                    </label>

                    {/* Continue Button */}
                    <button
                        type="submit"
                        className="w-full bg-primary hover:bg-tertiary text-white font-black py-4 rounded-2xl shadow-lg hover:shadow-primary/20 transition-all duration-300 active:scale-[0.98] transform"
                    >
                        Continuar
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

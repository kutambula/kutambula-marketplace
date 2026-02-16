import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Chrome, Facebook, Apple, Eye, EyeOff } from 'lucide-react';
import icon4 from '../../assets/images/icon.png';
import { handlerProvider } from '../../hooks/useAuth';
import { authClient } from '../../lib/auth-client';
import Input from '../../components/common/Form/Input';
import Button from '../../components/common/Form/Button';

export default function LoginPage() {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handlerSignIn = async (e: any) => {
        e.preventDefault()
        const { error } = await authClient.signIn.email({
            email: identifier,
            password: password,
            rememberMe: true,
            callbackURL: "/dashboard",
        });

        if (error) setError(error.message as string)
    }

    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
            {/* Logo Section */}


            {/* Login Card */}
            <div className="w-full max-w-[400px] bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8">
                <div className="text-center mb-2">
                    <div className="mb-2 w-full max-w-sm flex justify-center">
                        <Link to="/" className="group">
                            <img
                                src={icon4}
                                alt="Kutambula Marketplace"
                                className="w-16 sm:w-16 object-contain transition-transform duration-300 group-hover:scale-105"
                            />
                        </Link>
                    </div>
                    <h1 className="text-xl sm:text-2xl font-black text-secondary mb-1">
                        Inicie sessão na <br /> sua conta
                    </h1>
                   
                </div>

                <form className="space-y-4" onSubmit={handlerSignIn}>
                    {/* Identifier Input */}
                    <Input
                        id="identifier"
                        type="text"
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
                        placeholder="ex: joao@email.com"
                        fullWidth
                    />

                    {/* Password Input */}
                    <Input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        fullWidth
                        iconPosition="right"
                        icon={
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="text-gray-400 hover:text-primary transition-colors p-1"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        }
                    />

                    <div className='flex items-center justify-between'>
                        {/* Stay Signed In Checkbox */}
                        <label className="flex items-center gap-2 cursor-pointer group w-fit pt-1">
                            <div className="relative flex items-center">
                                <input
                                    type="checkbox"
                                    className="peer appearance-none w-4 h-4 border-2 border-gray-300 rounded-md checked:bg-primary checked:border-primary transition-all cursor-pointer"
                                />
                                <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none left-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                            <span className="text-xs font-bold text-gray-500 group-hover:text-secondary transition-colors">
                                Manter a sessão iniciada
                            </span>
                        </label>

                        
                        <Link to="/forgot-password" title="Esqueceu a senha?" className="text-xs font-bold text-primary hover:text-tertiary transition-colors">
                            Esqueceu a senha?
                        </Link>
                    </div>

                    <span className='text-red-600 text-sm'>{error}</span>

                    {/* Continue Button */}
                    <Button
                        type="submit"
                        variant="primary"
                        size="md"
                        fullWidth
                        className="mt-2"
                    >
                        Continuar
                    </Button>
                </form>

                {/* Divider */}
                <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-gray-100"></span>
                    </div>
                    <div className="relative flex justify-center text-[10px] uppercase">
                        <span className="px-2 text-gray-400 font-bold tracking-widest bg-white rounded-full">ou continue com</span>
                    </div>
                </div>

                {/* Social Logins */}
                <div className="grid grid-cols-3 gap-3">
                    <Button
                        onClick={() => handlerProvider('google')}
                        variant="outline"
                        icon={<Chrome className="w-4 h-4 text-[#4285F4]" />}
                        title="Google"
                        className="py-2"
                    />
                    <Button
                        onClick={() => handlerProvider('google')}
                        variant="outline"
                        icon={<Apple className="w-4 h-4 text-black" />}
                        title="Apple"
                        className="py-2"
                    />
                    <Button
                        onClick={() => handlerProvider('google')}
                        variant="outline"
                        icon={<Facebook className="w-4 h-4 text-[#1877F2]" />}
                        title="Facebook"
                        className="py-2"
                    />
                </div>

                 <p className="text-xs text-center mt-4 text-gray-500 font-medium">
                        Novo no Kutambula?{' '}
                        <Link to="/register" className="text-primary hover:text-tertiary font-bold transition-colors underline-offset-4 hover:underline">
                            Criar conta
                        </Link>
                    </p>
            </div>

            {/* Footer Links */}
            <div className="mt-8 flex gap-6 text-[10px] font-bold text-gray-400">
                <Link to="/ajuda" className="hover:text-primary transition-colors">Ajuda</Link>
                <Link to="/privacidade" className="hover:text-primary transition-colors">Privacidade</Link>
                <Link to="/termos" className="hover:text-primary transition-colors">Termos</Link>
            </div>
        </div>
    );
}

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
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

    const navigate = useNavigate();

    const handlerSignIn = async (e: any) => {
        e.preventDefault()
        await authClient.signIn.email({
            email: identifier,
            password: password,
            rememberMe: true,
        }, {
            onSuccess: (ctx) => {
                const role = (ctx.data.user as any).role;
                if (role === 'admin') {
                    navigate('/admin/dashboard');
                } else if (role === 'business') {
                    navigate('/owner/dashboard');
                } else {
                    navigate('/dashboard');
                }
            },
            onError: (ctx) => {
                setError(ctx.error.message as string);
            }
        });
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
                        Inicie sessão na <br /> tua conta
                    </h1>

                </div>

                <form className="space-y-4" onSubmit={handlerSignIn}>
                    {/* Identifier Input */}
                    <Input
                        id="identifier"
                        type="text"
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
                        placeholder="ex: kutambula@email.com"
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
                                {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
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
                        icon={
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
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
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
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
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2" />
                            </svg>
                        }
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

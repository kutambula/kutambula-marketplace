import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { authClient } from '../../lib/auth-client';
import { Navigate, redirect } from 'react-router-dom';

export default function DashboardPage() {
    const { data: session, isPending } = authClient.useSession();

    if (isPending) return <div>Garregando</div>

    if (!session?.session) return <Navigate to="/login" />

    const handlerSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    redirect("/")
                },
            },
        });
    }

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <div className='h-[100dvh]'>
                <div>
                    <h1>Welcamo sr. {session?.user.name}</h1>
                    <button onClick={handlerSignOut}>Terminar sessão</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

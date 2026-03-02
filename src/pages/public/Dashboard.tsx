import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/layout/Header';
import { authClient } from '../../lib/auth-client';
import Footer from '../../components/layout/Footer';
import { useEffect } from 'react';

export default function DashboardPage() {
    const { data: session, isPending } = authClient.useSession();
    const { data: organizations } = authClient.useListOrganizations();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isPending) {
            if (!session?.session) {
                navigate("/login");
            } else {
                const role = (session.user as any).role;
                if (role === 'admin') {
                    navigate("/admin/dashboard");
                } else if (role === 'business') {
                    navigate("/owner/dashboard");
                } else if (role === 'user') {
                    navigate("/auth/account_configure");
                }
            }
        }
    }, [session, isPending, navigate]);

    if (isPending) return <div>Garregando</div>

    const handlerSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    navigate("/login");
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
                    {session && session.user.role == 'business' && (
                        <Link to={`/dashboard/new`} >Criar organização</Link>
                    )}
                    <button onClick={handlerSignOut}>Terminar sessão</button>
                </div>
                <div>
                    {organizations && organizations.map((org: any, index: number) => (
                        <Link to={`/dashboard/${org.id}`} key={index}>
                            <p>{org.name}</p>
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

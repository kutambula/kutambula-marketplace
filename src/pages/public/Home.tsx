import 'boxicons/css/boxicons.min.css';
import { Home } from 'lucide-react';

export default function HomePage() {
    return (
        <div>
            <h1 className="text-3xl font-bold">
                Welcome to the Kutambula Marketplace
            </h1>
            <div className="box">
                <i className='bx bxs-shopping-bag text-4xl'></i>
                <i className='bx bx-building text-4xl'></i>
                <p>Your one-stop shop for all things local</p>
            </div>
            <Home />
        </div>
    );
}
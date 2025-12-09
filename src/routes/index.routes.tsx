import HomePage from '../pages/public/Home';
import StorePage from '../pages/public/StorePage';
import ContactPage from '../pages/public/ContactPage';
import ComplaintsPage from '../pages/public/ComplaintsPage';
import AdvertisePage from '../pages/public/AdvertisePage';
import ServicesPage from '../pages/public/ServicesPage';
import ChatPage from '../pages/public/ChatPage';
import BlogPage from '../pages/public/BlogPage';
import { Route, Routes } from 'react-router-dom';

export default function LayoutRoot() {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/loja/:storeId' element={<StorePage />} />
			<Route path='/contato' element={<ContactPage />} />
			<Route path='/reclamacoes' element={<ComplaintsPage />} />
			<Route path='/anuncie' element={<AdvertisePage />} />
			<Route path='/servicos' element={<ServicesPage />} />
			<Route path='/chat-ia' element={<ChatPage />} />
			<Route path='/blog' element={<BlogPage />} />
		</Routes>
	);
}
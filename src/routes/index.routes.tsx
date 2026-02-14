import HomePage from '../pages/public/Home';
import StorePage from '../pages/public/StorePage';
import ContactPage from '../pages/public/ContactPage';
import ComplaintsPage from '../pages/public/ComplaintsPage';
import AdvertisePage from '../pages/public/AdvertisePage';
import ServicesPage from '../pages/public/ServicesPage';
import ChatPage from '../pages/public/ChatPage';
import BlogPage from '../pages/public/BlogPage';
import LoginPage from '../pages/public/LoginPage';
import RegisterPage from '../pages/public/RegisterPage';
import { Route, Routes } from 'react-router-dom';
import DashboardPage from '../pages/public/Dashboard';
import Organization from '../pages/public/Organization';
import OrganizationProduct from '../pages/public/OrganizationProduct';
import OrganizationSetting from '../pages/public/OrganizationSetting';
import CreateOrganization from '../pages/public/OrganizationNew';
import ConfigureAccount from '../pages/public/ConfigureAccount';

export default function LayoutRoot() {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/loja/:storeId' element={<StorePage />} />
			<Route path='/contato' element={<ContactPage />} />
			<Route path='/reclamacoes' element={<ComplaintsPage />} />
			<Route path='/dashboard' element={<DashboardPage />} />
			<Route path='/auth/account_configure' element={<ConfigureAccount />} />
			<Route path='/dashboard/new' element={<CreateOrganization />} />
			<Route path='/dashboard/:organization' element={<Organization />} />
			<Route path='/dashboard/:organization/product' element={<OrganizationProduct />} />
			<Route path='/dashboard/:organization/setting' element={<OrganizationSetting />} />
			<Route path='/anuncie' element={<AdvertisePage />} />
			<Route path='/servicos' element={<ServicesPage />} />
			<Route path='/chat-ia' element={<ChatPage />} />
			<Route path='/blog' element={<BlogPage />} />
			<Route path='/login' element={<LoginPage />} />
			<Route path='/register' element={<RegisterPage />} />
		</Routes>
	);
}
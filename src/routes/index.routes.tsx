import HomePage from '../pages/public/Home';
import StorePage from '../pages/public/StorePage';
import ContactPage from '../pages/public/ContactPage';
import ComplaintsPage from '../pages/public/ComplaintsPage';
import { Route, Routes } from 'react-router-dom';

export default function LayoutRoot() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/loja/:storeId' element={<StorePage />} />
      <Route path='/contato' element={<ContactPage />} />
      <Route path='/reclamacoes' element={<ComplaintsPage />} />
    </Routes>
  );
}
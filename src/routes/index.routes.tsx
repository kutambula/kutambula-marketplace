import HomePage from '../pages/public/Home';
import StorePage from '../pages/public/StorePage';
import { Route, Routes } from 'react-router-dom';

export default function LayoutRoot() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/loja/:storeId' element={<StorePage />} />
    </Routes>
  );
}
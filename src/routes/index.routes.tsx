import HomePage from '../pages/public/Home';
import { Route, Routes } from 'react-router-dom';

export default function LayoutRoot() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
    </Routes>
  );
}
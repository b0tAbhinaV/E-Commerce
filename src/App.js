// src/App.js
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Allitems from './Pages/Allitems';
import Healthcare from './Pages/Healthcare';
import Multivitamins from './Pages/Multivitamins';
import Diabetes from './Pages/Diabetes';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Homepage from './Pages/Homepage';
import Prescription from './Pages/Prescription'
import { CartProvider } from './Context/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} /> {/* Render Homepage here */}
          <Route path="/allitems" element={<Allitems />} />
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/multivitamins" element={<Multivitamins />} />
          <Route path="/diabetes" element={<Diabetes />} />
          <Route path="/prescription" element={<Prescription />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/loginsignup" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

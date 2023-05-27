
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import OrderPage from './pages/OrderPage';
import HomePage from './pages/HomePage';
import StaffPage from './pages/StaffPage';
import GalleryPage from './pages/GalleryPage';
import Nav from './components/Nav';
import Footer from './components/Footer';

import './App.css';

import { products } from './data/products';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <header className="App-header">
          <h1>Alexandre Steinhauslin 
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
          </h1>
        </header>

        <Nav />

        <main>
          <section className="App-article">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/order" element={<OrderPage products={products} />} /> 
                <Route path="/gallery" element={<GalleryPage />} /> 
                <Route path="/staff" element={<StaffPage />} /> 

            </Routes>
          </section>
        </main>
        
        <Footer/>
        
        </BrowserRouter>
      </div>
    );
  }

export default App;

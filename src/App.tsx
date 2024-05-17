import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';
import Services from './pages/Services';
import FooterSection from './components/FooterSection';
import NavBar from './components/NavBar';
import GetStarted from './pages/GetStarted';
import CareerPage from './pages/CareerPge';
import ProductPage from './pages/ProductPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import BlogsPage from './pages/BlogsPage';
import BlogDetail from './pages/BlogDetail';

const App = () => {
    return (
        <BrowserRouter>
        <NavBar />
            <Routes>
                <Route path="/"  element={<HomePage/>} />
                <Route path='/services' element={<Services/>}/>
                <Route path="/get-started" element={<GetStarted />} />
                <Route path="/career" element={<CareerPage />} />
                <Route path="/products" element={<ProductPage/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/register" element={<RegisterPage/>} />
                <Route path="/blogs"  element={<BlogsPage/>} />
                 <Route path="/blog/:id" element={<BlogDetail/>} />

                <Route path="*" element={<div>404 Not Found</div>} />


            </Routes>
            <FooterSection />
          </BrowserRouter>
    );
}

export default App;
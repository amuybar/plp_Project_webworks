import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';
import Services from './pages/Services';
import FooterSection from './components/FooterSection';
import NavBar from './components/NavBar';

const App = () => {
    return (
        <BrowserRouter>
        <NavBar />
            <Routes>
                <Route path="/"  element={<HomePage/>} />
                <Route path='/services' element={<Services/>}/>
            </Routes>
            <FooterSection />
          </BrowserRouter>
    );
}

export default App;
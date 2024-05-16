import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import ContactPage from './pages/ContactPage';
import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<HomePage/>} />
                {/* <Route path="/about" component={AboutPage} />
                <Route path="/contact" component={ContactPage} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
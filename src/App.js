import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GlobalStyle from './layouts/GlobalStyle';
import Home from './pages/Home';

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}
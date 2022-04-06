import React from 'react';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="books/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

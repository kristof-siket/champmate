import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './features/Home/Home';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home title="Home" />} />
    </Routes>
  </BrowserRouter>
);

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './features/Home/Home';
import Header from './components/sections/Header/Header';

const App: React.FC = () => (
  <BrowserRouter>
    <Header title="ChampMate" subTitle="Your Champion Mate" />
    <Routes>
      <Route path="/" element={<Home title="Home" />} />
    </Routes>
  </BrowserRouter>
);

export default App;

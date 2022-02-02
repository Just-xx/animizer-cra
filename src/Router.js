import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AnimalPage from './pages/animal'
import IndexPage from './pages/index'

const Router = () => {
  return (
      <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path=":animal" element={<AnimalPage />} />
      </Routes>
  );
};

export default Router;

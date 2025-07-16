import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // <- Route was missing
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Toaster } from './components/ui/toaster';

const App = () => {
  return (
    <>
    <Toaster/>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;

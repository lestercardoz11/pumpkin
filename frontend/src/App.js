import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import Normal from './components/Normal';
import Contributer from './components/Contributer';

export default function App() {
  return (
    <Routes>
      <Route index path='/' element={<Home />} />
      <Route path='/contributer' element={<Contributer />} />
      <Route path='/normal' element={<Normal />} />
    </Routes>
  );
}

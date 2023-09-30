import { useState } from 'react';
import Header from './components/Header';

import './App.css';
import Hero from './components/Hero';
import Partners from './components/Partners';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Partners />
    </>
  );
}

export default App;

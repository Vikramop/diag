import { useState } from 'react';
import Header from './components/Header';

import './App.css';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Meet from './components/Meet';
import Integration from './components/Integration';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Partners />
      <Meet />
      <Integration />
    </>
  );
}

export default App;

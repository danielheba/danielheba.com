import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

import Navbar from './components/Navbar';

import Software from './danielhebaCom/Software';
import Stack from './danielhebaCom/Stack';

import Footer from './components/Footer';



function App() {
  return (
    <>
      <Navbar />
      <Software />
      <Stack />
      <Footer />
    </>  
  );
}

export default App;

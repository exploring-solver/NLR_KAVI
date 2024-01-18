import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Architect from './components/Architect';
import ImageSelector from './components/ImageSelector';
import BuildingComponent from './components/BuildingComponent';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Architect />} />
        <Route path="/imgsel" element={<BuildingComponent />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

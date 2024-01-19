import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Architect from './components/Architect';
import ImageSelector from './components/ImageSelector';
import BuildingComponent from './components/BuildingComponent';
import SustainableAddons from './components/SustainableAddons';
import R_SUS from './components/R_SUS';
import MarketPlace from './components/MarketPlace';
import SustainablityProjects from './components/SustainablityProjects';
import ArDesign from './components/ArDesign';
import C_SUS from './components/C_SUS';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<SustainableAddons />} />
        <Route path="/imgsel" element={<BuildingComponent />} />
        <Route path="/addons" element={<SustainableAddons />} />
        <Route path="/res-sus" element={<R_SUS />} />
        <Route path="/comm-sus" element={<C_SUS />} />
        <Route path="/ar-des" element={<ArDesign />} />
        <Route path="/sus_models" element={<MarketPlace />} />
        <Route path="/sus_projects" element={<SustainablityProjects />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

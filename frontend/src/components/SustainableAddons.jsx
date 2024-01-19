import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';


const SustainableAddons = () => {
  const navigate = useNavigate();
  const [buildingType, setBuildingType] = useState('residential');
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [showModel, setShowModel] = useState(false);
  const [numFloors, setNumFloors] = useState(1);
  const [factorySize, setFactorySize] = useState('small');

  const handleBuildingTypeChange = (event) => {
    setBuildingType(event.target.value);
    setSelectedAddons([]);
    setNumFloors(1); // Reset numFloors when building type changes
    setFactorySize('small'); // Reset factory size when building type changes
  };

  const handleAddonChange = (addon) => {
    const updatedAddons = selectedAddons.includes(addon)
      ? selectedAddons.filter((selectedAddon) => selectedAddon !== addon)
      : [...selectedAddons, addon];

    setSelectedAddons(updatedAddons);
  };

  const handleSubmit = () => {
    // Redirect to custom URLs based on selected choices
    switch (buildingType) {
      case 'residential':
        navigate('/res-sus');
        break;
      case 'commercial':
        navigate('/comm-sus');
        break;
      default:
        // Handle default case or show an error
        console.error('Invalid building type');
        break;
    }
  };


  useEffect(() => {
    setShowModel(false);
  }, [buildingType, selectedAddons, numFloors, factorySize]);

  const renderModel = () => {
    return (
      <div className="mt-4">
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box args={[1, 1, 1]} rotation={[0, 0.01, 0]} />
        </Canvas>
      </div>
    );
  };

  return (
    <div className="container mx-auto mt-8 p-4 bg-gray-100 rounded-lg">
      <label htmlFor="buildingType" className="block text-lg font-bold mb-2">
        Select Building Type:
      </label>
      <select
        id="buildingType"
        value={buildingType}
        onChange={handleBuildingTypeChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      >
        <option value="residential">Residential</option>
        <option value="commercial">Commercial</option>
        <option value="industry">Factory/Industry/Refinery</option>
      </select>

      <div className="mt-4">
        <p className="text-lg font-bold mb-2">Select Sustainable Add-ons:</p>
        <label className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={selectedAddons.includes('solarPanels')}
            onChange={() => handleAddonChange('solarPanels')}
            className="mr-2"
          />
          Solar Panels
        </label>
        <label className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={selectedAddons.includes('homeAutomation')}
            onChange={() => handleAddonChange('homeAutomation')}
            className="mr-2"
          />
          Home Automation
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={selectedAddons.includes('rainwaterHarvesting')}
            onChange={() => handleAddonChange('rainwaterHarvesting')}
            className="mr-2"
          />
          Rainwater Harvesting
        </label>
      </div>

      {buildingType === 'commercial' && (
        <div className="mt-4">
          <label htmlFor="numFloors" className="block text-lg font-bold mb-2">
            Number of Floors:
          </label>
          <select
            id="numFloors"
            value={numFloors}
            onChange={(e) => setNumFloors(parseInt(e.target.value, 10))}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            {[1, 2, 3].map((num) => (
              <option key={num} value={num}>
                {num} Floors
              </option>
            ))}
          </select>
        </div>
      )}

      {buildingType === 'industry' && (
        <div className="mt-4">
          <label htmlFor="factorySize" className="block text-lg font-bold mb-2">
            Factory Size:
          </label>
          <select
            id="factorySize"
            value={factorySize}
            onChange={(e) => setFactorySize(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="small">Small (100 sq meters)</option>
            <option value="large">Large (500 sq meters)</option>
            <option value="extremelyLarge">Extremely Large (1000 sq meters)</option>
          </select>
        </div>
      )}

      {showModel && renderModel()}

      <button
        onClick={handleSubmit}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
      >
        Submit
      </button>
    </div>
  );
};

export default SustainableAddons;

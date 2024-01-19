import React, { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import one from '../assets/res_solar.glb'
const Architect = () => {
  const [buildingType, setBuildingType] = useState('residential');
  const [numFloors, setNumFloors] = useState(1);
  const [equipment, setEquipment] = useState('basic');
  const [carbonEmissionRate, setCarbonEmissionRate] = useState(100);
  const [costOfMaking, setCostOfMaking] = useState(150); // Default cost
  const [user1CarbonRate, setUser1CarbonRate] = useState(80);
  const [user2CarbonRate, setUser2CarbonRate] = useState(75);
  const [model, setModel] = useState(one);
  const [modelPath, setModelPath] = useState('');
  const [modelObject, setModelObject] = useState(null);
  const loadModel = async () => {
    try {
      const modelPath = `${buildingType}_${numFloors}_${equipment}.glb`;
      const response = await fetch(`/assets/${modelPath}`);

      if (!response.ok) {
        throw new Error(`Failed to fetch model: ${response.statusText}`);
      }

      const model = await response.json();
      setModel(model);
    } catch (error) {
      console.error(error);
      // Handle the error, e.g., show a user-friendly message
    }
  };


  const render3DModel = () => {
    if (model) {
      return <primitive object={model.scene} />;
    } else {
      return (
        <Canvas>
          {/* Default Box if no model is loaded */}
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box args={[1, 1, 1]} rotation={[0, 0.01, 0]} />
        </Canvas>
      );
    }
  };

  const handleBuildingTypeChange = (type) => {
    setBuildingType(type);
  };

  const handleNumFloorsChange = (num) => {
    setNumFloors(num);
  };

  const handleEquipmentChange = (equip) => {
    setEquipment(equip);
  };

  const handleCostOfMakingChange = (cost) => {
    setCostOfMaking(cost);
  };

  const calculateCarbonEmission = () => {
    // Simplified calculation for demonstration purposes
    let baseRate = 100;

    if (equipment === 'advanced') {
      baseRate -= 5; // Decrease carbon emission rate by 5% for advanced equipment
    }

    // You can add more conditions based on building type, floors, etc.

    setCarbonEmissionRate(baseRate);
  };

  useEffect(() => {
    // Dynamically construct the model path based on selected options
    setModelPath(`../assets/${buildingType}_${numFloors}_${equipment}.glb`);
    try {
      const model = require(`${modelPath}`);
      setModel(model);
    } catch (error) {
      console.error(error);
      setModelPath(null); // Handle image load error
    }
  }, [buildingType, numFloors, equipment]);

  const renderDesign = () => {
    // Use the selected options to determine which design to show
    // This is a simplified example, in a real-world scenario, you might have different images or designs.
    return (
      <div className="border p-4 mt-4">
        <p>Selected Building Type: {buildingType}</p>
        <p>Number of Floors: {numFloors}</p>
        <p>Selected Equipment: {equipment}</p>
        {/* Render images or designs based on selections */}
        {/* Add your own logic and designs here */}
      </div>
    );
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex space-x-4">
        <button onClick={() => handleBuildingTypeChange('residential')} className="bg-blue-500 text-white px-4 py-2">Residential</button>
        <button onClick={() => handleBuildingTypeChange('commercial')} className="bg-green-500 text-white px-4 py-2">Commercial</button>
      </div>

      <div className="flex space-x-4 mt-4">
        {[1, 2, 3].map((num) => (
          <button key={num} onClick={() => handleNumFloorsChange(num)} className="bg-gray-300 px-4 py-2">{num} Floors</button>
        ))}
      </div>

      <div className="flex space-x-4 mt-4">
        <button onClick={() => handleEquipmentChange('basic')} className="bg-yellow-500 text-white px-4 py-2">Basic Equipment</button>
        <button onClick={() => handleEquipmentChange('advanced')} className="bg-red-500 text-white px-4 py-2">Advanced Equipment</button>
      </div>

      {renderDesign()}
      {render3DModel()}
      <model-viewer
        src={model}
        style={{
          width: '100%',
          height: '400px',
          backgroundColor: '#70BCD1',
          '--poster-color': '#ffffff00',
        }}
        ios-src="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b/Astronaut.usdz?v=1569545377878"
        poster="logo.png"
        alt="mgcms"
        shadow-intensity="1"
        camera-controls
        auto-rotate
        ar
      >
      </model-viewer>
      <div className="mt-4">
        <p>Carbon Emission Rate: {carbonEmissionRate}%</p>
        <p>Cost of Making: ${costOfMaking}</p>
      </div>

      <div className="mt-4">
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box args={[1, 1, 1]} rotation={[0, 0.01, 0]} />
        </Canvas>
      </div>

      <div className="mt-4">
        {/* Sustainability Indicator */}
        {(carbonEmissionRate < 80 && costOfMaking < 100) && (
          <div className="text-green-500 flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <p>Sustainable</p>
          </div>
        )}
      </div>

    </div>
  );
};

export default Architect;
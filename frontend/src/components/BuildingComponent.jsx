import React, { useState, useEffect } from 'react';
import residentialImage from '../assets/residential.jpg';
import commercialImage from '../assets/commercial.jpg';
import industrialImage from '../assets/industrial.jpg';

const BuildingComponent = () => {
  const [buildingType, setBuildingType] = useState('residential');
  const [numFloors, setNumFloors] = useState(1);
  const [equipment, setEquipment] = useState('basic');
  const [carbonEmissionRate, setCarbonEmissionRate] = useState(100);
  const [costOfMaking, setCostOfMaking] = useState(150);
  const [imageToShow, setImageToShow] = useState(null);

  useEffect(() => {
    // Update image based on buildingType, numFloors, and equipment
    switch (buildingType) {
      case 'residential':
        setImageToShow(residentialImage);
        break;
      case 'commercial':
        if (numFloors === 1) {
          setImageToShow(commercialImage); // Commercial with 1 floor
        } else {
          setImageToShow(commercialImage); // Commercial with more than 1 floor (modify as needed)
        }
        break;
      case 'industrial':
        if (equipment === 'basic') {
          setImageToShow(industrialImage); // Industrial with basic equipment
        } else {
          setImageToShow(industrialImage); // Industrial with advanced equipment (modify as needed)
        }
        break;
      default:
        setImageToShow(null);
    }
  }, [buildingType, numFloors, equipment]);

  const handleBuildingTypeChange = (type) => {
    setBuildingType(type);
  };

  const handleNumFloorsChange = (num) => {
    setNumFloors(num);
  };

  const handleEquipmentChange = (type) => {
    setEquipment(type);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex space-x-4">
        {['residential', 'commercial', 'industrial'].map((type) => (
          <button
            key={type}
            onClick={() => handleBuildingTypeChange(type)}
            className={`${
              buildingType === type ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'
            } px-4 py-2`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      <div className="flex space-x-4 mt-4">
        {[1, 2, 3].map((num) => (
          <button
            key={num}
            onClick={() => handleNumFloorsChange(num)}
            className={`${
              numFloors === num ? 'bg-gray-500 text-white' : 'bg-gray-300 text-black'
            } px-4 py-2`}
          >
            {num} Floors
          </button>
        ))}
      </div>

      <div className="flex space-x-4 mt-4">
        {['basic', 'advanced'].map((type) => (
          <button
            key={type}
            onClick={() => handleEquipmentChange(type)}
            className={`${
              equipment === type ? 'bg-yellow-500 text-white' : 'bg-red-500 text-white'
            } px-4 py-2`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)} Equipment
          </button>
        ))}
      </div>

      <div>
        <h2>Building Details</h2>
        <p>Building Type: {buildingType}</p>
        <p>Number of Floors: {numFloors}</p>
        <p>Equipment: {equipment}</p>
        <p>Carbon Emission Rate: {carbonEmissionRate}</p>
        <p>Cost of Making: {costOfMaking}</p>

        {imageToShow && (
          <div>
            <h3>Preview</h3>
            <img src={imageToShow} alt={`${buildingType} building`} style={{ maxWidth: '100%' }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default BuildingComponent;

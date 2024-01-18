// src/components/ImageSelector/ImageSelector.js
import React, { useState } from 'react';

const ImageSelector = () => {
  // State to store the selected combination
  const [selectedCombination, setSelectedCombination] = useState('imga');

  // Map of combinations to image URLs
  const combinationImages = {
    imga: '/assets/imga.jpg',
    imgb: '/assets/imgb.jpg',
    imgc: '/assets/imgc.jpg',
    // Add more combinations as needed
  };
  

  // Event handler for changing the selected combination
  const handleCombinationChange = (event) => {
    setSelectedCombination(event.target.value);
  };

  return (
    <div className="image-selector p-4">
      {/* Dropdown to select a combination */}
      <label htmlFor="combinationSelect" className="block text-sm font-medium text-gray-700">
        Select Combination:
      </label>
      <select
        id="combinationSelect"
        value={selectedCombination}
        onChange={handleCombinationChange}
        className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="imga">Combination 1</option>
        <option value="imgb">Combination 2</option>
        <option value="imgc">Combination 3</option>
        {/* Add more options as needed */}
      </select>

      {/* Display the selected image */}
      <div className="image-container mt-4">
        <img
          src={combinationImages[selectedCombination]}
          alt={`Combination ${selectedCombination} Image`}
          className="max-w-full max-h-64"
        />
      </div>
    </div>
  );
};

export default ImageSelector;

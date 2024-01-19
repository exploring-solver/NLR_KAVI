import React from 'react';
import model from '../assets/res_solar.glb';

const R_SUS = () => {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">Sustainable Development for Your Home</h2>
      <p className="text-gray-600">
        Sustainable development involves making choices that have a positive impact on the environment
        and contribute to long-term well-being. Here are some ways to make your house more sustainable:
      </p>

      <ul className="list-disc mt-4 ml-6">
        <li>Use renewable energy sources like solar panels.</li>
        <li>Implement home automation for efficient energy usage.</li>
        <li>Harvest rainwater for various purposes.</li>
      </ul>

      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Visualize Sustainability</h3>
        <model-viewer
          src={model}
          style={{
            width: '80%',
            margin: "auto",
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
        />
      </div>

      <div className="my-8">
        <a
          href="your_vr_house_url"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Visit House in VR/3D/Metaverse
        </a>
      </div>
    </div>
  );
};

export default R_SUS;

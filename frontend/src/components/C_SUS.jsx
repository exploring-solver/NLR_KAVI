import React from 'react';
import model from '../assets/res_solar.glb';

const C_SUS = () => {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">Sustainable Development for Commercial Buildings</h2>
      <p className="text-gray-600">
        Sustainable development for commercial buildings involves implementing eco-friendly solutions
        that contribute to energy efficiency and environmental conservation. Here are some sustainable solutions:
      </p>

      <ul className="list-disc mt-4 ml-6">
        <li>Integrate renewable energy sources, such as solar panels, to power the building.</li>
        <li>Utilize smart building technologies for efficient energy management and automation.</li>
        <li>Implement rainwater harvesting systems to reduce water consumption and promote sustainability.</li>
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
          href="your_vr_commercial_building_url"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Visit Commercial Building in VR/3D/Metaverse
        </a>
      </div>
    </div>
  );
};

export default C_SUS;

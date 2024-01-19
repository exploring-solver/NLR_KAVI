// ARInteriorDesign.jsx
import React from 'react';
import arDesign1 from '../assets/commercial_1_advanced.glb'
import arDesign2 from '../assets/commercial_1_basic.glb'

const ArDesign = () => {
  const arDesigns = [
    { name: 'Living Room AR Design', src: arDesign1 },
    { name: 'Kitchen AR Design', src: arDesign2 },
    // Add more AR designs as needed
  ];

  return (
    <div className="container w-[90%] mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">AR Interior Design</h2>
      <div className='flex flex-wrap gap-10'>
        {arDesigns.map((design, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-bold mb-2">{design.name}</h3>

            {/* Placeholder for the 3D model */}
            <div
              className="bg-gray-300 h-[400px] w-[600px] rounded-md mb-4"
              style={{ backgroundImage: 'url(placeholder_image_url)', backgroundSize: 'cover' }}
            >
              <model-viewer
                src={design.src}
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
              />
            </div>

            {/* Button to visit the model in the metaverse */}
            <a
              href={`/ar-designs/${encodeURIComponent(design.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Visit in Metaverse
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArDesign;

import React from 'react';
import sus1 from '../assets/commercial_1_advanced.glb'
import sus2 from '../assets/commercial_1_basic.glb'
const MarketPlace = () => {
    const models = [
        { name: 'Sustainable Classroom', src : sus1},
        { name: 'Eco-friendly Library', src:sus2 },
        // Add more models as needed
    ];

    return (
        <div className="container w-[90%] mx-auto mt-8">
            <h2 className="text-3xl font-bold mb-4">Marketplace for Sustainable Learning and Development</h2>
            <div className='flex flex-wrap gap-10'>

            {models.map((model, index) => (
                <div key={index} className="mb-8">
                    <h3 className="text-xl font-bold mb-2">{model.name}</h3>

                    {/* Placeholder for the 3D model */}
                    <div
                        className="bg-gray-300 h-[400px] w-[600px] rounded-md mb-4"
                        style={{ backgroundImage: 'url(placeholder_image_url)', backgroundSize: 'cover' }}
                        >
                        <model-viewer
                            src={model.src}
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
                    </div>

                    {/* Button to visit the model in the metaverse */}
                    <a
                        href={model.url}
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

export default MarketPlace;

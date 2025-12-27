import React from 'react';
import { Thermometer, Droplets } from 'lucide-react';

const CurrentWeather = ({ data }) => {
    if (!data) return <div className="text-gray-500">Loading...</div>;

    const { temperature, humidity } = data;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
                <div className="p-3 bg-red-100 rounded-full text-red-500">
                    <Thermometer size={32} />
                </div>
                <div>
                    <p className="text-gray-500 text-sm">Temperature</p>
                    <p className="text-3xl font-bold">{temperature.toFixed(1)}°C</p>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
                <div className="p-3 bg-blue-100 rounded-full text-blue-500">
                    <Droplets size={32} />
                </div>
                <div>
                    <p className="text-gray-500 text-sm">Humidity</p>
                    <p className="text-3xl font-bold">{humidity.toFixed(1)}%</p>
                </div>
            </div>
        </div>
    );
};

export default CurrentWeather;

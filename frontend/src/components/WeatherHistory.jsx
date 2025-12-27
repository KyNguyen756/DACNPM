import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const WeatherHistory = ({ data }) => {
    if (!data || data.length === 0) return <div className="text-gray-500">No history data available</div>;

    // Format date for XAxis
    const formattedData = data.map(item => ({
        ...item,
        time: new Date(item.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    })).reverse(); // Assuming API returns latest first

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Weather History</h2>
            <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={formattedData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="time" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="temperature" stroke="#ef4444" name="Temperature (°C)" />
                        <Line type="monotone" dataKey="humidity" stroke="#3b82f6" name="Humidity (%)" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default WeatherHistory;

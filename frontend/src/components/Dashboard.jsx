import React, { useState, useEffect } from 'react';
import { getLatestWeather, getWeatherHistory } from '../services/api';
import CurrentWeather from './CurrentWeather';
import WeatherHistory from './WeatherHistory';
import { RefreshCw } from 'lucide-react';

const Dashboard = () => {
    const [latest, setLatest] = useState(null);
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [lastUpdated, setLastUpdated] = useState(new Date());

    const fetchData = async () => {
        try {
            const [latestData, historyData] = await Promise.all([
                getLatestWeather(),
                getWeatherHistory()
            ]);
            setLatest(latestData);
            setHistory(historyData);
            setLastUpdated(new Date());
        } catch (error) {
            console.error("Failed to fetch weather data", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
        const interval = setInterval(fetchData, 5000); // Refresh every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">IoT Weather Monitor</h1>
                <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-2">Last updated: {lastUpdated.toLocaleTimeString()}</span>
                    <button onClick={fetchData} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                        <RefreshCw size={16} />
                    </button>
                </div>
            </div>

            <CurrentWeather data={latest} />
            <WeatherHistory data={history} />
        </div>
    );
};

export default Dashboard;

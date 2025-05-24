import React, { useState } from 'react';

const FlightFilters = ({ flights, onFilter }) => {
  const [filter, setFilter] = useState('all');
  
  const origins = [...new Set(flights.map(f => f.origin))];
  const destinations = [...new Set(flights.map(f => f.destination))];
  
  const handleFilterChange = (type) => {
    setFilter(type);
    onFilter(type);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md mb-6">
      <div className="flex flex-wrap gap-2">
        <button 
          onClick={() => handleFilterChange('all')}
          className={`px-4 py-2 rounded-lg ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}>
          Todos
        </button>
        <button 
          onClick={() => handleFilterChange('onTime')}
          className={`px-4 py-2 rounded-lg ${filter === 'onTime' ? 'bg-green-600 text-white' : 'bg-gray-100'}`}>
          A tiempo
        </button>
        <button 
          onClick={() => handleFilterChange('delayed')}
          className={`px-4 py-2 rounded-lg ${filter === 'delayed' ? 'bg-red-600 text-white' : 'bg-gray-100'}`}>
          Retrasados
        </button>
      </div>
    </div>
  );
};

export default FlightFilters;
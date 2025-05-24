import React, { useState } from 'react';
import flightData from './mock/flights';
import FlightStatusCard from './components/FlightStatusCard';
import ComplianceChart from './components/ComplianceChart';
import FlightFilters from './components/FlightFilters';

const App = () => {
  const [filteredFlights, setFilteredFlights] = useState(flightData);
  
  const handleFilter = (type) => {
    switch(type) {
      case 'onTime':
        setFilteredFlights(flightData.filter(f => f.status === "On Time"));
        break;
      case 'delayed':
        setFilteredFlights(flightData.filter(f => f.status === "Delayed"));
        break;
      default:
        setFilteredFlights(flightData);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">FlightStatus</h1>
        <p className="text-gray-600">Monitor de cumplimiento de salidas de vuelos</p>
      </header>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <ComplianceChart flights={filteredFlights} />
        </div>
        <div className="lg:col-span-2">
          <FlightFilters flights={flightData} onFilter={handleFilter} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredFlights.map(flight => (
              <FlightStatusCard key={flight.id} flight={flight} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

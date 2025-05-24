import React from 'react';

const ComplianceChart = ({ flights }) => {
  const onTimeFlights = flights.filter(f => f.status === "On Time").length;
  const complianceRate = (onTimeFlights / flights.length) * 100;
  
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Cumplimiento de Salidas</h2>
      <div className="flex items-center justify-between">
        <div className="w-32 h-32 rounded-full flex items-center justify-center" 
             style={{
               background: `conic-gradient(#10B981 ${complianceRate * 3.6}deg, #FEE2E2 0deg)`
             }}>
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold">{Math.round(complianceRate)}%</span>
          </div>
        </div>
        <div className="ml-6">
          <div className="flex items-center mb-2">
            <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
            <span>A tiempo: {onTimeFlights}</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
            <span>Retrasados: {flights.length - onTimeFlights}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceChart;
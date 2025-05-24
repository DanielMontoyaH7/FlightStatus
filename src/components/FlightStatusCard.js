import React from 'react';

const FlightStatusCard = ({ flight }) => {
  const isOnTime = flight.status === "On Time";
  const delayMinutes = Math.abs(
    new Date(`2000-01-01T${flight.actualDeparture}:00`) - 
    new Date(`2000-01-01T${flight.scheduledDeparture}:00`)
  ) / 60000;

  return (
    <div className={`p-4 rounded-xl shadow-md ${isOnTime ? 'bg-green-50' : 'bg-red-50'} transition-all hover:shadow-lg`}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-lg">{flight.flightNumber}</h3>
          <p className="text-gray-600">{flight.origin} → {flight.destination}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${isOnTime ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {flight.status}
        </span>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <div>
          <p className="text-xs text-gray-500">Programado</p>
          <p className="font-medium">{flight.scheduledDeparture}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Real</p>
          <p className="font-medium">{flight.actualDeparture}</p>
        </div>
      </div>
      {!isOnTime && (
        <p className="mt-2 text-sm text-red-600">
          Retraso: {delayMinutes} minutos
        </p>
      )}
    </div>
  );
};

export default FlightStatusCard;
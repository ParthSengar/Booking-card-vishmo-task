import React from 'react';

const BookingCard = ({
  serviceName,
  serviceImage,
  providerName,
  price,
  onBookNow,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Mobile Layout - Vertical */}
      <div className="block md:hidden">
        <div className="relative overflow-hidden">
          <img
            src={serviceImage}
            alt={serviceName}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg">
            <span className="text-lg font-bold text-blue-600">{price}</span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{serviceName}</h3>
          <p className="text-gray-600 mb-4">{providerName}</p>
          <button
            onClick={onBookNow}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold
                     hover:bg-blue-700 active:bg-blue-800 transition-all duration-200
                     transform hover:scale-[1.02] active:scale-[0.98]
                     shadow-md hover:shadow-lg"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Desktop Layout - Horizontal */}
      <div className="hidden md:flex">
        <div className="relative w-72 overflow-hidden">
          <img
            src={serviceImage}
            alt={serviceName}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{serviceName}</h3>
            <p className="text-gray-600 mb-4">{providerName}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-600">{price}</div>
            <button
              onClick={onBookNow}
              className="bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold
                       hover:bg-blue-700 active:bg-blue-800 transition-all duration-200
                       transform hover:scale-[1.02] active:scale-[0.98]
                       shadow-md hover:shadow-lg"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
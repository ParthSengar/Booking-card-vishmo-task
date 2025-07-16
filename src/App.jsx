import React from 'react';
import BookingCard from './components/BookingCard';
import Toast from './components/Toast';
import { useToast } from './hooks/useToast';
import { bookingServices } from './data/bookingData';

function App() {
  const { toast, showToast, hideToast } = useToast();

  const handleBookNow = (serviceName) => {
    showToast(`${serviceName} booked successfully!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800">Book Your Services</h1>
          <p className="text-gray-600 mt-2">Choose from our premium wellness and beauty services</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="space-y-6">
          {bookingServices.map((service) => (
            <BookingCard
              key={service.id}
              serviceName={service.serviceName}
              serviceImage={service.serviceImage}
              providerName={service.providerName}
              price={service.price}
              onBookNow={() => handleBookNow(service.serviceName)}
            />
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Choose Our Services?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-xl">⚡</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Instant Booking</h3>
              <p className="text-gray-600 text-sm">Book your favorite services with just one click</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-xl">✨</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Premium Quality</h3>
              <p className="text-gray-600 text-sm">All services provided by certified professionals</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-xl">💰</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Best Prices</h3>
              <p className="text-gray-600 text-sm">Competitive pricing with no hidden charges</p>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <Toast
        message={toast.message}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
    </div>
  );
}

export default App;
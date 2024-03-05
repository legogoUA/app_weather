import React, { useState } from 'react';
import Modal from 'react-modal';

const AddTripModal = ({ isOpen, onClose, onAddTrip, possibleCities }) => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleAddTrip = () => {
    if (selectedCity) {
      const newTrip = {
        city: selectedCity.name,
        startDate,
        endDate,
      };
      onAddTrip(newTrip);
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <h2>Add New Trip</h2>
      <label>City:</label>
      <select
        value={selectedCity ? selectedCity.id : ''}
        onChange={(e) => {
          const cityId = e.target.value;
          const city = possibleCities.find((c) => c.id === Number(cityId));
          setSelectedCity(city);
        }}
      >
        <option value="" disabled>Select a city</option>
        {possibleCities.map((city) => (
          <option key={city.id} value={city.id}>
            {city.name}
          </option>
        ))}
      </select>
      <label>Start Date:</label>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <label>End Date:</label>
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <button onClick={handleAddTrip}>Add Trip</button>
      <button onClick={onClose}>Cancel</button>

      {selectedCity && (
        <div>
          <h3>Selected City: {selectedCity.name}</h3>
          <img
            src={selectedCity.image}
            alt={selectedCity.name}
            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
          />
        </div>
      )}
    </Modal>
  );
};

export default AddTripModal;

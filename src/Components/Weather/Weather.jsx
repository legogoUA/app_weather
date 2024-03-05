import React, { useState } from 'react';
import './Weather.scss';
import AddTripModal from '../AddTripModal/AddTripModal';
import cityData from '../Assets/cityData';

const Weather = () => {
  const [trips, setTrips] = useState([
    { id: 1, city: cityData[0], startDate: '2024.03.01', endDate: '2024.03.05' },
  ]);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [searchText, setSearchText] = useState('');

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleAddTrip = (newTrip) => {
    setTrips([...trips, { id: trips.length + 1, ...newTrip }]);
    closeModal();
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const filteredTrips = trips.filter((trip) =>
    trip.city.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className='container'>
      <h2>
        <span className="thin">Weather</span> <span className="bold">Forecast</span>
      </h2>
      <div className="search-container">
        <i className="fas fa-search search-icon"></i>
        <input
          className="search"
          type="text"
          placeholder="Search your trip"
          value={searchText}
          onChange={handleSearch}
        />
      </div>

      <AddTripModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        onAddTrip={handleAddTrip}
        possibleCities={cityData}
      />

      <div className="tripcard" style={{ display: 'flex', overflowX: 'auto' }}>
        {filteredTrips.map((trip) => (
          <div key={trip.id} style={{ margin: '10px', minWidth: '200px' }}>
            {trip.city && (
              <>
                <img
                  src={trip.city.image}
                  alt={trip.city.name}
                  style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                />
                <h3>{trip.city.name}</h3>
                <p>
                  {trip.startDate} - {trip.endDate}
                </p>
              </>
            )}
          </div>
        ))}

        <button onClick={openModal} className="button"><span>+</span> <br />Add trip</button> 
      </div>

      <div className="week">
        <h2>Week</h2>
      </div>
    </div>
  );
};

export default Weather;

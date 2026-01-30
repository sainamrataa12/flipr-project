import React from 'react';

const ClientCard = ({ client }) => (
  <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem', width: '300px' }}>
    <img
      src={`http://localhost:5000/uploads/${client.image}`}
      alt={client.name}
      style={{ width: '100%', height: '200px', objectFit: 'cover' }}
    />
    <h3>{client.name}</h3>
    <p>{client.designation}</p>
    <p>{client.description}</p>
  </div>
);

export default ClientCard;

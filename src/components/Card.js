import React from 'react';

const Card = ({ ticket }) => {
  return (
    <div className="card">
      <h4>{ticket.title}</h4>
      <p>Status: {ticket.status}</p>
      <p>User: {ticket.user}</p>
      <p>Priority: {ticket.priority}</p>
    </div>
  );
};

export default Card;

import React from 'react';
import Card from './Card';

const List = ({ title, tickets }) => {
  return (
    <div className="list">
      <h3>{title}</h3>
      {tickets.map((ticket) => (
        <Card key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default List;

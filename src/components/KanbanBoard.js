import React from 'react';
import List from './List';

const KanbanBoard = ({ groupedAndSortedTickets }) => {
  return (
    <div className="board">
      {groupedAndSortedTickets.map((group) => (
        <List key={group.key} title={group.title} tickets={group.tickets} />
      ))}
    </div>
  );
};

export default KanbanBoard;

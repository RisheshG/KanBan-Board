import React, { useState, useEffect } from 'react';
import '../App.css';
import DisplayOptions from './DisplayOptions';
import KanbanBoard from './KanbanBoard';

const API_URL = 'https://api.quicksell.co/v1/internal/frontend-assignment';

function App() {
  const [tickets, setTickets] = useState([]);
  const [groupBy, setGroupBy] = useState('status'); // Default grouping by status
  const [sortBy, setSortBy] = useState('priority'); // Default sorting by priority

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setTickets(data.tickets));
  }, []);

  const groupTickets = () => {
    const grouped = {};
    tickets.forEach((ticket) => {
      const groupKey = ticket[groupBy];
      if (!grouped[groupKey]) {
        grouped[groupKey] = [];
      }
      grouped[groupKey].push(ticket);
    });

    const groupedTickets = Object.keys(grouped).map((key) => ({
      key,
      title: key, // Customize the title as needed
      tickets: grouped[key],
    }));

    return groupedTickets;
  };

  const sortTickets = (groupedTickets) => {
    return groupedTickets.map((group) => ({
      ...group,
      tickets: group.tickets.slice().sort((a, b) => {
        if (sortBy === 'priority') {
          return b.priority - a.priority; // Sort by priority (numeric)
        } else if (sortBy === 'title') {
          return a.title.localeCompare(b.title); // Sort by title (string)
        }
        return 0;
      }),
    }));
  };

  const groupedAndSortedTickets = sortTickets(groupTickets());

  return (
    <div className="App">
      <header className="App-header">
        <h1>Kanban Board</h1>
        <DisplayOptions setGroupBy={setGroupBy} setSortBy={setSortBy} />
      </header>
      <main>
        <KanbanBoard groupedAndSortedTickets={groupedAndSortedTickets} />
      </main>
    </div>
  );
}

export default App;

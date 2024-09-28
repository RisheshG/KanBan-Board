import React from 'react';

const DisplayOptions = ({ setGroupBy, setSortBy }) => {
  return (
    <div className="display-options">
      <button onClick={() => setGroupBy('status')}>Group by Status</button>
      <button onClick={() => setGroupBy('user')}>Group by User</button>
      <button onClick={() => setGroupBy('priority')}>Group by Priority</button>
      <button onClick={() => setSortBy('priority')}>Sort by Priority</button>
      <button onClick={() => setSortBy('title')}>Sort by Title</button>
    </div>
  );
};

export default DisplayOptions;

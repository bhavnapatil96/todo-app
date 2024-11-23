import React from 'react';

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="btn-group mb-3">
      <button
        className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-outline-primary'}`}
        onClick={() => setFilter('all')}
      >
        All
      </button>
      <button
        className={`btn ${filter === 'completed' ? 'btn-success' : 'btn-outline-success'}`}
        onClick={() => setFilter('completed')}
      >
        Completed
      </button>
      <button
        className={`btn ${filter === 'pending' ? 'btn-warning' : 'btn-outline-warning'}`}
        onClick={() => setFilter('pending')}
      >
        Pending
      </button>
    </div>
  );
};

export default Filter;

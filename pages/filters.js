import React from 'react';

const Filters = ({ filters, setFilters, applyFilters }) => {
  return (
    <div className="p-4 bg-white shadow rounded-lg mb-6 flex flex-col md:flex-row gap-4">
      
      <select
        value={filters.gender}
        onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
        className="p-2 border rounded-md w-full md:w-48"
      >
        <option value="">All Genders</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <select
        value={filters.availableToday}
        onChange={(e) => setFilters({ ...filters, availableToday: e.target.value })}
        className="p-2 border rounded-md w-full md:w-48"
      >
        <option value="">Availability</option>
        <option value="true">Available Today</option>
        <option value="false">Not Available</option>
      </select>

      <input
        type="number"
        placeholder="Min Fees"
        value={filters.feesMin}
        onChange={(e) => setFilters({ ...filters, feesMin: e.target.value })}
        className="p-2 border rounded-md w-full md:w-40"
      />

      <input
        type="number"
        placeholder="Max Fees"
        value={filters.feesMax}
        onChange={(e) => setFilters({ ...filters, feesMax: e.target.value })}
        className="p-2 border rounded-md w-full md:w-40"
      />

      <button
        onClick={applyFilters}
        className="bg-blue-600 text-white rounded-md p-2 hover:bg-blue-700 w-full md:w-auto"
      >
        Apply Filters
      </button>

    </div>
  );
};

export default Filters;

// src/components/Filter.js
import React, { useState } from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  margin: 16px;
`;

const Filter = ({ onFilter }) => {
  const [category, setCategory] = useState('');

  const handleFilter = () => {
    onFilter(category);
  };

  return (
    <FilterContainer>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="machinery">Machinery</option>
        <option value="spare-parts">Spare Parts</option>
        {/* Add more categories as needed */}
      </select>
      <button onClick={handleFilter}>Filter</button>
    </FilterContainer>
  );
};

export default Filter;

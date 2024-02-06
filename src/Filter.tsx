
import React, { useState } from 'react';

interface FilterProps {
  onFilterChange: (value: string) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [filterText, setFilterText] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(event.target.value);
    onFilterChange(event.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="Filter..." value={filterText} onChange={handleInputChange} />
    </div>
  );
}

export default Filter;

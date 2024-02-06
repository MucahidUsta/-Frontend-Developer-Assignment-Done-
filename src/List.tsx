
import React from 'react';

interface ListItem {
  _id: string;
  name: string;
  population: number;
  size: string;
}

interface ListProps {
  items: ListItem[];
  filter: string;
  selectedItem: number | null;
  onItemClick: (index: number) => void;
}

const List: React.FC<ListProps> = ({ items, filter, selectedItem, onItemClick }) => {
  const filteredItems = items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <ul>
      {filteredItems.map((item, index) => (
        <li key={item._id}
          onClick={() => onItemClick(index)}
          style={{ backgroundColor: selectedItem === index ? '#FFD700' : '#FFFFFF' }}>
          {item.name} - Population: {item.population}, Size: {item.size}
        </li>
      ))}
    </ul>
  );
}

export default List;


import React, { useState, useEffect } from 'react';
import { ApolloClient, InMemoryCache, useQuery, gql } from '@apollo/client';
import List from './List';
import Filter from './Filter';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/graphql',
  cache: new InMemoryCache()
});

function App() {
  const [filter, setFilter] = useState('');
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [items, setItems] = useState<any[]>([]);

  const QUERY = gql`
    query GetCountries {
      Country {
        _id
        name
        population
        size
      }
    }
  `;

  const { loading, error } = useQuery(QUERY, {
    onCompleted: (data) => {
      setItems(data.Country);
      setSelectedItem(Math.min(data.Country.length - 1, 9)); 
    }
  });

  useEffect(() => {
    if (error) console.error(error);
  }, [error]);

  const handleFilterChange = (value: string) => {
    setFilter(value);
  };

  const handleItemClick = (index: number) => {
    setSelectedItem(index);
  };

  return (
    <div>
      <Filter onFilterChange={handleFilterChange} />
      {loading ? <p>Loading...</p> :
        <List items={items} filter={filter} selectedItem={selectedItem} onItemClick={handleItemClick} />}
    </div>
  );
}

export default App;

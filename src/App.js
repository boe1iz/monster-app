import React, { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');
  const filteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  useEffect(() => {
    (async () => {
      const url = 'https://jsonplaceholder.typicode.com/users';
      const response = await fetch(url);
      const data = await response.json();
      setMonsters(data);
    })();
  }, []);

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox
        placeholder="search monster..."
        handleChange={e => setSearchField(e.target.value)}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;

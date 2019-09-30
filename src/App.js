import React, { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/CardList/CardList";
import SearchBox from "./components/SearchBox/SearchBox";

const App = () => {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    (async () => {
      const url = "https://jsonplaceholder.typicode.com/users";
      const response = await fetch(url);
      const data = await response.json();
      setMonsters(data);
    })();
  }, []);

  return (
    <div className="App">
      <SearchBox />
      <CardList monsters={monsters} />
    </div>
  );
};

export default App;

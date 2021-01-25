import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';
import CakeList from './components/CakeList.js';
import cakeData from './cake-data.json'

function App() {
   const [cakes, setCakes] =  useState(cakeData);
  return (
    <CakeList cakes={cakes} onRemoveCake = {(id) => {
      const newCakes = cakes.filter(cake => cake.id !== id);
      setCakes(newCakes);
      }}

     onRateCake = {(id, rating) =>{
      const newCakes = cakes.map(cake =>
      cake.id === id ? {...cake, rating} : cake
      );
      setCakes(newCakes);
     }}

    />
  );
}

export default App;

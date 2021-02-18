import React from 'react';
import './App.css';

// Datos en array de objetos
import Cards_Data from './components/cards_data'

 function App(props) {
   console.log(Cards_Data);
  return (
    <>
      <h1>Hola Mundo</h1>
      <Cards_Data {props[0].id}/>
    </>
  )
}

export default App;

import React from 'react';
import './App.css';
import {User} from "./06-callback/06-callback";
import {gago, gagoCar, gagoFood, PersonComponent} from "./07-destructuring/07-destructuring";





function App() {
  return (
    <div className="App">
      <User/>
            <br/>
        <PersonComponent title={"Mr"} person={gago} food={gagoFood} car={gagoCar} />


    </div>
  );
}


export default App;

import React from 'react';
import './App.css';
import {User} from "./06-callback/06-callback";
import {gago, PersonComponent} from "./07-destructuring/07-destructuring";





function App() {
  return (
    <div className="App">
      <User/>
            <br/>
        <PersonComponent title={"Mr"} person={gago}/>


    </div>
  );
}


export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import {splitIntoWords, sum} from "./01/01";


// Test of SplitIntoWords
// console.log(splitIntoWords("aaa")[0]==="Hello")
// console.log(splitIntoWords("aaa")[1]==="my")
// console.log(splitIntoWords("aaa")[2]==="friends.")





const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

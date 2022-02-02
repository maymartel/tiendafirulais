import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { initializeApp } from "firebase/app"; //Para firebase
import App from './App';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAdj311d3TJRn-uK7lrbP0gIhloKG-2z2Y",
  authDomain: "tiendaadoptaunfirulais.firebaseapp.com",
  projectId: "tiendaadoptaunfirulais",
  storageBucket: "tiendaadoptaunfirulais.appspot.com",
  messagingSenderId: "479405568899",
  appId: "1:479405568899:web:097a0950f7b48e4921fcb6",
  measurementId: "G-3C3WKZ4LG4"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


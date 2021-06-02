import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import store from './store';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZW7o6d24cNuywBFQFXuYnbOoDSoJ-hTg",
  authDomain: "web-messenger-40c9b.firebaseapp.com",
  projectId: "web-messenger-40c9b",
  storageBucket: "web-messenger-40c9b.appspot.com",
  messagingSenderId: "645405261953",
  appId: "1:645405261953:web:4da0517c6d1cd989a9cd80",
  measurementId: "G-HRWL1043SH"
};
// Initialize Firebase


firebase.initializeApp(firebaseConfig);


window.store = store;

ReactDOM.render(

  <Provider store = {store}>

    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Provider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

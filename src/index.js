import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios';

axios.interceptors.request.use((req) => {
  console.log(`a ${req.method} request sent to ${req.url}`)
  return req
}, (req) => {
  console.log(`an error occurd sending request to ${req.url}`)
})

// axios.interceptors.response.use((res) => {
  
//   console.log(`response got back from ${res.config.url} status: ${res.status}`)
// }, (res) => {
//   console.log(`there is no response from ${res.config.url} , ${res.status}`)
// })


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Clock from './testComponent/clock'

ReactDOM.render(
  <React.StrictMode>
    {/* <Clock /> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}</h2>
//     </div>
//   );
//   ReactDOM.render(
//     // <React.StrictMode>
//     //   <App />
//     // </React.StrictMode>,
//     element,
//     document.getElementById('root')
//   )
// }
// setInterval(tick, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

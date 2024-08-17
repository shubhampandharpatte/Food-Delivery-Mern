import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {Provider} from 'react-redux'
import store from "./store";
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AlertProvider template={AlertProvider} {...options}>
    <React.StrictMode>
    <App />
  </React.StrictMode>
    </AlertProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

import React from "react";
import ReactDOM from "react-dom/client";
import "slick-carousel/slick/slick.css"; 
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './redux/store'
import App from "./App";
import "./input.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 
   <Provider store={store}>
     <PersistGate loading={"loading"} persistor={persistor}>
     <App />
     </PersistGate>
   </Provider>
 
);

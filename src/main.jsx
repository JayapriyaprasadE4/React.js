// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Provider } from 'react-redux'

// import ReactDOM from "react-dom/client"

// import {store} from "./Practice_05-02-2026/redux/store.js"
// import {store} from "./Toolkit-practice-06-02-2026/app/store"
// import App from "./Cart-Practice_07-02-2026/App"
// import store from "./Cart-Practice_07-02-2026/store"

// import App from "./Cart-Practice-10-02-2026/App"

// import store from "./Cart-Practice-10-02-2026/store"

// import App from "./App"


// import {store} from "./Cart-Practice_06-02-2026/App"
// import App from "./App.jsx"
// import store from './Redux/App.js'
// import{store} from "./ReduxPayloadPrcatice_04-02-2026/store"
// import App from "./App"
// import {store} from "./Cart-Practice_06-02-2026/App"



// import {store} from "./appPractice/store.js"

// import{store} from "./ReduxPayloadPrcatice_04-02-2026"

// createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//     <App/>
//   </Provider>

//   <React.StrictMode>
//     <App/>
//   </React.StrictMode>
// )
import React from "react";

import ReactDOM from "react-dom/client"
// import App from "./UseReducer_11-02-2026/App"
// import App from "./Role-Login-Practice_12-02-2026/App.jsx"
// import A from './UseEffect_13-02-2026/A';
import App from "./Component_movement_16-02-2026/App.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <App/> */}
        {/* <A/> */}
        <App/>
   
    </React.StrictMode>
)

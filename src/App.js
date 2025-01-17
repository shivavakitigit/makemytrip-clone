import * as React from "react";
import Button from "@mui/material/Button";

import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainDashBoard from "./Components/MainDashBoard/MainDashBoard";
import Home from "./Components/Home/Home";
import FlightSearch from "./Components/FlightSearch/FlightSearch";
import Login from "./Components/Login/Login";



function App() {
  return (
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/flights" element={<FlightSearch />} />
            <Route path="/hotels" element={<div>Hotels Page</div>} />
            <Route path="/trains" element={<div>Trains Page</div>} />
            <Route path="/buses" element={<div>Buses Page</div>} />
          </Routes>
        </main>
      </div>
  );
}

export default App;










// const data = React.createContext();

// wrapper 
// <Provider value={data}>
// productsComponent


// aboutUsComponent   secretToken
 

// MainDashBoard


// </Provider>



// aboutUsComponent

// const somedata=  React.useContext(data)



// Redux


// Global State Management Container



// const DashBoard = () =>{


//   React.useContext()// getting data from context api obj
//   useSelector()// getting data from Redux State
//   const [userDetails, setUserDetails]= useState({
//     name:"Rohith",
//     location:'Vizag',
//     phoneNumber : 29379829745
//   })

//   return(
//     <>
//     ikkade 
    
//     </>
//   )
// }





// Dispatch  js method  

// dispatch(type, payload)

// const getData = (type, payload)=>{
//   return 'soemthing'
// }

// Reducers   complte logic 

// const globalJSObject  = {
//   name:"Rohith",
//   location:'Vizag',
//   phoneNumber : 29379829745
// }

// if(username==="shiva" && password ==="23424"){

// }



// store.js

// redux-toolkit
// Store  

//        slices/
//        FlightSearchSlice.js
//        HeaderSlice.js
//        DashBoardSlice.js

// store.js
// import and export 


// local
// React.useState("dataaaa")


// global Redux State

// reducers

// global State

// logic


// store.js 


import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { store } from "./Store/store";
import { Provider } from "react-redux";
// global css
// globalState
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// redux

// Login

// userName    "pawan"
// password     12312312

// const [loginUserDetails, setLoginUserDetails] = useState({
//   name:"",
//   password:""
// })
// const handleLogin =(e) =>{
// const name = e.target.name
// const value = e.target.value

// setLoginUserDetails((prev)=>{
//   ...prev,
//   name : value
// })


// dispatch({
//   type:'LOGIN_FORM',
//   payload:loginUserDetails
// })

// const urlData = axios.post(url, payload);



// }

// dispatch

// Reducers



// const globalState = {
//   name:"",
//   details:'',
//   userLoginDetails : {
//     userName: 'dinesh',
//     password: '123234'
//   }
// }


// const getUserId = (type, payload) =>{
// if(type==="LOGIN_FORM"){
//   ...globalState,  // copy of globaState
//   globalState.userLoginDetails = payload
// }

// }


// type
// payload


// store



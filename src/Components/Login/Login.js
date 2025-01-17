import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loginUser,
  setUserNameGlobalState,
} from "../../Redux/FlightSearchSlice";
import { Audio } from "react-loader-spinner";

export default function Login() {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { globalData, isLoading, user } = useSelector(
    (globalState) => globalState
  );

  console.log("globalData", user);
  const handleUserNameChange = (event) => {
    const value = event.target.value;
    setUserName(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleLogin = async () => {
    console.log(userName, "userName", password, "password");
    await dispatch(loginUser({ userName, password }));
  };
  return (
    <div>
      {isLoading ? (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      ) : null}
      <h1>{user}</h1>
      <input type="text" onChange={handleUserNameChange} /> UserName
      <input type="text" onChange={handlePasswordChange} /> Password
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

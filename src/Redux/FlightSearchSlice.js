import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useState } from "react";
import axios from "axios";

const initialState = {
  user: "Balayyyaaaa",
  flightSearchData: [],
  userId: "",
  password: "",
  isLoading: false,
};

// type : "auth/login",
//payload : mana user data

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userCredentials) => {
    debugger;

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/postssss",
        userCredentials
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const FlightSearchSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setUserNameGlobalState: (state, action) => {
      debugger;
    },
    getUserName: (state, action) => {},
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.userName
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = true;
      });
  },
});

// Action creators are generated for each case reducer function
export const {
  getUserName,
  setSearchGlobalReduxData,
  changeUserName,
  decrement,
  incrementByAmount,
  setUserNameGlobalState,
} = FlightSearchSlice.actions;

export default FlightSearchSlice.reducer;

// flightSearch Component

// form    Hyderabad

// to      Bangalore

// Search

// dispatch(postTravelerDetails((type:"TRAVEL_DATA", payload:{
//   from: "hyderbad",
//   to: Bangalore
// })))

// reducer

// globalState

// postTravelerDetails

// type payload

// ...previousGlobalState

// state Managemetn 2 things

// Redux           old way

// type : "LOGIN_FORM",

// payload: capturedUsernmae and password

// Redux Toolkit   latest way

// reducers   ---logic buiding

// LoginReducer

// Redux based on type and payload

// redux toolkit

// promises

// api hit

// stutus

// pending

// success or  fulfilled

// reject

// extraReducers
// builder.

// addCase(pending){
// "  status pening"
// }

// addCase(fulfullied){
//  " status fullifle getting data from API"
// }

// addCase(rejected){
//   "rejected the API CBEAICE WE THE URL IS NOT MATCHED"
// }

// API HIT    -

// STATE   PENDING   FULFILED OR SUCCESS  REJECCTED

// API

// folder Structire

// component

// Login.tsx

// useState("hi this is pawan")

// redux toolkit

// LoginSlice

// SignUp.tsx

// SignUpSlice

// createAsyncThunk// for makiing api emthods

// redux toolkit api call

// login.tsx

// userName

// password

// Login

// userName = "sharwani"

// pasword = 124234

// API

// REDUX TOOLKIT

// createAsyncThunk

// STATES

// PENDING

// FULFILLED OR SUCCESSS

// FAILURE OR REJECTED

import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import ComboBox from "../../ReusableComponents/ComboBox/ComboBox";
import BasicDatePicker from "../../ReusableComponents/ComboBox/BasicDatePicker/DatePicker";
import FlightsData from "../../Constants/Constants";
import { Button, Grid } from "@mui/material";
import { flightService } from "../../Service/flightService";
import { UserContext } from "./FlightSearchContext";
import { dataShare } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import {
  changeUserName,
  getUserName,
  setSearchGlobalReduxData,
} from "../../Redux/FlightSearchSlice";

export default function FlightSearch() {
  const dispatch = useDispatch();

  const [heroName, setHeroName] = useState("localState");

  const data = useSelector((globalState) => globalState);

  console.log(data.userName, "dataaaa");
  const [responseDataFromServer, setResponseDataFromServer] = useState([]);
  const [countryList, setCountryList] = useState(FlightsData);
  const [differentCountryList, setDifferenCoutryList] = useState([
    {
      iata: "SHIVA",
      icon: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/ic-flight-onward.png",
      label: "USSSSS",
      airportName: "Chhatrapati Shivaji International Airport",
      country: "SHivaaaaaa",
      countryCode: "US",
      group_type: "",
    },
  ]);
  const [seachData, setSearchData] = useState({
    from: "",
    to: "",
    departure: "",
    returnType: "",
    travellersPassegers: {
      adults: 1,
      children: 4,
      infants: 0,
      chooseTravelerClass: "economy",
    },
    tripType: "One Way",
  });

  const handleSearch = async () => {
    const repsonseData = await flightService.flightSearch(seachData);
    setResponseDataFromServer(repsonseData);

    // setSearchData((prev)=>{
    //   prev + "presentName"
    // })

    changeUserName(
      dispatch({
        type: "NAME",
        payload: "Pawan Kalyan",
      })
    );

    console.log(repsonseData, "repsonseData");
  };

  const getDefaultFlightData = async () => {
    // const url = await axios.get("url");
    // const res = await url.repsonse;

    // const { from, to, departure, returnType, tripType } = res;

    // dry

    dispatch(
      setSearchGlobalReduxData({
        type: "FLIGHT_DATA",
        payload: {
          from: "from",
          to: "to",
          departure: "hiii this si uodated value",
          returnType: "returnType",
          travellersPassegers: {
            adults: 1,
            children: 4,
            infants: 0,
            chooseTravelerClass: "economy",
          },
          tripType: "tripType",
        },
      })
    );

    console.log(seachData, "seachData");
  };

  const updateComboBoxValue = (value) => {
    // if(value ==="Bangkok"){
    //   setSearchData({ ...seachData, departure: value ? "Bang" : value });
    // } else{

    // }

    console.log(
      "jellpo we recived value from comboxbox",
      differentCountryList.countryCode
    );
  };

  const searchFlightData = () => {
    console.log("seachData", seachData);
    dispatch(
      getUserName({
        type: "NAME",
        payload: {
          userName: "PAWAN KALYAN",
        },
      })
    );
  };

  return (
    <>
      <h2>{data.userName}</h2>

      <h3>{heroName}</h3>

      <Grid container spacing={2} sx={{ p: 2 }}>
        <Grid item xs={12} md={3}>
          {ComboBox(countryList, updateComboBoxValue)}
        </Grid>
        <Grid item xs={12} md={3}>
          {ComboBox(differentCountryList, updateComboBoxValue)}
        </Grid>
        <Grid item xs={12} md={4}>
          <BasicDatePicker />
        </Grid>
        <Grid item xs={12} md={2}>
          <Button fullWidth variant="contained" onClick={getDefaultFlightData}>
            SEARCH
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

// // backend develoer

// from: "somehtin type",
// to: "",
// departure: "",
// returnType: "",
// travellersPassegers: {
//   adults: 1,
//   children: 4,
//   infants: 0,
//   chooseTravelerClass: "economy",
// },
// tripType: "One Way",

// SQUAD GAME

// GAMES

// 456 UR ELIMINATED

// {
// id:456,
// name:"shiva",
// location:"usa",
// age:30
// }

// psedo code

// autocompletion

// based on city search we have to update before that we have to store it somewhere

// API

// SEARCH API    -- POST  ----- BACKEND TO FRONTNED WE WILL GET RES

// SEARCHAPI

// HANDLESEARCH

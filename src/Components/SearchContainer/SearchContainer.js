import React from "react";
import { useNavigate } from 'react-router-dom';

export default function SearchContainer() {
  const navigate = useNavigate()
  const TravelSearchList = [
    {
      id: 1,
      label: "Flights",
    },
    {
      id: 2,
      label: "Hotels",
    },
    {
      id: 3,
      label: "HomeStays",
    },
    {
      id: 4,
      label: "Holiday Packages",
    },
    {
      id: 5,
      label: "Trains",
    },
    {
      id: 6,
      label: "Buses",
    },
    {
      id: 7,
      label: "Cabs",
    },
    {
      id: 8,
      label: "Forex card",
    },
    {
      id: 9,
      label: "HomeStays",
    },
    {
      id: 10,
      label: "Travel Insurence",
    },
  ];


  const NavigateToFlight = () =>{
    navigate('/flights')
  }
  const renderData = () => {
    return TravelSearchList.map((travelSearchItems, index) => {
      return (
        <>
          <button key={travelSearchItems.id} onClick={NavigateToFlight} >
            {/* <li key={index}>{travelSearchItems.label}</li> */}

            {travelSearchItems.label}
          </button>
        </>
      );
    });
  };

  return <>{renderData()}</>;
}

import axios from "axios";
import { createContext, useState } from "react";
const BASE_URL = `makemytrip.com`;

export const flightService = {
  flightSearch: async (dynamicSearchValue) => {
    debugger;

   const normalDummyData =  {
      "title": "New Product",
      "price": 10,
      "description": "A description",
      "categoryId": 1,
      "images": ["https://placeimg.com/640/480/any"]
    }
    const url = await axios.post('https://api.escuelajs.co/api/v1/products/', normalDummyData);
    // url, postData;
  },
};



// const [countryList, setCountryList] = useState(FlightsData);
// const [differentCountryList, setDifferenCoutryList] = useState([
//   {
//     iata: "SHIVA",
//     icon: "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/ic-flight-onward.png",
//     label: "USSSSS",
//     airportName: "Chhatrapati Shivaji International Airport",
//     country: "SHivaaaaaa",
//     countryCode: "US",
//     group_type: "",
//   },
// ]);
// const [seachData, setSearchData] = useState({
//   from: "",
//   to: "",
//   departure: "",
//   returnType: "",
//   travellersPassegers: {
//     adults: 1,
//     children: 4,
//     infants: 0,
//     chooseTravelerClass: "economy",
//   },
//   tripType: "One Way",
// });








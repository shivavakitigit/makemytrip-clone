import React, { useState } from "react";

export default function useFetchData(value) {
  // default url
  const [data, setData] = useState([]);
  const [errorData, setErrorData] = useState([]);
  const url = `${`www.makemytrip.com`}${value}`;

  return {
    data,
  };
}

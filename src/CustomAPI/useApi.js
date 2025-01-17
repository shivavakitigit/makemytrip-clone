import React, { useEffect, useState } from "react";
import axios from "axios";
export default function useApi(endpoint, method = "GET") {
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);
  const baseUrl = "https://api.escuelajs.co/api/v1";
  const fetchProductsData = async () => {
    const url =
      method === "GET"
        ? await axios.get(`${baseUrl} ${endpoint}`)
        : await axios.post(`${baseUrl} ${endpoint}`);
  };

  useEffect(() => {
    fetchProductsData();
  }, [endpoint]);

  return {
    data,
    error,
  };
}

// url -- same

// base url  - https://api.escuelajs.co/api/v1

// get

// post

// put

// delete

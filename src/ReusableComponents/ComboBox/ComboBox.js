import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
// import top100Films from './top100Films';
import FlightsData from "../../Constants/Constants";

const ComboBox = (defaultContryList, updateComboBoxValue) => {
  const handleChange = (event) => {
    updateComboBoxValue(event.target.textContent)
    console.log("eventtttt", event.target.textContent);
  };

  return (
    <Autocomplete
      disablePortal
      options={defaultContryList}
      sx={{ width: 300 }}
      onChange={handleChange}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );
};

export default ComboBox;

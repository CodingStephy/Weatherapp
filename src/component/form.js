import React, { useState } from "react";

const Form = (props) => {
  const [zipCode, setZipCode] = useState("");

  const  getWeather = (event) => {
    event.preventDefault();
    props.getWeather(zipCode);
    setZipCode("");
  };
  const handleChange = (event) => {
    setZipCode(event.target.value);
  };
  return (
    <form value="Enter Zip Code" onSubmit={getWeather}>
      <input
        onChange={handleChange}
        placeholder="Enter Zip Code"
        value={zipCode}
      />
      <button type="submit">Search</button>
    </form>
  );
};
export default Form;

import React from "react";
import "./form.css";

function Form({ handleChange }) {
    const change = (e)=>{
        e.preventDefault()
    }
  return (
    <form onChange={change}>
      <div className="container formContainer">
        <div className="search boxShadow">
          <i className="fas fa-search"></i>
          <input name="name" onChange={handleChange} type="search" placeholder="Search for a country..." />
        </div>

        <select onChange={handleChange} name="region" className="select">
          <option value="">Filter by region</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="antarctic">Antarctic</option>
        </select>
      </div>
    </form>
  );
}

export default Form;

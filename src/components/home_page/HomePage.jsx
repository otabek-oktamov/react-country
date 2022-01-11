import React, { useState } from "react";
import Form from "../form/Form";
import CountryList from "../country_list/CountryList";
import useFetch from "../../costum_hooks/useFetch";
import Loader from "../loader/Loader";

function HomePage({onChange}) {
  const [newSearch, setNewSearch] = useState({
    name: "",
    region: "",
  });
  const { data, loading, error } = useFetch(
    "https://restcountries.com/v2/all"
  );
  if (error) {
    console.log(error);
  }
  const sortedData = data?.sort(function (a, b) {
    if (a.name.common > b.name.common) {
      return 1;
    }
    if (a.name.common < b.name.common) {
      return -1;
    }
    return 0;
  });

  const handleChange = (e) => {
    setNewSearch({ ...newSearch, [e.target.name]: e.target.value });
  };
  const filteredData = sortedData?.filter(function (item) {
    return (
      item.name.toLowerCase().includes(newSearch.name.toLowerCase()) &&
      item.region.toLowerCase().includes(newSearch.region.toLowerCase())
    );
  });
 
  return (
    <>
      <Form handleChange={handleChange} />
      {loading ? <Loader /> : <CountryList onChange={onChange} data={filteredData} />}
    </>
  );
}

export default HomePage;

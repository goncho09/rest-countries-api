"use client";

import { apiLink } from "../utils";

import { useEffect, useState } from "react";
import Country from "./Country";

export default function CountriesContainer() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const countriesFetch = await fetch(`${apiLink}/all`);
        const countriesJson = await countriesFetch.json();
        const countriesRecorted = countriesJson.slice(0, 8);
        setCountries(countriesRecorted);
      } catch (error) {
        console.error("Error in the fetch", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="mt-16 grid grid-cols-4 grid-rows-2 gap-16">
      {countries.map((country) => {
        return <Country country={country} />;
      })}
    </section>
  );
}

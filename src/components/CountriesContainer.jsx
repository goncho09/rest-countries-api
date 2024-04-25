"use client";

import { apiLink } from "../utils";

import { useEffect, useState } from "react";
import Country from "./Country";

export default function CountriesContainer({region,search}) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const countriesFetch = await fetch(`${apiLink}/all`);
        const countriesJson = await countriesFetch.json();

        const random = Math.floor(Math.random() * (242)) +1;
        const countriesRecorted = countriesJson.slice(random, random+8);

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
        return <Country key={country.name.common} country={country} />;
      })}
    </section>
  );
}

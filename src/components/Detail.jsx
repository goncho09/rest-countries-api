'use client';

import { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { apiLink } from '@/utils';
import Link from 'next/link';

export default function Detail({ countryName }) {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const countriesFetch = await fetch(`${apiLink}/name/${countryName}`);
        const countriesJson = await countriesFetch.json();

        setCountry(countriesJson[0]);
      } catch (error) {
        console.error('Error in the fetch', error);
      }
    };
    fetchData();
  }, []);

  console.log(country);

  return (
    <section className="w-[80%]">
      <Link href="/">
        <button className="flex items-center text-lg rounded-md border border-gray-200 shadow-md py-2 px-6">
          <FaArrowLeft className="mr-3" />
          Back
        </button>
      </Link>
      <div className="flex mt-16 w-full">
        <div className="w-[40%]">
          <img
            src={
              typeof country.flags?.svg !== undefined
                ? country.flags?.svg
                : country.flags?.png
            }
            alt={
              typeof country.flags?.alt !== undefined
                ? country.flags?.alt
                : country.common?.name
            }
            className="w-full"
          />
        </div>
        <div className="flex ml-24 pt-8 flex-col">
          <h1 className="text-2xl font-bold">{country.name?.common}</h1>
          <div className="flex gap-x-7">
            <div className="flex mt-8 flex-col">
              <p>
                <strong>Native name : </strong>
                {country.name?.official}
              </p>
              <p>
                <strong>Population : </strong>
                {country.population}
              </p>
              <p>
                <strong>Region : </strong>
                {country.region}
              </p>
              <p>
                <strong>Sub Region : </strong>
                {country.subregion}
              </p>
              <p>
                <strong>Capital : </strong>
                {country.capital}
              </p>
            </div>
            <div className="flex mt-8 flex-col">
              <p>
                <strong>Top Level Domain : </strong>
                {country.tld}
              </p>
              <p>
                <strong>Currencies : </strong>
                {Object.values(country.currencies || {}).map((currencie) => {
                  return (
                    <p className="inline">
                      {currencie.name} {'  '}
                    </p>
                  );
                })}
              </p>
              <p>
                <strong>Languages : </strong>
                {Object.values(country.languages || {}).map((language) => {
                  return (
                    <p className="inline">
                      {language} {'  '}
                    </p>
                  );
                })}
              </p>
            </div>
          </div>

          <div className=" flex items-center space-x-3 mt-32">
            <strong>Border countries : </strong>
            {Object.values(country.borders || {}).map((border) => {
              return (
                <p className="border border-gray-400 p-1  rounded-md">
                  {border} {'  '}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

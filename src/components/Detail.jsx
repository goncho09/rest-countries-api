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
        <div className="flex ml-32 pt-8 flex-col">
          <h1 className="text-2xl font-bold">{country.name?.common}</h1>
          <div className="flex mt-8">
            <p>
              <strong>Native name : </strong>{' '}
              {country.name?.nativeName[0]?.common}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

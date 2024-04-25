'use client';

import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import CountrysContainer from './CountriesContainer';

export default function Content() {
  const [region, setRegion] = useState('Filter by Region');
  const [search, setSearch] = useState('');
  return (
    <main className="flex justify-center">
      <section className="flex w-[80%] mt-12 flex-col">
        <div className="flex justify-between w-full">
          <div className="flex items-center bg-white p-3 w-[550px] text-dark-gray shadow-md rounded-md">
            <button>
              <FaSearch className="text-xl " />
            </button>

            <input
              type="text"
              placeholder="Search for a country..."
              className="ml-4 border-none outline-none text-base text-black w-[95%]"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
          <div className="flex items-center">
            <select
              defaultValue={'filter'}
              className="p-3 bg-white rounded-md shadow-md"
              onChange={(e) => setRegion(e.target.value)}
              value={region}
            >
              <option hidden>Filter by Region</option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </div>

        <CountrysContainer region={region} search={search} />
      </section>
    </main>
  );
}

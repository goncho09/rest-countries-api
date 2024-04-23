import { FaSearch } from "react-icons/fa";
import CountrysContainer from "./CountriesContainer";

export default function Content() {
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
            />
          </div>
          <div className="flex items-center">
            <select
              className="p-3 bg-white rounded-md shadow-md"
              defaultValue={"filter"}
            >
              <option disabled value="filter">
                Filter by Region
              </option>
              <option>Africa</option>
              <option>America</option>
              <option>Asia</option>
              <option>Europe</option>
              <option>Oceania</option>
            </select>
          </div>
        </div>

        <CountrysContainer />
      </section>
    </main>
  );
}

export default function Country({ country }) {
  console.log(country);
  return (
    <div className="bg-white flex flex-col rounded-md shadow-md">
      <img
        src={country.flags.png}
        alt={country.name.common}
        className="w-80 max-h-40 min-h-40 rounded-md"
      />
      <div className="p-5">
        <h1 className="font-extrabold text-xl mb-3">{country.name.common}</h1>
        <p>
          <strong>Population : </strong>
          {country.population}
        </p>
        <p>
          <strong>Region : </strong>
          {country.region}
        </p>
        <p>
          <strong>Capital : </strong>
          {country.capital[0]}
        </p>
      </div>
    </div>
  );
}

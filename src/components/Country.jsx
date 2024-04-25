import Link from 'next/link';

export default function Country({ country }) {
  return (
    <div className="bg-white flex flex-col rounded-md shadow-md">
      <Link
        href={{
          pathname: '/detail',
          query: { name: country.name.common },
        }}
      >
        <img
          src={country.flags.svg ? country.flags.svg : country.flags.png}
          alt={country.flags.alt ? country.flags.alt : country.name.common}
          className="w-80 max-h-40 min-h-40 rounded-md "
        />
      </Link>
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
          {country.capital ? country.capital[0] : 'No capital'}
        </p>
      </div>
    </div>
  );
}

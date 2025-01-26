import { Link, useParams } from "react-router-dom";

import DUMMY_DATA from "../data.json";

export default function CountryDetails ()
{
  const { CountryName } = useParams();
  const country = DUMMY_DATA.find( ( item ) => item.alpha3Code === CountryName );
  const borderCountries = country.borders?.map(
    ( item ) => DUMMY_DATA.find( ( country ) => country.alpha3Code === item )
  );
  return <>
    <Link to="/" className="btn btn-neutral my-16">
      <svg
        className="fill-current"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px">
        <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
      </svg>
      Back
    </Link>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
      <img className="w-full h-full object-cover" src={ country.flag } alt={ country.name } />
      <div>
        <h1 className="text-3xl font-bold my-8">{ country.name }</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p><span className="font-bold">Native Name:</span> { country.nativeName }</p>
            <p><span className="font-bold">Population:</span> { country.population }</p>
            <p><span className="font-bold">Region:</span> { country.region }</p>
            <p><span className="font-bold">Sub Region:</span> { country.subregion }</p>
            <p><span className="font-bold">Capital:</span> { country.capital }</p>
          </div>
          <div>
            <p><span className="font-bold">Top Level Domain:</span> { country.topLevelDomain[ 0 ] }</p>
            <p><span className="font-bold">Currencies:</span> { country.currencies.map( ( item ) => item.name ).join( ', ' ) }</p>
            <p><span className="font-bold">Languages:</span> { country.languages.map( ( item ) => item.name ).join( ', ' ) }</p>
          </div>
        </div>
        <div className="my-8 flex items-start justify-start md:flex-row flex-col">
          <p className="font-bold py-3 text-nowrap me-2">Border Countries:</p>
          <div className="flex items-center gap-4 flex-wrap">
            {
              borderCountries?.map( ( item ) => (
              <Link
                to={ `/${ item.alpha3Code }` }
                key={ item.name }
                  className="btn btn-neutral">
                { item.name }
              </Link>
            ) ) }
          </div>
        </div>
      </div>
    </div>
  </>;
}
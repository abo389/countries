import { useNavigate } from "react-router-dom";

export default function Card ( { country, ...props } )
{
  const navigate = useNavigate();

  return <li {...props}>
    <div onClick={ () => navigate( country.alpha3Code ) } className="card bg-base-100 h-80 shadow-xl cursor-pointer hover:shadow-2xl hover:scale-95 transition">
      <figure>
        <img
          className="w-full"
          src={ country.flag }
          alt={ country.name } />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{ country.name }</h2>
        <div className="font-bold">
          <p>Population: <span className="font-light">{ country.population }</span></p>
          <p>Region: <span className="font-light">{ country.region }</span></p>
          <p>Capital: <span className="font-light">{ country.capital }</span></p>
        </div>
      </div>
    </div>
  </li>;
}
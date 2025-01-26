import { useNavigate } from "react-router-dom";

export default function CardList ( { data } )
{

  const navigate = useNavigate();

  return <>
    <ul className="grid grid-cols-1 gap-16 md:grid-cols-3 lg:grid-cols-4 justify-center items-center">
      {data.map((item) => (
        <li key={ item.name }>
          <div onClick={ () => navigate( item.alpha3Code )} className="card bg-base-100 h-80 shadow-xl cursor-pointer hover:shadow-2xl hover:scale-95 transition">
            <figure>
              <img
                className="w-full"
                src={item.flag}
                alt={item.name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{ item.name }</h2>
              <div className="font-bold">
              <p>Population: <span className="font-light">{ item.population }</span></p>
              <p>Region: <span className="font-light">{ item.region }</span></p>
              <p>Capital: <span className="font-light">{ item.capital }</span></p>
              </div>
            </div>
            </div>
        </li>
      ))}
  </ul>
  </>;
}
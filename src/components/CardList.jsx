import Card from "./Card";

export default function CardList ( { data } )
{
  return <>
    <ul className="grid grid-cols-1 gap-16 md:grid-cols-3 lg:grid-cols-4 justify-center items-center">
      {data.map((country) => (
        <Card key={country.alpha3Code} country={country} />
      ))}
  </ul>
  </>;
}
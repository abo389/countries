export default function Search ({ onfilter, onsearch })
{
  return <>
    <form className="grid grid-cols-[minmax(0,_auto)_minmax(0,_auto)] items-center justify-between relative my-16 ">
      <div className="absolute left-2.5">
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" ><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>
      </div>
      <input onChange={ ( e ) => onsearch( e.target.value ) }
        className="p-2 ps-10 shadow-2xl" type="text" placeholder="Search for a country..." />
      <select className="appearance-none outline-0 p-2"
        onChange={ ( e ) => onfilter( e.target.value ) }>
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
  </form>
  </>;
}
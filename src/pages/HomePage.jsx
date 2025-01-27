import Search from "../components/Search";
import DUMMY_DATA from "../data.json";
import CardList from "../components/CardList";
import { useEffect, useState } from "react";
import Pageination from "../components/Pageination";

export default function HomePage ()
{
  const [ currentPage, setCurrentPage ] = useState( 1 );
  const [ data, setData ] = useState( DUMMY_DATA );
  const [ slicedData, setSliceData ] = useState( DUMMY_DATA.slice( 0, 8 ) );
  const [numberOfPages, setNumberOfPages] = useState( Math.ceil( DUMMY_DATA.length / 8 ) );

  useEffect( () =>
  { 
    let start = ( currentPage - 1 ) * 8;
    let end = start + 8;
    let newData = data.slice( start, end );
    setSliceData( newData );
  }, [ currentPage, data ] );

  function filterByRegion ( region )
  {
    let newData = DUMMY_DATA.filter( ( item ) => item.region === region );
    setNumberOfPages( Math.ceil( newData.length / 8 ) );
    setCurrentPage( 1 );
    ( region === '' ) ? setData( DUMMY_DATA ) : setData( newData );
  }

  function searchForCountry ( name )
  {
    let newData = DUMMY_DATA.filter(
      ( item ) => item.name.toLowerCase().includes( name.toLowerCase() )
    );
    setNumberOfPages( Math.ceil( newData.length / 8 ) );
    setCurrentPage( 1 );
    ( name === '' ) ? setData( DUMMY_DATA ) : setData( newData );
  }

  return (
    <>
      <Search onfilter={ filterByRegion } onsearch={ searchForCountry } />
      <CardList data={ slicedData } />
      <Pageination
        numberOfPages={ numberOfPages }
        page={ currentPage }
        setPage={ setCurrentPage }
      />
    </>
  );
}
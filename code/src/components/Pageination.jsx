export default function Pageination ({numberOfPages, page, setPage})
{
  return <div className="text-center my-16">
    <div className="join">
      {page != 1 &&<button className="join-item btn" onClick={() => setPage(1)}>1</button>}
      {page > 1 && <button className="join-item btn btn-disabled">...</button>}
      { ( !(page >= numberOfPages) ) && 
      <>
      <button className="join-item btn" onClick={() => setPage(page)}>{page}</button>
      <button className="join-item btn" onClick={ () => setPage( page+1 ) }>{page+1}</button>
        <button className="join-item btn" onClick={ () => setPage( page + 2 ) }>{ page + 2 }</button>
        <button className="join-item btn btn-disabled">...</button>
      </>
      }
      <button className="join-item btn" onClick={ () => setPage( numberOfPages ) }>{numberOfPages}</button>
    </div>
  </div>;
}
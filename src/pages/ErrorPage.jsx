import { Link } from "react-router-dom";

export default function ErrorPage ()
{
  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center space-y-4">
      <h1 className="text-5xl font-bold my-20">Page not found</h1>
      <Link to="/" className="btn btn-primary">Go back to home</Link>
    </div>
  );
}
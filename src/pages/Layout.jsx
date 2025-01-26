import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout (  )
{
  return (
    <div className="container mx-auto p-4">
      <Navbar />
      <main>
        <Outlet/>
      </main>
    </div>
  );
}
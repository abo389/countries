import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import CountryDetails from "./pages/CountryDetails";

const router = createBrowserRouter( [
  {
    path: "/countries",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/countries", element: <HomePage />},
      { path: "/countries/:CountryName", element: <CountryDetails />},
  ]}
]);

export default function App ()
{
  return <RouterProvider router={ router } />;
}


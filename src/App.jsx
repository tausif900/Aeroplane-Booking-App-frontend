import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/General/Home";
import Login from "./Components/Authentication/Login";
import Registration from "./Components/Authentication/Registration";
import PassengerPage from "./Components/Pages/PassengerPage";
import FlightsPage from "./Components/Pages/FlightsPage";
import FlightById from "./Components/Pages/FlightById";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/registration", element: <Registration /> },
  { path: "/user-dashboard", element: <PassengerPage /> },
  { path: "/searched-flights", element: <FlightsPage /> },
  { path: "/flight/:flightId", element: <FlightById /> },
]);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" autoClose={5000} limit={3} />
    </>
  );
};

export default App;

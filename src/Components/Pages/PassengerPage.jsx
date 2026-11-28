import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { Link, useNavigate } from "react-router-dom";

import {
  Plane,
  Search,
  CalendarDays,
  Users,
  MapPin,
  ArrowRightLeft,
  ArrowRight,
  Ticket,
  CreditCard,
  UserRound,
  Bell,
  ChevronDown,
  Clock3,
  ShieldCheck,
  Headphones,
  Luggage,
  Compass,
  Star,
  Download,
} from "lucide-react";
import { toast } from "react-toastify";
import axios from "axios";

const PassengerPage = () => {
  const navigate = useNavigate();
  const [originIATACode, setOriginIATACode] = useState("");
  const [destinationIATACode, setDestinationIATACode] = useState("");
  const [airportSuggestionsForOrigin, setAirportSuggestionsForOrigin] =
    useState([]);
  const [
    airportSuggestionsForDestination,
    setAirportSuggestionsForDestination,
  ] = useState([]);
  const [originInput, setOriginInput] = useState("");
  const [destinationInput, setDestinationInput] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [departureDate, setDepartureDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [cabinClass, setCabinClass] = useState("economy");

  const airportsOfOrigin = async (query) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/flight/airports?query=${query}`,
        {
          withCredentials: true,
        },
      );
      setAirportSuggestionsForOrigin(response.data.data || []);
    } catch (error) {
      console.log(error);
      toast.error("Unable to fetch Airports For Origin");
    }
  };

  const airportsOfDestination = async (query) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/flight/airports?query=${query}`,
        {
          withCredentials: true,
        },
      );
      setAirportSuggestionsForDestination(response.data.data || []);
    } catch (error) {
      console.log(error);
      toast.error("Unable to fetch Airports For Destination");
    }
  };

  const searchFlights = async ({
    origin,
    destination,
    departureDate,
    adults,
    cabinClass,
  }) => {
    try {
      const payload = {
        origin,
        destination,
        departureDate,
        adults,
        cabinClass,
      };
      const response = await axios.post(
        "http://localhost:8080/flight/search",
        payload,
        { withCredentials: true },
      );
      console.log(response.data.data.offers[0]);
      navigate("/searched-flights", {
        state: { flightData: response.data.data },
      });
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    let timer;
    if (originInput.length >= 2) {
      timer = setTimeout(() => {
        airportsOfOrigin(originInput);
      }, 500);
    } else {
      setAirportSuggestionsForOrigin([]);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [originInput]);

  useEffect(() => {
    let timer;
    if (destinationInput.length >= 2) {
      timer = setTimeout(() => {
        airportsOfDestination(destinationInput);
      }, 500);
    } else {
      setAirportSuggestionsForDestination([]);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [destinationInput]);

  return (
    <div className="min-vh-100 d-flex flex-column bg-body-tertiary text-body">
      {/* NAVBAR */}
      <header className="sticky-top z-3 border-bottom bg-white shadow-sm">
        <div className="container d-flex align-items-center justify-content-between py-3">
          <div className="d-flex align-items-center gap-2">
            <div className="rounded-3 bg-primary p-2 text-white d-flex align-items-center justify-content-center shadow-sm">
              <Plane size={22} />
            </div>
            <h1 className="fs-4 fw-bold text-body mb-0">
              Sky<span className="text-primary">Book</span>
            </h1>
          </div>

          <nav className="d-none d-lg-flex align-items-center gap-4 small fw-semibold">
            <Link to="/" className="text-decoration-none text-primary">
              Home
            </Link>
            <a href="#" className="text-decoration-none text-secondary">
              Search Flights
            </a>
            <a href="#" className="text-decoration-none text-secondary">
              My Bookings
            </a>
            <a href="#" className="text-decoration-none text-secondary">
              Offers
            </a>
          </nav>

          <div className="d-flex align-items-center gap-2 gap-sm-3">
            <button
              type="button"
              className="btn btn-light rounded-circle p-2 text-secondary d-none d-sm-inline-flex align-items-center justify-content-center"
              aria-label="Notifications"
            >
              <Bell size={18} />
            </button>

            <div className="d-flex align-items-center gap-2 rounded-pill border bg-white py-1 px-2 pe-sm-3 shadow-sm">
              <div
                className="d-flex align-items-center justify-content-center rounded-circle bg-primary-subtle text-primary flex-shrink-0"
                style={{ width: "32px", height: "32px" }}
              >
                <UserRound size={17} />
              </div>
              <div className="d-none d-sm-block text-start lh-1">
                <div className="text-secondary" style={{ fontSize: "0.7rem" }}>
                  Welcome back
                </div>
                <div className="small fw-bold">Passenger</div>
              </div>
              <ChevronDown
                size={14}
                className="d-none d-sm-block text-secondary"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow-1">
        {/* HERO */}
        <section className="position-relative overflow-hidden bg-primary text-white py-5">
          <div className="container position-relative z-1 py-2 py-md-3">
            <div className="col-12 col-lg-8">
              <div className="mb-3 d-inline-flex align-items-center gap-2 rounded-pill border border-white border-opacity-25 bg-white bg-opacity-10 px-3 py-2 small fw-semibold text-white">
                <Star size={14} className="text-warning" />
                <span>Your journey starts here</span>
              </div>

              <h2 className="display-5 fw-bold lh-sm text-white">
                Welcome aboard,
                <br />
                <span className="text-info">Passenger!</span>
              </h2>

              <p className="mt-3 fs-6 lh-lg text-white text-opacity-75">
                Discover new destinations, find the perfect flight, and make
                every journey unforgettable.
              </p>

              <div className="mt-4 d-flex flex-wrap gap-4 small fw-medium text-white">
                <span className="d-inline-flex align-items-center gap-2">
                  <ShieldCheck size={17} className="text-info" />
                  Secure booking
                </span>
                <span className="d-inline-flex align-items-center gap-2">
                  <Headphones size={17} className="text-info" />
                  Travel support
                </span>
                <span className="d-inline-flex align-items-center gap-2">
                  <Luggage size={17} className="text-info" />
                  Easy travel planning
                </span>
              </div>
            </div>
          </div>

          <Plane
            size={240}
            strokeWidth={0.7}
            className="position-absolute bottom-0 end-0 text-white opacity-25 pe-none d-none d-lg-block"
            style={{ transform: "translate(15%, 20%)" }}
          />
        </section>

        {/* FLIGHT SEARCH */}
        <section className="container position-relative z-2 mt-n4 mb-5">
          <div className="card border-0 rounded-4 shadow">
            <div className="card-body p-3 p-sm-4 p-lg-5">
              <div className="mb-4 d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3">
                <div>
                  <h3 className="h4 fw-bold mb-1">Find your next flight</h3>
                  <p className="small text-body-secondary mb-0">
                    Search flights and explore your next destination.
                  </p>
                </div>

                <div className="d-inline-flex gap-1 rounded-pill bg-body-tertiary p-1 align-self-start align-self-sm-auto">
                  <span className="badge rounded-pill bg-primary px-3 py-2 fw-semibold">
                    One Way
                  </span>
                  <span className="badge rounded-pill bg-transparent text-body-secondary px-3 py-2 fw-semibold">
                    Round Trip
                  </span>
                </div>
              </div>

              <div className="row g-3">
                {/* FROM AIRPORT */}
                <div className="col-12 col-md-6 col-xl">
                  <div className="position-relative rounded-4 border bg-white p-3 h-100">
                    <label className="form-label small fw-semibold text-uppercase text-secondary mb-1">
                      From
                    </label>

                    <div className="d-flex align-items-center gap-2">
                      <MapPin
                        className="text-primary flex-shrink-0"
                        size={20}
                      />
                      <input
                        type="text"
                        placeholder="Departure city"
                        className="form-control border-0 p-0 shadow-none fw-semibold small"
                        value={originInput}
                        onChange={(e) => {
                          setOriginInput(e.target.value);
                        }}
                      />
                    </div>

                    {/* Origin Dropdown UI */}
                    {airportSuggestionsForOrigin.length > 0 && (
                      <div
                        className="position-absolute start-0 end-0 top-100 z-3 mt-2 overflow-y-auto rounded-4 border bg-white p-2 shadow-lg"
                        style={{ maxHeight: "260px" }}
                      >
                        <div className="px-3 py-1 small fw-bold text-uppercase text-secondary">
                          Suggested Airports
                        </div>

                        {airportSuggestionsForOrigin.map((airport) => (
                          <div
                            key={airport.id}
                            role="button"
                            tabIndex={0}
                            className="d-flex align-items-center justify-content-between gap-3 rounded-3 px-3 py-2"
                            onClick={() => {
                              console.log(airport.name);
                              setOriginInput(airport.name);
                              console.log(airport.iata_code);
                              setOriginIATACode(airport.iata_code);
                              setAirportSuggestionsForOrigin([]);
                            }}
                          >
                            <div className="d-flex align-items-center gap-2 min-w-0">
                              <div
                                className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-primary-subtle text-primary"
                                style={{ width: "32px", height: "32px" }}
                              >
                                <Plane size={15} />
                              </div>

                              <div className="text-truncate">
                                <div className="text-truncate small fw-bold text-body">
                                  {airport.name}
                                </div>
                                <div className="text-truncate small text-body-secondary">
                                  {airport.city_name}
                                </div>
                              </div>
                            </div>

                            <span className="badge flex-shrink-0 rounded-3 bg-body-tertiary text-body px-2 py-2 fw-bold">
                              {airport.iata_code}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* TO AIRPORT */}
                <div className="col-12 col-md-6 col-xl">
                  <div className="position-relative rounded-4 border bg-white p-3 h-100">
                    <label className="form-label small fw-semibold text-uppercase text-secondary mb-1">
                      To
                    </label>

                    <div className="d-flex align-items-center gap-2">
                      <MapPin
                        className="text-primary flex-shrink-0"
                        size={20}
                      />
                      <input
                        type="text"
                        placeholder="Destination city"
                        className="form-control border-0 p-0 shadow-none fw-semibold small"
                        value={destinationInput}
                        onChange={(e) => {
                          setDestinationInput(e.target.value);
                        }}
                      />
                    </div>

                    {/* Destination Dropdown UI */}
                    {airportSuggestionsForDestination.length > 0 && (
                      <div
                        className="position-absolute start-0 end-0 top-100 z-3 mt-2 overflow-y-auto rounded-4 border bg-white p-2 shadow-lg"
                        style={{ maxHeight: "260px" }}
                      >
                        <div className="px-3 py-1 small fw-bold text-uppercase text-secondary">
                          Suggested Airports
                        </div>

                        {airportSuggestionsForDestination.map((airport) => (
                          <div
                            key={airport.id}
                            role="button"
                            tabIndex={0}
                            className="d-flex align-items-center justify-content-between gap-3 rounded-3 px-3 py-2"
                            onClick={() => {
                              console.log(airport.name);
                              setDestinationInput(airport.name);
                              console.log(airport.iata_code);
                              setDestinationIATACode(airport.iata_code);
                              setAirportSuggestionsForDestination([]);
                            }}
                          >
                            <div className="d-flex align-items-center gap-2 min-w-0">
                              <div
                                className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-primary-subtle text-primary"
                                style={{ width: "32px", height: "32px" }}
                              >
                                <Plane size={15} />
                              </div>

                              <div className="text-truncate">
                                <div className="text-truncate small fw-bold text-body">
                                  {airport.name}
                                </div>
                                <div className="text-truncate small text-body-secondary">
                                  {airport.city_name}
                                </div>
                              </div>
                            </div>

                            <span className="badge flex-shrink-0 rounded-3 bg-body-tertiary text-body px-2 py-2 fw-bold">
                              {airport.iata_code}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* DEPARTURE */}
                <div className="col-12 col-md-6 col-xl">
                  <div className="rounded-4 border bg-white p-3 h-100">
                    <label className="form-label small fw-semibold text-uppercase text-secondary mb-1">
                      Departure
                    </label>

                    <div className="d-flex align-items-center gap-2">
                      <CalendarDays
                        className="text-primary flex-shrink-0"
                        size={20}
                      />
                      <DatePicker
                        selected={selectedDate}
                        onChange={(date) => {
                          setSelectedDate(date);
                          if (!date) {
                            setDepartureDate("");
                            return;
                          }
                          const formatted = `${date.getFullYear()}-${String(
                            date.getMonth() + 1,
                          ).padStart(2, "0")}-${String(date.getDate()).padStart(
                            2,
                            "0",
                          )}`;
                          setDepartureDate(formatted);
                        }}
                        placeholderText="Select departure date"
                        dateFormat="dd MMM yyyy"
                        minDate={new Date()}
                        className="form-control border-0 p-0 shadow-none fw-semibold small"
                      />
                    </div>
                  </div>
                </div>

                {/* PASSENGERS */}
                <div className="col-12 col-md-6 col-xl">
                  <div className="rounded-4 border bg-white p-3 h-100">
                    <label className="form-label small fw-semibold text-uppercase text-secondary mb-1">
                      Passengers
                    </label>

                    <div className="d-flex align-items-center gap-2">
                      <Users className="text-primary flex-shrink-0" size={20} />
                      <select
                        className="form-select border-0 p-0 shadow-none fw-semibold small"
                        value={adults}
                        onChange={(e) => {
                          setAdults(Number(e.target.value));
                        }}
                      >
                        <option value={1}>1 Passenger</option>
                        <option value={2}>2 Passengers</option>
                        <option value={3}>3 Passengers</option>
                        <option value={4}>4 Passengers</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* CABIN CLASS */}
                <div className="col-12 col-xl">
                  <div className="rounded-4 border bg-white p-3 h-100">
                    <label className="form-label small fw-semibold text-uppercase text-secondary mb-1">
                      Cabin Class
                    </label>

                    <div className="d-flex align-items-center gap-2">
                      <Plane className="text-primary flex-shrink-0" size={20} />
                      <select
                        className="form-select border-0 p-0 shadow-none fw-semibold small"
                        value={cabinClass}
                        onChange={(e) => {
                          setCabinClass(e.target.value);
                        }}
                      >
                        <option value="economy">Economy</option>
                        <option value="premium_economy">Premium Economy</option>
                        <option value="business">Business</option>
                        <option value="first">First Class</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-3">
                <span className="d-inline-flex align-items-center gap-2 small text-body-secondary">
                  <ArrowRightLeft size={15} />
                  <span>Compare flights and choose your journey</span>
                </span>

                <button
                  type="button"
                  className="btn btn-primary btn-lg d-inline-flex align-items-center justify-content-center gap-2 px-4 py-2 fw-bold shadow-sm w-100 w-sm-auto"
                  onClick={() => {
                    searchFlights({
                      origin: originIATACode,
                      destination: destinationIATACode,
                      departureDate,
                      adults,
                      cabinClass,
                    });
                  }}
                >
                  <Search size={18} />
                  <span>Search Flights</span>
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* QUICK ACTIONS */}
        <section className="container py-4 py-md-5">
          <div className="mb-4">
            <h3 className="h2 fw-bold mb-1">Your travel hub</h3>
            <p className="small text-body-secondary mb-0">
              Everything you need, all in one place.
            </p>
          </div>

          <div className="row g-3 g-md-4 row-cols-2 row-cols-lg-4">
            {[
              {
                title: "My Bookings",
                description: "Manage your trips",
                icon: Ticket,
                color: "bg-primary-subtle text-primary",
              },
              {
                title: "E-Tickets",
                description: "View your tickets",
                icon: Download,
                color: "bg-info-subtle text-info",
              },
              {
                title: "Payments",
                description: "Payment history",
                icon: CreditCard,
                color: "bg-success-subtle text-success",
              },
              {
                title: "My Profile",
                description: "Personal information",
                icon: UserRound,
                color: "bg-warning-subtle text-warning",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div className="col" key={item.title}>
                  <div className="card border-0 rounded-4 bg-white p-3 p-sm-4 shadow-sm h-100">
                    <div
                      className={`mb-3 d-flex align-items-center justify-content-center rounded-3 ${item.color}`}
                      style={{ width: "44px", height: "44px" }}
                    >
                      <Icon size={21} />
                    </div>
                    <h4 className="h6 fw-bold mb-1">{item.title}</h4>
                    <p className="small text-body-secondary mb-3">
                      {item.description}
                    </p>
                    <ArrowRight size={18} className="text-secondary mt-auto" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* UPCOMING JOURNEY */}
        <section className="container py-4 py-md-5">
          <div className="mb-4 d-flex flex-wrap align-items-end justify-content-between gap-3">
            <div>
              <h3 className="h2 fw-bold mb-1">Upcoming journey</h3>
              <p className="small text-body-secondary mb-0">
                Your next adventure awaits.
              </p>
            </div>
            <a
              href="#"
              className="d-inline-flex align-items-center gap-1 small fw-bold text-decoration-none text-primary"
            >
              <span>View all bookings</span>
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="card border-0 rounded-4 bg-white shadow-sm overflow-hidden">
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 border-bottom bg-primary-subtle px-4 py-3">
              <div className="d-flex align-items-center gap-2 small fw-bold text-primary">
                <Plane size={18} />
                <span>Upcoming flight</span>
              </div>
              <span className="badge rounded-pill bg-success-subtle text-success px-3 py-2 fw-bold">
                Confirmed
              </span>
            </div>

            <div className="card-body p-4 p-sm-5">
              <div className="row g-4 align-items-center">
                <div className="col-12 col-lg-8">
                  <p className="mb-3 small fw-semibold text-uppercase text-secondary">
                    Sample booking preview
                  </p>

                  <div className="d-flex align-items-center justify-content-between gap-3">
                    <div>
                      <div className="display-6 fw-bold">BOM</div>
                      <div className="small text-body-secondary">Mumbai</div>
                    </div>

                    <div className="d-flex flex-grow-1 flex-column align-items-center px-2">
                      <span className="small text-secondary mb-1">
                        Non-stop
                      </span>
                      <div className="d-flex w-100 align-items-center gap-2 text-primary">
                        <span
                          className="rounded-circle bg-primary d-inline-block"
                          style={{ width: "8px", height: "8px" }}
                        />
                        <div className="border-top flex-grow-1" />
                        <Plane size={20} />
                        <div className="border-top flex-grow-1" />
                        <span
                          className="rounded-circle bg-primary d-inline-block"
                          style={{ width: "8px", height: "8px" }}
                        />
                      </div>
                      <span className="small text-secondary mt-1">
                        Flight journey
                      </span>
                    </div>

                    <div className="text-end">
                      <div className="display-6 fw-bold">DEL</div>
                      <div className="small text-body-secondary">New Delhi</div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-lg-4 border-top border-lg-top-0 border-lg-start pt-3 pt-lg-0 ps-lg-4 d-flex flex-column gap-3">
                  <div className="d-flex align-items-center gap-2 small text-secondary">
                    <CalendarDays
                      size={17}
                      className="text-primary flex-shrink-0"
                    />
                    <span>Date to be confirmed</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 small text-secondary">
                    <Clock3 size={17} className="text-primary flex-shrink-0" />
                    <span>Schedule pending</span>
                  </div>
                  <button
                    type="button"
                    className="btn btn-outline-primary fw-bold py-2 mt-1"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* POPULAR DESTINATIONS */}
        <section className="bg-white py-5 border-top border-bottom">
          <div className="container">
            <div className="mb-4 d-flex flex-wrap align-items-end justify-content-between gap-3">
              <div>
                <div className="mb-2 d-inline-flex align-items-center gap-2 small fw-bold text-uppercase text-primary">
                  <Compass size={16} />
                  <span>Explore the world</span>
                </div>
                <h3 className="h2 fw-bold mb-1">Popular destinations</h3>
                <p className="small text-body-secondary mb-0">
                  Discover beautiful places for your next getaway.
                </p>
              </div>
              <a
                href="#"
                className="d-inline-flex align-items-center gap-1 small fw-bold text-decoration-none text-primary"
              >
                <span>Explore more</span>
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="row g-4 row-cols-1 row-cols-sm-2 row-cols-lg-3">
              {[
                {
                  city: "Dubai",
                  country: "United Arab Emirates",
                  image:
                    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=85",
                },
                {
                  city: "Singapore",
                  country: "Singapore",
                  image:
                    "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=900&q=85",
                },
                {
                  city: "Paris",
                  country: "France",
                  image:
                    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=85",
                },
              ].map((destination) => (
                <div className="col" key={destination.city}>
                  <div className="card border-0 rounded-4 overflow-hidden shadow-sm bg-dark text-white h-100 position-relative">
                    <img
                      src={destination.image}
                      alt={destination.city}
                      className="card-img w-100 h-100 object-fit-cover"
                      style={{ minHeight: "280px" }}
                    />
                    <div className="card-img-overlay d-flex flex-column justify-content-end p-4 bg-dark bg-opacity-25">
                      <div className="d-flex align-items-end justify-content-between">
                        <div>
                          <div className="small text-white text-opacity-75">
                            {destination.country}
                          </div>
                          <h4 className="h2 fw-bold mt-1 mb-0">
                            {destination.city}
                          </h4>
                        </div>
                        <div className="btn btn-light rounded-circle p-3 d-inline-flex align-items-center justify-content-center text-dark shadow-sm">
                          <ArrowRight size={18} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROMOTIONAL BANNER */}
        <section className="container py-5">
          <div className="position-relative overflow-hidden rounded-4 bg-primary p-4 p-sm-5 text-white shadow">
            <div className="position-relative z-1 col-12 col-lg-8">
              <span className="badge rounded-pill bg-white text-primary px-3 py-2 fw-bold">
                YOUR NEXT ADVENTURE
              </span>
              <h3 className="display-6 fw-bold mt-3 text-white">
                The world is waiting for you.
              </h3>
              <p className="mt-2 fs-6 lh-lg text-white text-opacity-75">
                Find your next destination and start planning an unforgettable
                journey.
              </p>
              <button
                type="button"
                className="btn btn-light btn-lg d-inline-flex align-items-center gap-2 px-4 py-2 fw-bold text-primary mt-2 shadow-sm"
              >
                <span>Explore Flights</span>
                <ArrowRight size={17} />
              </button>
            </div>

            <Plane
              size={230}
              strokeWidth={0.7}
              className="position-absolute bottom-0 end-0 text-white opacity-25 pe-none"
              style={{ transform: "translate(15%, 20%)" }}
            />
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-top bg-white py-4 mt-auto">
        <div className="container d-flex flex-column flex-sm-row align-items-center justify-content-between gap-3 text-center">
          <div className="d-flex align-items-center gap-2">
            <Plane size={20} className="text-primary" />
            <span className="fw-bold">
              Sky<span className="text-primary">Book</span>
            </span>
          </div>
          <p className="small text-body-secondary mb-0">
            © 2026 SkyBook. Your journey, our priority.
          </p>
          <div className="d-flex gap-4 small fw-medium text-body-secondary">
            <a href="#" className="text-decoration-none text-body-secondary">
              Help Center
            </a>
            <a href="#" className="text-decoration-none text-body-secondary">
              Privacy
            </a>
            <a href="#" className="text-decoration-none text-body-secondary">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PassengerPage;

import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

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
  const [originIATACode, setOriginIATACode] = useState("");
  const [airportSuggestionsForOrigin, setAirportSuggestionsForOrigin] =
    useState([]);
  const [
    airportSuggestionsForDestination,
    setAirportSuggestionsForDestination,
  ] = useState([]);
  const [loading, setLoading] = useState(false);
  const [originInput, setOriginInput] = useState("");
  const [destinationInput, setDestinationInput] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [adults, setAdults] = useState(1);

  const airportsOfOrigin = async (data) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/flight/airports?query=${data}`,
        {
          withCredentials: true,
        },
      );
      setAirportSuggestionsForOrigin(response.data.data);
    } catch (error) {
      console.log(error);
      toast.error("Unable to fetch Airports For Origin");
    }
  };

  const airportsOfDestination = async (data) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/flight/airports?query=${data}`,
        {
          withCredentials: true,
        },
      );
      setAirportSuggestionsForDestination(response.data.data);
    } catch (error) {
      console.log(error);
      toast.error("Unable to fetch Airports For Destination");
    }
  };

  useEffect(() => {
    airportsOfOrigin();
    airportsOfDestination();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-slate-50 text-slate-900">
        {/* NAVBAR */}
        <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2">
              <div className="rounded-xl bg-blue-600 p-2 text-white">
                <Plane size={23} />
              </div>
              <h1 className="text-xl font-extrabold tracking-tight text-slate-900">
                Sky<span className="text-blue-600">Book</span>
              </h1>
            </div>

            <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 lg:flex">
              <Link to={"/"} className="text-blue-600">
                Home
              </Link>
              <a href="#" className="hover:text-blue-600">
                Search Flights
              </a>
              <a href="#" className="hover:text-blue-600">
                My Bookings
              </a>
              <a href="#" className="hover:text-blue-600">
                Offers
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <div className="hidden cursor-pointer rounded-full bg-slate-100 p-2.5 text-slate-600 sm:block">
                <Bell size={19} />
              </div>

              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white py-1.5 pl-1.5 pr-3 shadow-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  <UserRound size={19} />
                </div>
                <div className="hidden text-left sm:block">
                  <p className="text-xs text-slate-400">Welcome back</p>
                  <p className="text-sm font-bold">Passenger</p>
                </div>
                <ChevronDown
                  size={15}
                  className="hidden text-slate-400 sm:block"
                />
              </div>
            </div>
          </div>
        </header>

        <main>
          {/* HERO */}
          <section className="relative overflow-hidden bg-gradient-to-br from-[#071d49] via-[#123c82] to-[#2775d8]">
            <div className="pointer-events-none absolute -right-24 -top-28 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-4 pb-28 pt-12 sm:px-6 sm:pb-36 sm:pt-16 lg:px-8 lg:pb-40 lg:pt-20">
              <div className="max-w-2xl">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-blue-100 backdrop-blur">
                  <Star size={14} className="fill-yellow-300 text-yellow-300" />
                  Your journey starts here
                </div>

                <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Welcome aboard,
                  <br />
                  <span className="text-sky-300">Passenger!</span>
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-blue-100 sm:text-base">
                  Discover new destinations, find the perfect flight, and make
                  every journey unforgettable.
                </p>

                <div className="mt-7 flex flex-wrap gap-5 text-xs font-medium text-blue-100 sm:text-sm">
                  <span className="flex items-center gap-2">
                    <ShieldCheck size={17} className="text-sky-300" />
                    Secure booking
                  </span>
                  <span className="flex items-center gap-2">
                    <Headphones size={17} className="text-sky-300" />
                    Travel support
                  </span>
                  <span className="flex items-center gap-2">
                    <Luggage size={17} className="text-sky-300" />
                    Easy travel planning
                  </span>
                </div>
              </div>

              <Plane
                size={250}
                strokeWidth={0.6}
                className="pointer-events-none absolute right-10 top-10 hidden rotate-[-25deg] text-white/15 lg:block"
              />
            </div>
          </section>

          {/* FLIGHT SEARCH */}
          <section className="relative z-10 mx-auto -mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-2xl shadow-slate-900/10 sm:p-7 lg:p-9">
              <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-xl font-extrabold sm:text-2xl">
                    Find your next flight
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Search flights and explore your next destination.
                  </p>
                </div>

                <div className="flex w-fit gap-1 rounded-full bg-slate-100 p-1">
                  <span className="cursor-pointer rounded-full bg-blue-600 px-4 py-2 text-xs font-bold text-white shadow">
                    One Way
                  </span>
                  <span className="cursor-pointer rounded-full px-4 py-2 text-xs font-semibold text-slate-500">
                    Round Trip
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                {/* FROM AIRPORT */}
                <div className="relative z-30 rounded-2xl border border-slate-200 p-4 transition hover:border-blue-300">
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-400">
                    From
                  </label>

                  <div className="flex items-center gap-3">
                    <MapPin className="text-blue-600" size={21} />
                    <input
                      type="text"
                      placeholder="Departure city"
                      className="w-full min-w-0 bg-transparent text-sm font-semibold outline-none placeholder:font-normal"
                      value={originInput}
                      onChange={(e) => {
                        setOriginInput(e.target.value);
                        airportsOfOrigin(e.target.value);
                      }}
                    />
                  </div>

                  {/* Origin Dropdown UI */}
                  {airportSuggestionsForOrigin.length > 0 && (
                    <div className="absolute left-0 top-full z-50 mt-2 max-h-64 w-full overflow-y-auto rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
                      <p className="px-3 py-2 text-xs font-bold uppercase tracking-wide text-slate-400">
                        Suggested Airports
                      </p>

                      {airportSuggestionsForOrigin.map((airport) => (
                        <div
                          key={airport.id}
                          className="flex cursor-pointer items-center justify-between gap-3 rounded-xl px-3 py-3 transition hover:bg-blue-50"
                        >
                          <div className="flex min-w-0 items-center gap-3">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                              <Plane size={17} />
                            </div>

                            <div className="min-w-0">
                              <p className="truncate text-sm font-bold text-slate-800">
                                {airport.name}
                              </p>
                              <p className="truncate text-xs text-slate-500">
                                {airport.city_name}
                              </p>
                            </div>
                          </div>

                          <span className="shrink-0 rounded-lg bg-slate-100 px-2.5 py-1.5 text-xs font-bold text-slate-700">
                            {airport.iata_code}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* TO AIRPORT */}
                <div className="relative z-20 rounded-2xl border border-slate-200 p-4 transition hover:border-blue-300">
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-400">
                    To
                  </label>

                  <div className="flex items-center gap-3">
                    <MapPin className="text-blue-600" size={21} />
                    <input
                      type="text"
                      placeholder="Destination city"
                      className="w-full min-w-0 bg-transparent text-sm font-semibold outline-none placeholder:font-normal"
                      value={destinationInput}
                      onChange={(e) => {
                        setDestinationInput(e.target.value);
                        airportsOfDestination(e.target.value);
                      }}
                    />
                  </div>

                  {/* Destination Dropdown UI */}
                  {airportSuggestionsForDestination.length > 0 && (
                    <div className="absolute left-0 top-full z-50 mt-2 max-h-64 w-full overflow-y-auto rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
                      <p className="px-3 py-2 text-xs font-bold uppercase tracking-wide text-slate-400">
                        Suggested Airports
                      </p>

                      {airportSuggestionsForDestination.map((airport) => (
                        <div
                          key={airport.id}
                          className="flex cursor-pointer items-center justify-between gap-3 rounded-xl px-3 py-3 transition hover:bg-blue-50"
                        >
                          <div className="flex min-w-0 items-center gap-3">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                              <Plane size={17} />
                            </div>

                            <div className="min-w-0">
                              <p className="truncate text-sm font-bold text-slate-800">
                                {airport.name}
                              </p>
                              <p className="truncate text-xs text-slate-500">
                                {airport.city_name}
                              </p>
                            </div>
                          </div>

                          <span className="shrink-0 rounded-lg bg-slate-100 px-2.5 py-1.5 text-xs font-bold text-slate-700">
                            {airport.iata_code}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* DEPARTURE */}
                <div className="rounded-2xl border border-slate-200 p-4 transition hover:border-blue-300">
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Departure
                  </label>

                  <div className="flex items-center gap-3">
                    <CalendarDays className="text-blue-600" size={21} />
                    <input
                      type="date"
                      className="w-full min-w-0 bg-transparent text-sm font-semibold outline-none"
                    />
                  </div>
                </div>

                {/* PASSENGERS */}
                <div className="rounded-2xl border border-slate-200 p-4 transition hover:border-blue-300">
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Passengers
                  </label>

                  <div className="flex items-center gap-3">
                    <Users className="text-blue-600" size={21} />
                    <select className="w-full min-w-0 bg-transparent text-sm font-semibold outline-none">
                      <option>1 Passenger</option>
                      <option>2 Passengers</option>
                      <option>3 Passengers</option>
                      <option>4 Passengers</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <span className="flex items-center gap-2 text-xs text-slate-500">
                  <ArrowRightLeft size={15} />
                  Compare flights and choose your journey
                </span>

                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 sm:w-auto"
                >
                  <Search size={18} />
                  Search Flights
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>
          </section>

          {/* QUICK ACTIONS */}
          <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="mb-7">
              <h3 className="text-2xl font-extrabold tracking-tight">
                Your travel hub
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Everything you need, all in one place.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {[
                {
                  title: "My Bookings",
                  description: "Manage your trips",
                  icon: Ticket,
                  color: "bg-blue-50 text-blue-600",
                },
                {
                  title: "E-Tickets",
                  description: "View your tickets",
                  icon: Download,
                  color: "bg-violet-50 text-violet-600",
                },
                {
                  title: "Payments",
                  description: "Payment history",
                  icon: CreditCard,
                  color: "bg-emerald-50 text-emerald-600",
                },
                {
                  title: "My Profile",
                  description: "Personal information",
                  icon: UserRound,
                  color: "bg-orange-50 text-orange-600",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group cursor-pointer rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div
                      className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${item.color}`}
                    >
                      <Icon size={23} />
                    </div>
                    <h4 className="text-sm font-bold sm:text-base">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                      {item.description}
                    </p>
                    <ArrowRight
                      size={18}
                      className="mt-5 text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-600"
                    />
                  </div>
                );
              })}
            </div>
          </section>

          {/* UPCOMING JOURNEY */}
          <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-2xl font-extrabold">Upcoming journey</h3>
                <p className="mt-1 text-sm text-slate-500">
                  Your next adventure awaits.
                </p>
              </div>
              <a
                href="#"
                className="flex items-center gap-1 text-sm font-bold text-blue-600"
              >
                View all bookings <ArrowRight size={16} />
              </a>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 bg-blue-50/60 px-5 py-4 sm:px-7">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
                  <Plane size={18} className="text-blue-600" />
                  Upcoming flight
                </div>
                <span className="rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-bold text-emerald-700">
                  Confirmed
                </span>
              </div>

              <div className="grid gap-7 p-5 sm:p-7 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="mb-5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Sample booking preview
                  </p>

                  <div className="flex items-center justify-between gap-3 sm:justify-start sm:gap-10">
                    <div>
                      <p className="text-3xl font-extrabold sm:text-4xl">BOM</p>
                      <p className="mt-1 text-sm text-slate-500">Mumbai</p>
                    </div>

                    <div className="flex flex-1 flex-col items-center sm:max-w-48">
                      <span className="text-xs text-slate-400">Non-stop</span>
                      <div className="my-2 flex w-full items-center gap-2 text-blue-600">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                        <div className="h-px flex-1 bg-blue-200" />
                        <Plane size={21} />
                        <div className="h-px flex-1 bg-blue-200" />
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                      </div>
                      <span className="text-xs text-slate-400">
                        Flight journey
                      </span>
                    </div>

                    <div className="text-right">
                      <p className="text-3xl font-extrabold sm:text-4xl">DEL</p>
                      <p className="mt-1 text-sm text-slate-500">New Delhi</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 border-t border-dashed border-slate-200 pt-5 lg:min-w-44 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <CalendarDays size={17} className="text-blue-600" />
                    Date to be confirmed
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Clock3 size={17} className="text-blue-600" />
                    Schedule pending
                  </div>
                  <button
                    type="button"
                    className="mt-2 rounded-xl border border-blue-200 px-5 py-3 text-sm font-bold text-blue-600 transition hover:bg-blue-50"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* POPULAR DESTINATIONS */}
          <section className="bg-white py-14">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600">
                    <Compass size={16} />
                    Explore the world
                  </div>
                  <h3 className="text-2xl font-extrabold sm:text-3xl">
                    Popular destinations
                  </h3>
                  <p className="mt-2 text-sm text-slate-500">
                    Discover beautiful places for your next getaway.
                  </p>
                </div>
                <a
                  href="#"
                  className="flex items-center gap-1 text-sm font-bold text-blue-600"
                >
                  Explore more <ArrowRight size={16} />
                </a>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
                  <div
                    key={destination.city}
                    className="group relative h-72 overflow-hidden rounded-3xl bg-slate-200 sm:h-80"
                  >
                    <img
                      src={destination.image}
                      alt={destination.city}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="flex items-end justify-between">
                        <div>
                          <p className="text-xs text-white/80">
                            {destination.country}
                          </p>
                          <h4 className="mt-1 text-2xl font-extrabold">
                            {destination.city}
                          </h4>
                        </div>
                        <div className="rounded-full bg-white/20 p-3 backdrop-blur">
                          <ArrowRight size={20} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* PROMOTIONAL BANNER */}
          <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 to-sky-500 px-6 py-10 text-white sm:px-10 lg:px-14">
              <div className="relative z-10 max-w-xl">
                <span className="rounded-full bg-white/20 px-3 py-1.5 text-xs font-bold">
                  YOUR NEXT ADVENTURE
                </span>
                <h3 className="mt-5 text-3xl font-extrabold sm:text-4xl">
                  The world is waiting for you.
                </h3>
                <p className="mt-3 text-sm leading-7 text-blue-100">
                  Find your next destination and start planning an unforgettable
                  journey.
                </p>
                <button
                  type="button"
                  className="mt-6 flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-blue-700 transition hover:bg-blue-50"
                >
                  Explore Flights <ArrowRight size={17} />
                </button>
              </div>

              <Plane
                size={230}
                strokeWidth={0.6}
                className="absolute -bottom-16 -right-10 rotate-[-25deg] text-white/20 sm:right-8"
              />
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-7 text-center sm:flex-row sm:px-6 lg:px-8">
            <div className="flex items-center gap-2">
              <Plane size={20} className="text-blue-600" />
              <span className="font-extrabold">
                Sky<span className="text-blue-600">Book</span>
              </span>
            </div>
            <p className="text-xs text-slate-500">
              © 2026 SkyBook. Your journey, our priority.
            </p>
            <div className="flex gap-5 text-xs font-medium text-slate-500">
              <a href="#" className="hover:text-blue-600">
                Help Center
              </a>
              <a href="#" className="hover:text-blue-600">
                Privacy
              </a>
              <a href="#" className="hover:text-blue-600">
                Terms
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PassengerPage;

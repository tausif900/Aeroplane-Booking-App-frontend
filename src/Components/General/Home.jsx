import React from "react";
import { Link } from "react-router-dom";
import {
  Plane,
  Search,
  MapPin,
  CalendarDays,
  Users,
  ArrowRight,
  ArrowRightLeft,
  ShieldCheck,
  Headphones,
  BadgeCheck,
  Clock3,
  Ticket,
  Globe2,
  Menu,
  Star,
  ChevronRight,
  LockKeyhole,
  Sparkles,
  Mail,
} from "lucide-react";

const destinations = [
  {
    city: "Dubai",
    country: "United Arab Emirates",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=85",
  },
  {
    city: "Singapore",
    country: "Singapore",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1000&q=85",
  },
  {
    city: "Paris",
    country: "France",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=85",
  },
];

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
        {/* NAVBAR */}
        <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="rounded-xl bg-blue-600 p-2 text-white shadow-md shadow-blue-600/20">
                <Plane size={23} />
              </div>
              <span className="text-xl font-extrabold tracking-tight">
                Sky<span className="text-blue-600">Book</span>
              </span>
            </Link>

            <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 lg:flex">
              <a href="#home" className="text-blue-600">
                Home
              </a>
              <a
                href="#destinations"
                className="transition hover:text-blue-600"
              >
                Destinations
              </a>
              <a href="#why-us" className="transition hover:text-blue-600">
                Why SkyBook
              </a>
              <a
                href="#how-it-works"
                className="transition hover:text-blue-600"
              >
                How It Works
              </a>
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                to="/login"
                className="rounded-xl px-3 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-slate-100 sm:px-5"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="rounded-xl bg-blue-600 px-3 py-2.5 text-xs font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 sm:px-5 sm:text-sm"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </header>

        {/* HERO */}
        <section
          id="home"
          className="relative isolate overflow-hidden bg-[#061b43]"
        >
          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2000&q=90"
            alt="Airplane wing above the clouds"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />

          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#061b43]/95 via-[#082d67]/85 to-[#061b43]/35" />

          <div className="mx-auto max-w-7xl px-4 pb-32 pt-16 sm:px-6 sm:pb-40 sm:pt-20 lg:px-8 lg:pb-48 lg:pt-28">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md sm:text-sm">
                <Sparkles size={16} className="text-yellow-300" />
                Your journey begins with SkyBook
              </div>

              <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
                Explore the World.
                <br />
                <span className="text-sky-300">Fly Beyond Limits.</span>
              </h1>

              <p className="mt-6 max-w-xl text-sm leading-7 text-blue-50 sm:text-lg">
                Discover incredible destinations, explore flight options, and
                plan unforgettable journeys — all in one place.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/registration"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-blue-950/20 transition hover:bg-blue-500"
                >
                  Start Your Journey <ArrowRight size={18} />
                </Link>

                <a
                  href="#destinations"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/20"
                >
                  Explore Destinations <Globe2 size={18} />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-5 text-xs font-medium text-blue-100 sm:gap-8 sm:text-sm">
                <span className="flex items-center gap-2">
                  <ShieldCheck size={18} className="text-sky-300" />
                  Secure Platform
                </span>
                <span className="flex items-center gap-2">
                  <Ticket size={18} className="text-sky-300" />
                  Easy Booking
                </span>
                <span className="flex items-center gap-2">
                  <Headphones size={18} className="text-sky-300" />
                  Travel Support
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SEARCH FLIGHT PREVIEW */}
        <section className="relative z-10 mx-auto -mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-2xl shadow-slate-900/10 sm:p-7 lg:p-9">
            <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-xl font-extrabold sm:text-2xl">
                  Where would you like to fly?
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Your next adventure is just a few clicks away.
                </p>
              </div>

              <div className="flex w-fit items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-700">
                <LockKeyhole size={15} />
                Login required to search
              </div>
            </div>

            <div className="mb-6 flex gap-2">
              <span className="rounded-full bg-blue-600 px-5 py-2 text-xs font-bold text-white">
                One Way
              </span>
              <span className="rounded-full bg-slate-100 px-5 py-2 text-xs font-semibold text-slate-500">
                Round Trip
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-2xl border border-slate-200 p-4">
                <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-400">
                  From
                </label>
                <div className="flex items-center gap-3">
                  <MapPin size={21} className="text-blue-600" />
                  <input
                    type="text"
                    placeholder="Departure city"
                    className="w-full min-w-0 bg-transparent text-sm font-semibold outline-none placeholder:font-normal"
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 p-4">
                <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-400">
                  To
                </label>
                <div className="flex items-center gap-3">
                  <MapPin size={21} className="text-blue-600" />
                  <input
                    type="text"
                    placeholder="Destination city"
                    className="w-full min-w-0 bg-transparent text-sm font-semibold outline-none placeholder:font-normal"
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 p-4">
                <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-400">
                  Departure Date
                </label>
                <div className="flex items-center gap-3">
                  <CalendarDays size={21} className="text-blue-600" />
                  <input
                    type="date"
                    className="w-full min-w-0 bg-transparent text-sm font-semibold outline-none"
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 p-4">
                <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-400">
                  Passengers
                </label>
                <div className="flex items-center gap-3">
                  <Users size={21} className="text-blue-600" />
                  <select className="w-full min-w-0 bg-transparent text-sm font-semibold outline-none">
                    <option>1 Passenger</option>
                    <option>2 Passengers</option>
                    <option>3 Passengers</option>
                    <option>4 Passengers</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col justify-between gap-4 border-t border-slate-100 pt-6 sm:flex-row sm:items-center">
              <p className="flex items-center gap-2 text-xs text-slate-500">
                <LockKeyhole size={16} className="text-blue-600" />
                Create an account or log in to search and book flights.
              </p>

              <Link
                to="/login"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 sm:w-auto"
              >
                <Search size={18} />
                Login to Search Flights
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* POPULAR DESTINATIONS */}
        <section
          id="destinations"
          className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
        >
          <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600">
                <Globe2 size={17} />
                Explore the world
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Dream destinations await
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
                Discover stunning cities and start planning your next adventure.
              </p>
            </div>

            <Link
              to="/registration"
              className="flex items-center gap-1 text-sm font-bold text-blue-600"
            >
              Start exploring <ChevronRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination) => (
              <div
                key={destination.city}
                className="group relative h-80 overflow-hidden rounded-3xl bg-slate-200 shadow-sm"
              >
                <img
                  src={destination.image}
                  alt={destination.city}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-xs font-medium text-white/80">
                    {destination.country}
                  </p>
                  <div className="mt-1 flex items-end justify-between">
                    <h3 className="text-3xl font-extrabold">
                      {destination.city}
                    </h3>
                    <Link
                      to="/login"
                      aria-label={`Login to explore flights to ${destination.city}`}
                      className="rounded-full bg-white/20 p-3 backdrop-blur-md transition hover:bg-blue-600"
                    >
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section id="why-us" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Why choose SkyBook?
              </span>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                Travel planning made simple
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-500">
                A simple and convenient way to explore flights, manage bookings,
                and prepare for your next journey.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: Search,
                  title: "Easy Flight Search",
                  description:
                    "Explore available flight options and find journeys that match your travel plans.",
                  color: "bg-blue-50 text-blue-600",
                },
                {
                  icon: ShieldCheck,
                  title: "Secure Experience",
                  description:
                    "Manage your account and bookings through a secure travel platform.",
                  color: "bg-emerald-50 text-emerald-600",
                },
                {
                  icon: Ticket,
                  title: "Manage Your Bookings",
                  description:
                    "Keep your travel details, booking information, and tickets organized.",
                  color: "bg-violet-50 text-violet-600",
                },
              ].map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="rounded-3xl border border-slate-100 bg-slate-50 p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div
                      className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${feature.color}`}
                    >
                      <Icon size={27} />
                    </div>
                    <h3 className="text-xl font-extrabold">{feature.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section
          id="how-it-works"
          className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
        >
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Simple steps
            </span>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Your journey in three steps
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                number: "01",
                icon: Users,
                title: "Create Your Account",
                description:
                  "Register or log in to access flight search and booking features.",
              },
              {
                number: "02",
                icon: Search,
                title: "Find Your Flight",
                description:
                  "Choose your destination, travel date, and preferred flight.",
              },
              {
                number: "03",
                icon: Ticket,
                title: "Book Your Journey",
                description:
                  "Enter passenger details and complete your booking process.",
              },
            ].map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.number} className="relative text-center">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-100 text-blue-600">
                    <Icon size={33} />
                  </div>
                  <span className="text-xs font-extrabold tracking-widest text-blue-600">
                    STEP {step.number}
                  </span>
                  <h3 className="mt-3 text-xl font-extrabold">{step.title}</h3>
                  <p className="mx-auto mt-3 max-w-xs text-sm leading-7 text-slate-500">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-blue-800 via-blue-700 to-sky-500 px-6 py-12 text-white sm:px-12 lg:px-16 lg:py-16">
            <Plane
              size={250}
              strokeWidth={0.6}
              className="pointer-events-none absolute -bottom-20 -right-10 rotate-[-25deg] text-white/20"
            />

            <div className="relative z-10 max-w-xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold">
                <Star size={15} className="text-yellow-300" />
                Start your adventure
              </div>

              <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
                Ready to take off?
              </h2>

              <p className="mt-4 text-sm leading-7 text-blue-100 sm:text-base">
                Join SkyBook today and start exploring the world, one
                destination at a time.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/registration"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-blue-700 transition hover:bg-blue-50"
                >
                  Create Free Account <ArrowRight size={18} />
                </Link>
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center rounded-xl border border-white/40 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Already a member? Login
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-[#071b3e] text-slate-300">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 text-white">
                <div className="rounded-xl bg-blue-600 p-2">
                  <Plane size={21} />
                </div>
                <span className="text-xl font-extrabold">
                  Sky<span className="text-sky-400">Book</span>
                </span>
              </div>
              <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
                Explore destinations, discover flights, and plan your next
                journey with SkyBook.
              </p>
            </div>

            <div>
              <h4 className="mb-5 text-sm font-bold text-white">Quick Links</h4>
              <div className="flex flex-col gap-3 text-sm">
                <a href="#home" className="hover:text-white">
                  Home
                </a>
                <a href="#destinations" className="hover:text-white">
                  Destinations
                </a>
                <a href="#why-us" className="hover:text-white">
                  Why SkyBook
                </a>
                <a href="#how-it-works" className="hover:text-white">
                  How It Works
                </a>
              </div>
            </div>

            <div>
              <h4 className="mb-5 text-sm font-bold text-white">
                Your Account
              </h4>
              <div className="flex flex-col gap-3 text-sm">
                <Link to="/login" className="hover:text-white">
                  Login
                </Link>
                <Link to="/registration" className="hover:text-white">
                  Create Account
                </Link>
                <Link to="/login" className="hover:text-white">
                  My Bookings
                </Link>
                <Link to="/login" className="hover:text-white">
                  Search Flights
                </Link>
              </div>
            </div>

            <div>
              <h4 className="mb-5 text-sm font-bold text-white">
                Stay Connected
              </h4>
              <div className="flex flex-col gap-4 text-sm">
                <p className="flex items-center gap-3">
                  <Mail size={17} className="text-sky-400" />
                  Contact information coming soon
                </p>
                <p className="flex items-center gap-3">
                  <Headphones size={17} className="text-sky-400" />
                  Travel assistance
                </p>
                <p className="flex items-center gap-3">
                  <Globe2 size={17} className="text-sky-400" />
                  Explore worldwide
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-center text-xs text-slate-400 sm:flex-row sm:px-6 lg:px-8">
              <p>© 2026 SkyBook. All rights reserved.</p>
              <p>Made for travelers, built for journeys.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;

import React from "react";
import { useLocation } from "react-router-dom";
import {
  Plane,
  MapPin,
  CalendarDays,
  Users,
  Armchair,
  Search,
  SlidersHorizontal,
  ChevronDown,
  ArrowRight,
  Clock3,
  CheckCircle2,
  ArrowLeftRight,
} from "lucide-react";

const FlightsPage = () => {
  const location = useLocation();
  console.log(location.state);
  const flightData = location.state?.flightData;
  console.log(flightData);

  return (
    <>
      <div className="min-h-screen bg-[#f4f7fb] text-slate-900">
        {/* Navbar */}
        <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2">
              <div className="rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 p-2 shadow-lg shadow-blue-900/20">
                <Plane className="text-white" size={24} />
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-slate-900">
                SkyFly
              </span>
            </div>

            <div className="hidden items-center gap-8 md:flex">
              <a href="/" className="font-semibold text-blue-600">
                Home
              </a>
              <a
                href="#"
                className="font-semibold text-slate-600 hover:text-blue-600"
              >
                My Bookings
              </a>
            </div>

            <button className="rounded-full bg-blue-50 p-2.5 text-blue-600">
              <Users size={22} />
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#071b3e] via-blue-900 to-blue-700 px-4 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-12">
          <div className="relative z-10 mx-auto max-w-7xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-sky-200">
              Your journey starts here
            </p>

            <h1 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Flight Search Results
            </h1>

            <p className="mt-3 max-w-xl text-sm text-blue-100 sm:text-base">
              Compare flights, find the best fares and book your next journey.
            </p>
          </div>

          <Plane
            className="absolute -right-4 bottom-0 rotate-[-15deg] text-white/10 sm:right-16"
            size={210}
          />
        </section>

        {/* Search Summary */}
        <section className="relative z-20 mx-auto -mt-7 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-x-5 gap-y-5 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xl shadow-slate-900/10 md:grid-cols-5 md:p-6">
            <div className="col-span-2 flex items-center gap-3 md:col-span-1">
              <MapPin className="shrink-0 text-blue-600" size={21} />
              <div>
                <p className="text-xs text-slate-400">From</p>
                <p className="font-bold text-slate-800">Mumbai (BOM)</p>
              </div>
            </div>

            <div className="col-span-2 flex items-center gap-3 md:col-span-1">
              <MapPin className="shrink-0 text-blue-600" size={21} />
              <div>
                <p className="text-xs text-slate-400">To</p>
                <p className="font-bold text-slate-800">Delhi (DEL)</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <CalendarDays className="shrink-0 text-blue-600" size={21} />
              <div>
                <p className="text-xs text-slate-400">Departure</p>
                <p className="text-sm font-bold text-slate-800">15 Nov 2026</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Users className="shrink-0 text-blue-600" size={21} />
              <div>
                <p className="text-xs text-slate-400">Passengers</p>
                <p className="text-sm font-bold text-slate-800">1 Passenger</p>
              </div>
            </div>

            <div className="col-span-2 flex items-center gap-3 md:col-span-1">
              <Armchair className="shrink-0 text-blue-600" size={21} />
              <div>
                <p className="text-xs text-slate-400">Cabin Class</p>
                <p className="font-bold text-slate-800">Economy</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:px-8">
          {/* Filters Sidebar */}
          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="text-blue-600" size={21} />
                <h2 className="text-lg font-bold text-slate-900">Filters</h2>
              </div>
              <button className="text-sm font-semibold text-blue-600">
                Clear All
              </button>
            </div>

            {/* Airlines */}
            <div className="border-b border-slate-100 pb-6">
              <h3 className="mb-4 font-bold text-slate-800">Airlines</h3>

              <div className="space-y-3">
                {["Air India", "IndiGo", "Emirates", "SpiceJet"].map(
                  (airline) => (
                    <label
                      key={airline}
                      className="flex cursor-pointer items-center gap-3 text-sm text-slate-600"
                    >
                      <input
                        type="checkbox"
                        className="h-4 w-4 accent-blue-600"
                      />
                      {airline}
                    </label>
                  ),
                )}
              </div>
            </div>

            {/* Price Range */}
            <div className="border-b border-slate-100 py-6">
              <h3 className="mb-4 font-bold text-slate-800">Price Range</h3>

              <input
                type="range"
                min="0"
                max="50000"
                className="w-full accent-blue-600"
              />

              <div className="mt-3 flex justify-between text-sm font-semibold text-slate-600">
                <span>₹5,000</span>
                <span>₹50,000</span>
              </div>
            </div>

            {/* Stops */}
            <div className="border-b border-slate-100 py-6">
              <h3 className="mb-4 font-bold text-slate-800">Stops</h3>

              <div className="space-y-3">
                {["Non Stop", "1 Stop", "2+ Stops"].map((stop) => (
                  <label
                    key={stop}
                    className="flex cursor-pointer items-center gap-3 text-sm text-slate-600"
                  >
                    <input
                      type="checkbox"
                      className="h-4 w-4 accent-blue-600"
                    />
                    {stop}
                  </label>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div className="pt-6">
              <h3 className="mb-3 font-bold text-slate-800">Sort By</h3>

              <select className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm outline-none focus:border-blue-500">
                <option>Recommended</option>
                <option>Lowest Price</option>
                <option>Shortest Duration</option>
                <option>Earliest Departure</option>
              </select>
            </div>
          </aside>

          {/* Flight Results */}
          <section>
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-xl font-extrabold text-slate-900">
                  Available Flights
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Choose the flight that suits your journey.
                </p>
              </div>

              <div className="rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
                <Search size={15} className="mr-2 inline" />
                61 Offers Found
              </div>
            </div>

            {/* Flight Card 1 */}
            <div className="group mb-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm shadow-slate-900/[0.03] transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/[0.06] sm:p-6">
              <div className="flex flex-col gap-5 xl:flex-row xl:items-center">
                {/* Airline */}
                <div className="flex items-center gap-3 xl:w-40 xl:flex-col xl:items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50">
                    <Plane className="text-red-600" size={26} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Air India</h3>
                    <p className="text-xs text-slate-500">AI-683</p>
                  </div>
                </div>

                {/* Journey */}
                <div className="flex flex-1 items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900">
                      09:20
                    </h3>
                    <p className="text-sm font-semibold text-slate-500">BOM</p>
                  </div>

                  <div className="flex flex-1 flex-col items-center px-2">
                    <span className="text-xs text-slate-400">2h 10m</span>
                    <div className="my-2 flex w-full items-center">
                      <div className="h-px flex-1 border-t border-dashed border-slate-300" />
                      <Plane
                        className="mx-2 shrink-0 text-blue-600"
                        size={18}
                      />
                      <div className="h-px flex-1 border-t border-dashed border-slate-300" />
                    </div>
                    <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                      Non Stop
                    </span>
                  </div>

                  <div className="text-right">
                    <h3 className="text-xl font-extrabold text-slate-900">
                      11:30
                    </h3>
                    <p className="text-sm font-semibold text-slate-500">DEL</p>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between border-t border-slate-100 pt-4 xl:w-44 xl:flex-col xl:items-end xl:border-l xl:border-t-0 xl:pl-5 xl:pt-0">
                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-900">
                      ₹14,850
                    </h3>
                    <p className="text-xs text-slate-500">Per passenger</p>
                  </div>
                </div>
                <button className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-md shadow-blue-600/20 transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100">
                  View Details <ChevronDown className="ml-1 inline" size={16} />
                </button>
              </div>
            </div>

            {/* Bottom Note */}
            <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-4">
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 shrink-0 text-blue-600"
                  size={20}
                />
                <div>
                  <h3 className="font-bold text-blue-900">
                    Compare before you book
                  </h3>
                  <p className="mt-1 text-sm text-blue-700">
                    Check flight timings, total fares and journey details before
                    selecting an offer.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-200 bg-white py-6">
          <div className="mx-auto max-w-7xl px-4 text-center text-sm text-slate-500">
            © 2026 SkyFly. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
};

export default FlightsPage;

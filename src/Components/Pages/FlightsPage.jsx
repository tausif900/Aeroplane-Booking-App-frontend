import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Plane,
  MapPin,
  CalendarDays,
  Users,
  Armchair,
  Search,
  SlidersHorizontal,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";
import {
  currencyToINR,
  fetchExchangeRate,
} from "../../Utils/currencyExchangeUtils";

const FlightsPage = () => {
  const navigate = useNavigate();
  const [rate, setRate] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [flightsPerPage] = useState(5);
  const location = useLocation();
  const flightData = location.state?.flightData;
  const offers = flightData?.offers || [];
  console.log(offers);

  const firstSegment = offers[0]?.slices?.[0]?.segments?.[0];
  const origin = firstSegment?.origin?.city_name;
  const originIATACode = firstSegment?.origin?.iata_code;

  const destination = firstSegment?.destination?.city_name;
  const destinationIATACode = firstSegment?.destination?.iata_code;

  const departureDate = firstSegment?.departing_at?.split("T")?.[0];

  const totalPassengers = offers[0]?.passengers?.length;

  const cabinClass = firstSegment?.passengers?.[0]?.cabin_class_marketing_name;

  const startIndex = (currentPage - 1) * flightsPerPage;
  const endIndex = startIndex + flightsPerPage;

  const currentFlights = offers.slice(startIndex, endIndex);

  const totalPages = Math.max(1, Math.ceil(offers.length / flightsPerPage));

  useEffect(() => {
    const getRate = async () => {
      const exchangeRate = await fetchExchangeRate();
      setRate(exchangeRate);
    };
    getRate();
  }, []);

  return (
    <div className="min-vh-100 d-flex flex-column bg-body-tertiary text-body">
      {/* Navbar */}
      <nav className="navbar navbar-expand-md sticky-top bg-white border-bottom shadow-sm py-3">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <div className="rounded-3 bg-primary p-2 text-white d-flex align-items-center justify-content-center shadow-sm">
              <Plane size={22} />
            </div>
            <span className="fs-4 fw-bold text-body">SkyFly</span>
          </div>

          <div className="d-none d-md-flex align-items-center gap-4">
            <a
              href="/"
              className="text-decoration-none fw-semibold text-primary"
            >
              Home
            </a>
            <a
              href="#"
              className="text-decoration-none fw-semibold text-secondary"
            >
              My Bookings
            </a>
          </div>

          <button
            type="button"
            className="btn btn-light rounded-circle p-2 text-primary d-inline-flex align-items-center justify-content-center"
            aria-label="User profile"
          >
            <Users size={20} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="position-relative overflow-hidden bg-primary text-white py-5">
        <div className="container position-relative z-1 py-2">
          <p className="mb-2 small fw-bold text-uppercase text-info">
            Your journey starts here
          </p>

          <h1 className="display-6 fw-bold text-white mb-2">
            Flight Search Results
          </h1>

          <p className="text-white text-opacity-75 mb-0">
            Compare flights, find the best fares and book your next journey.
          </p>
        </div>

        <Plane
          className="position-absolute bottom-0 end-0 text-white opacity-25 pe-none"
          size={210}
          style={{ transform: "translate(15%, 20%)" }}
        />
      </section>

      {/* Search Summary */}
      <section className="container position-relative z-2 mt-n4 mb-4">
        <div className="card border-0 rounded-4 shadow-sm">
          <div className="card-body p-3 p-md-4">
            <div className="row g-3 row-cols-2 row-cols-md-5 align-items-center">
              <div className="col d-flex align-items-center gap-3">
                <MapPin className="flex-shrink-0 text-primary" size={20} />
                <div>
                  <div className="small text-secondary">From</div>
                  <div className="fw-bold text-body">
                    {origin} {originIATACode && `(${originIATACode})`}
                  </div>
                </div>
              </div>

              <div className="col d-flex align-items-center gap-3">
                <MapPin className="flex-shrink-0 text-primary" size={20} />
                <div>
                  <div className="small text-secondary">To</div>
                  <div className="fw-bold text-body">
                    {destination}{" "}
                    {destinationIATACode && `(${destinationIATACode})`}
                  </div>
                </div>
              </div>

              <div className="col d-flex align-items-center gap-3">
                <CalendarDays
                  className="flex-shrink-0 text-primary"
                  size={20}
                />
                <div>
                  <div className="small text-secondary">Departure</div>
                  <div className="small fw-bold text-body">{departureDate}</div>
                </div>
              </div>

              <div className="col d-flex align-items-center gap-3">
                <Users className="flex-shrink-0 text-primary" size={20} />
                <div>
                  <div className="small text-secondary">Passengers</div>
                  <div className="small fw-bold text-body">
                    {totalPassengers ? `${totalPassengers} Passenger` : ""}
                  </div>
                </div>
              </div>

              <div className="col-12 col-md d-flex align-items-center gap-3">
                <Armchair className="flex-shrink-0 text-primary" size={20} />
                <div>
                  <div className="small text-secondary">Cabin Class</div>
                  <div className="fw-bold text-body">{cabinClass}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container flex-grow-1 pb-5">
        <div className="row g-4 align-items-start">
          {/* Filters Sidebar */}
          <aside className="col-12 col-lg-3">
            <div className="card border-0 rounded-4 shadow-sm">
              <div className="card-body p-4">
                <div className="mb-4 d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-2">
                    <SlidersHorizontal className="text-primary" size={20} />
                    <h2 className="h5 fw-bold text-body mb-0">Filters</h2>
                  </div>
                  <button
                    type="button"
                    className="btn btn-link p-0 small fw-semibold text-decoration-none text-primary"
                  >
                    Clear All
                  </button>
                </div>

                {/* Airlines */}
                <div className="border-bottom pb-4">
                  <h3 className="h6 fw-bold text-body mb-3">Airlines</h3>
                  <div className="d-flex flex-column gap-2">
                    {["Air India", "IndiGo", "Emirates", "SpiceJet"].map(
                      (airline) => (
                        <div className="form-check" key={airline}>
                          <input
                            id={`airline-${airline}`}
                            type="checkbox"
                            className="form-check-input"
                          />
                          <label
                            htmlFor={`airline-${airline}`}
                            className="form-check-label small text-secondary"
                          >
                            {airline}
                          </label>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                {/* Price Range */}
                <div className="border-bottom py-4">
                  <h3 className="h6 fw-bold text-body mb-3">Price Range</h3>
                  <input
                    type="range"
                    min="0"
                    max="50000"
                    className="form-range"
                  />
                  <div className="mt-2 d-flex justify-content-between small fw-semibold text-secondary">
                    <span>₹5,000</span>
                    <span>₹50,000</span>
                  </div>
                </div>

                {/* Stops */}
                <div className="border-bottom py-4">
                  <h3 className="h6 fw-bold text-body mb-3">Stops</h3>
                  <div className="d-flex flex-column gap-2">
                    {["Non Stop", "1 Stop", "2+ Stops"].map((stop) => (
                      <div className="form-check" key={stop}>
                        <input
                          id={`stop-${stop}`}
                          type="checkbox"
                          className="form-check-input"
                        />
                        <label
                          htmlFor={`stop-${stop}`}
                          className="form-check-label small text-secondary"
                        >
                          {stop}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sort */}
                <div className="pt-4">
                  <h3 className="h6 fw-bold text-body mb-3">Sort By</h3>
                  <select
                    className="form-select small"
                    aria-label="Sort flights by"
                  >
                    <option>Recommended</option>
                    <option>Lowest Price</option>
                    <option>Shortest Duration</option>
                    <option>Earliest Departure</option>
                  </select>
                </div>
              </div>
            </div>
          </aside>

          {/* Flight Results */}
          <section className="col-12 col-lg-9">
            <div className="mb-4 d-flex flex-wrap align-items-center justify-content-between gap-3">
              <div>
                <h2 className="h4 fw-bold text-body mb-1">Available Flights</h2>
                <p className="small text-body-secondary mb-0">
                  Choose the flight that suits your journey.
                </p>
              </div>

              <span className="badge rounded-pill bg-primary-subtle text-primary px-3 py-2 fw-bold d-inline-flex align-items-center gap-2">
                <Search size={15} />
                {offers.length} Offers Found
              </span>
            </div>

            {currentFlights.length > 0 ? (
              <div className="d-flex flex-column gap-3">
                {currentFlights.map((offer) => {
                  const seg = offer.slices?.[0]?.segments?.[0];

                  return (
                    <div
                      key={offer.id}
                      className="card border-0 rounded-4 shadow-sm"
                    >
                      <div className="card-body p-3 p-sm-4">
                        <div className="row g-3 align-items-center">
                          {/* Airline */}
                          <div className="col-12 col-md-3 d-flex align-items-center gap-3">
                            <div
                              className="d-flex align-items-center justify-content-center rounded-3 bg-danger-subtle flex-shrink-0"
                              style={{ width: "46px", height: "46px" }}
                            >
                              <Plane className="text-danger" size={22} />
                            </div>
                            <div>
                              <h3 className="h6 fw-bold text-body mb-0">
                                {offer.owner?.name}
                              </h3>
                              <small className="text-body-secondary">
                                {offer.owner?.iata_code}
                              </small>
                            </div>
                          </div>

                          {/* Journey */}
                          <div className="col-12 col-md-5 d-flex align-items-center justify-content-between gap-2">
                            <div>
                              <div className="fs-5 fw-bold text-body">
                                {seg?.departing_at?.split("T")?.[1]}
                              </div>
                              <div className="small fw-semibold text-body-secondary">
                                {seg?.origin?.iata_city_code}
                              </div>
                            </div>

                            <div className="d-flex flex-column align-items-center flex-grow-1 px-2">
                              <span className="small text-secondary">
                                2h 10m
                              </span>
                              <div className="my-1 d-flex w-100 align-items-center">
                                <div className="border-top flex-grow-1" />
                                <Plane
                                  className="mx-2 flex-shrink-0 text-primary"
                                  size={18}
                                />
                                <div className="border-top flex-grow-1" />
                              </div>
                              <span className="badge rounded-pill bg-success-subtle text-success px-3 py-1 fw-semibold">
                                {seg?.stops?.length === 0 ? "Non-Stop" : "Via"}
                              </span>
                            </div>

                            <div className="text-end">
                              <div className="fs-5 fw-bold text-body">
                                {seg?.arriving_at?.split("T")?.[1]}
                              </div>
                              <div className="small fw-semibold text-body-secondary">
                                {seg?.destination?.iata_city_code}
                              </div>
                            </div>
                          </div>

                          {/* Price & Action */}
                          <div className="col-12 col-md-4 d-flex flex-sm-row flex-md-column align-items-center align-items-md-end justify-content-between gap-2 border-top border-md-top-0 pt-3 pt-md-0">
                            <div className="fs-4 fw-bold text-body">
                              ₹
                              {rate !== null &&
                              offer.intended_total_amount != null
                                ? currencyToINR(
                                    offer.intended_total_amount,
                                    rate,
                                  ).toFixed(2)
                                : "--"}
                            </div>

                            <button
                              type="button"
                              className="btn btn-primary fw-semibold px-3 py-2 d-inline-flex align-items-center gap-1 shadow-sm"
                              onClick={() => {
                                navigate(`/flight/${offer.id}`);
                              }}
                            >
                              View Details <ChevronDown size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="card border-0 rounded-4 shadow-sm p-5 text-center">
                <h3 className="h4 fw-bold mb-0">No Flights Found</h3>
              </div>
            )}

            {/* Pagination */}
            <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
              <button
                type="button"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
                className="btn btn-outline-primary fw-semibold px-3 py-2"
              >
                ← Previous
              </button>

              <span className="small fw-semibold text-secondary">
                Page <span className="text-primary">{currentPage}</span> of{" "}
                {totalPages}
              </span>

              <button
                type="button"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
                className="btn btn-primary fw-semibold px-3 py-2"
              >
                Next →
              </button>
            </div>

            {/* Bottom Note */}
            <div className="alert alert-primary bg-primary-subtle border-0 rounded-4 mt-4 mb-0">
              <div className="d-flex align-items-start gap-3">
                <CheckCircle2
                  className="mt-1 flex-shrink-0 text-primary"
                  size={20}
                />
                <div>
                  <h3 className="h6 fw-bold text-primary-emphasis mb-1">
                    Compare before you book
                  </h3>
                  <p className="small text-primary-emphasis mb-0">
                    Check flight timings, total fares and journey details before
                    selecting an offer.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-top bg-white py-4 mt-auto">
        <div className="container text-center small text-body-secondary">
          © 2026 SkyFly. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default FlightsPage;

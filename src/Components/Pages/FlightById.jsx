import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  currencyToINR,
  fetchExchangeRate,
} from "../../Utils/currencyExchangeUtils";

const FlightById = () => {
  const navigate = useNavigate();
  const { flightId } = useParams();
  console.log(flightId);

  const [flight, setFlight] = useState({});
  const [rate, setRate] = useState(null);

  async function getFlightById() {
    try {
      const response = await axios.get(
        `http://localhost:8080/flight/${flightId}`,
        { withCredentials: true },
      );
      console.log(response.data.data);
      setFlight(response.data.data);
    } catch (error) {
      console.log(error);
      toast.error("Something Went wrong");
    }
  }

  const formattedDate = (d) => {
    const date = new Date(d);
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(date);
  };

  useEffect(() => {
    getFlightById();
  }, [flightId]);

  useEffect(() => {
    const getRate = async () => {
      const exchangeRate = await fetchExchangeRate();
      setRate(exchangeRate);
    };
    getRate();
  }, []);

  const segment = flight?.slices?.[0]?.segments?.[0];

  return (
    <div className="min-vh-100 bg-body-tertiary py-4 py-md-5">
      <div className="container">
        {/* Header */}
        <div className="mb-4">
          <p className="small fw-semibold text-primary text-uppercase mb-1">
            FLIGHT DETAILS
          </p>
          <h1 className="h2 fw-bold text-body mb-1">Your Flight Information</h1>
          <p className="text-body-secondary mb-0">
            Review your itinerary and baggage information.
          </p>
        </div>

        {/* Airline Card */}
        <div className="card border-0 shadow-sm rounded-4 mb-4">
          <div className="card-body p-3 p-sm-4 d-flex flex-wrap align-items-center gap-3">
            <div
              className="bg-primary-subtle rounded-3 d-flex align-items-center justify-content-center fs-3 flex-shrink-0"
              style={{ width: "52px", height: "52px" }}
            >
              ✈️
            </div>
            <div>
              <h2 className="h5 fw-bold text-body mb-0">
                {flight?.owner?.name}
              </h2>
              <p className="small text-body-secondary mb-0">
                Flight Offer Information
              </p>
            </div>
            <span className="badge bg-success-subtle text-success fw-semibold px-3 py-2 rounded-pill ms-auto">
              Available
            </span>
          </div>
        </div>

        {/* Journey Details */}
        <div className="card border-0 shadow-sm rounded-4 mb-4">
          <div className="card-body p-3 p-sm-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="h5 fw-bold text-body mb-0">Journey Details</h2>
              <span className="small text-primary fw-semibold">3h 9m</span>
            </div>

            <div className="row g-3 align-items-center">
              {/* Origin */}
              <div className="col-12 col-sm-5">
                <h3 className="h2 fw-bold text-body mb-1">
                  {segment?.origin?.iata_city_code}
                </h3>
                <p className="small text-body-secondary mb-1">
                  {segment?.origin?.city_name},{" "}
                  {segment?.origin?.iata_country_code}
                </p>
                <p className="small text-body-secondary mb-2">
                  {segment?.origin?.name}
                </p>
                <p className="h5 fw-semibold mb-0">
                  {segment?.departing_at?.split("T")?.[1]}
                </p>
                <p className="small text-secondary mb-0">
                  {segment?.departing_at &&
                    formattedDate(segment.departing_at.split("T")[0])}
                </p>
              </div>

              {/* Flight Path */}
              <div className="col-12 col-sm-2 d-flex flex-column align-items-center text-center">
                <span className="small fw-semibold text-success mb-2">
                  {segment?.stops?.length === 0 ? "Non-Stop" : "Via"}
                </span>
                <div className="d-flex align-items-center w-100">
                  <div className="border-top flex-grow-1" />
                  <span className="text-primary fs-4 px-2">✈</span>
                  <div className="border-top flex-grow-1" />
                </div>
                <span className="small text-secondary mt-2">
                  {segment?.stops?.length === 0 ? "Direct Flight" : "Via"}
                </span>
              </div>

              {/* Destination */}
              <div className="col-12 col-sm-5 text-start text-sm-end">
                <h3 className="h2 fw-bold text-body mb-1">
                  {segment?.destination?.iata_city_code}
                </h3>
                <p className="small text-body-secondary mb-1">
                  {segment?.destination?.city_name},{" "}
                  {segment?.destination?.iata_country_code}
                </p>
                <p className="small text-body-secondary mb-2">
                  {segment?.destination?.name}
                </p>
                <p className="h5 fw-semibold mb-0">
                  {segment?.arriving_at?.split("T")?.[1]}
                </p>
                <p className="small text-secondary mb-0">
                  {segment?.arriving_at &&
                    formattedDate(segment.arriving_at.split("T")[0])}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Flight Segments */}
        <div className="card border-0 shadow-sm rounded-4 mb-4">
          <div className="card-body p-3 p-sm-4">
            <h2 className="h5 fw-bold text-body mb-3">Flight Information</h2>

            <div className="bg-body-tertiary rounded-3 p-3 p-sm-4">
              <div className="d-flex align-items-center gap-3">
                <div
                  className="rounded-3 bg-white border d-flex align-items-center justify-content-center fs-4 flex-shrink-0"
                  style={{ width: "48px", height: "48px" }}
                >
                  ✈️
                </div>
                <div>
                  <h3 className="h6 fw-bold text-body mb-0">
                    {flight?.owner?.name}
                  </h3>
                  <p className="small text-body-secondary mb-0">
                    Flight No. {segment?.marketing_carrier_flight_number}
                  </p>
                </div>
              </div>

              <div className="row g-3 mt-3">
                <div className="col-6">
                  <p className="small text-body-secondary mb-1">Departure</p>
                  <h3 className="h5 fw-bold text-body mb-1">
                    {segment?.origin?.iata_city_code}
                  </h3>
                  <p className="small text-body-secondary mb-0">
                    Terminal {segment?.origin_terminal}
                  </p>
                </div>
                <div className="col-6">
                  <p className="small text-body-secondary mb-1">Arrival</p>
                  <h3 className="h5 fw-bold text-body mb-1">
                    {segment?.destination?.iata_city_code}
                  </h3>
                  <p className="small text-body-secondary mb-0">
                    Terminal {segment?.destination_terminal}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Baggage Information */}
        <div className="card border-0 shadow-sm rounded-4 mb-4">
          <div className="card-body p-3 p-sm-4">
            <h2 className="h5 fw-bold text-body mb-3">
              Baggage &amp; Cabin Information
            </h2>

            <div className="row g-3">
              <div className="col-12 col-sm-4">
                <div className="bg-body-tertiary rounded-3 p-3 p-sm-4 h-100">
                  <span className="fs-3 d-block">🧳</span>
                  <p className="small text-body-secondary mt-2 mb-1">
                    Checked Baggage
                  </p>
                  <h3 className="h5 fw-bold text-body mb-0">
                    {segment?.passengers?.[0]?.baggages?.[0]?.quantity} Bag
                  </h3>
                </div>
              </div>

              <div className="col-12 col-sm-4">
                <div className="bg-body-tertiary rounded-3 p-3 p-sm-4 h-100">
                  <span className="fs-3 d-block">🎒</span>
                  <p className="small text-body-secondary mt-2 mb-1">
                    Cabin Baggage
                  </p>
                  <h3 className="h5 fw-bold text-body mb-0">
                    {segment?.passengers?.[0]?.baggages?.[0]?.quantity} Bag
                  </h3>
                </div>
              </div>

              <div className="col-12 col-sm-4">
                <div className="bg-body-tertiary rounded-3 p-3 p-sm-4 h-100">
                  <span className="fs-3 d-block">💺</span>
                  <p className="small text-body-secondary mt-2 mb-1">
                    Cabin Class
                  </p>
                  <h3 className="h5 fw-bold text-body mb-0">
                    {segment?.passengers?.[0]?.cabin_class_marketing_name}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fare Summary */}
        <div className="card border-0 shadow-sm rounded-4">
          <div className="card-body p-3 p-sm-4">
            <h2 className="h5 fw-bold text-body mb-3">Fare Summary</h2>

            <div className="d-flex justify-content-between mb-2 small">
              <span className="text-body-secondary">Base Fare</span>
              {rate !== null && flight?.base_amount && (
                <span className="fw-semibold">
                  ₹ {currencyToINR(flight.base_amount, rate).toFixed(2)}
                </span>
              )}
            </div>

            <div className="d-flex justify-content-between mb-3 small">
              <span className="text-body-secondary">Taxes &amp; Charges</span>
              {rate !== null && flight?.tax_amount && (
                <span className="fw-semibold">
                  ₹ {currencyToINR(flight.tax_amount, rate).toFixed(2)}
                </span>
              )}
            </div>

            <div className="border-top pt-3 mb-4 d-flex justify-content-between align-items-center">
              <span className="fw-bold text-body">Total Amount</span>
              {rate !== null && flight?.total_amount && (
                <span className="fs-3 fw-bold text-primary">
                  ₹ {currencyToINR(flight.total_amount, rate).toFixed(2)}
                </span>
              )}
            </div>

            <div className="d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 py-2 fw-semibold shadow-sm w-100 w-sm-auto"
                onClick={() =>
                  navigate("/passenger-details", {
                    state: {
                      adults: flight.passengers.length,
                      flightData: flight,
                    },
                  })
                }
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightById;

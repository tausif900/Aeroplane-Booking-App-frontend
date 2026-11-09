import axios from "axios";
import React, { useEffect, useState } from "react";
import { Await, useNavigate, useParams } from "react-router-dom";
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

  return (
    <>
      {" "}
      <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <p className="text-sm font-semibold text-blue-600 mb-2">
              FLIGHT DETAILS
            </p>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Your Flight Information
            </h1>
            <p className="text-slate-500 mt-2">
              Review your itinerary and baggage information.
            </p>
          </div>

          {/* Airline Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-3xl">
                ✈️
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  {flight?.owner?.name}
                </h2>
                <p className="text-sm text-slate-500">
                  Flight Offer Information
                </p>
              </div>
              <span className="ml-auto bg-green-50 text-green-700 text-xs font-semibold px-3 py-2 rounded-full">
                Available
              </span>
            </div>
          </div>

          {/* Journey Details */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-lg font-bold text-slate-900">
                Journey Details
              </h2>
              <span className="text-sm text-blue-600 font-semibold">3h 9m</span>
            </div>

            <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center">
              <div>
                <h3 className="text-3xl font-bold text-slate-900">
                  {flight?.slices?.[0]?.segments?.[0]?.origin?.iata_city_code}
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  {" "}
                  {flight?.slices?.[0]?.segments?.[0]?.origin?.city_name},{" "}
                  {
                    flight?.slices?.[0]?.segments?.[0]?.origin
                      ?.iata_country_code
                  }
                </p>
                <p className="text-sm text-slate-500 mt-1">
                  {" "}
                  {flight?.slices?.[0]?.segments?.[0]?.origin?.name}{" "}
                </p>
                <p className="text-lg font-semibold mt-3">
                  {
                    flight?.slices?.[0]?.segments?.[0]?.departing_at.split(
                      "T",
                    )[1]
                  }
                </p>
                <p className="text-xs text-slate-400">
                  {flight?.slices?.[0]?.segments?.[0]?.departing_at &&
                    formattedDate(
                      flight.slices[0].segments[0].departing_at.split("T")[0],
                    )}
                </p>
              </div>

              <div className="flex flex-col items-center">
                <span className="text-xs font-semibold text-green-600 mb-3">
                  {flight?.slices?.[0]?.segments?.[0]?.stops?.length === 0
                    ? "Non-Stop"
                    : "Via"}
                </span>
                <div className="flex items-center w-24 sm:w-40">
                  <div className="h-px bg-slate-300 flex-1" />
                  <span className="text-blue-600 text-2xl px-2">✈</span>
                  <div className="h-px bg-slate-300 flex-1" />
                </div>
                <span className="text-xs text-slate-400 mt-3">
                  {flight?.slices?.[0]?.segments?.[0]?.stops?.length === 0
                    ? "Direct Flight"
                    : "Via"}
                </span>
              </div>

              <div className="text-right">
                <h3 className="text-3xl font-bold text-slate-900">
                  {" "}
                  {
                    flight?.slices?.[0]?.segments?.[0]?.destination
                      ?.iata_city_code
                  }
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  {" "}
                  {
                    flight?.slices?.[0]?.segments?.[0]?.destination?.city_name
                  },{" "}
                  {
                    flight?.slices?.[0]?.segments?.[0]?.destination
                      ?.iata_country_code
                  }
                </p>
                <p className="text-sm text-slate-500 mt-1">
                  {" "}
                  {flight?.slices?.[0]?.segments?.[0]?.destination?.name}{" "}
                </p>
                <p className="text-lg font-semibold mt-3">
                  {" "}
                  {
                    flight?.slices?.[0]?.segments?.[0]?.arriving_at.split(
                      "T",
                    )[1]
                  }
                </p>
                <p className="text-xs text-slate-400">
                  {flight?.slices?.[0]?.segments?.[0]?.arriving_at &&
                    formattedDate(
                      flight.slices[0].segments[0].arriving_at.split("T")[0],
                    )}
                </p>
              </div>
            </div>
          </div>

          {/* Flight Segments */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-5">
              Flight Information
            </h2>

            <div className="bg-slate-50 rounded-xl p-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-2xl">
                  ✈️
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">
                    {flight?.owner?.name}
                  </h3>
                  <p className="text-sm text-slate-500">
                    Flight No.{" "}
                    {
                      flight?.slices?.[0]?.segments?.[0]
                        ?.marketing_carrier_flight_number
                    }
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-6">
                <div>
                  <p className="text-xs text-slate-500">Departure</p>
                  <h3 className="font-bold text-slate-900 mt-1">
                    {flight?.slices?.[0]?.segments?.[0]?.origin?.iata_city_code}
                  </h3>
                  <p className="text-sm text-slate-500">
                    Terminal{" "}
                    {flight?.slices?.[0]?.segments?.[0]?.origin_terminal}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Arrival</p>
                  <h3 className="font-bold text-slate-900 mt-1">
                    {
                      flight?.slices?.[0]?.segments?.[0]?.destination
                        ?.iata_city_code
                    }
                  </h3>
                  <p className="text-sm text-slate-500">
                    Terminal{" "}
                    {flight?.slices?.[0]?.segments?.[0]?.destination_terminal}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Baggage Information */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-5">
              Baggage & Cabin Information
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-slate-50 rounded-xl p-5">
                <span className="text-2xl">🧳</span>
                <p className="text-sm text-slate-500 mt-3">Checked Baggage</p>
                <h3 className="text-lg font-bold text-slate-900">
                  {
                    flight?.slices?.[0]?.segments?.[0]?.passengers?.[0]
                      ?.baggages?.[0]?.quantity
                  }{" "}
                  Bag
                </h3>
              </div>

              <div className="bg-slate-50 rounded-xl p-5">
                <span className="text-2xl">🎒</span>
                <p className="text-sm text-slate-500 mt-3">Cabin Baggage</p>
                <h3 className="text-lg font-bold text-slate-900">
                  {" "}
                  {
                    flight?.slices?.[0]?.segments?.[0]?.passengers?.[0]
                      ?.baggages?.[0]?.quantity
                  }{" "}
                  Bag
                </h3>
              </div>

              <div className="bg-slate-50 rounded-xl p-5">
                <span className="text-2xl">💺</span>
                <p className="text-sm text-slate-500 mt-3">Cabin Class</p>
                <h3 className="text-lg font-bold text-slate-900">
                  {
                    flight?.slices?.[0]?.segments?.[0]?.passengers?.[0]
                      ?.cabin_class_marketing_name
                  }
                </h3>
              </div>
            </div>
          </div>

          {/* Fare Summary */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-5">
              Fare Summary
            </h2>

            <div className="flex justify-between mb-3 text-sm">
              <span className="text-slate-500">Base Fare</span>

              {rate !== null && flight?.base_amount && (
                <span className="font-semibold">
                  ₹ {currencyToINR(flight.base_amount, rate).toFixed(2)}
                </span>
              )}
            </div>

            <div className="flex justify-between mb-5 text-sm">
              <span className="text-slate-500">Taxes & Charges</span>
              {rate !== null && flight?.tax_amount && (
                <span className="font-semibold">
                  ₹ {currencyToINR(flight.tax_amount, rate).toFixed(2)}
                </span>
              )}
            </div>

            <div className="border-t pt-5 flex justify-between items-center">
              <span className="font-bold text-slate-900">Total Amount</span>

              {rate !== null && flight?.total_amount && (
                <span className="text-2xl font-bold text-blue-600">
                  ₹ {currencyToINR(flight.total_amount, rate).toFixed(2)}
                </span>
              )}
            </div>
            <button
              className="w-1/4 rounded-xl bg-blue-600 px-6 py-3 mx-100 font-semibold text-white shadow-md transition hover:bg-blue-700 active:scale-[0.98]"
              onClick={() =>
                navigate("/passenger-details", {
                  state: { adults: flight.passengers.length },
                })
              }
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightById;

import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const PassengerDetails = () => {
  const location = useLocation();
  const adults = location.state?.adults || 1;
  console.log(adults);
  const [passengerDetails, setPassengerDetails] = useState(
    Array.from({ length: adults }, () => ({
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      gender: "",
      passportNumber: "",
      passportExpiry: "",
      nationality: "",
    })),
  );
  console.log(passengerDetails);

  return (
    <>
      {" "}
      <div className="min-h-screen bg-slate-50 px-4 py-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900">
              Passenger Details
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Enter passenger information exactly as mentioned on your travel
              documents.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-10 flex items-center gap-3">
            <div className="h-2 flex-1 rounded-full bg-blue-600"></div>
            <div className="h-2 flex-1 rounded-full bg-slate-200"></div>
            <div className="h-2 flex-1 rounded-full bg-slate-200"></div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Passenger Forms */}
            <div className="space-y-6 lg:col-span-2">
              {/* Passenger 1 */}
              {passengerDetails.map((p, idx) => {
                return (
                  <div
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                    key={idx}
                  >
                    <div className="mb-6 flex items-center justify-between">
                      <h2 className="text-lg font-bold text-slate-800">
                        Passenger {idx + 1}
                      </h2>

                      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                        Adult
                      </span>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">
                          First Name
                        </label>
                        <input
                          type="text"
                          placeholder="Enter first name"
                          name="firstName"
                          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Enter last name"
                          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">
                          Date of Birth
                        </label>
                        <input
                          type="date"
                          name="dateOfBirth"
                          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">
                          Gender
                        </label>
                        <select className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100">
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Passport Details */}
                    <div className="mt-7 border-t border-slate-100 pt-6">
                      <h3 className="mb-5 font-semibold text-slate-800">
                        Travel Document Details
                      </h3>

                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-sm font-medium text-slate-700">
                            Passport Number
                          </label>
                          <input
                            type="text"
                            name="passportNumber"
                            placeholder="Enter passport number"
                            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                          />
                        </div>

                        <div>
                          <label className="mb-2 block text-sm font-medium text-slate-700">
                            Passport Expiry Date
                          </label>
                          <input
                            type="date"
                            name="passportExpiryDate"
                            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                          />
                        </div>

                        <div className="sm:col-span-2">
                          <label className="mb-2 block text-sm font-medium text-slate-700">
                            Nationality
                          </label>
                          <input
                            type="text"
                            name="nationality"
                            placeholder="Enter nationality"
                            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Add Passenger Button */}
              {passengerDetails.length < adults ? (
                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-blue-300 bg-blue-50/50 px-5 py-4 font-semibold text-blue-600 transition hover:border-blue-500 hover:bg-blue-50 cursor-pointer"
                  onClick={() => {
                    setPassengerDetails([
                      ...passengerDetails,
                      {
                        firstName: "",
                        lastName: "",
                        dateOfBirth: "",
                        gender: "",
                        passportNumber: "",
                        passportExpiry: "",
                        nationality: "",
                      },
                    ]);
                  }}
                >
                  <span className="text-xl">+</span>
                  Add Passenger
                </button>
              ) : (
                <button
                  disabled={true}
                  type="button"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-blue-300 bg-blue-50/50 px-5 py-4 font-semibold text-blue-600 transition hover:border-blue-500 hover:bg-blue-50 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
                  onClick={() => {
                    setPassengerDetails([
                      ...passengerDetails,
                      {
                        firstName: "",
                        lastName: "",
                        dateOfBirth: "",
                        gender: "",
                        passportNumber: "",
                        passportExpiry: "",
                        nationality: "",
                      },
                    ]);
                  }}
                >
                  <span className="text-xl">+</span>
                  Add Passenger
                </button>
              )}

              {/* Contact Information */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="mb-2 text-lg font-bold text-slate-800">
                  Contact Information
                </h2>

                <p className="mb-6 text-sm text-slate-500">
                  Booking confirmation and flight updates will be sent here.
                </p>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="example@gmail.com"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      name="mobileNumber"
                      placeholder="+91 00000 00000"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="mb-5 text-lg font-bold text-slate-800">
                  Booking Summary
                </h2>

                <div className="mb-5 rounded-xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xl font-bold text-slate-900">BOM</p>
                      <p className="text-xs text-slate-500">Mumbai</p>
                    </div>

                    <div className="flex flex-1 flex-col items-center px-3">
                      <span className="text-xs text-slate-400">3h 9m</span>
                      <div className="relative my-2 h-px w-full bg-slate-300">
                        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-50 px-2 text-blue-600">
                          ✈
                        </span>
                      </div>
                      <span className="text-xs text-green-600">Non-stop</span>
                    </div>

                    <div className="text-right">
                      <p className="text-xl font-bold text-slate-900">DXB</p>
                      <p className="text-xs text-slate-500">Dubai</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Passengers</span>
                    <span className="font-semibold text-slate-800">
                      2 Adults
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-500">Base Fare</span>
                    <span className="font-semibold text-slate-800">
                      ₹ XX,XXX
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-500">Taxes & Fees</span>
                    <span className="font-semibold text-slate-800">
                      ₹ X,XXX
                    </span>
                  </div>
                </div>

                <div className="my-5 border-t border-dashed border-slate-300"></div>

                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-800">Total Fare</span>
                  <span className="text-2xl font-bold text-blue-600">
                    ₹ XX,XXX
                  </span>
                </div>

                <button className="mt-7 w-full rounded-xl bg-blue-600 px-5 py-3.5 font-semibold text-white shadow-md transition hover:bg-blue-700 active:scale-[0.98]">
                  Continue to Review →
                </button>

                <p className="mt-4 text-center text-xs text-slate-400">
                  Your information is kept secure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PassengerDetails;

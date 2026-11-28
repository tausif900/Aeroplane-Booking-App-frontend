import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const PassengerDetails = () => {
  const location = useLocation();
  const adults = location.state?.adults || 1;
  console.log(adults);
  const flightData = location.state?.flightData;
  console.log(flightData);
  const flightId = flightData?.id;
  const navigate = useNavigate();

  const [passengerDetails, setPassengerDetails] = useState(
    Array.from({ length: adults }, () => ({
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      gender: "",
      passportNumber: "",
      passportExpiryDate: "",
      nationality: "",
    })),
  );

  const [error, setError] = useState({});

  const [contactDetails, setContactDetails] = useState({
    email: "",
    phoneNumber: "",
  });

  const [rate, setRate] = useState({
    baseAmount: 0,
    taxAmount: 0,
    totalAmount: 0,
  });

  const validatePassengers = () => {
    const newError = {};
    passengerDetails.forEach((p, idx) => {
      if (p.firstName.trim() === "") {
        newError[idx] = {
          ...newError[idx],
          firstName: "First name is required",
        };
      }
      if (p.lastName.trim() === "") {
        newError[idx] = {
          ...newError[idx],
          lastName: "Last name is required",
        };
      }
      if (p.dateOfBirth.trim() === "") {
        newError[idx] = {
          ...newError[idx],
          dateOfBirth: "DOB is required",
        };
      }
      if (p.gender.trim() === "") {
        newError[idx] = {
          ...newError[idx],
          gender: "Gender is required",
        };
      }
      if (p.passportNumber.trim() === "") {
        newError[idx] = {
          ...newError[idx],
          passportNumber: "Passport number is required",
        };
      }
      if (p.passportExpiryDate.trim() === "") {
        newError[idx] = {
          ...newError[idx],
          passportExpiryDate: "Passport expiry date is required",
        };
      }
      if (p.nationality.trim() === "") {
        newError[idx] = {
          ...newError[idx],
          nationality: "Nationality is required",
        };
      }
    });

    if (contactDetails.email.trim() === "") {
      newError.email = "Email is required";
    }

    if (contactDetails.phoneNumber.trim() === "") {
      newError.phoneNumber = "Phone number is required";
    }
    setError(newError);
    return Object.keys(newError).length === 0;
  };

  const getRate = async () => {
    if (!flightId) return;
    try {
      const response = await axios.get(
        `http://localhost:8080/bookings/get-rate/${flightId}`,
        {
          withCredentials: true,
        },
      );
      console.log(response.data);
      setRate(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const createBooking = async ({ flightId, passenger, email, phoneNumber }) => {
    const isValidate = validatePassengers();

    if (!isValidate) {
      alert("Fill the details first!!!");
      return;
    }
    try {
      const data = { flightId, passenger, email, phoneNumber };
      console.log(data);
      const response = await axios.post(
        "http://localhost:8080/bookings/create-booking",
        data,
        {
          withCredentials: true,
        },
      );
      console.log(response.data);
      navigate(`/booking-review/${response.data.bookingId}`);
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    getRate();
  }, [flightId]);

  const segment = flightData?.slices?.[0]?.segments?.[0];

  return (
    <div className="min-vh-100 bg-body-tertiary py-4 py-md-5">
      <div className="container">
        <div className="mb-4">
          <h1 className="h2 fw-bold text-body mb-1">Passenger Details</h1>
          <p className="text-body-secondary mb-0">
            Enter passenger information exactly as mentioned on your travel
            documents.
          </p>
        </div>

        <div className="row g-4 align-items-start">
          {/* Passenger Forms */}
          <div className="col-12 col-lg-8 d-flex flex-column gap-4">
            {passengerDetails.map((p, idx) => (
              <div className="card border-0 rounded-4 shadow-sm" key={idx}>
                <div className="card-body p-3 p-sm-4">
                  <div className="mb-4 d-flex align-items-center justify-content-between">
                    <h2 className="h5 fw-bold text-body mb-0">
                      Passenger {idx + 1}
                    </h2>

                    <span className="badge rounded-pill bg-primary-subtle px-3 py-2 fw-semibold text-primary">
                      Adult
                    </span>
                  </div>

                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <label className="form-label small fw-medium text-body">
                        First Name
                      </label>
                      <input
                        type="text"
                        value={p.firstName}
                        onChange={(e) => {
                          const updatedPassengers = [...passengerDetails];
                          updatedPassengers[idx] = {
                            ...updatedPassengers[idx],
                            firstName: e.target.value,
                          };
                          setPassengerDetails(updatedPassengers);
                        }}
                        placeholder="Enter first name"
                        name="firstName"
                        className={`form-control py-2 ${
                          error[idx]?.firstName ? "is-invalid" : ""
                        }`}
                      />
                      {error[idx]?.firstName && (
                        <div className="invalid-feedback d-block">
                          {error[idx].firstName}
                        </div>
                      )}
                    </div>

                    <div className="col-12 col-sm-6">
                      <label className="form-label small fw-medium text-body">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={p.lastName}
                        onChange={(e) => {
                          const updatedPassengers = [...passengerDetails];
                          updatedPassengers[idx] = {
                            ...updatedPassengers[idx],
                            lastName: e.target.value,
                          };
                          setPassengerDetails(updatedPassengers);
                        }}
                        placeholder="Enter last name"
                        className={`form-control py-2 ${
                          error[idx]?.lastName ? "is-invalid" : ""
                        }`}
                      />
                      {error[idx]?.lastName && (
                        <div className="invalid-feedback d-block">
                          {error[idx].lastName}
                        </div>
                      )}
                    </div>

                    <div className="col-12 col-sm-6">
                      <label className="form-label small fw-medium text-body">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        name="dateOfBirth"
                        value={p.dateOfBirth}
                        onChange={(e) => {
                          const updatedPassengers = [...passengerDetails];
                          updatedPassengers[idx] = {
                            ...updatedPassengers[idx],
                            dateOfBirth: e.target.value,
                          };
                          setPassengerDetails(updatedPassengers);
                        }}
                        className={`form-control py-2 ${
                          error[idx]?.dateOfBirth ? "is-invalid" : ""
                        }`}
                      />
                      {error[idx]?.dateOfBirth && (
                        <div className="invalid-feedback d-block">
                          {error[idx].dateOfBirth}
                        </div>
                      )}
                    </div>

                    <div className="col-12 col-sm-6">
                      <label className="form-label small fw-medium text-body">
                        Gender
                      </label>
                      <select
                        className={`form-select py-2 ${
                          error[idx]?.gender ? "is-invalid" : ""
                        }`}
                        value={p.gender}
                        onChange={(e) => {
                          const updatedPassengers = [...passengerDetails];
                          updatedPassengers[idx] = {
                            ...updatedPassengers[idx],
                            gender: e.target.value,
                          };
                          setPassengerDetails(updatedPassengers);
                        }}
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                      {error[idx]?.gender && (
                        <div className="invalid-feedback d-block">
                          {error[idx].gender}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Passport Details */}
                  <div className="mt-4 border-top pt-4">
                    <h3 className="h6 fw-semibold text-body mb-3">
                      Travel Document Details
                    </h3>

                    <div className="row g-3">
                      <div className="col-12 col-sm-6">
                        <label className="form-label small fw-medium text-body">
                          Passport Number
                        </label>
                        <input
                          type="text"
                          name="passportNumber"
                          value={p.passportNumber}
                          onChange={(e) => {
                            const updatedPassengers = [...passengerDetails];
                            updatedPassengers[idx] = {
                              ...updatedPassengers[idx],
                              passportNumber: e.target.value,
                            };
                            setPassengerDetails(updatedPassengers);
                          }}
                          placeholder="Enter passport number"
                          className={`form-control py-2 ${
                            error[idx]?.passportNumber ? "is-invalid" : ""
                          }`}
                        />
                        {error[idx]?.passportNumber && (
                          <div className="invalid-feedback d-block">
                            {error[idx].passportNumber}
                          </div>
                        )}
                      </div>

                      <div className="col-12 col-sm-6">
                        <label className="form-label small fw-medium text-body">
                          Passport Expiry Date
                        </label>
                        <input
                          type="date"
                          name="passportExpiryDate"
                          value={p.passportExpiryDate}
                          onChange={(e) => {
                            const updatedPassengers = [...passengerDetails];
                            updatedPassengers[idx] = {
                              ...updatedPassengers[idx],
                              passportExpiryDate: e.target.value,
                            };
                            setPassengerDetails(updatedPassengers);
                          }}
                          className={`form-control py-2 ${
                            error[idx]?.passportExpiryDate ? "is-invalid" : ""
                          }`}
                        />
                        {error[idx]?.passportExpiryDate && (
                          <div className="invalid-feedback d-block">
                            {error[idx].passportExpiryDate}
                          </div>
                        )}
                      </div>

                      <div className="col-12">
                        <label className="form-label small fw-medium text-body">
                          Nationality
                        </label>
                        <input
                          type="text"
                          name="nationality"
                          value={p.nationality}
                          onChange={(e) => {
                            const updatedPassengers = [...passengerDetails];
                            updatedPassengers[idx] = {
                              ...updatedPassengers[idx],
                              nationality: e.target.value,
                            };
                            setPassengerDetails(updatedPassengers);
                          }}
                          placeholder="Enter nationality"
                          className={`form-control py-2 ${
                            error[idx]?.nationality ? "is-invalid" : ""
                          }`}
                        />
                        {error[idx]?.nationality && (
                          <div className="invalid-feedback d-block">
                            {error[idx].nationality}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Add Passenger Button */}
            <button
              type="button"
              disabled={passengerDetails.length >= adults}
              className="btn btn-outline-primary w-100 d-flex align-items-center justify-content-center gap-2 py-2 fw-semibold"
              onClick={() => {
                setPassengerDetails([
                  ...passengerDetails,
                  {
                    firstName: "",
                    lastName: "",
                    dateOfBirth: "",
                    gender: "",
                    passportNumber: "",
                    passportExpiryDate: "",
                    nationality: "",
                  },
                ]);
              }}
            >
              <span className="fs-5">+</span>
              <span>Add Passenger</span>
            </button>

            {/* Contact Information */}
            <div className="card border-0 rounded-4 shadow-sm">
              <div className="card-body p-3 p-sm-4">
                <h2 className="h5 fw-bold text-body mb-1">
                  Contact Information
                </h2>

                <p className="mb-4 small text-body-secondary">
                  Booking confirmation and flight updates will be sent here.
                </p>

                <div className="row g-3">
                  <div className="col-12 col-sm-6">
                    <label className="form-label small fw-medium text-body">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={contactDetails.email}
                      onChange={(e) => {
                        setContactDetails({
                          ...contactDetails,
                          email: e.target.value,
                        });
                      }}
                      placeholder="example@gmail.com"
                      className={`form-control py-2 ${
                        error?.email ? "is-invalid" : ""
                      }`}
                    />
                    {error?.email && (
                      <div className="invalid-feedback d-block">
                        {error.email}
                      </div>
                    )}
                  </div>

                  <div className="col-12 col-sm-6">
                    <label className="form-label small fw-medium text-body">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={contactDetails.phoneNumber}
                      onChange={(e) => {
                        setContactDetails({
                          ...contactDetails,
                          phoneNumber: e.target.value,
                        });
                      }}
                      placeholder="+91 00000 00000"
                      className={`form-control py-2 ${
                        error?.phoneNumber ? "is-invalid" : ""
                      }`}
                    />
                    {error?.phoneNumber && (
                      <div className="invalid-feedback d-block">
                        {error.phoneNumber}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Summary */}
          <div className="col-12 col-lg-4">
            <div
              className="card border-0 rounded-4 shadow-sm sticky-top"
              style={{ top: "1.5rem" }}
            >
              <div className="card-body p-3 p-sm-4">
                <h2 className="h5 fw-bold text-body mb-3">Booking Summary</h2>

                <div className="mb-4 rounded-3 bg-body-tertiary p-3">
                  <div className="d-flex align-items-center justify-content-between gap-2">
                    <div>
                      <div className="fs-4 fw-bold text-body">
                        {segment?.origin?.iata_city_code}
                      </div>
                      <div className="small text-body-secondary">
                        {segment?.origin?.city_name}
                      </div>
                    </div>

                    <div className="d-flex flex-column align-items-center flex-grow-1 px-2">
                      <span className="small text-secondary mb-1">3h 9m</span>
                      <div className="d-flex align-items-center w-100">
                        <div className="border-top flex-grow-1" />
                        <span className="px-2 text-primary">✈</span>
                        <div className="border-top flex-grow-1" />
                      </div>
                      <span className="small text-success mt-1">
                        {segment?.stops?.length === 0 ? "Non-Stop" : "Via"}
                      </span>
                    </div>

                    <div className="text-end">
                      <div className="fs-4 fw-bold text-body">
                        {segment?.destination?.iata_city_code}
                      </div>
                      <div className="small text-body-secondary">
                        {segment?.destination?.city_name}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="small d-flex flex-column gap-2">
                  <div className="d-flex justify-content-between">
                    <span className="text-body-secondary">Passengers</span>
                    <span className="fw-semibold text-body">
                      {adults} Adults
                    </span>
                  </div>

                  <div className="d-flex justify-content-between">
                    <span className="text-body-secondary">Base Fare</span>
                    <span className="fw-semibold text-body">
                      ₹ {rate?.baseAmount}
                    </span>
                  </div>

                  <div className="d-flex justify-content-between">
                    <span className="text-body-secondary">
                      Taxes &amp; Fees
                    </span>
                    <span className="fw-semibold text-body">
                      ₹ {rate?.taxAmount}
                    </span>
                  </div>
                </div>

                <hr className="my-3" />

                <div className="d-flex align-items-center justify-content-between">
                  <span className="fw-bold text-body">Total Fare</span>
                  <span className="fs-5 fw-bold text-primary">
                    ₹ {rate?.totalAmount}
                  </span>
                </div>

                <button
                  type="button"
                  className="btn btn-primary btn-lg mt-4 w-100 py-2 fw-semibold shadow-sm"
                  onClick={() => {
                    createBooking({
                      flightId: flightData?.id,
                      passenger: passengerDetails,
                      email: contactDetails.email,
                      phoneNumber: contactDetails.phoneNumber,
                    });
                  }}
                >
                  Continue to Review →
                </button>

                <p className="mt-3 mb-0 text-center small text-secondary">
                  Your information is kept secure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassengerDetails;

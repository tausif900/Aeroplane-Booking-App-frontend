import React from "react";
import { useLocation, useParams } from "react-router-dom";

const BookingReview = () => {
  const { bookingId } = useParams();
  console.log(bookingId);

  const location = useLocation();
  console.log(location?.state);
  const flightData = location?.state?.flightData;
  const passengerDetails = location?.state?.passengerDetails;
  const contactDetails = location?.state?.contactDetails;
  const rate = location?.state?.rate;

  return (
    <div className="min-vh-100 d-flex flex-column bg-body-tertiary text-body">
      {/* Top Navigation */}
      <nav className="navbar bg-body border-bottom py-3">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4 text-primary" href="#">
            <span className="me-2">✈</span> SKYWAY
          </a>

          <div className="d-flex align-items-center gap-2 text-body-secondary small">
            <span className="text-success">●</span>
            <span>Secure checkout</span>
            <span className="ms-1">🔒</span>
          </div>
        </div>
      </nav>

      <main className="container flex-grow-1 py-4 py-md-5">
        {/* Page Heading */}
        <div className="row align-items-center gy-3 mb-4">
          <div className="col-12 col-md">
            <div className="text-primary fw-semibold small mb-1">
              YOUR JOURNEY
            </div>
            <h1 className="fw-bold display-6 mb-1">Review your trip</h1>
            <p className="text-body-secondary mb-0">
              Almost there! Check your details before proceeding to payment.
            </p>
          </div>

          <div className="col-12 col-md-auto">
            <span className="badge rounded-pill bg-success-subtle text-success px-3 py-2">
              ✓ Flight selected
            </span>
          </div>
        </div>

        <div className="row g-4 align-items-start">
          {/* Main Content */}
          <div className="col-12 col-lg-8">
            {/* Flight Card */}
            <section className="card border-0 shadow-sm rounded-4 mb-4 overflow-hidden">
              <div className="card-body p-3 p-sm-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    <div className="text-body-secondary small mb-1">
                      FLIGHT ITINERARY
                    </div>
                    <h2 className="h5 fw-bold mb-0">Your flight details</h2>
                  </div>

                  <span className="badge bg-primary-subtle text-primary rounded-pill px-3 py-2">
                    Economy
                  </span>
                </div>

                <div className="row g-3 align-items-center">
                  {/* Departure */}
                  <div className="col-12 col-sm-5">
                    <div className="text-body-secondary small mb-1">
                      DEPARTURE
                    </div>
                    <div className="display-6 fw-bold mb-0">
                      {
                        flightData?.slices?.[0]?.segments?.[0]?.origin
                          ?.iata_city_code
                      }
                    </div>
                    <div className="fw-semibold">
                      {" "}
                      {
                        flightData?.slices?.[0]?.segments?.[0]?.origin
                          ?.city_name
                      }
                    </div>
                    <div className="text-body-secondary small mt-2">
                      {
                        flightData?.slices?.[0]?.segments?.[0]?.departing_at.split(
                          "T",
                        )[0]
                      }
                    </div>
                    <div className="h5 fw-bold mt-1 mb-0">
                      {" "}
                      {
                        flightData?.slices?.[0]?.segments?.[0]?.departing_at.split(
                          "T",
                        )[1]
                      }
                    </div>
                    <div className="small text-body-secondary">
                      {flightData?.slices?.[0]?.segments?.[0]?.origin?.name}
                    </div>
                  </div>

                  {/* Flight Timeline */}
                  <div className="col-12 col-sm-2 text-center">
                    <div className="small text-body-secondary mb-1">3h 09m</div>
                    <div className="d-flex align-items-center">
                      <div className="border-top flex-grow-1" />
                      <span className="text-primary fs-4 mx-2">✈</span>
                      <div className="border-top flex-grow-1" />
                    </div>
                    <div className="small text-success fw-semibold mt-1">
                      {flightData?.slices?.[0]?.segments?.[0]?.stops.length ===
                      0
                        ? "Non-Stop"
                        : "Via"}
                    </div>
                  </div>

                  {/* Arrival */}
                  <div className="col-12 col-sm-5 text-start text-sm-end">
                    <div className="text-body-secondary small mb-1">
                      ARRIVAL
                    </div>
                    <div className="display-6 fw-bold mb-0">
                      {" "}
                      {
                        flightData?.slices?.[0]?.segments?.[0]?.destination
                          ?.iata_city_code
                      }
                    </div>
                    <div className="fw-semibold">
                      {" "}
                      {
                        flightData?.slices?.[0]?.segments?.[0]?.destination
                          ?.city_name
                      }
                    </div>
                    <div className="text-body-secondary small mt-2">
                      {
                        flightData?.slices?.[0]?.segments?.[0]?.arriving_at.split(
                          "T",
                        )[0]
                      }
                    </div>
                    <div className="h5 fw-bold mt-1 mb-0">
                      {" "}
                      {
                        flightData?.slices?.[0]?.segments?.[0]?.arriving_at.split(
                          "T",
                        )[1]
                      }
                    </div>
                    <div className="small text-body-secondary">
                      {
                        flightData?.slices?.[0]?.segments?.[0]?.destination
                          ?.name
                      }
                    </div>
                  </div>
                </div>

                <hr className="my-3" />

                <div className="row g-3">
                  <div className="col-6 col-md-4">
                    <div className="text-body-secondary small">Airline</div>
                    <div className="fw-semibold mt-1">Airline Name</div>
                  </div>
                  <div className="col-6 col-md-4">
                    <div className="text-body-secondary small">Flight type</div>
                    <div className="fw-semibold mt-1">International</div>
                  </div>
                  <div className="col-12 col-md-4">
                    <div className="text-body-secondary small">Cabin class</div>
                    <div className="fw-semibold mt-1">Economy</div>
                  </div>
                </div>
              </div>

              <div className="bg-primary-subtle px-3 px-sm-4 py-3 d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-1">
                <span className="small text-primary fw-semibold">
                  ✦ Direct flight · No layovers
                </span>
                <span className="small text-primary">Flight information</span>
              </div>
            </section>

            {/* Passenger Details */}
            <section className="card border-0 shadow-sm rounded-4 mb-4">
              <div className="card-body p-3 p-sm-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    <div className="text-body-secondary small mb-1">
                      TRAVELLERS
                    </div>
                    <h2 className="h5 fw-bold mb-0">Passenger information</h2>
                  </div>
                  <span className="badge bg-body-tertiary text-body rounded-pill px-3 py-2">
                    2 Adults
                  </span>
                </div>

                {/* Passenger 1 */}
                <div className="border rounded-4 p-3 mb-3">
                  <div className="d-flex align-items-center gap-3 mb-3 flex-wrap">
                    <div
                      className="rounded-circle bg-primary-subtle text-primary d-flex align-items-center justify-content-center fw-bold flex-shrink-0"
                      style={{ width: "42px", height: "42px" }}
                    >
                      01
                    </div>
                    <div>
                      <h3 className="h6 fw-bold mb-0">John Doe</h3>
                      <small className="text-body-secondary">
                        Adult passenger
                      </small>
                    </div>
                    <span className="badge bg-success-subtle text-success ms-auto">
                      ✓ Details added
                    </span>
                  </div>

                  <div className="row g-3">
                    <div className="col-6 col-md-3">
                      <small className="text-body-secondary d-block">
                        Gender
                      </small>
                      <span className="fw-semibold">Male</span>
                    </div>
                    <div className="col-6 col-md-3">
                      <small className="text-body-secondary d-block">
                        Date of birth
                      </small>
                      <span className="fw-semibold">15 Jan 1998</span>
                    </div>
                    <div className="col-6 col-md-3">
                      <small className="text-body-secondary d-block">
                        Nationality
                      </small>
                      <span className="fw-semibold">Indian</span>
                    </div>
                    <div className="col-6 col-md-3">
                      <small className="text-body-secondary d-block">
                        Passport
                      </small>
                      <span className="fw-semibold">XXXXXXXX</span>
                    </div>
                  </div>
                </div>

                {/* Passenger 2 */}
                <div className="border rounded-4 p-3">
                  <div className="d-flex align-items-center gap-3 mb-3 flex-wrap">
                    <div
                      className="rounded-circle bg-primary-subtle text-primary d-flex align-items-center justify-content-center fw-bold flex-shrink-0"
                      style={{ width: "42px", height: "42px" }}
                    >
                      02
                    </div>
                    <div>
                      <h3 className="h6 fw-bold mb-0">Jane Doe</h3>
                      <small className="text-body-secondary">
                        Adult passenger
                      </small>
                    </div>
                    <span className="badge bg-success-subtle text-success ms-auto">
                      ✓ Details added
                    </span>
                  </div>

                  <div className="row g-3">
                    <div className="col-6 col-md-3">
                      <small className="text-body-secondary d-block">
                        Gender
                      </small>
                      <span className="fw-semibold">Female</span>
                    </div>
                    <div className="col-6 col-md-3">
                      <small className="text-body-secondary d-block">
                        Date of birth
                      </small>
                      <span className="fw-semibold">20 Mar 1997</span>
                    </div>
                    <div className="col-6 col-md-3">
                      <small className="text-body-secondary d-block">
                        Nationality
                      </small>
                      <span className="fw-semibold">Indian</span>
                    </div>
                    <div className="col-6 col-md-3">
                      <small className="text-body-secondary d-block">
                        Passport
                      </small>
                      <span className="fw-semibold">XXXXXXXX</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="card border-0 shadow-sm rounded-4 mb-4">
              <div className="card-body p-3 p-sm-4">
                <div className="mb-3">
                  <div className="text-body-secondary small mb-1">CONTACT</div>
                  <h2 className="h5 fw-bold mb-0">Contact information</h2>
                </div>

                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <div className="bg-body-tertiary rounded-3 p-3">
                      <small className="text-body-secondary d-block">
                        Email address
                      </small>
                      <span className="fw-semibold">johndoe@gmail.com</span>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="bg-body-tertiary rounded-3 p-3">
                      <small className="text-body-secondary d-block">
                        Phone number
                      </small>
                      <span className="fw-semibold">+91 9876543210</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Important Note */}
            <div className="alert bg-warning-subtle border-0 rounded-4 p-3 p-sm-4 mb-0">
              <div className="d-flex gap-3">
                <span className="fs-4 flex-shrink-0">ⓘ</span>
                <div>
                  <h2 className="h6 fw-bold mb-1">Before you continue</h2>
                  <p className="small mb-0">
                    Please make sure that passenger names and passport
                    information exactly match your travel documents. Incorrect
                    details may cause issues during check-in.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Fare Summary */}
          <div className="col-12 col-lg-4">
            <aside className="card border-0 shadow-sm rounded-4 overflow-hidden">
              <div className="card-body p-3 p-sm-4">
                <div className="text-body-secondary small mb-1">
                  PAYMENT OVERVIEW
                </div>
                <h2 className="h5 fw-bold mb-3">Fare summary</h2>

                <div className="d-flex justify-content-between mb-2">
                  <span className="text-body-secondary">Passengers</span>
                  <span className="fw-semibold">2 Adults</span>
                </div>

                <div className="d-flex justify-content-between mb-2">
                  <span className="text-body-secondary">Base fare</span>
                  <span className="fw-semibold">₹25,000</span>
                </div>

                <div className="d-flex justify-content-between mb-2">
                  <span className="text-body-secondary">Taxes &amp; fees</span>
                  <span className="fw-semibold">₹5,000</span>
                </div>

                <div className="d-flex justify-content-between mb-3">
                  <span className="text-body-secondary">Convenience fee</span>
                  <span className="fw-semibold">Included</span>
                </div>

                <hr className="my-3" />

                <div className="d-flex justify-content-between align-items-center mb-1">
                  <span className="fw-bold">Total amount</span>
                  <span className="text-primary fw-bold fs-3">₹30,000</span>
                </div>

                <div className="text-body-secondary small mb-3">
                  Final payable amount in INR
                </div>

                <div className="bg-success-subtle rounded-3 p-3 mb-3">
                  <div className="d-flex gap-2 align-items-center text-success fw-semibold small">
                    <span>✓</span>
                    <span>Price details displayed</span>
                  </div>
                  <div className="small text-body-secondary mt-1">
                    Final fare will be verified before booking.
                  </div>
                </div>

                <button
                  type="button"
                  className="btn btn-primary btn-lg w-100 rounded-3 fw-semibold py-3"
                >
                  Continue to Payment <span className="ms-2">→</span>
                </button>

                <div className="d-flex justify-content-center gap-2 align-items-center text-body-secondary small mt-3 text-center">
                  🔒 Secure and encrypted checkout
                </div>
              </div>

              <div className="bg-body-tertiary border-top p-3 text-center">
                <small className="text-body-secondary">
                  Need help? Contact our support team
                </small>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-top bg-body py-3 mt-auto">
        <div className="container d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2 text-center text-sm-start">
          <span className="fw-bold text-primary">✈ SKYWAY</span>
          <small className="text-body-secondary">
            © 2026 Skyway Airlines. All rights reserved.
          </small>
        </div>
      </footer>
    </div>
  );
};

export default BookingReview;

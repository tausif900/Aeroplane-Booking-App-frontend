import React from "react";
import { Link } from "react-router-dom";
import {
  Plane,
  Search,
  Users,
  ArrowRight,
  ShieldCheck,
  Headphones,
  Ticket,
  Globe2,
  Star,
  ChevronRight,
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
    <div className="min-vh-100 bg-body-tertiary text-body">
      {/* NAVBAR */}
      <header className="sticky-top border-bottom bg-white shadow-sm">
        <div className="container d-flex align-items-center justify-content-between py-3">
          <Link
            to="/"
            className="d-flex align-items-center gap-2 text-decoration-none text-dark"
          >
            <div className="rounded-3 bg-primary p-2 text-white shadow-sm d-flex align-items-center justify-content-center">
              <Plane size={22} />
            </div>
            <span className="fs-4 fw-bold">
              Sky<span className="text-primary">Book</span>
            </span>
          </Link>

          <nav className="d-none d-lg-flex align-items-center gap-4 fw-semibold">
            <a href="#home" className="text-decoration-none text-primary">
              Home
            </a>
            <a
              href="#destinations"
              className="text-decoration-none text-secondary"
            >
              Destinations
            </a>
            <a href="#why-us" className="text-decoration-none text-secondary">
              Why SkyBook
            </a>
            <a
              href="#how-it-works"
              className="text-decoration-none text-secondary"
            >
              How It Works
            </a>
          </nav>

          <div className="d-flex align-items-center gap-2 gap-sm-3">
            <Link
              to="/login"
              className="btn btn-link text-decoration-none fw-semibold text-dark px-2 px-sm-3"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="btn btn-primary fw-semibold px-3 px-sm-4 shadow-sm"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="hero-section position-relative overflow-hidden bg-dark text-white py-5"
      >
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2000&q=90"
          alt="Airplane wing above the clouds"
          className="hero-media position-absolute top-0 start-0 w-100 h-100 object-fit-cover opacity-50"
        />

        <div className="hero-shade position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50" />

        <div className="hero-copy container position-relative py-5">
          <div className="col-12 col-lg-8 py-3 py-md-5">
            <div className="mb-4 d-inline-flex align-items-center gap-2 rounded-pill border border-light border-opacity-50 bg-dark bg-opacity-50 px-3 py-2 small fw-semibold text-white">
              <Sparkles size={16} className="text-warning" />
              Your journey begins with SkyBook
            </div>

            <h1 className="display-4 display-md-3 fw-bold lh-sm text-white">
              Explore the World.
              <br />
              <span className="text-info">Fly Beyond Limits.</span>
            </h1>

            <p className="mt-4 fs-6 fs-md-5 lh-lg text-light">
              Discover incredible destinations, explore flight options, and plan
              unforgettable journeys — all in one place.
            </p>

            <div className="mt-4 d-flex flex-column flex-sm-row gap-3">
              <Link
                to="/registration"
                className="btn btn-primary btn-lg d-inline-flex align-items-center justify-content-center gap-2 fw-semibold px-4"
              >
                Start Your Journey <ArrowRight size={18} />
              </Link>

              <a
                href="#destinations"
                className="btn btn-outline-light btn-lg d-inline-flex align-items-center justify-content-center gap-2 fw-semibold px-4"
              >
                Explore Destinations <Globe2 size={18} />
              </a>
            </div>

            <div className="mt-5 d-flex flex-wrap gap-4 gap-sm-5 small fw-medium text-light">
              <span className="d-inline-flex align-items-center gap-2">
                <ShieldCheck size={18} className="text-info" />
                Secure Platform
              </span>
              <span className="d-inline-flex align-items-center gap-2">
                <Ticket size={18} className="text-info" />
                Easy Booking
              </span>
              <span className="d-inline-flex align-items-center gap-2">
                <Headphones size={18} className="text-info" />
                Travel Support
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR DESTINATIONS */}
      <section id="destinations" className="container py-5 my-md-3">
        <div className="mb-4 d-flex flex-column flex-md-row align-items-md-end justify-content-between gap-3">
          <div>
            <div className="mb-2 d-inline-flex align-items-center gap-2 small fw-bold text-uppercase text-primary">
              <Globe2 size={17} />
              Explore the world
            </div>
            <h2 className="display-6 fw-bold mb-1">Dream destinations await</h2>
            <p className="text-body-secondary mb-0">
              Discover stunning cities and start planning your next adventure.
            </p>
          </div>

          <Link
            to="/registration"
            className="d-inline-flex align-items-center gap-1 fw-semibold text-decoration-none text-primary"
          >
            Start exploring <ChevronRight size={18} />
          </Link>
        </div>

        <div className="row g-4">
          {destinations.map((destination) => (
            <div key={destination.city} className="col-12 col-sm-6 col-lg-4">
              <div className="destination-card card border-0 rounded-4 overflow-hidden shadow-sm h-100 position-relative bg-dark text-white">
                <img
                  src={destination.image}
                  alt={destination.city}
                  className="card-img w-100 h-100 object-fit-cover"
                  style={{ minHeight: "320px" }}
                />
                <div className="card-img-overlay d-flex flex-column justify-content-end p-4 bg-dark bg-opacity-25">
                  <p className="small fw-medium text-light mb-1">
                    {destination.country}
                  </p>
                  <div className="d-flex align-items-end justify-content-between">
                    <h3 className="h2 fw-bold mb-0">{destination.city}</h3>
                    <Link
                      to="/login"
                      aria-label={`Login to explore flights to ${destination.city}`}
                      className="btn btn-light rounded-circle p-3 d-inline-flex align-items-center justify-content-center text-dark shadow-sm"
                    >
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why-us" className="bg-white py-5 border-top border-bottom">
        <div className="container py-md-3">
          <div
            className="mx-auto mb-5 text-center"
            style={{ maxWidth: "680px" }}
          >
            <span className="small fw-bold text-uppercase text-primary">
              Why choose SkyBook?
            </span>
            <h2 className="display-6 fw-bold mt-2">
              Travel planning made simple
            </h2>
            <p className="mt-3 text-body-secondary lh-lg">
              A simple and convenient way to explore flights, manage bookings,
              and prepare for your next journey.
            </p>
          </div>

          <div className="row g-4">
            {[
              {
                icon: Search,
                title: "Easy Flight Search",
                description:
                  "Explore available flight options and find journeys that match your travel plans.",
                color: "bg-primary-subtle text-primary",
              },
              {
                icon: ShieldCheck,
                title: "Secure Experience",
                description:
                  "Manage your account and bookings through a secure travel platform.",
                color: "bg-success-subtle text-success",
              },
              {
                icon: Ticket,
                title: "Manage Your Bookings",
                description:
                  "Keep your travel details, booking information, and tickets organized.",
                color: "bg-info-subtle text-info",
              },
            ].map((feature) => {
              const Icon = feature.icon;

              return (
                <div key={feature.title} className="col-12 col-md-4">
                  <div className="card h-100 rounded-4 border bg-body-tertiary p-4 shadow-sm">
                    <div
                      className={`mb-4 rounded-3 d-inline-flex align-items-center justify-content-center ${feature.color}`}
                      style={{ width: "56px", height: "56px" }}
                    >
                      <Icon size={26} />
                    </div>
                    <h3 className="h4 fw-bold">{feature.title}</h3>
                    <p className="mt-2 mb-0 text-body-secondary lh-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="container py-5 my-md-3">
        <div className="mb-5 text-center">
          <span className="small fw-bold text-uppercase text-primary">
            Simple steps
          </span>
          <h2 className="display-6 fw-bold mt-2">
            Your journey in three steps
          </h2>
        </div>

        <div className="row g-4 g-lg-5">
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
              <div key={step.number} className="col-12 col-md-4 text-center">
                <div
                  className="mx-auto mb-3 rounded-4 bg-primary-subtle text-primary d-flex align-items-center justify-content-center"
                  style={{ width: "72px", height: "72px" }}
                >
                  <Icon size={32} />
                </div>
                <span className="small fw-bold text-primary d-block">
                  STEP {step.number}
                </span>
                <h3 className="h4 fw-bold mt-2">{step.title}</h3>
                <p
                  className="mx-auto mt-2 mb-0 text-body-secondary lh-lg"
                  style={{ maxWidth: "340px" }}
                >
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container pb-5">
        <div className="position-relative overflow-hidden rounded-4 bg-primary p-4 p-sm-5 text-white shadow">
          <Plane
            size={240}
            strokeWidth={0.75}
            className="position-absolute bottom-0 end-0 text-white opacity-25 pe-none"
            style={{ transform: "translate(15%, 20%)" }}
          />

          <div className="position-relative z-1 col-12 col-lg-8">
            <div className="mb-3 d-inline-flex align-items-center gap-2 rounded-pill bg-white text-primary px-3 py-2 small fw-semibold">
              <Star size={15} className="text-warning" />
              Start your adventure
            </div>

            <h2 className="display-6 fw-bold lh-sm text-white">
              Ready to take off?
            </h2>

            <p className="mt-3 fs-6 text-white text-opacity-75 lh-lg">
              Join SkyBook today and start exploring the world, one destination
              at a time.
            </p>

            <div className="mt-4 d-flex flex-column flex-sm-row gap-3">
              <Link
                to="/registration"
                className="btn btn-light btn-lg d-inline-flex align-items-center justify-content-center gap-2 fw-semibold text-primary px-4"
              >
                Create Free Account <ArrowRight size={18} />
              </Link>
              <Link
                to="/login"
                className="btn btn-outline-light btn-lg d-inline-flex align-items-center justify-content-center fw-semibold px-4"
              >
                Already a member? Login
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-dark text-secondary">
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="d-flex align-items-center gap-2 text-white">
                <div className="rounded-3 bg-primary p-2 d-flex align-items-center justify-content-center">
                  <Plane size={20} />
                </div>
                <span className="fs-4 fw-bold">
                  Sky<span className="text-info">Book</span>
                </span>
              </div>
              <p className="mt-3 small lh-lg text-secondary mb-0">
                Explore destinations, discover flights, and plan your next
                journey with SkyBook.
              </p>
            </div>

            <div className="col-6 col-sm-3 col-lg-2">
              <h4 className="h6 mb-3 fw-bold text-white">Quick Links</h4>
              <div className="d-flex flex-column gap-2 small">
                <a href="#home" className="text-decoration-none text-secondary">
                  Home
                </a>
                <a
                  href="#destinations"
                  className="text-decoration-none text-secondary"
                >
                  Destinations
                </a>
                <a
                  href="#why-us"
                  className="text-decoration-none text-secondary"
                >
                  Why SkyBook
                </a>
                <a
                  href="#how-it-works"
                  className="text-decoration-none text-secondary"
                >
                  How It Works
                </a>
              </div>
            </div>

            <div className="col-6 col-sm-3 col-lg-3">
              <h4 className="h6 mb-3 fw-bold text-white">Your Account</h4>
              <div className="d-flex flex-column gap-2 small">
                <Link
                  to="/login"
                  className="text-decoration-none text-secondary"
                >
                  Login
                </Link>
                <Link
                  to="/registration"
                  className="text-decoration-none text-secondary"
                >
                  Create Account
                </Link>
                <Link
                  to="/login"
                  className="text-decoration-none text-secondary"
                >
                  My Bookings
                </Link>
                <Link
                  to="/login"
                  className="text-decoration-none text-secondary"
                >
                  Search Flights
                </Link>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <h4 className="h6 mb-3 fw-bold text-white">Stay Connected</h4>
              <div className="d-flex flex-column gap-2 small">
                <p className="d-flex align-items-center gap-2 mb-0 text-secondary">
                  <Mail size={16} className="text-info flex-shrink-0" />
                  <span>Contact information coming soon</span>
                </p>
                <p className="d-flex align-items-center gap-2 mb-0 text-secondary">
                  <Headphones size={16} className="text-info flex-shrink-0" />
                  <span>Travel assistance</span>
                </p>
                <p className="d-flex align-items-center gap-2 mb-0 text-secondary">
                  <Globe2 size={16} className="text-info flex-shrink-0" />
                  <span>Explore worldwide</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-top border-secondary border-opacity-25">
          <div className="container d-flex flex-column flex-sm-row align-items-center justify-content-between gap-2 py-3 text-center small text-secondary">
            <p className="mb-0">© 2026 SkyBook. All rights reserved.</p>
            <p className="mb-0">Made for travelers, built for journeys.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

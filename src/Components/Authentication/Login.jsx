import {
  ArrowLeft,
  ArrowRight,
  LockKeyhole,
  Mail,
  Plane,
  Ticket,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: { email: "", password: "", remember: false },
    mode: "onTouched",
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(
        "http://localhost:8080/auth/user-login",
        data,
        { withCredentials: true },
      );
      console.log(response.data);
      toast.success("Login is done successfully!!!");
      if (response.data.role == "ROLE_User") {
        navigate("/user-dashboard");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <main className="min-vh-100 bg-body-tertiary text-body d-flex flex-column">
      <header className="border-bottom bg-white shadow-sm">
        <nav
          aria-label="Main navigation"
          className="container d-flex align-items-center justify-content-between py-3"
        >
          <Link
            to="/"
            className="d-flex align-items-center gap-2 text-decoration-none text-dark"
          >
            <div className="rounded-3 bg-primary p-2 text-white d-flex align-items-center justify-content-center shadow-sm">
              <Plane aria-hidden="true" size={20} />
            </div>
            <span className="fs-4 fw-bold">
              Sky<span className="text-primary">Book</span>
            </span>
          </Link>

          <Link
            to="/"
            className="d-flex align-items-center gap-2 small fw-semibold text-decoration-none text-secondary"
          >
            <ArrowLeft aria-hidden="true" size={16} /> Back to home
          </Link>
        </nav>
      </header>

      <div className="container my-auto py-4 py-md-5">
        <div className="row g-4 g-lg-5 align-items-center">
          {/* Left Feature Panel (Desktop+) */}
          <section
            aria-label="Travel with SkyBook"
            className="col-lg-6 d-none d-lg-block"
          >
            <div className="auth-visual position-relative overflow-hidden rounded-4 bg-primary p-5 text-white shadow h-100 d-flex flex-column justify-content-between">
              <span className="position-relative z-1 d-inline-flex align-items-center gap-2 small fw-semibold text-uppercase text-white text-opacity-75">
                <Plane aria-hidden="true" size={18} /> Your next chapter awaits
              </span>

              <div className="position-relative z-1 my-5">
                <div
                  className="mb-4 rounded-4 border border-white border-opacity-25 bg-white text-primary d-inline-flex align-items-center justify-content-center shadow-sm"
                  style={{ width: "68px", height: "68px" }}
                >
                  <Plane aria-hidden="true" size={32} />
                </div>

                <h2 className="display-5 fw-bold lh-sm text-white">
                  Great journeys
                  <br />
                  start here.
                </h2>

                <p className="mt-3 fs-6 lh-lg text-white text-opacity-75 mb-0">
                  A familiar destination or somewhere entirely new. Your next
                  adventure is just a flight away.
                </p>
              </div>

              <div className="position-relative z-1 d-flex align-items-center gap-3 border-top border-white border-opacity-25 pt-4">
                <Ticket
                  aria-hidden="true"
                  size={24}
                  className="flex-shrink-0 text-white"
                />
                <div>
                  <p className="small fw-semibold mb-0 text-white">
                    All your travel, in one place
                  </p>
                  <p className="small mb-0 text-white text-opacity-75">
                    Discover flights. Plan ahead. Go explore.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Right Login Form */}
          <section className="col-12 col-lg-6">
            <div
              className="mx-auto bg-white border rounded-4 p-4 p-sm-5 shadow-sm"
              style={{ maxWidth: "480px" }}
            >
              <span className="small fw-bold text-uppercase text-primary">
                Welcome to SkyBook
              </span>
              <h1 className="h2 fw-bold mt-2 mb-1">Welcome back</h1>
              <p className="small text-body-secondary mb-4">
                Log in to your account and pick up where you left off.
              </p>

              <form
                aria-label="Login"
                noValidate
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="mb-3">
                  <label
                    htmlFor="login-email"
                    className="form-label small fw-semibold"
                  >
                    Email address
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-light text-secondary">
                      <Mail aria-hidden="true" size={18} />
                    </span>
                    <input
                      id="login-email"
                      {...register("email", {
                        setValueAs: (value) => value.trim(),
                        required: "Enter your email address.",
                        maxLength: {
                          value: 254,
                          message: "Email must be 254 characters or fewer.",
                        },
                        validate: (value) =>
                          (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                            value,
                          ) &&
                            !value.split("@")[0].endsWith(".")) ||
                          "Enter a valid email address.",
                      })}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={
                        errors.email ? "login-email-error" : undefined
                      }
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      className={`form-control py-2 ${
                        errors.email ? "is-invalid" : ""
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <div
                      id="login-email-error"
                      role="alert"
                      className="invalid-feedback d-block"
                    >
                      {errors.email.message}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="login-password"
                    className="form-label small fw-semibold"
                  >
                    Password
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-light text-secondary">
                      <LockKeyhole aria-hidden="true" size={18} />
                    </span>
                    <input
                      id="login-password"
                      {...register("password", {
                        required: "Enter your password.",
                        validate: (value) =>
                          value.trim().length > 0 ||
                          "Password cannot contain only whitespace.",
                      })}
                      aria-invalid={Boolean(errors.password)}
                      aria-describedby={
                        errors.password ? "login-password-error" : undefined
                      }
                      type="password"
                      autoComplete="current-password"
                      placeholder="Enter your password"
                      className={`form-control py-2 ${
                        errors.password ? "is-invalid" : ""
                      }`}
                    />
                  </div>
                  {errors.password && (
                    <div
                      id="login-password-error"
                      role="alert"
                      className="invalid-feedback d-block"
                    >
                      {errors.password.message}
                    </div>
                  )}
                </div>

                <div className="form-check mb-4">
                  <input
                    id="login-remember"
                    type="checkbox"
                    {...register("remember")}
                    className="form-check-input"
                  />
                  <label
                    htmlFor="login-remember"
                    className="form-check-label small text-secondary"
                  >
                    Remember me
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2 py-2 fw-semibold shadow-sm"
                >
                  {isSubmitting ? "Logging in..." : "Log in"}
                  <ArrowRight aria-hidden="true" size={18} />
                </button>
              </form>

              <p className="mt-4 border-top pt-3 text-center small text-body-secondary mb-0">
                New to SkyBook?{" "}
                <Link
                  to="/registration"
                  className="fw-semibold text-decoration-none text-primary"
                >
                  Create an account
                </Link>
              </p>
            </div>

            <p className="mt-4 text-center small text-secondary mb-0">
              A world of possibilities, one account away.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Login;

import {
  ArrowLeft,
  ArrowRight,
  Check,
  LockKeyhole,
  Mail,
  Plane,
  UserRound,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";

const Registration = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onTouched",
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(
        "http://localhost:8080/auth/user-registration",
        data,
        { withCredentials: true },
      );
      console.log(response.data);
      toast.success("Registration is done successfully!!!");
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
            aria-label="Join SkyBook"
            className="col-lg-6 d-none d-lg-block"
          >
            <div className="auth-visual position-relative overflow-hidden rounded-4 bg-primary p-5 text-white shadow h-100 d-flex flex-column justify-content-between">
              <span className="position-relative z-1 d-inline-flex align-items-center gap-2 small fw-semibold text-uppercase text-white text-opacity-75">
                <Plane aria-hidden="true" size={18} /> A world of possibilities
              </span>

              <div className="position-relative z-1 my-4">
                <div
                  className="mb-4 rounded-4 border border-white border-opacity-25 bg-white text-primary d-inline-flex align-items-center justify-content-center shadow-sm"
                  style={{ width: "68px", height: "68px" }}
                >
                  <Plane aria-hidden="true" size={32} />
                </div>

                <h2 className="display-5 fw-bold lh-sm text-white">
                  Your adventure.
                  <br />
                  Your account.
                </h2>

                <p className="mt-3 fs-6 lh-lg text-white text-opacity-75">
                  Make room for new experiences. Join SkyBook and start planning
                  your next escape.
                </p>

                <ul className="list-unstyled mt-4 d-flex flex-column gap-3 small text-white">
                  <li className="d-flex align-items-center gap-2">
                    <Check
                      aria-hidden="true"
                      size={18}
                      className="flex-shrink-0 text-info"
                    />
                    <span>Discover domestic and international flights</span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <Check
                      aria-hidden="true"
                      size={18}
                      className="flex-shrink-0 text-info"
                    />
                    <span>Keep your bookings in one place</span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <Check
                      aria-hidden="true"
                      size={18}
                      className="flex-shrink-0 text-info"
                    />
                    <span>Spend more time exploring</span>
                  </li>
                </ul>
              </div>

              <p className="position-relative z-1 border-top border-white border-opacity-25 pt-4 small text-white text-opacity-75 mb-0">
                From your first flight to your next favorite destination.
              </p>
            </div>
          </section>

          {/* Right Registration Form */}
          <section className="col-12 col-lg-6">
            <div
              className="mx-auto bg-white border rounded-4 p-4 p-sm-5 shadow-sm"
              style={{ maxWidth: "480px" }}
            >
              <span className="small fw-bold text-uppercase text-primary">
                Start your journey
              </span>
              <h1 className="h2 fw-bold mt-2 mb-1">Create an account</h1>
              <p className="small text-body-secondary mb-4">
                Join SkyBook and get ready for your next adventure.
              </p>

              <form
                aria-label="Registration"
                noValidate
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="mb-3">
                  <label
                    htmlFor="registration-name"
                    className="form-label small fw-semibold"
                  >
                    Full name
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-light text-secondary">
                      <UserRound aria-hidden="true" size={18} />
                    </span>
                    <input
                      id="registration-name"
                      {...register("userName", {
                        setValueAs: (value) => value.trim(),
                        required: "Enter your full name.",
                        minLength: {
                          value: 2,
                          message: "Name must be at least 2 characters.",
                        },
                        maxLength: {
                          value: 60,
                          message: "Name must be 60 characters or fewer.",
                        },
                        validate: (value) =>
                          /\p{L}/u.test(value) ||
                          "Name must contain at least one letter.",
                      })}
                      aria-invalid={Boolean(errors.userName)}
                      aria-describedby={
                        errors.userName ? "registration-name-error" : undefined
                      }
                      type="text"
                      autoComplete="name"
                      placeholder="Enter your full name"
                      className={`form-control py-2 ${
                        errors.userName ? "is-invalid" : ""
                      }`}
                    />
                  </div>
                  {errors.userName && (
                    <div
                      id="registration-name-error"
                      role="alert"
                      className="invalid-feedback d-block"
                    >
                      {errors.userName.message}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="registration-email"
                    className="form-label small fw-semibold"
                  >
                    Email address
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-light text-secondary">
                      <Mail aria-hidden="true" size={18} />
                    </span>
                    <input
                      id="registration-email"
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
                        errors.email ? "registration-email-error" : undefined
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
                      id="registration-email-error"
                      role="alert"
                      className="invalid-feedback d-block"
                    >
                      {errors.email.message}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="registration-password"
                    className="form-label small fw-semibold"
                  >
                    Password
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-light text-secondary">
                      <LockKeyhole aria-hidden="true" size={18} />
                    </span>
                    <input
                      id="registration-password"
                      {...register("password", {
                        required: "Create a password.",
                        minLength: {
                          value: 7,
                          message: "Password must be at least 7 characters.",
                        },
                        validate: {
                          noWhitespace: (value) =>
                            !/\s/u.test(value) ||
                            "Password cannot contain whitespace.",
                          uppercase: (value) =>
                            /[A-Z]/.test(value) ||
                            "Include at least one uppercase letter.",
                          lowercase: (value) =>
                            /[a-z]/.test(value) ||
                            "Include at least one lowercase letter.",
                          number: (value) =>
                            /[0-9]/.test(value) ||
                            "Include at least one number.",
                        },
                        deps: ["confirmPassword"],
                      })}
                      aria-invalid={Boolean(errors.password)}
                      aria-describedby={
                        errors.password
                          ? "registration-password-hint registration-password-error"
                          : "registration-password-hint"
                      }
                      type="password"
                      autoComplete="new-password"
                      placeholder="Create a password"
                      className={`form-control py-2 ${
                        errors.password ? "is-invalid" : ""
                      }`}
                    />
                  </div>
                  <div
                    id="registration-password-hint"
                    className="form-text small"
                  >
                    Use at least 7 characters with uppercase, lowercase, and a
                    number. No whitespace.
                  </div>
                  {errors.password && (
                    <div
                      id="registration-password-error"
                      role="alert"
                      className="invalid-feedback d-block"
                    >
                      {errors.password.message}
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="registration-confirm-password"
                    className="form-label small fw-semibold"
                  >
                    Confirm password
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-light text-secondary">
                      <LockKeyhole aria-hidden="true" size={18} />
                    </span>
                    <input
                      id="registration-confirm-password"
                      {...register("confirmPassword", {
                        required: "Confirm your password.",
                        validate: (value) =>
                          value === getValues("password") ||
                          "Passwords do not match.",
                      })}
                      aria-invalid={Boolean(errors.confirmPassword)}
                      aria-describedby={
                        errors.confirmPassword
                          ? "registration-confirm-password-error"
                          : undefined
                      }
                      type="password"
                      autoComplete="new-password"
                      placeholder="Re-enter your password"
                      className={`form-control py-2 ${
                        errors.confirmPassword ? "is-invalid" : ""
                      }`}
                    />
                  </div>
                  {errors.confirmPassword && (
                    <div
                      id="registration-confirm-password-error"
                      role="alert"
                      className="invalid-feedback d-block"
                    >
                      {errors.confirmPassword.message}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2 py-2 fw-semibold shadow-sm"
                >
                  {isSubmitting ? "Creating account..." : "Create account"}
                  <ArrowRight aria-hidden="true" size={18} />
                </button>
              </form>

              <p className="mt-4 border-top pt-3 text-center small text-body-secondary mb-0">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="fw-semibold text-decoration-none text-primary"
                >
                  Log in
                </Link>
              </p>
            </div>

            <p className="mt-4 text-center small text-secondary mb-0">
              Your next adventure starts with a simple hello.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Registration;

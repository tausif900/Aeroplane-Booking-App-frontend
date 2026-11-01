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
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-100 bg-white">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8"
        >
          <Link
            to="/"
            className="flex items-center gap-2 rounded focus-visible:outline-blue-600"
          >
            <Plane
              aria-hidden="true"
              className="h-8 w-8 -rotate-45 text-blue-600"
            />
            <span className="text-2xl font-extrabold tracking-tight">
              Sky<span className="text-blue-600">Book</span>
            </span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600"
          >
            <ArrowLeft aria-hidden="true" size={16} /> Back to home
          </Link>
        </nav>
      </header>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-10 sm:px-8 sm:py-12 lg:grid-cols-2 lg:gap-20">
        <section
          aria-label="Join SkyBook"
          className="relative hidden min-h-170 flex-col justify-between overflow-hidden rounded-3xl bg-blue-950 p-10 text-white lg:flex"
        >
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-20 h-96 w-96 rounded-full border border-white/10"
          />
          <div
            aria-hidden="true"
            className="absolute -right-10 -top-6 h-68 w-68 rounded-full border border-white/10"
          />
          <span className="relative flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
            <Plane aria-hidden="true" size={18} /> A world of possibilities
          </span>
          <div className="relative py-12">
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
              <Plane
                aria-hidden="true"
                className="h-8 w-8 -rotate-45 text-blue-200"
              />
            </div>
            <h2 className="text-5xl font-bold leading-tight tracking-tight">
              Your adventure.
              <br />
              Your account.
            </h2>
            <p className="mt-5 max-w-sm leading-7 text-blue-100/80">
              Make room for new experiences. Join SkyBook and start planning
              your next escape.
            </p>
            <ul className="mt-8 space-y-4 text-sm text-blue-50">
              <li className="flex items-center gap-3">
                <Check
                  aria-hidden="true"
                  size={18}
                  className="shrink-0 text-blue-300"
                />{" "}
                Discover domestic and international flights
              </li>
              <li className="flex items-center gap-3">
                <Check
                  aria-hidden="true"
                  size={18}
                  className="shrink-0 text-blue-300"
                />{" "}
                Keep your bookings in one place
              </li>
              <li className="flex items-center gap-3">
                <Check
                  aria-hidden="true"
                  size={18}
                  className="shrink-0 text-blue-300"
                />{" "}
                Spend more time exploring
              </li>
            </ul>
          </div>
          <p className="relative border-t border-white/15 pt-6 text-sm text-blue-200/75">
            From your first flight to your next favorite destination.
          </p>
        </section>

        <section className="mx-auto w-full max-w-md">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
            Start your journey
          </span>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Create an account
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            Join SkyBook and get ready for your next adventure.
          </p>

          {/* Form start here */}

          <form
            aria-label="Registration"
            className="mt-7 space-y-4"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label
                htmlFor="registration-name"
                className="mb-2 block text-sm font-semibold"
              >
                Full name
              </label>
              <div className="relative">
                <UserRound
                  aria-hidden="true"
                  className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-slate-400"
                />
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
                  className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-12 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>
              {errors.userName && (
                <p
                  id="registration-name-error"
                  role="alert"
                  className="mt-2 text-sm text-red-600"
                >
                  {errors.userName.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="registration-email"
                className="mb-2 block text-sm font-semibold"
              >
                Email address
              </label>
              <div className="relative">
                <Mail
                  aria-hidden="true"
                  className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-slate-400"
                />
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
                  className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-12 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>
              {errors.email && (
                <p
                  id="registration-email-error"
                  role="alert"
                  className="mt-2 text-sm text-red-600"
                >
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="registration-password"
                className="mb-2 block text-sm font-semibold"
              >
                Password
              </label>
              <div className="relative">
                <LockKeyhole
                  aria-hidden="true"
                  className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-slate-400"
                />
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
                        /[0-9]/.test(value) || "Include at least one number.",
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
                  className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-12 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>
              <p
                id="registration-password-hint"
                className="mt-2 text-xs text-slate-500"
              >
                Use at least 7 characters with uppercase, lowercase, and a
                number. No whitespace.
              </p>
              {errors.password && (
                <p
                  id="registration-password-error"
                  role="alert"
                  className="mt-2 text-sm text-red-600"
                >
                  {errors.password.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="registration-confirm-password"
                className="mb-2 block text-sm font-semibold"
              >
                Confirm password
              </label>
              <div className="relative">
                <LockKeyhole
                  aria-hidden="true"
                  className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-slate-400"
                />
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
                  className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-12 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>
              {errors.confirmPassword && (
                <p
                  id="registration-confirm-password-error"
                  role="alert"
                  className="mt-2 text-sm text-red-600"
                >
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/15 transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
            >
              Create account <ArrowRight aria-hidden="true" size={18} />
            </button>
          </form>
          <p className="mt-7 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-blue-600 hover:text-blue-800"
            >
              Log in
            </Link>
          </p>
          <p className="mt-6 text-center text-xs text-slate-400">
            Your next adventure starts with a simple hello.
          </p>
        </section>
      </div>
    </main>
  );
};

export default Registration;

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

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-10 sm:px-8 sm:py-16 lg:grid-cols-2 lg:gap-20">
        <section
          aria-label="Travel with SkyBook"
          className="relative hidden min-h-150 flex-col justify-between overflow-hidden rounded-3xl bg-blue-950 p-10 text-white lg:flex"
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
            <Plane aria-hidden="true" size={18} /> Your next chapter awaits
          </span>
          <div className="relative py-16">
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
              <Plane
                aria-hidden="true"
                className="h-8 w-8 -rotate-45 text-blue-200"
              />
            </div>
            <h2 className="text-5xl font-bold leading-tight tracking-tight">
              Great journeys
              <br />
              start here.
            </h2>
            <p className="mt-5 max-w-sm leading-7 text-blue-100/80">
              A familiar destination or somewhere entirely new. Your next
              adventure is just a flight away.
            </p>
          </div>
          <div className="relative flex items-center gap-4 border-t border-white/15 pt-6">
            <Ticket
              aria-hidden="true"
              className="h-9 w-9 shrink-0 text-blue-300"
            />
            <div>
              <p className="text-sm font-semibold">
                All your travel, in one place
              </p>
              <p className="mt-1 text-sm text-blue-200/75">
                Discover flights. Plan ahead. Go explore.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-md">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
            Welcome to SkyBook
          </span>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Welcome back
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            Log in to your account and pick up where you left off.
          </p>

          {/* Form start here */}

          <form
            aria-label="Login"
            className="mt-8 space-y-5"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label
                htmlFor="login-email"
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
                  id="login-email-error"
                  role="alert"
                  className="mt-2 text-sm text-red-600"
                >
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="login-password"
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
                  className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-12 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>
              {errors.password && (
                <p
                  id="login-password-error"
                  role="alert"
                  className="mt-2 text-sm text-red-600"
                >
                  {errors.password.message}
                </p>
              )}
            </div>
            <label className="flex w-fit cursor-pointer items-center gap-2.5 text-sm text-slate-600">
              <input
                type="checkbox"
                {...register("remember")}
                className="h-4 w-4 accent-blue-600 focus-visible:outline-blue-600"
              />{" "}
              Remember me
            </label>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/15 transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
            >
              Log in <ArrowRight aria-hidden="true" size={18} />
            </button>
          </form>
          <p className="mt-8 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
            New to SkyBook?{" "}
            <Link
              to="/registration"
              className="font-semibold text-blue-600 hover:text-blue-800"
            >
              Create an account
            </Link>
          </p>
          <p className="mt-8 text-center text-xs text-slate-400">
            A world of possibilities, one account away.
          </p>
        </section>
      </div>
    </main>
  );
};

export default Login;

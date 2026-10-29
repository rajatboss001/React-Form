
import { useState } from "react";
import Swal from "sweetalert2";

const Homepage = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const [err, setErr] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErr(true);

    if (
      data.name.trim() !== "" &&
      data.email.trim() !== "" &&
      data.mobile.length === 10 &&
      data.password.trim() !== ""
    ) {
      setErr(false);

      Swal.fire({
        title: "Account Created!",
        text: `Welcome, ${data.name}!`,
        icon: "success",
        confirmButtonText: "Continue",
        confirmButtonColor: "#9333ea",
        width: 450,
        padding: "2em",
        color: "#716add",
        background: "#ffffff",
        backdrop: "rgba(0,0,123,0.4)",
      });

      setData({
        name: "",
        email: "",
        mobile: "",
        password: "",
      });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="mb-2 text-center text-3xl font-bold text-gray-900">
          Create Account
        </h1>

        <p className="mb-8 text-center text-gray-500">
          Fill in your details to get started.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Full Name
            </label>

            <input
              value={data.name}
              onChange={(e) =>
                setData({ ...data, name: e.target.value })
              }
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-purple-600"
            />

            {err && data.name.trim() === "" && (
              <p className="mt-1 text-sm text-red-500">
                Please enter your name
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Email Address
            </label>

            <input
              value={data.email}
              onChange={(e) =>
                setData({ ...data, email: e.target.value })
              }
              type="email"
              placeholder="example@email.com"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-purple-600"
            />

            {err && data.email.trim() === "" && (
              <p className="mt-1 text-sm text-red-500">
                Please enter your email
              </p>
            )}
          </div>

          {/* Mobile Number */}
          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Mobile Number
            </label>

            <input
              value={data.mobile}
              onChange={(e) =>
                setData({
                  ...data,
                  mobile: e.target.value
                    .replace(/\D/g, "")
                    .slice(0, 10),
                })
              }
              type="tel"
              inputMode="numeric"
              maxLength={10}
              placeholder="Enter 10-digit mobile number"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-purple-600"
            />

            {err && data.mobile.length !== 10 && (
              <p className="mt-1 text-sm text-red-500">
                Please enter exactly 10 digits
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Password
            </label>

            <input
              value={data.password}
              onChange={(e) =>
                setData({ ...data, password: e.target.value })
              }
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-purple-600"
            />

            {err && data.password.trim() === "" && (
              <p className="mt-1 text-sm text-red-500">
                Please enter your password
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer rounded-lg bg-purple-600 py-3 font-semibold text-white transition-colors hover:bg-purple-700"
          >
            Submit
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <span className="cursor-pointer font-semibold text-purple-600">
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Homepage;

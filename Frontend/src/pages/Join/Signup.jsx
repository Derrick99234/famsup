import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import Button from "../../components/Button/Button";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axiosInstance.post("/register", {
        name,
        email,
        password,
      });
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <img src="/logo.png" alt="Company Logo" className="w-32 mb-6" />
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <Button 
              type="submit"
              className="w-full text-white rounded-md px-[40px] py-[5px]"
              text="Sign Up"
            />
            <div className="mt-4 text-center">
              <button
                type="button"
                className="flex items-center justify-center w-full py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100"
              >
                <img
                  src="https://img.icons8.com/color/48/000000/google-logo.png"
                  alt="Google icon"
                  className="w-5 h-5 mr-2"
                />
                Sign Up with Google
              </button>
            </div>
            <p className="mt-4 text-center">
              Already have an account?{" "}
              <Link to="/signin" className="text-blue-500 hover:underline">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;

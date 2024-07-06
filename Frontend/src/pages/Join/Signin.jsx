import React, { useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await axiosInstance.post("/login", {
        email,
        password,
      });

      if (res.data && res.data.accessToken) {
        localStorage.setItem("accessToken", res.data.accessToken);
        navigate("/userdashboard");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <img src="/logo.png" alt="Company Logo" className="w-32 mb-6" />
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6">Sign In</h2>
          <form onSubmit={handleSubmit}>
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
                onChange={(e) => setpassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <Button 
              type="submit"
              className="w-full text-white rounded-md hover:bg-[#8e44ad]"
              text="Sign In"
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
                Sign In with Google
              </button>
            </div>
            <p className="mt-4 text-center">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-500 hover:underline">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignIn;

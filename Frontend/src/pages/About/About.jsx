import React from "react";
import Image from "../../assets/images/Image.jpeg";
import Navbar from "../Dashboard/NavBar"

const About = () => {
  return (
    <>
    <Navbar />
      <div className="flex flex-col items-center min-h-screen bg-gray-100 py-12">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-6">
          About Us
        </h1>
        <p className="text-gray-700 text-lg mb-4">
          Welcome to FamSup! Our platform is designed to connect fans with their
          favorite celebrities and reward them for their engagement. By
          following celebrities and commenting on their posts, users can earn
          exciting rewards and exclusive perks.
        </p>
        <p className="text-gray-700 text-lg mb-4">
          Our mission is to enhance the fan experience by providing a fun and
          interactive way to stay connected with celebrities while earning
          rewards. We believe in the power of community and strive to bring fans
          closer to the stars they love.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          How It Works
        </h2>
        <ol className="list-decimal list-inside text-gray-700 text-lg mb-6">
          <li>Sign up on our platform and create your profile.</li>
          <li>Follow your favorite celebrities on social media.</li>
          <li>Engage with their posts by liking, commenting, and sharing.</li>
          <li>Earn points for each interaction and redeem them for rewards.</li>
        </ol>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Meet Our Team
        </h2>
        <div className="flex flex-wrap justify-center mt-8">
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <img
              src={Image}
              alt="Team Member"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <h2 className="text-xl font-semibold text-gray-800 mt-4">Henry</h2>
            <p className="text-gray-600">CEO & Founder</p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <img
              src={Image}
              alt="Team Member"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <h2 className="text-xl font-semibold text-gray-800 mt-4">
              Ifeanyi
            </h2>
            <p className="text-gray-600">Chief Technology Officer</p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <img
              src={Image}
              alt="Team Member"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <h2 className="text-xl font-semibold text-gray-800 mt-4">
              Divine Agba
            </h2>
            <p className="text-gray-600">Head of Marketing</p>
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default About;

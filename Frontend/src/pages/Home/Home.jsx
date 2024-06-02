import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-6">Welcome to Our App</h1>
        <div className="space-x-4">
          <Link to="/signin" className="text-blue-500 hover:underline">
            Sign In
          </Link>
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;

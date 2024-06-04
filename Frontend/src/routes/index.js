import { useState, useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom";
import LoadingScreen from "../components/Preloader/LoadingScreen";
import AdminSignIn from "../pages/Admin/Signin";
import Home from "../pages/Home/Home";
import SignUp from "../pages/Join/Signup";
import SignIn from "../pages/Join/Signin";

const FolderRoute = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    handleStart();
    setTimeout(() => {
      handleComplete();
    }, 1000); 

    return () => handleComplete();
  }, [location]);

  return (
    <div>
      {loading && <LoadingScreen />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adminsignin" element={<AdminSignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
};

export default FolderRoute;

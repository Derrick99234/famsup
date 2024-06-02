import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import SignUp from "../pages/Join/Signup";
import SignIn from "../pages/Join/Signin";

const FolderRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
};

export default FolderRoute;

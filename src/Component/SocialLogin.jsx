import React, { useContext } from "react";
import { AuthContext } from "../firebase/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const location = useLocation();

  const navigate = useNavigate();

  console.log(location);

  const handleGoogleLogin = () => {
    googleLogin().then((res) => {
      console.log(res);
      navigate("/");

      navigate(location?.state ? location.state : "/");
    });
  };
  return (
    <div className="w-full m-auto grid justify-center my-5 btn-primary">
      <button className="btn text-white" onClick={handleGoogleLogin}>
        Google Login
      </button>
    </div>
  );
};

export default SocialLogin;

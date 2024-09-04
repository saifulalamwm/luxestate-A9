import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  console.log(location);

  const handleOnChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    setMessage("");
    const email = e.target.email.value;
    const password = e.target.password.value;
    var regExp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (password === "") {
      setMessage("Please enter password");
    } else if (regExp.test(password)) {
      setMessage("Password is valid");
    } else if (!regExp.test(password)) {
      setMessage(
        "Password must be at least 6 characters, contain at least one number and one special"
      );
    }

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setMessage(errorMessage);
      });
    e.target.reset();

    console.log(email, password);
  };

  return (
    <div>
      <div className="hero min-h-screen bg-gradient-to-r from-teal-200 to-teal-500 rounded-xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div
            onSubmit={handleSignIn}
            className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          >
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  value={password}
                  onChange={handleOnChange}
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p>{message}</p>
            </form>
            <div className="px-10 m-auto">
              <Link to={"/register"}>
                <p>
                  New here please
                  <button className="btn btn-link">Register</button>
                </p>
              </Link>
            </div>
            <div className="divider"></div>
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

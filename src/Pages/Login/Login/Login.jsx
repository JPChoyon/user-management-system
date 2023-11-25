import { useContext, useEffect, useState } from "react";
import gif from "../../../assets/animation.gif";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/Context";
import { FaGoogle } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { loading, emailLogin, googleLogin } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const captcha = form.captcha.value;

    const value = { email, password, captcha };
    console.log(value);
    emailLogin(email, password).then((result) => {
      const user = result.user;
      console.log(user);
    });
    navigate(from, { replace: true });
  };

  const handleGoogleLogin = () => {
    googleLogin().then((res) => {
      console.log(res.user);
      const userInfo = {
        name: res.user?.displayName,
        email: res.user?.email,
        photo: res.user?.photoURL,
      };
      console.log(userInfo);
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content w-full justify-around flex-col lg:flex-row">
          <div className="text-center lg:text-left flex-1">
            <img className="h-96" src={gif} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl flex-1 ">
            <form onSubmit={handleLogin} className="card-body">
              <h2 className="text-4xl font-bold text-center">Login</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Type here"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-4">
                <button
                  type="submit"
                  className="btn btn-primary bg-[#D1A054] border-0 hover:bg-white "
                >
                  Login
                </button>
              </div>
            </form>
            <Link to={"/signup"}>
              <p className="text-center text-yellow-500 my-5">
                <small>New here? Create a New Account</small>
              </p>
            </Link>
            <div>
              <button
                onClick={handleGoogleLogin}
                className="btn btn-circle btn-outline"
              >
                <FaGoogle />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import { useContext } from "react";
import gif from "../../../assets/animation.gif";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/Context";

import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { emailLogin,user } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
   
    emailLogin(email, password).then((result) => {
      const user = result.user;
      console.log(user);

    });
    emailLogin(email, password)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "logged in successfully",
          showConfirmButton: false,
          timer: 500,
        });
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message)
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "password incorrect",
          showConfirmButton: false,
          timer: 1500,
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
                  className="btn btn-primary bg-[#6788D8] border-0 hover:bg-white hover:text-black "
                >
                  Login
                </button>
              </div>
            </form>
            <Link to={"/signup"}>
              <p className="text-center text-[#6788D8] my-5">
                <small>New here? Create a New Account</small>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

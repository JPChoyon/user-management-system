import { useContext, useEffect, useRef, useState } from "react";
import gif from "../../../assets/others/authentication2.png";
import bgImg from "../../../assets/reservation/wood-grain-pattern-gray1x.png";
// import racaptcha
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/Context";
import { FaGoogle } from "react-icons/fa";
import useAxiosPublic, { AxiosPublic } from "../../../Hooks/useAxiosPublic";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [disable, setdisable] = useState(true);
  const { loading, emailLogin, googleLogin } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    fetch(loadCaptchaEnginge(6));
  }, []);
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
  const handleCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value) == true) {
      setdisable(false);
    } else {
      setdisable(true);
    }
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
      <div
        className="hero min-h-screen "
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img src={gif} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
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

              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    <LoadCanvasTemplate />
                  </span>
                </label>
                <input
                  onBlur={handleCaptcha}
                  type="text"
                  name="captcha"
                  placeholder="input the avobe text"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-4">
                <button
                  type="submit"
                  disabled={disable}
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

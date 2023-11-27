import { Link } from "react-router-dom";
import gif from "../../assets/animation.gif";
import { useState } from "react";

const Signup = () => {
  // State to hold the selected role
  const [selectedRole, setSelectedRole] = useState("");

  // Event handler for when the selection changes
  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };
  const handleSignup = (e) => {
    e.preventDefault();
   

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;

    const user = { name, email, password, photo, selectedRole };
    console.log(user);
  };
  return (
    <div className="hero min-h-screen w-full mx-auto">
      <div className="hero-content w-full justify-around flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left flex-1">
          <img className="h-96" src={gif} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl flex-1 ">
          <form onSubmit={handleSignup} className="card-body">
            <h2 className="text-4xl font-bold text-center">Registration</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Type name here"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Type email here"
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
                <span className="label-text">photo</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="url here"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Bank Account Number</span>
              </label>
              <input
                type="text"
                name="bank"
                placeholder="Type here"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Who are you</span>
              </label>
              <select
                name="role"
                id="role"
                value={selectedRole}
                onChange={handleRoleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option disabled selected>
                  Choose one
                </option>
                <option value="admin">Admin</option>
                <option value="hr">HR</option>
                <option value="employee">Employee</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Salary</span>
              </label>
              <input
                type="number"
                name="salary"
                placeholder="Enter your salary"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-4">
              <button
                type="submit"
                className="btn btn-primary bg-[#6788D8] border-0 hover:bg-white hover:text-black "
              >
                Register
              </button>
            </div>
          </form>
          <Link to={"/login"}>
            <p className="text-center text-[#6788D8] my-5">
              <small>Already Have An Account?</small>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;

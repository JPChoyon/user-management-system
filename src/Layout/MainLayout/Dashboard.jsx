import {
  FaBookOpen,
  FaHome,
  FaList,
  FaMailBulk,
  FaUser,
  FaWallet,
} from "react-icons/fa";

import { MdReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
const [isAdmin] = useAdmin();

const Dashboard = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content w-full flex flex-col items-center mt-10">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open Dashboard Menu
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-[#08D9D6] text-base-content">
            {/* Sidebar content here */}

            {isEmployee ? (
              <>
                <NavLink
                  to={"/"}
                  className="uppercase text-2xl py-3 flex items-center gap-2 text-black "
                >
                  <FaHome></FaHome>
                  <li>Employee Home</li>
                </NavLink>
                <NavLink
                  to={"manage-items"}
                  className="uppercase text-2xl py-3 flex items-center gap-2 text-black "
                >
                  <FaList></FaList>
                  <li>manage items</li>
                </NavLink>

                <NavLink
                  to={"all-user"}
                  className="uppercase text-2xl py-3 flex items-center gap-2 text-black "
                >
                  <FaUser></FaUser>
                  <li>all users</li>
                </NavLink>
              </>
            ) : (
              <></>
            )}
            {isHr ? (
              <>
                <NavLink
                  to={"/"}
                  className="uppercase text-2xl py-3 flex items-center gap-2 text-black "
                >
                  <FaHome></FaHome>
                  <li>HR Home</li>
                </NavLink>
                <NavLink
                  to={"manage-items"}
                  className="uppercase text-2xl py-3 flex items-center gap-2 text-black "
                >
                  <FaList></FaList>
                  <li>manage items</li>
                </NavLink>

                <NavLink
                  to={"all-user"}
                  className="uppercase text-2xl py-3 flex items-center gap-2 text-black "
                >
                  <FaUser></FaUser>
                  <li>all users</li>
                </NavLink>
              </>
            ) : (
              <></>
            )}
            {isAdmin ? (
              <>
                <NavLink
                  to={"/"}
                  className="uppercase text-2xl py-3 flex items-center gap-2 text-black "
                >
                  <FaHome></FaHome>
                  <li>Admin Home</li>
                </NavLink>
                <NavLink
                  to={"manage-items"}
                  className="uppercase text-2xl py-3 flex items-center gap-2 text-black "
                >
                  <FaList></FaList>
                  <li>manage items</li>
                </NavLink>

                <NavLink
                  to={"all-user"}
                  className="uppercase text-2xl py-3 flex items-center gap-2 text-black "
                >
                  <FaUser></FaUser>
                  <li>all users</li>
                </NavLink>
              </>
            ) : (
              <></>
            )}

            <div className="divider py-8 divide-red-50"></div>
            <NavLink
              to={"/"}
              className="uppercase text-2xl py-3 flex items-center gap-2 text-black "
            >
              <FaHome></FaHome>
              <li>Home</li>
            </NavLink>

            <NavLink
              to={"contact"}
              className="uppercase text-2xl py-3 flex items-center gap-2 text-black "
            >
              <FaMailBulk></FaMailBulk>
              <li>contact</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

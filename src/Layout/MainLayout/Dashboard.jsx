import {
  FaBookOpen,
  FaCalendar,
  FaHome,
  FaList,
  FaMailBulk,
  FaShoppingCart,
  FaUser,
  FaWallet,
} from "react-icons/fa";

import { IoBag, IoMenu } from "react-icons/io5";
import { MdReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
const isAdmin = true;

const Dashboard = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content w-full flex flex-col items-center mt-10">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-[#D1A054] text-base-content">
            {/* Sidebar content here */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold uppercase">Bistro Boss</h2>
              <p className="text-2xl uppercase">r e s t u r e n t</p>
            </div>
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
                  to={"manage-booking"}
                  className="uppercase text-2xl py-3 flex items-center gap-2 text-black "
                >
                  <FaBookOpen />
                  <li>manage booking</li>
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
              <>
                <NavLink
                  to={"/"}
                  className="uppercase text-2xl py-3 flex items-center gap-2 text-black "
                >
                  <FaHome></FaHome>
                  <li>user Home</li>
                </NavLink>
                <NavLink
                  to={"reservation"}
                  className="uppercase text-2xl py-3 flex items-center gap-2 text-black "
                >
                  <FaCalendar></FaCalendar>
                  <li>reservation</li>
                </NavLink>
                <NavLink
                  to={"payment"}
                  className="uppercase text-2xl py-3 flex items-center gap-2 text-black "
                >
                  <FaWallet></FaWallet>
                  <li>payment history</li>
                </NavLink>
                <NavLink
                  to={"cart"}
                  className="uppercase text-2xl py-3 flex items-center gap-2 text-black "
                >
                  <FaShoppingCart />
                  <li>my cart</li>
                </NavLink>
                <NavLink
                  to={"review"}
                  className="uppercase text-2xl py-3 flex items-center gap-2 text-black "
                >
                  <MdReviews></MdReviews>
                  <li>add review</li>
                </NavLink>

                <NavLink
                  to={"my-booking"}
                  className="uppercase text-2xl py-3 flex items-center gap-2 text-black "
                >
                  <FaBookOpen></FaBookOpen>
                  <li>my booking</li>
                </NavLink>
              </>
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
              to={"menu"}
              className="uppercase text-2xl py-3 flex items-center gap-2 text-black "
            >
              <IoMenu />
              <li>menu</li>
            </NavLink>
            <NavLink
              to={"shop"}
              className="uppercase text-2xl py-3 flex items-center gap-2 text-black "
            >
              <IoBag />
              <li>shop</li>
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

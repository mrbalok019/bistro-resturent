import React from "react";
import { FaBook, FaCalendar, FaCalendarCheck, FaHome, FaList, FaShoppingCart, FaUser, FaUtensils, FaWallet } from "react-icons/fa";
import { FaHouseChimney, FaHouseCircleCheck, FaMessage } from "react-icons/fa6";
import { IoFastFood } from "react-icons/io5";
import { Link, NavLink, Outlet } from "react-router-dom";


const DashboardLayout = () => {

  const isAdmin = true;

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center ml-4">
        {/* outlet content  */}

        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
      
        <ul className="menu p-4 w-80 min-h-full bg-orange-300 text-base-content">
          {/* Sidebar content here */}

          <h1 className="font-bold text-2xl text-left mb-16">
            Bistro Boss <br /> Restaurant
          </h1>

          {
            isAdmin?
            <>
            <li className="text-lg">
            <Link to="/dashboard">
              <FaHome></FaHome>
              Admin Home
            </Link>
          </li>
          <li className="text-lg">
            <Link to="/dashboard">
              <FaUtensils></FaUtensils>
              Add item
            </Link>
          </li>
          <li className="text-lg">
            <Link to="/dashboard/payment">
              <FaList></FaList>
             Manaege Items
            </Link>
          </li>
          <li className="text-lg">
            <Link to="/dashboard/cart">
              <FaBook/>
              Manage Bookings
            </Link>
          </li>
          <li className="text-lg">
            <Link to="/dashboard/allusers">
              <FaUser></FaUser>
              All Users
            </Link>
          </li>
          
            </>
            :
            <>
            <li className="text-lg">
            <Link to="/dashboard">
              <FaHome></FaHome>
              User Home
            </Link>
          </li>
          <li className="text-lg">
            <Link to="/dashboard">
              <FaCalendar></FaCalendar>
              Reservation
            </Link>
          </li>
          <li className="text-lg">
            <Link to="/dashboard/payment">
              <FaWallet></FaWallet>
             Payment History
            </Link>
          </li>
          <li className="text-lg">
            <Link to="/dashboard/cart">
              <FaShoppingCart></FaShoppingCart>
              My Cart
            </Link>
          </li>
          <li className="text-lg">
            <Link to="/dashboard/cart">
              <FaMessage></FaMessage>
              Add Review
            </Link>
          </li>
          <li className="text-lg">
            <Link to="/dashboard/cart">
              <FaCalendarCheck></FaCalendarCheck>
              My Bookings
            </Link>
          </li>
            </>
          }


          {/* common menu  */}
          <hr className="w-3/4 border-2" />
          <li className="text-lg">
            <Link to="/">
            <FaHouseChimney></FaHouseChimney>
              Home
            </Link>
          </li>
          <li className="text-lg">
            <Link to="/menu">
             <IoFastFood></IoFastFood>
              Menu
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;

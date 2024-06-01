import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";
import UseCart from "../../Pages/OurShop/UseCart";

const Nav = () => {
  const { user, signOutUser, loading } = useContext(AuthContext);
  const [cart] = UseCart();


  const signOutHandler = () => {
    signOutUser().then(() => {
      Swal.fire({
        text: "Successfuly signed out",
        icon: "success",
      });
    });
    // .catch(error=>{
    //   alert(error.message);
    // })
  };

  const nav = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/ourshop/salad">Our Shop</Link>
      </li>
      {user ? (
        <></>
      ) : (
        <li>
          <Link to="/registration">Registration</Link>
        </li>
      )}
    </>
  );
  return (
    <div>
      {loading ? (
        <span className="loading loading-infinity loading-lg text-indigo-700"></span>
      ) : (
        <div className="navbar fixed z-10 bg-opacity-30 text-white bg-base-100 max-w-6xl mx-20">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black rounded-box w-52"
              >
                {nav}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl text-yellow-500 font-bold">Bistro Restaurant </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-yellow-500 font-bold">
              {nav}
            </ul>
          </div>
          <div className="navbar-end">
            <div> 
              <Link className="btn" to='/dashboard/cart'>
              <button >
                <FaShoppingCart/>
                <div className="badge badge-secondary">+{cart.length}</div>
              </button>
            </Link>
              
            </div>

            {user && user ? (
              <div className="flex">
                <button className="btn btn-circle"> {user.displayName[0]} </button>
                <button className="btn btn-accent" onClick={signOutHandler}>
                Sign Out
              </button>
              </div>
              
            ) : (
              <Link to="/login">
                <button className="btn btn-accent">Sign In</button>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;

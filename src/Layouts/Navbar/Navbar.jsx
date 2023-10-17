import { BsPersonCircle } from "react-icons/Bs";
import { Link, NavLink } from "react-router-dom";
import useCustomeHook from "../../Hooks/useCustomeHook";


const Navbar = () => {
  const { user, logOut } = useCustomeHook();

  const handleLogout = () => {
    logOut();
  };
  const userName = user?.displayName;
  
  const navitems = (
    <>
      <li>
        <NavLink className={"font-semibold"} to={"/"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={"font-semibold"} to={"/Blog"}>
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink className={"font-semibold"} to={"/addProduct"}>
        AddProduct
        </NavLink>
      </li>
      <li>
        <NavLink className={"font-semibold"} to={"/myCart"}>
        My Cart
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="w-[90%] mx-auto my-3">
      <div className="navbar col-span-1 bg-base-100 justify-center ">
        <div className="navbar-start lg:w-[40%]">
          <div className="dropdown  ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navitems}
              <div className="flex items-center">
              {user != null ? (
                <button className="px-3 py-2 rounded-lg mx-3  text-white bg-[#36D399]">
                  {userName}
                </button>
              ) : (
                ""
              )}
              {user != null ? (
                user?.photoURL ? (
                  <img
                    className="w-[20%] rounded-full mr-2"
                    src={user.photoURL}
                    alt="User"
                  />
                ) : (
                  <BsPersonCircle className="text-2xl mr-2"></BsPersonCircle>
                )
              ) : (
                ""
              )}
            </div>
            </ul>
            
          </div>
          <img className="md:w-[40%] lg:w-[50%] ml-5 md:ml-0" src="{logo}" alt="logo" />
        </div>
        <div className="navbar-start col-span-3 hidden lg:flex lg:w-[70%]">
          <ul className="menu menu-horizontal px-1 ">{navitems}</ul>
        </div>
        <div className="navbar-end">
          {user != null ? (
            user?.photoURL ? (
              <img
                className={`w-[30%] md:w-[15%]  rounded-full mr-2`}
                src={user.photoURL}
                alt="User"
              />
            ) : (
              <BsPersonCircle className="text-4xl mr-2"></BsPersonCircle>
            )
          ) : (
            ""
          )}
          {user != null ? (
            <button className="btn hidden lg:flex text-white bg-[#36D399]">{userName}</button>
          ) : (
            ""
          )}
        </div>
        <div className="navbar-center">
          {user != null ? (
            <button
              onClick={handleLogout}
              className="btn text-white bg-[#36D399]"
            >
              Logout
            </button>
          ) : (
            <Link
              to={"/logins"}
              className="btn text-white border-0 bg-[#36D399]"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};



export default Navbar;

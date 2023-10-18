import { BsPersonCircle } from "react-icons/Bs";
import { Link, NavLink } from "react-router-dom";
import useCustomeHook from "../../Hooks/useCustomeHook";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const { user, logOut } = useCustomeHook();

  const handleLogout = () => {
    logOut();
  };
  const userName = user?.displayName;

  const navitems = (
    <>
      <li>
        <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FFA800] font-semibold underline" : "text-white"}to={"/"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FFA800] font-semibold underline" : "text-white"}to={"/Blog"}>
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FFA800] font-semibold underline" : "text-white"}to={"/addProduct"}>
          AddProduct
        </NavLink>
      </li>
      <li>
        <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FFA800] font-semibold underline" : "text-white"}to={"/myCart"}>
          My Cart
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-[#353535]">
      <div className="w-[90%] mx-auto bg-[#353535]">
        <div className="navbar col-span-1 justify-center ">
          <div className="navbar-start gap-2 md:gap-4 lg:w-[40%]">
            <div className="dropdown  ">
              <label tabIndex={0} className=" text-white lg:hidden">
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
                className=" bg-[#353535] menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-56 h-60 space-y-3"
              >
                {navitems}
                <div className="flex items-center">
                  {user != null ? (
                    <button className="px-3 py-2 rounded-lg mx-3 border-0  text-white bg-[#FFA800]">
                      {userName}
                    </button>
                  ) : (
                    ""
                  )}
                  {user != null ? (
                    user?.photoURL ? (
                      <img
                        className="w-[20%] rounded-full mr-2 border-0"
                        src={user.photoURL}
                        alt="User"
                      />
                    ) : (
                      <BsPersonCircle className="text-2xl mr-2 border-0"></BsPersonCircle>
                    )
                  ) : (
                    ""
                  )}
                </div>
              </ul>
            </div>
            <NavLink to={"/"}>
              <div className="flex lg:justify-center items-center">
              <img
                className="w-[65%] md:w-[30%] lg:w-[30%] inline"
                src={logo}
                alt="logo"
              />
              <span className="hidden md:block md:visible md:text-xl lg:text-4xl text-white font-bold">S.M.Shoes</span>
              </div>
            </NavLink>
          </div>
          <div className="navbar-start col-span-3 justify-center hidden lg:flex lg:w-[70%]">
            <ul  className=" flex gap-6 px-1 text-[16px]">{navitems}</ul>
          </div>
          <div className="navbar-end">
            {user != null ? (
              user?.photoURL ? (
                <img
                  className={`w-[30%] md:w-[15%] border-0 rounded-full mr-3`}
                  src={user.photoURL}
                  alt="User"
                />
              ) : (
                <BsPersonCircle className="text-4xl border-0 mr-3"></BsPersonCircle>
              )
            ) : (
              ""
            )}
            {user != null ? (
              <button className="btn hidden lg:flex border-0 mr-1 text-white bg-[#FFA800]">
                {userName}
              </button>
            ) : (
              ""
            )}
          </div>
          <div className="navbar-center">
            {user != null ? (
              <button
                onClick={handleLogout}
                className="btn btn-sm md:btn-md border-0 text-white bg-[#FFA800]"
              >
                Logout
              </button>
            ) : (
              <Link
                to={"/logins"}
                className="btn btn-sm md:btn-md text-white border-0 bg-[#FFA800]"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

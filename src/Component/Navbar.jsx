import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>

      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
    </>
  );
  const handleSignOut = () => {
    signOutUser();
    navigate("/");
  };

  return (
    <div className="sticky top-0 z-10">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <NavLink to={"/"} className="btn btn-ghost text-xl">
            LuxEstate
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* 
        
        Nav end
        
        */}
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              {user.photoURL ? (
                <div tabIndex={0} role="button" className="w-12 ">
                  <img className="rounded-full" src={user.photoURL} />
                </div>
              ) : (
                <div tabIndex={0} role="button" className="w-12 ">
                  <img
                    className="rounded-full"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              )}
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-96 p-2 shadow"
              >
                <li>
                  <div className="">
                    <div tabIndex={0} className="w-12 ">
                      <img className="rounded-full" src={user.photoURL} />
                    </div>
                    <div className="">
                      <p>{user.displayName}</p>
                      <p>{user.email}</p>
                    </div>
                  </div>
                </li>
                <div className="divider"></div>
                <Link to={"/my-profile"}>
                  <li>
                    <p>My Profile</p>
                  </li>
                </Link>
                <div className="divider"></div>
                <li>
                  <button className="btn bg-red-500" onClick={handleSignOut}>
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to={"/login"}>
              <button className="btn btn-primary">Sign In</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = () => {
  const userState = useSelector((store) => store.user);
  const user = userState?.user; // Get the user data from Redux store

  return (
    <div className="navbar bg-neutral-300">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          Reporting Mechanism
        </Link>
      </div>
      <div className="flex-none gap-4">
        {/* Show Home link always */}
        {user && (
          <>
        <Link to="/" className="btn btn-ghost">
          Home
        </Link>

        {/* Conditionally render links based on whether the user is logged in */}
       
            <Link to="/reconciliation" className="btn btn-ghost">
              Reconciliation
            </Link>
            <Link to="/user-profile" className="btn btn-ghost">
              Reports
            </Link>
          </>
        )}

        {/* Conditionally render login button if no user is logged in */}
        {!user ? (
          <div className="mx-20">
            <Link to="/login" className="btn btn-primary">
              Login
            </Link>
          </div>
        ) : (
          <div className="dropdown dropdown-end mx-20">
            <div className="flex items-center gap-2">
              <p className="flex justify-center">
                Welcome, <span className="font-semibold ml-1">{user.name}</span>
              </p>
            </div>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">{user.role}</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a
                  onClick={() => {
                    localStorage.clear(); // Clear localStorage
                    window.location.reload(); // Refresh the page to log out
                  }}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;

import { useEffect } from "react";
import { useSelector } from "react-redux";

const NavBar = () => {
  const userState = useSelector((store) => store.user);
  const user = userState?.user; // Safely access the nested 'user' object

  useEffect(() => {
    console.log("User state updated in NavBar:", user);
  }, [user]); // Log updates whenever the user state changes

  return (
    <div className="navbar bg-neutral-300">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Reporting Mechanism</a>
      </div>
      <div className="flex-none gap-2">
        {user ? (
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
                    localStorage.clear(); // Clear Redux persist data
                    window.location.reload(); // Force logout by refreshing the app
                  }}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <div className="mx-20">
            <a href="/login" className="btn btn-primary">
              Login
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;

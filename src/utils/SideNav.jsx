import React from "react";

const SideNav = () => {
  return (
    <div className="flex h-screen">
      {/* Side Navigation */}
      <div className="w-64 bg-gray-800 text-white shadow-md flex flex-col">
        <div className="p-4 text-xl font-bold border-b border-gray-700">My App</div>
        <ul className="p-4 space-y-2">
          <li>
            <a
              href="#"
              className="block px-4 py-2 rounded hover:bg-gray-700 transition"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 rounded hover:bg-gray-700 transition"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 rounded hover:bg-gray-700 transition"
            >
              Profile
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 rounded hover:bg-gray-700 transition"
            >
              Settings
            </a>
          </li>
        </ul>
      </div>


    </div>
  );
};

export default SideNav;

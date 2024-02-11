import React from "react";
import { Link, Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content md:block flex flex-col-reverse items-center justify-center md:mt-0 mt-5">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden mb-7"
        >
          Open Menu
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 md:space-y-4 space-y-2 w-80 min-h-full bg-gray-800 text-base-content">
          {/* Sidebar content here */}
          <li>
            <Link to="/" className="border-2 border-black font-medium text-white shadow-xl hover:bg-white hover:text-black bg-[#2144b6]" style={{transition: "all 0.5s"}}>Add Task</Link>
          </li>
          <li>
            <Link to="/all" className="border-2 border-black font-medium text-white shadow-xl hover:bg-white hover:text-black bg-[#2254b6]" style={{transition: "all 0.5s"}}>All Task</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Main;

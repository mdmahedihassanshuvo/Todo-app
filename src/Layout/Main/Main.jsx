import React from "react";
import { Link, Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col-reverse items-center justify-center">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open Filter-Bar
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 md:space-y-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <Link to="/add" className="border-2 border-black font-medium text-stone-900 shadow-xl hover:bg-black hover:text-white " style={{transition: "all 0.5s"}}>Add Task</Link>
          </li>
          <li>
            <Link to="/all" className="border-2 border-black font-medium text-stone-900 shadow-xl hover:bg-black hover:text-white " style={{transition: "all 0.5s"}}>All Task</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Main;

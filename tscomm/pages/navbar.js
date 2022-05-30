import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="shadow-sm fixed w-full z-10 bg-transparent m-0">
        <div className="w-full" style={{ background: "#1a1a1abf" }}>
          <div className="flex items-center h-16 w-full justify-center">
            <div className="hidden md:block ">
              <div className="ml-10 flex items-baseline space-x-4 bg-transparent">
                <a className="cursor-pointer text-white font-semibold px-3 py-2 text-md">
                  Resources
                </a>
                <a className="cursor-pointer text-white font-semibold px-3 py-2 text-md">
                  Pages
                </a>
                <a className="cursor-pointer text-white font-semibold px-3 py-2 text-md">
                  Blogs
                </a>
                <a className="cursor-pointer text-white font-semibold px-3 py-2 text-md">
                  Login
                </a>
                <a className="cursor-pointer text-white font-semibold px-3 py-2 text-md">
                  Register
                </a>
                <a className="cursor-pointer text-white px-3 py-3 rounded-md text-sm font-medium">
                  Upcoming Events
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

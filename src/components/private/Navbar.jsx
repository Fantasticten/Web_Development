import React from "react";

const Navbar = () => {
  return (
    <nav className="h-1/5 bg-emerald-700">
      <div className="h-full flex items-center justify-between px-6 pb-6 text-white">
        <div className="flex items-center">
          <span>Data Antrian</span>
        </div>
        <div className="flex items-center">
          <span>Drg. Rima</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

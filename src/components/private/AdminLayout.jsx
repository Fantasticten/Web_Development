import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Pagination from "./Pagination";

const AdminLayout = ({ children }) => {
  return (
    <main className="flex">
      <div className="float-left">
        <Navigation />
      </div>

      <div className="flex flex-col w-full h-screen overflow-hidden">
        <Navbar />
        <hr />

        <div className="flex-1 overflow-y-auto p-4">{children}</div>

        <Pagination />
        <hr />

        <Footer />
      </div>
    </main>
  );
};

export default AdminLayout;

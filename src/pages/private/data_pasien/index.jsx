import React from "react";
import AdminLayout from "../../../components/private/AdminLayout";

const DataPasien = () => {
  return (
    <AdminLayout className="h-screen w-screen">
      <div className="h-full text-red-800 text-7xl flex justify-center items-center text-center overflow-hidden">
        <div className="w-4/5 h-[460px] rounded-2xl absolute  flex justify-center items-center top-[80px]">
          <div className="h-full w-11/12 bg-white shadow-lg rounded-2xl flex justify-center items-center">
            <h1 className="text-2xxl">Data Pasien Page</h1>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default DataPasien;

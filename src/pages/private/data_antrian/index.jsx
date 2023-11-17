import React from "react";
import AdminLayout from "../../../components/private/AdminLayout";
import { useEffect, useState } from "react";
const apiEndpoint = "http://localhost:8000/get";

const DataPasien = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiEndpoint);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.error("Ada masalah dengan fetch:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <AdminLayout className="h-screen w-screen">
      <div className="h-full text-red-800 text-7xl flex justify-center items-center text-center overflow-hidden">
        <div className="w-4/5 h-[460px] rounded-2xl absolute  flex justify-center items-center top-[80px]">
          <div className="h-full w-11/12 bg-white shadow-lg rounded-2xl flex justify-center items-center">
            <div className="absolute top-8">
              {data ? (
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 overflow-y-auto">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        Nomor
                      </th>
                      <th className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        Nama
                      </th>
                      <th className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        Kode Antrian
                      </th>
                      <th className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        Pelayanan
                      </th>
                      <th className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        No Telepon
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => (
                      <tr>
                        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                          {item.nomor}
                        </td>
                        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                          {item.nama}
                        </td>
                        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                          {item.kode_antrian}
                        </td>
                        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                          {item.pelayanan}
                        </td>
                        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                          {item.no_telepon}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                "Loading..."
              )}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default DataPasien;

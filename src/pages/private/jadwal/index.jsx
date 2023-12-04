import React, { useState, useEffect } from "react";
import Navigation from "../../../components/private/Navigation";
import Navbar from "../../../components/private/Navbar";
import Footer from "../../../components/private/Footer";
import Table from "../../../components/private/Table";
import { ScaleLoader } from "react-spinners";
import TimetableDetailModal from "../../../components/private/TimetableDetailModal";

const Jadwal = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [Timetable, setTimetable] = useState([]);
  const [selectedTimetable, setSelectedTimetable] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://keydentalcare.isepwebtim.my.id/api/timetable"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setTimetable(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  };

  const headers = [
    { display: "No", field: "id" },
    { display: "Hari", field: "hari" },
    { display: "Tanggal", field: "tanggal" },
    { display: "Mulai Pukul", field: "mulai_jam" },
    { display: "Sampai Pukul", field: "sampai_jam" },
  ];

  const detailTimetable = (row) => {
    setSelectedTimetable(row);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    fetchData();
  };

  return (
    <div className="layout flex">
      <Navigation />
      <main className="flex flex-col grow">
        <Navbar page="Jadwal" breadcrumb=" Jadwal" showCreateButton={false} />
        <div className="content grow object-contain bg-[#f8fafc]">
          <section className="container px-[39px] py-[39px]">
            <div className="flex flex-col">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  {isLoading ? (
                    <div className="flex items-center justify-center h-40">
                      <div className="flex justify-around mt-8">
                        <ScaleLoader
                          color="#21695c"
                          loading={isLoading}
                          height={30}
                        />
                      </div>
                    </div>
                  ) : (
                    <>
                      <Table
                        headers={headers}
                        data={Timetable}
                        iconType="edit"
                        onActionButtonClick={(row) => detailTimetable(row)}
                        actionButtonLabel="Edit"
                        dataType="timetable"
                      />
                      <TimetableDetailModal
                        isOpen={isModalOpen}
                        onClose={closeModal}
                        timetableData={selectedTimetable}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Jadwal;

import React from "react";
import { useEffect, useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";

const AllAppointment = () => {
  const {
    aToken,
    getAllAppointments,
    appointments,
    setAppointments,
    cancelAppointment,
  } = useContext(AdminContext);
  const { currency, calculateAge, slotDateFormat } = useContext(AppContext);

  useEffect(() => {
    if (aToken) {
      getAllAppointments();
    }
  }, [aToken]);
  return (
    <div className="w-full max-w m-5">
      <p className="mb-3 text-lg font-medium">All Appointments</p>
      <div className="bg-white border, rounded text-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll">
        <div className="hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-3 px-6 border-b">
          <p>#</p>
          <p>Patient</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Doctor Name</p>
          <p>Fees</p>
          <p>Actions</p>
        </div>
        {appointments.map((item, index) => (
          <div
            key={index}
            className="flex flex-wrap justify-between max-sm:gap-2 sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-3 px-6 border-b items-center text-gray-500 py-3 px-6 hover:bg-gray-50"
          >
            <p className="max-sm:hidden">{index + 1}</p>
            <div className="flex items-center gap-2">
              <img
                className="w-8 h-8 rounded-full"
                src={item.userData.image}
                alt=""
              />
              <p>{item?.userData?.name}</p>
            </div>
            <p className="max-sm:hidden">{calculateAge(item?.userData?.dob)}</p>
            <p>
              {slotDateFormat(item?.slotDate)} , {item?.slotTime}
            </p>
            <div className="flex items-center gap-2">
              <img
                className="w-8 h-8 rounded-full bg-gray-200"
                src={item.docData.image}
                alt=""
              />
              <p>{item?.docData?.name}</p>
            </div>
            <p>
              {currency} {item?.docData?.fees}
            </p>
            {item?.cancelled ? (
              <p className="text-red-400 text-xs font-medium">Cancelled</p>
            ) : (
              <img
                src={assets.cancel_icon}
                alt="Cancel"
                className="w-10 cursor-pointer"
                onClick={() => {
                  cancelAppointment(item._id);
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllAppointment;

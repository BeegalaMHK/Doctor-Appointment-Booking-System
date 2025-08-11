import React, { useContext } from "react";
// Toast to show notification.
import { ToastContainer } from "react-toastify";
// Pages
import Login from "./pages/Login";
// Context
import { AdminContext } from "./context/AdminContext";
import Navbar from "./components/Navbar";
import Siderbar from "./components/Siderbar";
import { Route, Routes } from "react-router-dom";

// Components
import Dashboard from "./pages/Admin/Dashboard";
import AllAppointment from "./pages/Admin/AllAppointment";
import AddDoctor from "./pages/Admin/AddDoctor";
import DoctorsList from "./pages/Admin/DoctorsList";

function App() {
  const { aToken } = useContext(AdminContext);

  if (!aToken)
    return (
      <div>
        <Login />
        <ToastContainer />
      </div>
    );
  if (!!aToken)
    return (
      <div className="bg-[#F8F9FD]">
        {/* <Login /> */}
        <ToastContainer />
        <Navbar />
        <div className="flex items-start">
          <Siderbar />
          <Routes>
            <Route path="/" element={<></>} />
            <Route path="/admin-dashboard" element={<Dashboard />} />
            <Route path="/all-appointments" element={<AllAppointment />} />
            <Route path="/add-doctor" element={<AddDoctor />} />
            <Route path="/doctor-list" element={<DoctorsList />} />
          </Routes>
        </div>
      </div>
    );
}

export default App;

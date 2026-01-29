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
import { DoctorContext } from "./context/DoctorContext";
import DoctorDashboard from "./pages/Doctors/DoctorDashboard";
import DoctorAppointments from "./pages/Doctors/DoctorAppointments";
import DoctorProfile from "./pages/Doctors/DoctorProfile";

function App() {
  const { aToken } = useContext(AdminContext);
  const { dToken } = useContext(DoctorContext);

  return !!aToken || !!dToken ? (
    <div className="bg-[#F8F9FD]">
      {/* <Login /> */}
      <ToastContainer />
      <Navbar />
      <div className="flex items-start">
        <Siderbar />
        <Routes>
          {/* Admin Routes */}
          <Route
            path="/"
            element={!!aToken ? <Dashboard /> : <DoctorDashboard />}
          />
          <Route path="/admin-dashboard" element={<Dashboard />} />
          <Route path="/all-appointments" element={<AllAppointment />} />
          <Route path="/add-doctor" element={<AddDoctor />} />
          <Route path="/doctor-list" element={<DoctorsList />} />

          {/* Doctor Routes */}
          <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
          <Route path="/doctor-appointments" element={<DoctorAppointments />} />
          <Route path="/doctor-profile" element={<DoctorProfile />} />
        </Routes>
      </div>
    </div>
  ) : (
    <div>
      <Login />
      <ToastContainer />
    </div>
  );
}

export default App;

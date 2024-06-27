import React, { useState, useEffect, useContext } from "react";
import "react-calendar/dist/Calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles/App.css";
import "./styles/light-theme.css";
import "./styles/dark-theme.css";
import "./styles/modal.css";

import LoadingSpinner from "./LoadingSpinner";
import AppointmentList from "./components/AppointmentList/AppointmentList";
import Header from "./components/Header/Header";
import { AppointmentsContext } from "./providers/appointmentsProvider";

const App = () => {
  const [selectedDate, setSelectedDate] = useState(
    new Date(Date.now() - 3 * 60 * 60 * 1000)
  );
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const { readAllAppointments, appointments } = useContext(AppointmentsContext);

  useEffect(() => {
    document.body.classList.toggle("dark-theme", darkMode);
    document.body.classList.toggle("light-theme", !darkMode);
  }, [darkMode]);

  useEffect(() => {
    readAllAppointments();
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleDateSelect = (date) => setSelectedDate(date);

  const handleAddEditAppointment = (appointment) => {
    if (appointment.ocupado) {
      console.log("Editar agendamento:", appointment);
    } else {
      console.log("Adicionar agendamento:", appointment);
    }
  };

  const handleDeleteAppointment = (appointment) => {
    console.log("Excluir agendamento:", appointment);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (value) {
      const selectedDate = new Date(value);
      selectedDate.setHours(selectedDate.getHours() + 3);
      setSelectedDate(selectedDate);
    } else {
      setSelectedDate(null);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className={`App ${darkMode ? "dark-theme" : "light-theme"}`}>
          <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
          <div className="container mt-4 main-content">
            <div className="row">
              <div className={`col-md-4 ${darkMode ? "dark-mode" : ""}`}>
                <input
                  type="date"
                  className={`form-control date-input ${
                    darkMode ? "dark-mode" : ""
                  }`}
                  value={
                    selectedDate ? selectedDate.toISOString().split("T")[0] : ""
                  }
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-8">
                <AppointmentList
                  appointments={appointments}
                  selectedDate={selectedDate}
                  darkMode={darkMode}
                  handleAddEditAppointment={handleAddEditAppointment}
                  handleDeleteAppointment={handleDeleteAppointment}
                />
              </div>
            </div>
          </div>
    </div>
  );
};

export default App;

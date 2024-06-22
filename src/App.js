import React, { useState, useEffect } from "react";
import "react-calendar/dist/Calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import appts from "./database";
import "./styles/App.css";
import "./styles/light-theme.css";
import "./styles/dark-theme.css";
import PersonCalendar from "./calendar";
import LoadingSpinner from "./LoadingSpinner";
import AppointmentList from "./components/AppointmentList/AppointmentList";
import Header from "./components/Header/Header";
import FadeIn from "./functions/fadeIn";

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("dark-theme", darkMode);
    document.body.classList.toggle("light-theme", !darkMode);
  }, [darkMode]);

  useEffect(() => {
    setTimeout(() => {
      setAppointments(appts);
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

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className={`App ${darkMode ? "dark-theme" : "light-theme"}`}>
      <FadeIn>
        <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      </FadeIn>
      <FadeIn>
        <div className="container mt-4">
          <div className="row">
            <PersonCalendar
              handleDateSelect={handleDateSelect}
              selectedDate={selectedDate}
              darkMode={darkMode}
            />
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
      </FadeIn>
    </div>
  );
};

export default App;

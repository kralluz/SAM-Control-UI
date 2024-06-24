import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "react-calendar/dist/Calendar.css";
import "../../styles/App.css";
import "../../styles/light-theme.css";
import "../../styles/dark-theme.css";
import { format } from "date-fns";
import AppointmentSlot from "../AppointmentSlot/AppointmentSlot";
import "./AppointmentList.css";

const AppointmentList = ({
  appointments,
  selectedDate,
  darkMode,
  handleAddEditAppointment,
  handleDeleteAppointment,
}) => {
  const [filteredAppointments, setFilteredAppointments] =
    useState(appointments);
  const [isFiltering, setIsFiltering] = useState(false);

  useEffect(() => {
    setFilteredAppointments(appointments);
    setIsFiltering(false);
  }, [appointments]);

  const handleFilterAppointments = (type) => {
    setIsFiltering(true);
    setTimeout(() => {
      let filteredAppointments = [];
      if (type === "Todos") {
        filteredAppointments = appointments;
      } else if (type === "Disponiveis") {
        filteredAppointments = appointments.filter(
          (appointment) => !appointment.ocupado
        );
      } else {
        filteredAppointments = appointments.filter(
          (appointment) =>
            appointment.tipo_exame.toLowerCase() === type.toLowerCase()
        );
      }
      setFilteredAppointments(filteredAppointments);
      setIsFiltering(false);
    }, 1000); 
  };

  return (
    <div className={`agendamentos ${darkMode ? "dark-theme" : "light-theme"}`}>
      <h2 className="texto-adaptavel">
        Agendamentos do dia{" "}
        {selectedDate
          ? format(selectedDate, "dd/MM/yyyy")
          : "Nenhuma data selecionada"}
      </h2>

      <div className="filter-buttons">
        <button onClick={() => handleFilterAppointments("Todos")}>Todos</button>
        <button onClick={() => handleFilterAppointments("Disponiveis")}>
          Disponíveis
        </button>
        <button onClick={() => handleFilterAppointments("us")}>
          Ultrassom
        </button>
        <button onClick={() => handleFilterAppointments("tc")}>
          Tomografia
        </button>
        <button onClick={() => handleFilterAppointments("eco")}>
          Ecocardiograma
        </button>
      </div>
      <TransitionGroup
        className={`appointments-container ${
          darkMode ? "dark-theme" : "light-theme"
        }`}
      >
        {isFiltering ? (
          <CSSTransition key="filtering" timeout={500} classNames="fade">
            <div className="filtering-message">Filtrando...</div>
          </CSSTransition>
        ) : (
          filteredAppointments.map((appointment) => (
            <CSSTransition
              key={appointment.id}
              timeout={500}
              classNames="appointment"
            >
              <AppointmentSlot
                key={appointment.id}
                appointment={appointment}
                darkMode={darkMode}
                handleAddEditAppointment={handleAddEditAppointment}
                handleDeleteAppointment={handleDeleteAppointment}
              />
            </CSSTransition>
          ))
        )}
      </TransitionGroup>
    </div>
  );
};

export default AppointmentList;

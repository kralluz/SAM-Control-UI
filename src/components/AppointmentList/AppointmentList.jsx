import React, { useState, useEffect } from "react";
import "react-calendar/dist/Calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/App.css";
import "../../styles/light-theme.css";
import "../../styles/dark-theme.css";
import { format, parseISO } from "date-fns";
import AppointmentSlot from "../AppointmentSlot/AppointmentSlot";

const AppointmentList = ({ appointments, selectedDate, darkMode, handleAddEditAppointment, handleDeleteAppointment }) => (
    <div className={`agendamentos ${darkMode ? "dark-theme" : "light-theme"}`}>
        <h2 className="texto-adaptavel">
            Agendamentos do dia {selectedDate ? format(selectedDate, "dd/MM/yyyy") : "Nenhuma data selecionada"}
        </h2>
        <div className={`appointments-container ${darkMode ? "dark-theme" : "light-theme"}`}>
            {appointments.map((appointment, index) => (
                <AppointmentSlot
                    key={index}
                    appointment={appointment}
                    darkMode={darkMode}
                    handleAddEditAppointment={handleAddEditAppointment}
                    handleDeleteAppointment={handleDeleteAppointment}
                />
            ))}
        </div>
    </div>
);

export default AppointmentList;
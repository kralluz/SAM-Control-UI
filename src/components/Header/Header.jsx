import { FaRegEye } from "react-icons/fa";
import React, { useContext, useState } from "react";

import "./header.css";
import { AppointmentsContext } from "../../providers/appointmentsProvider";

const Header = ({ toggleDarkMode, darkMode }) => {
  const { readAllAppointments, appointments } = useContext(AppointmentsContext);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  const filteredAppointments = appointments.filter((appointment) => {
    const { patient_name, telephone } = appointment;
    const searchRegex = new RegExp(searchTerm, "i");
    return searchRegex.test(patient_name) || searchRegex.test(telephone);
  });

  return (
    <>
      <header
        className={`d-flex justify-content-between align-items-center ${
          darkMode ? "dark-theme" : "light-theme"
        }`}
      >
        <h1>IMEC Diagnóstico Agenda</h1>
        <div className="search-input-container">
          <input
            type="text"
            placeholder="Nome ou Número"
            value={searchTerm}
            onChange={handleSearch}
          />
          {searchTerm && (
            <button className="clear-button" onClick={handleClearSearch}>
              X
            </button>
          )}
        </div>
        <div className="toggle-container">
          <input
            type="checkbox"
            id="toggle"
            className="toggle-checkbox"
            onChange={toggleDarkMode}
            checked={darkMode}
          />
          <label htmlFor="toggle" className="toggle-label">
            <div className="toggle-ball"></div>
          </label>
        </div>
      </header>
      {searchTerm && (
        <div className="search-results-container">
          <div className="search-results">
            <ul>
              {filteredAppointments.map((appointment) => {
                const formattedTelephone = appointment.telephone.slice(3);
                const ddd = formattedTelephone.slice(0, 2);
                const rest = formattedTelephone.slice(2);
                const formattedPhoneNumber = `(${ddd}) ${rest.slice(
                  0,
                  4
                )}-${rest.slice(4)}`;
                return (
                  <>
                    <li key={appointment.id}>
                      <span>
                        {new Date(appointment.horario).toLocaleDateString(
                          "pt-BR"
                        )}{" "}
                        -{" "}
                      </span>
                      <span>
                        {new Date(appointment.horario).toLocaleTimeString(
                          "pt-BR",
                          { hour: "2-digit", minute: "2-digit" }
                        )}
                        {/*                       <button className="eye-button">
                        <FaRegEye />
                      </button> */}
                      </span>
                      <br />
                      <span>
                        {appointment.patient_name}
                        {"   "}
                        {formattedPhoneNumber}
                      </span>
                      {"   "}
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

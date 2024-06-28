import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "react-calendar/dist/Calendar.css";
import "../../styles/App.css";
import "../../styles/light-theme.css";
import "../../styles/dark-theme.css";
import { format } from "date-fns";
import AppointmentSlot from "../AppointmentSlot/AppointmentSlot";
import "./AppointmentList.css";
const tabStyles = {
  base: {
    _hover: {
      bg: "#A3E4C3",
      color: "#1A202C",
      boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
      transform: "translateY(-2px)"
    },
    _selected: {
      bg: "#C6F6D5",
      color: "#276749",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
    },
    _active: {
      bg: "#81D0B1",
      color: "#1A202C",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2 )",
      transform: "scale(0.95)"
    }
  }
};

const AppointmentList = ({
  appointments,
  selectedDate,
  darkMode,
  handleAddEditAppointment,
  handleDeleteAppointment,
}) => {
  const [filteredAppointments, setFilteredAppointments] = useState(appointments);
  const [isFiltering, setIsFiltering] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Todos");

  useEffect(() => {
    setFilteredAppointments(appointments);
    setIsFiltering(false);
  }, [appointments]);

  const handleFilterAppointments = (type) => {
    setActiveFilter(type);
    setIsFiltering(true);
    setTimeout(() => {
      let filteredAppointments = [];
      if (type === "Todos") {
        filteredAppointments = appointments;
      } else if (type === "Disponiveis") {
        filteredAppointments = appointments.filter((appointment) => !appointment.ocupado);
      } else {
        filteredAppointments = appointments.filter((appointment) =>
          appointment.tipo_exame.toLowerCase() === type.toLowerCase()
        );
      }
      setFilteredAppointments(filteredAppointments);
      setIsFiltering(false);
    }, 1000);
  };

  const renderTab = (type, label) => (
    <Tab
      key={type}
      onClick={() => handleFilterAppointments(type)}
      {...tabStyles.base}
    >
      {label}
    </Tab>
  );

  return (
    <div className={`agendamentos ${darkMode ? "dark-theme" : "light-theme"}`}>
      <h2 className="texto-adaptavel">
        Agendamentos do dia{" "}
        {selectedDate
          ? format(selectedDate, "dd/MM/yyyy")
          : "Nenhuma data selecionada"}
      </h2>
      <hr/>
      <Tabs variant="soft-rounded" colorScheme='green' style={{paddingBottom: '12px'}} >
        <TabList style={{display:'flex', flexWrap:'wrap', alignItems:'flex-end', justifyContent: 'space-around'}}>
          {renderTab("Todos", "Todos")}
          {renderTab("Disponiveis", "Disponíveis")}
          {renderTab("us", "Ultrassom")}
          {renderTab("tc", "Tomografia")}
          {renderTab("eco", "Ecocardiograma")}
        </TabList>
        <TabPanels>
          <TabPanel>
            <TransitionGroup
              className={`appointments-container ${darkMode ? "dark-theme" : "light-theme"}`}
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
          </TabPanel>
        </TabPanels>
      </Tabs>
      <TransitionGroup
        className={`appointments-container ${darkMode ? "dark-theme" : "light-theme"}`}
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
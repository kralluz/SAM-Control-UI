import { createContext, useEffect, useState } from "react";
import appts from "../database";


export const AppointmentsContext = createContext({
  appointments: [],
  createAppointment: () => {},
  readAppointment: () => {},
  readAllAppointments: () => {},
  updateAppointment: () => {},
  deleteAppointment: () => {}
});

export const AppointmentsProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);

  const createAppointment = async (formData) => {
    const newAppointment = { id: appointments.length + 1, ...formData };
    setAppointments([...appointments, newAppointment]);
  };

  const readAllAppointments = async () => {
    setAppointments(appts);
  };

  const readAppointment = async () => {
  };

  const updateAppointment = async (id, formData) => {
    const updatedAppointments = appointments.map((appointment) =>
      appointment.id === id ? { ...appointment, ...formData } : appointment
    );
    setAppointments(updatedAppointments);
  };

  const deleteAppointment = async (id) => {
    const updatedAppointments = appointments.filter(
      (appointment) => appointment.id !== id
    );
    setAppointments(updatedAppointments);
    console.log("Excluindo registro...");
    console.log("Lista de agendamentos atualizada:", updatedAppointments);
  };

  useEffect(() => {
    readAllAppointments();
  }, []);

  return (
    <AppointmentsContext.Provider
      value={{
        appointments,
        createAppointment,
        readAppointment,
        readAllAppointments,
        updateAppointment,
        deleteAppointment,
      }}
    >
      {children}
    </AppointmentsContext.Provider>
  );
};
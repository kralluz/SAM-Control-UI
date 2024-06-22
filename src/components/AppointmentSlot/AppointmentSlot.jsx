import AvailableSlot from "../AvailableSlot/AvailableSlot";
import OccupiedSlot from "../OccupiedSlot/OccupiedSlot";

const AppointmentSlot = ({
  appointment,
  darkMode,
  handleAddEditAppointment,
  handleDeleteAppointment,
}) =>
  appointment.ocupado ? (
    <OccupiedSlot
      appointment={appointment}
      darkMode={darkMode}
      handleAddEditAppointment={handleAddEditAppointment}
      handleDeleteAppointment={handleDeleteAppointment}
    />
  ) : (
    <AvailableSlot
      appointment={appointment}
      darkMode={darkMode}
      handleAddEditAppointment={handleAddEditAppointment}
    />
  );
export default AppointmentSlot;

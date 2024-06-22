import { format, parseISO } from "date-fns";
import "./AppointmentSlot.css";

const AvailableSlot = ({ appointment, darkMode, handleAddEditAppointment }) => (
    <div
      className={`appointment-slot available ${
        darkMode ? "dark-theme" : "light-theme"
      }`}
      onClick={() => handleAddEditAppointment(appointment)}
    >
      <div className="slot-time">
        {format(parseISO(appointment.horario), "HH:mm")}
      </div>
      <div className="add-appointment">
        <span className="add-appointment-text">Clique aqui para adicionar</span>
      </div>
    </div>
  );
  
  export default AvailableSlot;
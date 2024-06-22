import { format, parseISO } from "date-fns";
import "./AppointmentSlot.css";
import AppointmentOptions from "../AppointmentOptions/AppointmentOptions";
import getPlanoSaudeClass from "../../functions/getPlanoSaudeClass";
import getExameClass from "../../functions/getExameClass";

const OccupiedSlot = ({
  appointment,
  darkMode,
  handleAddEditAppointment,
  handleDeleteAppointment,
}) => (
  <div
    className={`appointment-slot occupied ${
      darkMode ? "dark-theme" : "light-theme"
    }`}
  >
    <div className="slot-time">
      <h3>{format(parseISO(appointment.horario), "HH:mm")}</h3>
      <h3> {appointment.patient_name || "Não informado"}</h3>
    </div>
    <div className="appointment-content">
      <div className="appointment-details">
        <p>
          <span className={getPlanoSaudeClass(appointment.plano_saude)}>
            {appointment.plano_saude || "Nenhum"}
          </span>
        </p>
        <p>
          <span className={getExameClass(appointment.tipo_exame)}>
            {appointment.tipo_exame}
          </span>{" "}
          {appointment.nome_exame}
        </p>
      </div>
      <AppointmentOptions />
    </div>
  </div>
);

export default OccupiedSlot;

import { format, parseISO } from "date-fns";
import "./AppointmentSlot.css";
import AppointmentOptions from "../AppointmentOptions/AppointmentOptions";
import getPlanoSaudeClass from "../../functions/getPlanoSaudeClass";
import getExameClass from "../../functions/getExameClass";
import './OccupiedSlot.css'; // Certifique-se de que o arquivo CSS correto está sendo importado

const OccupiedSlot = ({
  appointment,
  darkMode,
  handleAddEditAppointment,
  handleDeleteAppointment,
}) => {
  const highlightX = (text) => {
    const parts = text.split(/(x)/i); // Split text by 'x' or 'X'
    return parts.map((part, index) =>
      part.toLowerCase() === 'x' ? <span key={index} className="highlight-x">{part}</span> : part
    );
  };

  return (
    <div className={`appointment-slot occupied ${darkMode ? "dark-theme" : "light-theme"}`}>
      <div className="slot-time">
        <h3>{format(parseISO(appointment.horario), "HH:mm")}</h3>
        <h3>{appointment.patient_name || "Não informado"}</h3>
      </div>
      <div className="appointment-content">
        <div className="appointment-details">
          <p>
            <span className={getPlanoSaudeClass(appointment.plano_saude)}>
              {highlightX(appointment.plano_saude || "Nenhum")}
            </span>
          </p>
          <p>
            <span className={getExameClass(appointment.tipo_exame)}>
              {appointment.tipo_exame}
            </span>{" "}
            {appointment.nome_exame}
          </p>
        </div>
        <AppointmentOptions telephone={appointment.telephone} />
      </div>
    </div>
  );
};

export default OccupiedSlot;

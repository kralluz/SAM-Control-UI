import { format, parseISO } from "date-fns";
import AppointmentOptions from "../AppointmentOptions/AppointmentOptions";
import getPlanoSaudeClass from "../../functions/getPlanoSaudeClass";
import getExameClass from "../../functions/getExameClass";
import "./OccupiedSlot.css";

const OccupiedSlot = ({ appointment, darkMode, handleDeleteAppointment }) => {
  const highlightX = (text) => {
    const parts = text.split(/(x)/i);
    return parts.map((part, index) =>
      part.toLowerCase() === "x" ? (
        <span key={index} className="highlight-x">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div
      className={`appointment-slot occupied ${darkMode ? "dark-theme" : "light-theme"
        }`}
    >
      <div className="slot-time">
        <h3>{format(parseISO(appointment.horario), "HH:mm")}</h3>
        <div>
          <h3>{appointment.patient_name || "Não informado"}</h3>
          <h6>{appointment.telephone}</h6>
        </div>
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
        <AppointmentOptions
          data={appointment}
          onDelete={() => handleDeleteAppointment(appointment.id)}
        />
      </div>
    </div>
  );
};

export default OccupiedSlot;

import { format, parseISO } from "date-fns";
import "./AvailableSlot.css";
import { useState } from "react";
import AddApptModal from "../AddApptModal/AddApptModal";

const AvailableSlot = ({ appointment, darkMode }) => {
  const [addModal, setAddModal] = useState(false);

  const handleEdit = (newData) => {
    setAddModal(false);
  };

  const handleClose = () => {
    addModal ? setAddModal(false) : setAddModal(true);
  };

  return (
    <div
      className={`appointment-slot available ${
        darkMode ? "dark-theme" : "light-theme"
      }`}
      onClick={handleClose}
    >
      <div className="slot-time">
        {format(parseISO(appointment.horario), "HH:mm")}
      </div>
      <div className="add-appointment">
        <span className="add-appointment-text">Clique aqui para adicionar</span>
      </div>
      <AddApptModal
        appointment={appointment}
        isOpen={addModal}
        onRequestClose={handleClose}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default AvailableSlot;

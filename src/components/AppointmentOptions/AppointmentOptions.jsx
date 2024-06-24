import React, { useContext, useState } from "react";
import { FaPhone, FaWhatsapp, FaTrash, FaRegEdit } from "react-icons/fa";
import Modal from "react-modal";
import "./AppointmentOptions.css";
import PhoneModal from "../PhoneModal/PhoneModal";
import TrashModal from "../TrashModal/TrashModal";
import EditModal from "../EditModal/EditModal";
import { AppointmentsContext } from "../../providers/appointmentsProvider";

Modal.setAppElement("#root");

const AppointmentOptions = ({ data }) => {
  const { deleteAppointment, updateAppointment } =
    useContext(AppointmentsContext);
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
  const [isTrashModalOpen, setIsTrashModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleCall = () => {
    console.log("Realizando ligação...");
    setIsPhoneModalOpen(false);
  };

  const onDelete = (id) => {
    setIsTrashModalOpen(false);
    deleteAppointment(id);
  };

  const handleEdit = (editData) => {
    updateAppointment(data.id, editData);
    setIsEditModalOpen(false);
  };

  const onWhatsapp = () => {
    window.open(
      `https://api.whatsapp.com/send?phone=${data.telephone}&text=Olá, tudo bem?`,
      "_blank"
    );
  };

  return (
    <div className="appointment-options">
      <button onClick={onWhatsapp} data-title="Enviar Mensagem no WhatsApp">
        <FaWhatsapp size={25} />
      </button>
      <button onClick={() => setIsPhoneModalOpen(true)} data-title="Ligar">
        <FaPhone />
      </button>
      <button onClick={() => setIsTrashModalOpen(true)} data-title="Excluir">
        <FaTrash />
      </button>
      <button onClick={() => setIsEditModalOpen(true)} data-title="Editar">
        <FaRegEdit size={25} />
      </button>
      <PhoneModal
        isOpen={isPhoneModalOpen}
        onRequestClose={() => setIsPhoneModalOpen(false)}
        telephone={data.telephone}
      />
      <TrashModal
        isOpen={isTrashModalOpen}
        onRequestClose={() => setIsTrashModalOpen(false)}
        onDelete={() => deleteAppointment(data.id)}
      />
      <EditModal
        isOpen={isEditModalOpen}
        onRequestClose={() => setIsEditModalOpen(false)}
        onEdit={handleEdit}
        data={data}
      />
    </div>
  );
};

export default AppointmentOptions;

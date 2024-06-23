import React, { useState } from "react";
import { FaPhone, FaWhatsapp, FaTrash, FaRegEdit } from "react-icons/fa";
import Modal from "react-modal";
import "./AppointmentOptions.css";
import PhoneModal from "../PhoneModal/PhoneModal";
import TrashModal from "../TrashModal/TrashModal";
import EditModal from "../EditModal/EditModal";

Modal.setAppElement("#root");

const AppointmentOptions = ({ telephone }) => {
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
  const [isTrashModalOpen, setIsTrashModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleCall = () => {
    console.log("Realizando ligação...");
    setIsPhoneModalOpen(false);
  };
;

  const handleDelete = () => {
    console.log("Excluindo registro...");
    setIsTrashModalOpen(false);
  };

  const handleEdit = (newData) => {
    console.log("Salvando novos dados:", newData);
    setIsEditModalOpen(false);
  };
  const onWhatsapp = () => {
    window.open(`https://api.whatsapp.com/send?phone=${telephone}&text=Olá, tudo bem?`, '_blank');
  };

  return (
    <div className="appointment-options">
      <button
        onClick={onWhatsapp}
        data-title="Enviar Mensagem no WhatsApp"
      >
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
        telephone={telephone}
      />
      <TrashModal
        isOpen={isTrashModalOpen}
        onRequestClose={() => setIsTrashModalOpen(false)}
        onDelete={handleDelete}
      />
      <EditModal
        isOpen={isEditModalOpen}
        onRequestClose={() => setIsEditModalOpen(false)}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default AppointmentOptions;

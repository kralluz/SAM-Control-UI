import React, { useState } from "react";
import { FaPhone, FaWhatsapp, FaTrash, FaRegEdit } from "react-icons/fa";
import Modal from "react-modal";
import "./AppointmentOptions.css";
import PhoneModal from "../PhoneModal/PhoneModal";
import WhatsappModal from "../WhatsappModal/WhatsappModal";
import TrashModal from "../TrashModal/TrashModal";
import EditModal from "../EditModal/EditModal";

Modal.setAppElement("#root");


const AppointmentOptions = () => {
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
  const [isWhatsappModalOpen, setIsWhatsappModalOpen] = useState(false);
  const [isTrashModalOpen, setIsTrashModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleCall = () => {
    console.log("Realizando ligação...");
    setIsPhoneModalOpen(false);
  };

  const handleWhatsapp = () => {
    console.log("Enviando mensagem no WhatsApp...");
    setIsWhatsappModalOpen(false);
  };

  const handleDelete = () => {
    console.log("Excluindo registro...");
    setIsTrashModalOpen(false);
  };

  const handleEdit = (newData) => {
    console.log("Salvando novos dados:", newData);
    setIsEditModalOpen(false);
  };

  return (
    <div className="appointment-options">
      <button
        onClick={() => setIsWhatsappModalOpen(true)}
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
        onCall={handleCall}
      />
      <WhatsappModal
        isOpen={isWhatsappModalOpen}
        onRequestClose={() => setIsWhatsappModalOpen(false)}
        onWhatsapp={handleWhatsapp}
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

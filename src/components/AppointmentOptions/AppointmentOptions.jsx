import React, { useContext, useState } from "react";
import { FaPhone, FaWhatsapp, FaTrash, FaRegEdit } from "react-icons/fa";
import { RiEdit2Fill } from "react-icons/ri";
import { ButtonGroup } from "@chakra-ui/react";
import Modal from "react-modal";
import "./AppointmentOptions.css";
import PhoneModal from "../PhoneModal/PhoneModal";
import TrashModal from "../TrashModal/TrashModal";
import EditModal from "../EditModal/EditModal";
import { AppointmentsContext } from "../../providers/appointmentsProvider";
import RoundButton from "../RoundButton/RoundButton.jsx";

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
    <>
      <ButtonGroup style={{display:'flex', flexWrap:'wrap', alignItems:'flex-end'}}>
        <RoundButton
          onClick={onWhatsapp}
          icon={<FaWhatsapp size={22} />}
          title="Enviar Mensagem no WhatsApp"
        />
        <RoundButton
          onClick={() => setIsPhoneModalOpen(true)}
          icon={<FaPhone />}
          title="Ligar"
        />
        <RoundButton
          onClick={() => setIsTrashModalOpen(true)}
          icon={<FaTrash />}
          title="Excluir"
        />
        <RoundButton
          onClick={() => setIsEditModalOpen(true)}
          icon={<RiEdit2Fill />}
          title="Editar"
        />
      </ButtonGroup>

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
    </>
  );
};

export default AppointmentOptions;

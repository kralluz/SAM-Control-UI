import { useState } from "react";
import Modal from "react-modal";

const EditModal = ({ isOpen, onRequestClose, onEdit }) => {
  const [newData, setNewData] = useState("");

  const handleSave = () => {
    onEdit(newData);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="Modal"
      overlayClassName="Overlay"
    >
      <h2>Editar Dados</h2>
      <input
        type="text"
        value={newData}
        onChange={(e) => setNewData(e.target.value)}
        placeholder="Novos Dados"
      />
      <button onClick={handleSave} className="confirm-button">
        Salvar
      </button>
      <button onClick={onRequestClose} className="cancel-button">
        Cancelar
      </button>
    </Modal>
  );
};

export default EditModal;

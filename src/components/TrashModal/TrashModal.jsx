import Modal from "react-modal";

const TrashModal = ({ isOpen, onRequestClose, onDelete }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="Modal"
      overlayClassName="Overlay"
    >
      <h2>Excluir</h2>
      <p>Deseja excluir este registro?</p>
      <button onClick={() => onDelete()} className="confirm-button">
        Sim
      </button>
      <button onClick={onRequestClose} className="cancel-button">
        Não
      </button>
    </Modal>
  );
};

export default TrashModal;

import Modal from "react-modal";
const PhoneModal = ({ isOpen, onRequestClose, onCall }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="Modal"
      overlayClassName="Overlay"
    >
      <h2>Ligação</h2>
      <p>Deseja ligar para este contato?</p>
      <button onClick={onCall} className="confirm-button">
        Sim
      </button>
      <button onClick={onRequestClose} className="cancel-button">
        Não
      </button>
    </Modal>
  );
};
export default PhoneModal;

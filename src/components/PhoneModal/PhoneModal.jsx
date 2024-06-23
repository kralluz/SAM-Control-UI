import Modal from "react-modal";
const PhoneModal = ({ isOpen, onRequestClose, telephone }) => {
  const onCall = () => {
    window.location.href = `tel:${telephone}`;
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="Modal"
      overlayClassName="Overlay"
    >
      <h2>Ligação</h2>
      <p>Deseja ligar para {telephone}?</p>
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

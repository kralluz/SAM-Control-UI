import Modal from "react-modal";

const WhatsappModal = ({ isOpen, onRequestClose, onWhatsapp }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="Modal"
      overlayClassName="Overlay"
    >
      <h2>Enviar Mensagem no WhatsApp</h2>
      <p>Deseja enviar uma mensagem pelo WhatsApp?</p>
      <button onClick={onWhatsapp} className="confirm-button">
        Sim
      </button>
      <button onClick={onRequestClose} className="cancel-button">
        Não
      </button>
    </Modal>
  );
};
export default WhatsappModal;

import Modal from "react-modal";
import { useState } from "react";
import { motion } from "framer-motion";
import "./AddApptModal.css";

Modal.setAppElement("#root");

const AddApptModal = ({ isOpen, onRequestClose, onEdit }) => {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    exame: "",
    plano: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = (event) => {
    event.preventDefault();
    onEdit(formData);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="Modal"
      overlayClassName="Overlay"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.3 }}
      >
        <h1 onClick={(e) => e.stopPropagation()} className="ModalTitle">
          Formulário de Agendamento
        </h1>
        <form
          className="Form"
          onClick={(e) => e.stopPropagation()}
          onSubmit={handleSave}
        >
          <div className="FormGroup">
            <label htmlFor="nome" className="Label">
              Nome:
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleInputChange}
              className="Input"
              required
            />
          </div>

          <div className="FormGroup">
            <label htmlFor="telefone" className="Label">
              Telefone:
            </label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleInputChange}
              className="Input"
              required
            />
          </div>

          <div className="FormGroup">
            <label htmlFor="exame" className="Label">
              Nome do Exame:
            </label>
            <input
              type="text"
              id="exame"
              name="exame"
              value={formData.exame}
              onChange={handleInputChange}
              className="Input"
              required
            />
          </div>

          <div className="FormGroup">
            <label htmlFor="plano" className="Label">
              Plano de Saúde:
            </label>
            <select
              id="plano"
              name="plano"
              value={formData.plano}
              onChange={handleInputChange}
              className="Input"
              required
            >
              <option value="">Selecione o plano de saúde</option>
              <option value="IPASGO">IPASGO</option>
              <option value="Unimed">Unimed</option>
              <option value="CASSI">CASSI</option>
              <option value="Bradesco Saúde">Bradesco Saúde</option>
              <option value="Saúde Caixa">Saúde Caixa</option>
            </select>
          </div>

          <div className="ButtonGroup">
            <input type="submit" value="Agendar" className="Button" />
            <button onClick={onRequestClose} className="Button cancelButton">
              Cancelar
            </button>
          </div>
        </form>
      </motion.div>
    </Modal>
  );
};

export default AddApptModal;

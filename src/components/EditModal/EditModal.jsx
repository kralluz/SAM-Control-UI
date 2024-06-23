import { useState } from "react";
import Modal from "react-modal";

const EditModal = ({ isOpen, onRequestClose, onEdit }) => {
  const [newData, setNewData] = useState("");

  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
      <div>
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

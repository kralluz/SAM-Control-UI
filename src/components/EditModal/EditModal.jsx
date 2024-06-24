import { useContext, useState } from "react";
import Modal from "react-modal";
import { AppointmentsContext } from "../../providers/appointmentsProvider";

const EditModal = ({ isOpen, onRequestClose, data }) => {
  const { updateAppointment } = useContext(AppointmentsContext);
  const [editData, setEditData] = useState({
    id: data.id,
    horario: data.horario,
    ocupado: data.ocupado,
    doctor_id: data.doctor_id,
    patient_name: data.patient_name || "",
    plano_saude: data.plano_saude || "",
    tipo_exame: data.tipo_exame || "",
    nome_exame: data.nome_exame || "",
    telephone: data.telephone || "",
  });

  const handleInputChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    updateAppointment(data.id, editData);
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
        <label htmlFor="patient_name" className="Label">
          Nome:
        </label>
        <input
          type="text"
          id="patient_name"
          name="patient_name"
          value={editData.patient_name}
          onChange={handleInputChange}
          className="Input"
          required
        />
      </div>

      <div className="FormGroup">
        <label htmlFor="telephone" className="Label">
          Telefone:
        </label>
        <input
          type="tel"
          id="telephone"
          name="telephone"
          value={editData.telephone}
          onChange={handleInputChange}
          className="Input"
          required
        />
      </div>

      <div className="FormGroup">
        <label htmlFor="nome_exame" className="Label">
          Nome do Exame:
        </label>
        <input
          type="text"
          id="nome_exame"
          name="nome_exame"
          value={editData.nome_exame}
          onChange={handleInputChange}
          className="Input"
          required
        />
      </div>

      <div className="FormGroup">
        <label htmlFor="plano_saude" className="Label">
          Plano de Saúde:
        </label>
        <select
          id="plano_saude"
          name="plano_saude"
          value={editData.plano_saude}
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

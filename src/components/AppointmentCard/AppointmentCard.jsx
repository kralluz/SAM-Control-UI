import { Button } from "react-bootstrap";
import { format, parseISO } from "date-fns";

const AppointmentSlot = ({ appointment, darkMode, handleAddEditAppointment, handleDeleteAppointment }) => (
    <div
        className={`appointment-slot ${appointment.ocupado ? "occupied" : "available"} ${darkMode ? "dark-theme" : "light-theme"}`}
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            position: "relative",
        }}
    >
        <div
            style={{
                alignSelf: "flex-start",
                fontSize: "20px",
                fontWeight: "bold",
                marginBottom: "5px",
                color: darkMode ? "#FFFFFF" : "#000000",
            }}
        >
            {format(parseISO(appointment.horario), "HH:mm")}
        </div>
        {appointment.ocupado ? (
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                }}
            >
                <div>
                    <p>Paciente: {appointment.patient_name || "Não informado"}</p>
                    <p>Plano de Saúde: {appointment.plano_saude || "Nenhum"}</p>
                    <p>Exame: {appointment.tipo_exame}</p>
                </div>
                <div className="d-flex flex-column align-items-end" style={{ textAlign: "right" }}>
                    <Button
                        onClick={() => handleAddEditAppointment(appointment)}
                        variant="warning"
                        className="mb-2"
                        style={{
                            backgroundColor: "#B8B8B8",
                            borderColor: "#B8B8B8",
                            color: "#000000",
                        }}
                    >
                        Editar
                    </Button>
                </div>
            </div>
        ) : (
            <div
                style={{
                    width: "100%",
                    textAlign: "center",
                    padding: "20px",
                    border: "2px dashed #787878",
                    cursor: "pointer",
                    fontSize: "18px",
                    fontFamily: "Arial, sans-serif",
                    letterSpacing: "1px",
                }}
                onClick={() => handleAddEditAppointment(appointment)}
            >
                <span style={{ color: "#787878", fontWeight: "bold" }}>
                    Clique aqui para adicionar
                </span>
            </div>
        )}
        {appointment.ocupado && (
            <Button
                onClick={() => handleDeleteAppointment(appointment)}
                variant="danger"
                style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    backgroundColor: "#B8B8B8",
                    borderColor: "#B8B8B8",
                    color: "#000000",
                }}
            >
                Excluir
            </Button>
        )}
    </div>
);


export default AppointmentSlot;
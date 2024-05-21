import React, { useState, useEffect } from "react";
import "react-calendar/dist/Calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import appts from "./database";
import "./App.css";
import "./light-theme.css";
import "./dark-theme.css";
import { format, parseISO } from "date-fns";
import PersonCalendar from "./calendar";
import LoadingSpinner from "./LoadingSpinner";
import { useSpring, animated } from "react-spring";

function FadeIn({ children }) {
    const props = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 1000 },
    });

    return <animated.div style={props}>{children}</animated.div>;
}

function App() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [appointments, setAppointments] = useState([]);
    const [darkMode, setDarkMode] = useState(false);
    const [loading, setLoading] = useState(true);

    // Manipulação da mudança de modo claro/escuro
    useEffect(() => {
        document.body.classList.toggle("dark-theme", darkMode);
        document.body.classList.toggle("light-theme", !darkMode);
    }, [darkMode]);

    // Carregamento inicial dos dados
    useEffect(() => {
        setTimeout(() => {
            setAppointments(appts);
            setLoading(false); // Isso garantirá que o spinner desapareça após o carregamento
        }, 6000);
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const handleDateSelect = (date) => {
        setSelectedDate(date);
    };

    const handleAddEditAppointment = (appointment) => {
        if (appointment.ocupado) {
            console.log("Editar agendamento:", appointment);
        } else {
            console.log("Adicionar agendamento:", appointment);
        }
    };

    const handleDeleteAppointment = (appointment) => {
        console.log("Excluir agendamento:", appointment);
    };

    if (loading) {
        return <LoadingSpinner />;
    }
    return (
        <div className={`App ${darkMode ? "dark-theme" : "light-theme"}`}>
            <FadeIn>
                <header
                    className={`d-flex justify-content-between align-items-center ${
                        darkMode ? "dark-theme" : "light-theme"
                    }`}
                >
                    <h1>IMEC Diagnóstico Agenda</h1>
                    <div className="toggle-container">
                        <input
                            type="checkbox"
                            id="toggle"
                            className="toggle-checkbox"
                            onChange={toggleDarkMode}
                            checked={darkMode}
                        />
                        <label htmlFor="toggle" className="toggle-label">
                            <div className="toggle-ball"></div>
                        </label>
                    </div>
                </header>
            </FadeIn>
            <FadeIn>
                <div className="container mt-4">
                    <div className="row">
                        <PersonCalendar
                            handleDateSelect={handleDateSelect}
                            selectedDate={selectedDate}
                            darkMode={darkMode}
                        />
                        <div className="col-md-8">
                            <div
                                className={`agendamentos ${
                                    darkMode ? "dark-theme" : "light-theme"
                                }`}
                            >
                                <h2>
                                    Agendamentos do dia{" "}
                                    {selectedDate
                                        ? format(selectedDate, "dd/MM/yyyy")
                                        : "Nenhuma data selecionada"}
                                </h2>
                                <div
                                    className={`appointments-container ${
                                        darkMode ? "dark-theme" : "light-theme"
                                    }`}
                                >
                                    {appointments.map((appointment, index) => (
                                        <div
                                            key={index}
                                            className={`appointment-slot ${
                                                appointment.ocupado
                                                    ? "occupied"
                                                    : "available"
                                            } ${
                                                darkMode
                                                    ? "dark-theme"
                                                    : "light-theme"
                                            }`}
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
                                                    color: darkMode
                                                        ? "#FFFFFF"
                                                        : "#000000",
                                                }}
                                            >
                                                {format(
                                                    parseISO(
                                                        appointment.horario
                                                    ),
                                                    "HH:mm"
                                                )}
                                            </div>
                                            {appointment.ocupado ? (
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        justifyContent:
                                                            "space-between",
                                                        alignItems: "center",
                                                        width: "100%",
                                                    }}
                                                >
                                                    <div>
                                                        <p>
                                                            Paciente:{" "}
                                                            {appointment.patient_name ||
                                                                "Não informado"}
                                                        </p>
                                                        <p>
                                                            Plano de Saúde:{" "}
                                                            {appointment.plano_saude ||
                                                                "Nenhum"}
                                                        </p>
                                                        <p>
                                                            Exame:{" "}
                                                            {
                                                                appointment.tipo_exame
                                                            }
                                                        </p>
                                                    </div>
                                                    <div
                                                        className="d-flex flex-column align-items-end"
                                                        style={{
                                                            textAlign: "right",
                                                        }}
                                                    >
                                                        <Button
                                                            onClick={() =>
                                                                handleAddEditAppointment(
                                                                    appointment
                                                                )
                                                            }
                                                            variant="warning"
                                                            className="mb-2"
                                                            style={{
                                                                backgroundColor:
                                                                    darkMode
                                                                        ? "#B8B8B8" // Tom desbotado para o modo escuro
                                                                        : "#B8B8B8", // Tom desbotado para o modo claro
                                                                borderColor:
                                                                    darkMode
                                                                        ? "#B8B8B8"
                                                                        : "#E0E0E0",
                                                                color: darkMode
                                                                    ? "#000000"
                                                                    : "#000000",
                                                            }}
                                                        >
                                                            editar
                                                        </Button>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div
                                                    style={{
                                                        width: "100%",
                                                        textAlign: "center",
                                                        padding: "20px",
                                                        border: `2px dashed #787878`,
                                                        cursor: "pointer",
                                                        fontSize: "18px",
                                                        fontFamily:
                                                            "Arial, sans-serif",
                                                        letterSpacing: "1px",
                                                    }}
                                                    onClick={() =>
                                                        handleAddEditAppointment(
                                                            appointment
                                                        )
                                                    }
                                                >
                                                    <span
                                                        style={{
                                                            color: "#787878",
                                                            fontWeight: "bold",
                                                        }}
                                                    >
                                                        clique aqui para
                                                        adicionar
                                                    </span>
                                                </div>
                                            )}
                                            {appointment.ocupado && (
                                                <Button
                                                    onClick={() =>
                                                        handleDeleteAppointment(
                                                            appointment
                                                        )
                                                    }
                                                    variant="danger"
                                                    style={{
                                                        position: "absolute",
                                                        top: "10px",
                                                        right: "10px",
                                                        backgroundColor:
                                                            darkMode
                                                                ? "#B8B8B8" // Tom desbotado para o modo escuro
                                                                : "#B8B8B8", // Tom desbotado para o modo claro
                                                        borderColor: darkMode
                                                            ? "#B8B8B8"
                                                            : "#E0E0E0",
                                                        color: darkMode
                                                            ? "#000000"
                                                            : "#000000",
                                                    }}
                                                >
                                                    excluir
                                                </Button>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}

export default App;

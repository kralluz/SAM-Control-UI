import React, { useState, useEffect } from "react";
import "react-calendar/dist/Calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import appts from "./database";
import "./App.css";
import "./light-theme.css";
import "./dark-theme.css";
import { format, parseISO } from "date-fns";
import PersonCalendar from "./calendar";
import LoadingSpinner from "./LoadingSpinner";
import { useSpring, animated } from "react-spring";
import AppointmentSlot from  './components/AppointmentCard/AppointmentCard'

const FadeIn = ({ children }) => {
    const props = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 1000 },
    });

    return <animated.div style={props}>{children}</animated.div>;
};

const App = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [appointments, setAppointments] = useState([]);
    const [darkMode, setDarkMode] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.body.classList.toggle("dark-theme", darkMode);
        document.body.classList.toggle("light-theme", !darkMode);
    }, [darkMode]);

    useEffect(() => {
        setTimeout(() => {
            setAppointments(appts);
            setLoading(false);
        },500);
    }, []);

    const toggleDarkMode = () => setDarkMode(!darkMode);

    const handleDateSelect = (date) => setSelectedDate(date);

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
                <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
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
                            <AppointmentList
                                appointments={appointments}
                                selectedDate={selectedDate}
                                darkMode={darkMode}
                                handleAddEditAppointment={handleAddEditAppointment}
                                handleDeleteAppointment={handleDeleteAppointment}
                            />
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>
    );
};

const Header = ({ toggleDarkMode, darkMode }) => (
    <header className={`d-flex justify-content-between align-items-center ${darkMode ? "dark-theme" : "light-theme"}`}>
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
);

const AppointmentList = ({ appointments, selectedDate, darkMode, handleAddEditAppointment, handleDeleteAppointment }) => (
    <div className={`agendamentos ${darkMode ? "dark-theme" : "light-theme"}`}>
        <h2>
            Agendamentos do dia {selectedDate ? format(selectedDate, "dd/MM/yyyy") : "Nenhuma data selecionada"}
        </h2>
        <div className={`appointments-container ${darkMode ? "dark-theme" : "light-theme"}`}>
            {appointments.map((appointment, index) => (
                <AppointmentSlot
                    key={index}
                    appointment={appointment}
                    darkMode={darkMode}
                    handleAddEditAppointment={handleAddEditAppointment}
                    handleDeleteAppointment={handleDeleteAppointment}
                />
            ))}
        </div>
    </div>
);


export default App;

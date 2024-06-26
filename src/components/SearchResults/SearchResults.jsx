import { useSpring, animated } from 'react-spring';
import React, { useState, useContext } from "react";
import Modal from "react-modal";
import { motion } from "framer-motion";
import { AppointmentsContext } from "../../providers/appointmentsProvider";
import "./SearchModal.css";

Modal.setAppElement("#root");

const SearchModal = ({ isOpen, onRequestClose }) => {
  const { appointments } = useContext(AppointmentsContext);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  const filteredAppointments = appointments.filter((appointment) => {
    const { patient_name, telephone } = appointment;
    const searchRegex = new RegExp(searchTerm, "i");
    return searchRegex.test(patient_name) || searchRegex.test(telephone);
  });

  const inputAnimation = useSpring({
    to: { width: searchTerm ? '100%' : '70%' }, // Ajuste conforme necessário
    config: { tension: 200, friction: 20 }
  });

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
    <div className="input-search-box">
      <animated.input
        type="search"
        placeholder="Nome ou Telefone"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          ...inputAnimation,
          padding: '12px 20px',
          margin: '8px 0',
          boxSizing: 'border-box',
          borderRadius: '6px',
          backgroundColor: '#c6f6d5',
          color: '#276749',
          fontFamily: 'Elephant, sans-serif',
          fontSize: '16px',
          border: 'none',
          outline: 'none'
        }}
      />
    </div>
      </motion.div>
    </Modal>
  );
};

export default SearchModal;

import React, { useContext, useState } from "react";
import {
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Box,
  Text,
  Stack,
  Button,
} from "@chakra-ui/react";
import { FaTimes, FaRegEye } from "react-icons/fa";
import { AppointmentsContext } from "../../providers/appointmentsProvider";
import SearchModal from "../SearchResults/SearchResults";

const Header = ({ toggleDarkMode, darkMode }) => {
  const { readAllAppointments, appointments } = useContext(AppointmentsContext);
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
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <>
      <header className={`d-flex justify-content-between align-items-center`}>
        <h1>IMEC Diagnóstico Agenda</h1>
      </header>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          style={{ display: "flex", justifyContent: "center" }}
          placeholder="Pesquisar..."
          type="search"
          onClick={() => setSearchOpen(true)}
        />
      </div>
      <SearchModal
        isOpen={searchOpen}
        onRequestClose={() => setSearchOpen(false)}
      ></SearchModal>
    </>
  );
};

export default Header;

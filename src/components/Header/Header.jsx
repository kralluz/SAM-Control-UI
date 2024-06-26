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
      <header
        className={`d-flex justify-content-between align-items-center ${
          darkMode ? "dark-theme" : "light-theme"
        }`}
      >
        <h1>IMEC Diagnóstico Agenda</h1>
        <input type="search" onClick={() => setSearchOpen(true)} />
        <SearchModal
          isOpen={searchOpen}
          onRequestClose={() => setSearchOpen(false)}
        ></SearchModal>

        <InputGroup style={{ width: "300px" }}>
          <Input
            type="text"
            placeholder="Nome ou Número"
            value={searchTerm}
            onChange={handleSearch}
          />
          {searchTerm && (
            <InputRightElement>
              <IconButton
                aria-label="Clear search"
                icon={<FaTimes />}
                onClick={handleClearSearch}
                variant="ghost"
              />
            </InputRightElement>
          )}
        </InputGroup>
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
      {searchTerm && (
        <Box mt={4} d="flex" justifyContent="center">
          <Text fontSize="lg">Resultados:</Text>
          <Stack spacing={4} mt={4}>
            {filteredAppointments.map((appointment) => {
              const formattedTelephone = appointment.telephone.slice(3);
              const ddd = formattedTelephone.slice(0, 2);
              const rest = formattedTelephone.slice(2);
              const formattedPhoneNumber = `(${ddd}) ${rest.slice(
                0,
                4
              )}-${rest.slice(4)}`;
              return (
                <Box
                  key={appointment.id}
                  maxW="300px"
                  bg={darkMode ? "gray.700" : "gray.100"}
                  p={4}
                  rounded="md"
                  shadow="md"
                  textAlign="center"
                >
                  <Text>
                    {new Date(appointment.horario).toLocaleDateString("pt-BR")}{" "}
                    -{" "}
                    {new Date(appointment.horario).toLocaleTimeString("pt-BR", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </Text>
                  <Text>{appointment.patient_name}</Text>
                  <Text>{formattedPhoneNumber}</Text>
                  <Button
                    mt={2}
                    colorScheme="blue"
                    rightIcon={<FaRegEye />}
                    variant="outline"
                    onClick={() => {
                      // Implement your logic for viewing appointment details
                      console.log("View appointment:", appointment.id);
                    }}
                  >
                    Ver Agendamento
                  </Button>
                </Box>
              );
            })}
          </Stack>
        </Box>
      )}
    </>
  );
};

export default Header;

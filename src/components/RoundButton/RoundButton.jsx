import React from "react";
import { Button } from "@chakra-ui/react";

const RoundButton = ({ onClick, icon, title, ...rest }) => {
  return (
    <Button
      width="40px"
      height="40px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      padding="0"
      borderRadius="full"
      colorScheme="teal"
      onClick={onClick}
      bg="#C6F6D5"
      color="#276749"
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
      _hover={{
        bg: "#A3E4C3",
        color: "#1A202C",
        boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
        transform: "translateY(-2px)"
      }}
      _active={{
        bg: "#81D0B1",
        color: "#1A202C",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        transform: "scale(0.95)"
      }}
      {...rest}
    >
      {icon}
    </Button>
  );
};

export default RoundButton;

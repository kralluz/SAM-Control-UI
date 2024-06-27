import { FaSearch } from "react-icons/fa";
import React, { useState } from "react";
import SearchModal from "../SearchResults/SearchResults";
import "./header.css";

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  const headerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 0",
    flexWrap: 'wrap',
    gap: "20% ",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const titleStyle = {
    width: "300px"
  };
  const inputStyle = {
    width: searchOpen ? "0px" : "200px",
    padding: searchOpen ? "0px" : "10px",
    height: "30px",
    transition: "width 0.2s ease-in-out",
    border: searchOpen ? "none" : "3px solid #C6F6D5",
    boxShadow: "2px 2px 10px #ccc",
    borderRadius: "6px",
    textIndent: "30px",
  };

  return (
    <>
      <header style={headerStyle}>
        <div style={titleStyle}>
          <h1 style={{ fontSize: "1.5rem", textAlign: 'center' }}>IMEC Diagnóstico Agenda</h1>
        </div>
        <div style={{ display: "flex", justifyContent: "center", width: " 300px" }}>
          <div style={{ position: "relative" }}>
            <FaSearch
              size={20}
              style={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
            <input
              style={inputStyle}
              placeholder="Pesquisar..."
              type="text"
              onClick={() => setSearchOpen(true)}
              className="search-trigger"
            />
          </div>
        </div>
      </header>
      <SearchModal isOpen={searchOpen} onRequestClose={() => setSearchOpen(false)} />
    </>
  );
};

export default Header;

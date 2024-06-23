import React from "react";
import Calendar from "react-calendar";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import "react-calendar/dist/Calendar.css";

const lightTheme = {
  backgroundColor: "#f9f9f9",
  textColor: "#333",
  borderColor: "#9c9c9c",
  hoverBackgroundColor: "#bbbbbb",
  activeBackgroundColor: "#d4d4d4",
  weekdayBackgroundColor: "#e0e0e0",
  boxShadow: "rgba(0, 0, 0, 0.1)",
  buttonBackgroundColor: "#ffffff",
  buttonHoverColor: "#dddddd",
  buttonTextColor: "#333",
  weekendColor: "darkred",
  otherMonthDayColor: "#333",
};

const darkTheme = {
  backgroundColor: "#1e1e1e",
  textColor: "#ffffff",
  borderColor: "#3a3a3a",
  hoverBackgroundColor: "#3a3a3a",
  activeBackgroundColor: "#3b3b3b",
  weekdayBackgroundColor: "#2a2a2a",
  boxShadow: "rgba(0, 0, 0, 0.3)",
  buttonBackgroundColor: "transparent",
  buttonHoverColor: "#555",
  buttonTextColor: "#ffffff",
  weekendColor: "darkred",
  otherMonthDayColor: "#333",
};

const GlobalStyle = createGlobalStyle`
  .react-calendar button:enabled:hover {
    background-color: ${(props) => props.theme.hoverBackgroundColor} !important;
  }

  .react-calendar {
    background-color: ${(props) => props.theme.backgroundColor};
    border: 1px solid ${(props) => props.theme.borderColor};
    border-radius: 10px;
    color: ${(props) => props.theme.textColor};
    box-shadow: 0 4px 8px ${(props) => props.theme.boxShadow};
    padding: 10px;
  }

  .react-calendar__navigation {
    background-color: ${(props) => props.theme.weekdayBackgroundColor};
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
    padding: 10px 0;
  }
  
  .react-calendar__navigation button {
    color: ${(props) => props.theme.buttonTextColor};
    background: ${(props) => props.theme.buttonBackgroundColor};
    transition: background-color 0.2s ease;
    margin: 0px 3px;
    borer:solid 1px black ;
    font-size: 0.9vw;
    max-width: 100%;
    text-align: center;
    font-weight: bold;
    border-radius: 8px;
    border: 1px solid black;
    height: 40px;
    z-index: 999;
  }
  
  @media (max-width: 375px){
    .react-calendar__navigation button {
      font-size: 8px;
      height: 30px;
      font-weight: 900;
      width: 70px;
      height: 45px;
      z-index: 999;
    }
  }


  .react-calendar__navigation button:hover {
    background-color: ${(props) => props.theme.buttonHoverColor};
    cursor: pointer;
    box-shadow: 0 2px 4px ${(props) => props.theme.boxShadow};
    border-radius: 8px;
  }

  .react-calendar__month-view__weekdays {
    background-color: ${(props) => props.theme.weekdayBackgroundColor};
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
  }

  .react-calendar__month-view__weekdays__weekday {
    color: ${(props) => props.theme.textColor};
  }

  .react-calendar__tile {
    background-color: ${(props) => props.theme.backgroundColor};
    border: 1px solid ${(props) => props.theme.borderColor};
    border-radius: 5px;
    color: ${(props) => props.theme.textColor};
    transition: transform 0.2s ease;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: ${(props) => props.theme.hoverBackgroundColor};
    transform: scale(1.05);
    color: ${(props) => props.theme.textColor};
    box-shadow: 0 2px 5px ${(props) => props.theme.boxShadow};
    box-shadow: inset 0px 2px 5px rgb(58, 58, 58);
    z-index: 999;
  }

  .react-calendar__tile--active {
    background-color: ${(props) => props.theme.activeBackgroundColor};
    color: ${(props) => props.theme.textColor};
    box-shadow: inset 0px 2px 5px rgb(46, 46, 46);
    z-index: 999;
  }

  .react-calendar__tile--now {
    background-color: ${(props) => props.theme.hoverBackgroundColor};
    color: ${(props) => props.theme.textColor};
    box-shadow: inset 0px 2px 5px rgb(46, 46, 46);
    z-index: 999;
  }

  .react-calendar__tile--hasActive {
    background-color: ${(props) => props.theme.hoverBackgroundColor};
    color: ${(props) => props.theme.textColor};
  }

  .react-calendar__tile--otherMonth {
    color: ${(props) => props.theme.otherMonthDayColor};
  }

  .react-calendar__tile--weekend {
    color: ${(props) => props.theme.weekendColor};
    font-weight: bold;
  }
`;

const PersonCalendar = ({ handleDateSelect, selectedDate, darkMode }) => {
  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="col-md-4">
        <Calendar
          onChange={handleDateSelect}
          value={selectedDate}
          tileClassName={({ date, view }) => {
            if (view === "month") {
              const isWeekend = date.getDay() === 0 || date.getDay() === 6;
              const isOtherMonth = date.getMonth() !== new Date().getMonth();
              return isWeekend
                ? "react-calendar__tile--weekend"
                : isOtherMonth
                ? "react-calendar__tile--otherMonth"
                : null;
            }
          }}
        />
      </div>
    </ThemeProvider>
  );
};

export default PersonCalendar;

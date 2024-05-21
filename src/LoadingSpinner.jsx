import styled, { keyframes } from "styled-components";

const spin = keyframes`
  100% { transform: rotate(1turn); }
`;

const Spinner = styled.div`
  width: 50px;
  aspect-ratio: 1;
  display: grid;
  border: 4px solid #0000;
  border-radius: 50%;
  border-right-color: #0873A4;
  animation: ${spin} 1s infinite linear;

  &::before,
  &::after {
    content: "";
    grid-area: 1/1;
    margin: 2px;
    border: inherit;
    border-radius: 50%;
    animation: ${spin} 2s infinite;
  }

  &::before {
    border-right-color: #0A9D88;
  }

  &::after {
    margin: 8px;
    border-right-color: #FA5B12;
    animation-duration: 3s;
  }
`;

export default function LoadingSpinner() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img
        src="https://i.imgur.com/PlRonMF.png"
        style={{ marginBottom: "20px", width: "250px", height: "auto" }}
      />
      <Spinner />
    </div>
  );
}

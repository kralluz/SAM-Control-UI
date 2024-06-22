

const getExameClass = (tipoExame) => {
    switch (tipoExame.toLowerCase()) {
      case "tc":
        return "tomografia";
      case "us":
        return "ultrassom";
      case "eco":
        return "eco-cardiograma";
      default:
        return "";
    }
  };
export default getExameClass;  
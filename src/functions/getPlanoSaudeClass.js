
const getPlanoSaudeClass = (planoSaude) => {
    switch (planoSaude.toLowerCase()) {
      case "ipasgo":
        return "ipasgo";
      case "unimed":
        return "unimed";
      case "cassi":
        return "cassi";
      case "bradesco":
        return "bradesco-saude";
      case "caixa":
        return "saude-caixa";
      case "particular":
        return "particular";
      case "secretaria":
        return "secretaria";
      default:
        return "";
    }
  };

  export default getPlanoSaudeClass;
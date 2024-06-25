    export const formatTelephone = (telephone) => {
    const formattedTelephone = telephone.slice(3);
    const ddd = formattedTelephone.slice(0, 2);
    const rest = formattedTelephone.slice(2);
    return `(${ddd}) ${rest.slice(0, 4)}-${rest.slice(4)}`;
};
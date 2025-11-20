export const currencies = [
    { short: "EUR", name: "Euro", rate: 4.4278 },
    { short: "GBP", name: "Funt brytyjski", rate: 4.9384 },
    { short: "USD", name: "Dolar amerykański", rate: 3.9058 },
];

export const calculateResult = (amount, currency, rates) => {
    const rate = rates.find(({ short }) => short === currency).rate;
    return amount / rate;
};

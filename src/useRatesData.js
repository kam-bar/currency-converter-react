import { useState, useEffect } from "react";

const API_KEY = "cur_live_KRydSQMqutnaWl8cFvYmIOZfqTdfdqF0BwofgPVg";
const API_URL = `https://api.currencyapi.com/v3/latest?apikey=${API_KEY}&base_currency=PLN`;

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
        rates: null,
        date: null,
    });

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch(API_URL);

                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const data = await response.json();

                const rates = {};
                Object.keys(data.data).forEach((currency) => {
                    rates[currency] = data.data[currency].value;
                });

                await new Promise((resolve) => setTimeout(resolve, 1000));

                setRatesData({
                    state: "success",
                    rates: rates,
                    date: new Date().toLocaleDateString("pl-PL"),
                });
            } catch (error) {
                console.error(error);
                setRatesData({
                    state: "error",
                });
            }
        };

        fetchRates();
    }, []);

    return ratesData;
};

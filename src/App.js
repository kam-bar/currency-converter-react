import { useState } from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import Section from "./components/Section";
import Form from "./components/Form";
import { currencies, calculateResult } from "./currencies";

function App() {
    const [result, setResult] = useState(null);

    const calculate = (amount, currency) => {
        const calculation = calculateResult(amount, currency, currencies);
        setResult({
            sourceAmount: +amount,
            targetAmount: calculation,
            currency: currency,
        });
    };

    return (
        <Container>
            <Header title="Kalkulator walutowy" />
            <Section
                title="Wymiana waluty"
                body={
                    <Form
                        result={result}
                        calculate={calculate}
                        currencies={currencies}
                    />
                }
            />
        </Container>
    );
}

export default App;

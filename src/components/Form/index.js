import { useState } from "react";
import {
    StyledForm,
    Fieldset,
    InfoText,
    Label,
    LabelText,
    Field,
    Select,
    Button,
    Result,
    ResultValue,
} from "./styled";

const Form = ({ rates, date }) => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("EUR");
    const [result, setResult] = useState(null);

    if (!rates) {
        return null;
    }

    const calculateResult = (amount, currency) => {
        const rate = rates[currency];
        return (amount * rate).toFixed(2);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!amount || amount <= 0) {
            return;
        }

        const calculatedResult = calculateResult(Number(amount), currency);
        setResult({
            sourceAmount: Number(amount),
            targetAmount: calculatedResult,
            currency: currency,
        });
    };

    return (
        <>
            <InfoText>
                Kursy walut pobrano dnia: <strong>{date}</strong>
            </InfoText>
            <StyledForm onSubmit={onFormSubmit}>
                <Fieldset>
                    <Label>
                        <LabelText>Chcę wymienić (PLN):</LabelText>
                        <Field
                            type="number"
                            name="amount"
                            placeholder="Wpisz kwotę w PLN"
                            step="any"
                            min="0.01"
                            required
                            autoFocus
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                        />
                    </Label>
                    <Label>
                        <LabelText>Wybierz walutę:</LabelText>
                        <Select
                            name="currency"
                            value={currency}
                            onChange={({ target }) => setCurrency(target.value)}
                        >
                            {Object.keys(rates).map((curr) => (
                                <option key={curr} value={curr}>
                                    {curr}
                                </option>
                            ))}
                        </Select>
                    </Label>
                    <Button type="submit">Przelicz! 💰</Button>

                    <Result>
                        Po wymianie otrzymasz:{" "}
                        <ResultValue>
                            {result
                                ? `${result.targetAmount} ${result.currency}`
                                : "N/A"}
                        </ResultValue>
                    </Result>
                </Fieldset>
            </StyledForm>
        </>
    );
};

export default Form;

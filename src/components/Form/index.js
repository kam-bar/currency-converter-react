import { useState } from "react";
import styled from "styled-components";
import { calculateResult } from "../../currencies";

const StyledForm = styled.form`
    margin: 0;
`;

const Fieldset = styled.fieldset`
    background: ${({ theme }) => theme.colors.white};
    border: none;
    padding: 0;
    margin: 0;
`;

const Label = styled.label`
    display: block;
    font-weight: 500;
    width: 100%;
    margin-bottom: 20px;
`;

const LabelText = styled.span`
    font-size: 13px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.silverChalice};
    text-transform: uppercase;
    display: block;
    margin-bottom: 5px;
`;

const Field = styled.input`
    width: 100%;
    height: 44px;
    padding: 0 12px;
    border: 1px solid ${({ theme }) => theme.colors.alto};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    font-size: 16px;
    background-color: ${({ theme }) => theme.colors.wildSand};
    color: ${({ theme }) => theme.colors.almostBlack};
    font-family: inherit;

    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.azure};
        background-color: ${({ theme }) => theme.colors.white};
    }
`;

const Select = styled.select`
    width: 100%;
    height: 44px;
    padding: 0 12px;
    border: 1px solid ${({ theme }) => theme.colors.alto};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    font-size: 16px;
    background-color: ${({ theme }) => theme.colors.wildSand};
    color: ${({ theme }) => theme.colors.almostBlack};
    font-family: inherit;

    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.azure};
        background-color: ${({ theme }) => theme.colors.white};
    }
`;

const Button = styled.button`
    width: 100%;
    height: 44px;
    background-color: ${({ theme }) => theme.colors.fiord};
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    margin-top: 10px;
    font-family: inherit;
    transition: background-color 0.3s;

    &:hover {
        background-color: ${({ theme }) => theme.colors.azureDark};
    }

    &:active {
        background-color: ${({ theme }) => theme.colors.azureDarker};
    }
`;

const Result = styled.p`
    background-color: ${({ theme }) => theme.colors.wildSand};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    padding: 16px;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.azure};
    margin-top: 18px;
    margin-bottom: 0;
`;

const ResultValue = styled.strong`
    color: ${({ theme }) => theme.colors.almostBlack};
`;

const Form = ({ currencies }) => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencies[0].short);
    const [result, setResult] = useState(null);

    const calculate = (amount, currency) => {
        const calculation = calculateResult(amount, currency, currencies);
        setResult({
            sourceAmount: +amount,
            targetAmount: calculation,
            currency: currency,
        });
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!amount || amount <= 0) {
            return;
        }
        calculate(amount, currency);
    };

    return (
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
                        {currencies.map((currency) => (
                            <option key={currency.short} value={currency.short}>
                                {currency.name}
                            </option>
                        ))}
                    </Select>
                </Label>
                <Button type="submit">Przelicz! 💰</Button>

                <Result>
                    Po wymianie otrzymasz:{" "}
                    <ResultValue>
                        {result
                            ? `${result.targetAmount.toFixed(2)} ${
                                  result.currency
                              }`
                            : "N/A"}
                    </ResultValue>
                </Result>
            </Fieldset>
        </StyledForm>
    );
};

export default Form;

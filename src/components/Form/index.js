import { useState } from "react";
import "./Form.css";
import { calculateResult } from "../../currencies";

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
        <form className="form" onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
                <label className="form__label">
                    <span className="form__labelText">Chcę wymienić (PLN):</span>
                    <input
                        className="form__field"
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
                </label>
                <label className="form__label">
                    <span className="form__labelText">Wybierz walutę:</span>
                    <select
                        className="form__field"
                        name="currency"
                        value={currency}
                        onChange={({ target }) => setCurrency(target.value)}
                    >
                        {currencies.map((currency) => (
                            <option key={currency.short} value={currency.short}>
                                {currency.name}
                            </option>
                        ))}
                    </select>
                </label>
                <button className="form__button" type="submit">
                    Przelicz! 💰
                </button>

                <p className="form__result">
                    Po wymianie otrzymasz:{" "}
                    <strong className="form__resultValue">
                        {result
                            ? `${result.targetAmount.toFixed(2)} ${
                                  result.currency
                              }`
                            : "N/A"}
                    </strong>
                </p>
            </fieldset>
        </form>
    );
};

export default Form;

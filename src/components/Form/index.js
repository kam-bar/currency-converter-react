import "./Form.css";

const Form = () => (
    <form className="form">
        <fieldset className="form__fieldset">
            <label className="form__label">
                <span className="form__labelText">Chcę wymienić:</span>
                <input
                    className="form__field"
                    type="number"
                    name="amount"
                    placeholder="Wpisz kwotę w PLN"
                    step="any"
                    min="0.01"
                    required
                    autoFocus
                />
            </label>
            <label className="form__label">
                <span className="form__labelText">Wybierz walutę:</span>
                <select className="form__field" name="currency">
                    <option value="EUR">Przeliczamy na EURO!</option>
                    <option value="GBP">Przeliczamy na Funty!</option>
                    <option value="USD">Przeliczamy na Dolary!</option>
                </select>
            </label>
            <button className="form__button" type="submit">
                Przelicz! 💰
            </button>
            <p className="form__result">
                Po wymianie otrzymasz:{" "}
                <strong className="form__resultValue">N/A</strong>
            </p>
        </fieldset>
    </form>
);

export default Form;

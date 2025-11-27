import Container from "./components/Container";
import Header from "./components/Header";
import Section from "./components/Section";
import Form from "./components/Form";
import Clock from "./components/Clock";
import Loading from "./components/Loading";
import ErrorMessage from "./components/Error";
import { useRatesData } from "./useRatesData";

function App() {
    const ratesData = useRatesData();

    return (
        <Container>
            <Header title="Kalkulator walutowy" />
            <Section
                title="Wymiana waluty"
                body={
                    <>
                        <Clock />
                        {ratesData.state === "loading" && <Loading />}
                        {ratesData.state === "error" && <ErrorMessage />}
                        {ratesData.state === "success" && (
                            <Form
                                rates={ratesData.rates}
                                date={ratesData.date}
                            />
                        )}
                    </>
                }
            />
        </Container>
    );
}

export default App;

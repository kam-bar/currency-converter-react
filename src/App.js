import Container from "./components/Container";
import Header from "./components/Header";
import Section from "./components/Section";
import Form from "./components/Form";
import { currencies } from "./currencies";

function App() {
    return (
        <Container>
            <Header title="Kalkulator walutowy" />
            <Section
                title="Wymiana waluty"
                body={<Form currencies={currencies} />}
            />
        </Container>
    );
}

export default App;

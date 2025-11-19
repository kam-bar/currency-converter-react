import Container from "./components/Container";
import Header from "./components/Header";
import Section from "./components/Section";
import Form from "./components/Form";

function App() {
  return (
    <Container>
      <Header title="Kalkulator walutowy" />
      <Section 
        title="Wymiana waluty"
        body={<Form />}
      />
    </Container>
  );
}

export default App;
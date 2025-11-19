import Container from "./components/Container";
import Header from "./components/Header";
import Section from "./components/Section";


function App() {
  return (
    <Container>
      <Header title="Kalkulator walutowy" />
      <Section 
        title="Wymiana waluty"
        body={<p>Tu będzie formularz</p>}
      />
    </Container>
  );
}

export default App;
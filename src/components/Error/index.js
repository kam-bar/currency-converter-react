import styled from "styled-components";

const Wrapper = styled.div`
    text-align: center;
    padding: 40px 20px;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.crimson};
`;

const ErrorMessage = () => (
    <Wrapper>
        ❌ Coś poszło nie tak. Sprawdź połączenie internetowe i spróbuj
        ponownie.
    </Wrapper>
);

export default ErrorMessage;

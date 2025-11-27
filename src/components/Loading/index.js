import styled from "styled-components";

const Wrapper = styled.div`
    text-align: center;
    padding: 40px 20px;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.teal};
`;

const Loading = () => (
    <Wrapper>
        ⏳ Ładuję kursy walut z Europejskiego Banku Centralnego...
    </Wrapper>
);

export default Loading;

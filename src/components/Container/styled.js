import styled from "styled-components";

export const StyledContainer = styled.main`
    margin: 0 auto;
    max-width: 500px;
    padding: 100px 20px 50px;
    min-height: 100vh;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 50px 10px 30px;
    }
`;

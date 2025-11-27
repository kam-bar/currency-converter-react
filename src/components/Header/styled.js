import styled from "styled-components";

export const StyledHeader = styled.header`
    margin-bottom: 20px;
`;

export const Title = styled.h1`
    font-size: 32px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.almostBlack};
    text-align: center;
    margin: 0;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 15px 20px;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    box-shadow: 0 2px 10px ${({ theme }) => theme.colors.blackTransparent};
    border: 1px solid ${({ theme }) => theme.colors.whiteSmoke};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 24px;
        padding: 12px 15px;
    }
`;

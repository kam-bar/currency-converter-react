import styled from "styled-components";

export const StyledForm = styled.form`
    margin: 0;
`;

export const Fieldset = styled.fieldset`
    background: ${({ theme }) => theme.colors.white};
    border: none;
    padding: 0;
    margin: 0;
`;

export const InfoText = styled.p`
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.silverChalice};
    text-align: center;
    margin-bottom: 20px;
    font-weight: 500;
`;

export const Label = styled.label`
    display: block;
    font-weight: 500;
    width: 100%;
    margin-bottom: 20px;
`;

export const LabelText = styled.span`
    font-size: 13px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.silverChalice};
    text-transform: uppercase;
    display: block;
    margin-bottom: 5px;
`;

export const Field = styled.input`
    width: 100%;
    height: 44px;
    padding: 0 12px;
    border: 1px solid ${({ theme }) => theme.colors.alto};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    font-size: 16px;
    background-color: ${({ theme }) => theme.colors.wildSand};
    color: ${({ theme }) => theme.colors.almostBlack};
    font-family: inherit;

    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.azure};
        background-color: ${({ theme }) => theme.colors.white};
    }
`;

export const Select = styled.select`
    width: 100%;
    height: 44px;
    padding: 0 12px;
    border: 1px solid ${({ theme }) => theme.colors.alto};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    font-size: 16px;
    background-color: ${({ theme }) => theme.colors.wildSand};
    color: ${({ theme }) => theme.colors.almostBlack};
    font-family: inherit;

    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.azure};
        background-color: ${({ theme }) => theme.colors.white};
    }
`;

export const Button = styled.button`
    width: 100%;
    height: 44px;
    background-color: ${({ theme }) => theme.colors.fiord};
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    margin-top: 10px;
    font-family: inherit;
    transition: background-color 0.3s;

    &:hover {
        background-color: ${({ theme }) => theme.colors.azureDark};
    }

    &:active {
        background-color: ${({ theme }) => theme.colors.azureDarker};
    }
`;

export const Result = styled.p`
    background-color: ${({ theme }) => theme.colors.wildSand};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    padding: 16px;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.azure};
    margin-top: 18px;
    margin-bottom: 0;
`;

export const ResultValue = styled.strong`
    color: ${({ theme }) => theme.colors.almostBlack};
`;

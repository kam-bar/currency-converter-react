import { useState, useEffect } from "react";
import styled from "styled-components";

const StyledClock = styled.div`
    position: absolute;
    top: 75px;
    right: 10px;
    font-family: "Courier New", monospace;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.grey};
    background-color: ${({ theme }) => theme.colors.whiteTransparent};
    padding: 6px 10px;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    z-index: 10;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        top: 60px;
        right: 5px;
        font-size: 0.75rem;
        padding: 4px 6px;
        max-width: 100%;
        line-height: 1.2;
        text-align: right;
    }
`;

function formatDate(date) {
    return date.toLocaleDateString(undefined, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
}

const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return <StyledClock>Dzisiaj jest {formatDate(date)}</StyledClock>;
};

export default Clock;

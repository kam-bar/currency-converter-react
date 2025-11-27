import { useCurrentDate } from "../../useCurrentDate";
import { StyledClock } from "./styled";

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
    const date = useCurrentDate();

    return <StyledClock>Dzisiaj jest {formatDate(date)}</StyledClock>;
};

export default Clock;

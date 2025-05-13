import { useSelector } from "react-redux";
import { RootState } from "../store";

export const useReduxStates = () => {
    const filters = useSelector((state: RootState) => state.filters);
    const activeEvents = useSelector((state: RootState) => state.events);
    return { filters, activeEvents };
};

import { useSelector } from "react-redux";
import { RootState } from "../store";

export const useReduxStates = () => {
    const filters = useSelector((state: RootState) => state.filters);
    return { filters };
};

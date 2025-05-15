import { useSelector } from "react-redux";
import { RootState } from "../store";

export const useReduxStates = () => {
    const filters = useSelector((state: RootState) => state.filters);
    const activeEvents = useSelector((state: RootState) => state.events);


    const services = useSelector((state: RootState) => state.services.services);
    const servicesStatus = useSelector((state: RootState) => state.services.status);

    
    return { filters, activeEvents,services,servicesStatus};
};

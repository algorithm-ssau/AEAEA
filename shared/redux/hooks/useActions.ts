import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store";
import { useMemo } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { setServices, addServices } from "../slices/filters.slice";
import { setEvents, addEvent } from "../slices/events.slice";
import { setServicesArray ,fetchServices} from "../slices/services.slice";

const rootActions = {
    setServices,
    addServices,
    setEvents,
    addEvent,
    setServicesArray,
    fetchServices
};

export const useActions = () => {
    const dispatch = useDispatch<AppDispatch>();
    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};

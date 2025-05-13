import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store";
import { useMemo } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { setServices, addServices } from "../slices/services.slice";
import { setEvents, addEvent } from "../slices/events.slice";

const rootActions = {
    setServices,
    addServices,
    setEvents,
    addEvent,
};

export const useActions = () => {
    const dispatch = useDispatch<AppDispatch>();
    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};

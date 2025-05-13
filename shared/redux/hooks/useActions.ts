import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store";
import { useMemo } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import {  setServices,addServices } from "../slices/services.slice";
const rootActions = {
     setServices,addServices
};

export const useActions = () => {
    const dispatch = useDispatch<AppDispatch>();
    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};

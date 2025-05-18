import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import $api from "@/http";
import { Statuses } from "@/@types/enums";
import { AxiosResponse } from "axios";
import { Event, Service } from "@prisma/client";
import createStringFromArrayOfEvents from "@/utils/createStringFromArrayOfEvents";

type ServicesSliceProps = {
    services: Service[];
    status: Statuses;
};

const initialState: ServicesSliceProps = {
    services: [],
    status: Statuses.LOADING,
};

export const fetchServices = createAsyncThunk(
    "fetchServices",
    async (params: { events: Event[] }) => {
        const { events } = params;
        let res: AxiosResponse<Service[]> | null = null;
        if (events.length) {
            res = await $api.get<Service[]>(
                `/services?${createStringFromArrayOfEvents(events)}`
            );
        } else {
            res = await $api.get<Service[]>("/services");
        }

        return {
            data: res.data,
        };
    }
);

const servicesSlice = createSlice({
    name: "parcking",
    initialState,
    reducers: {
        setServicesArray(state, { payload }: PayloadAction<Service[]>) {
            state.services = payload;
            state.status = Statuses.SUCCESS;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchServices.fulfilled, (state, action) => {
            state.services = action.payload.data;
            state.status = Statuses.SUCCESS;
        });
        builder.addCase(fetchServices.pending, (state) => {
            state.status = Statuses.LOADING;
        });
        builder.addCase(fetchServices.rejected, (state) => {
            state.status = Statuses.ERROR;
        });
    },
});
export const { setServicesArray } = servicesSlice.actions;
export default servicesSlice.reducer;

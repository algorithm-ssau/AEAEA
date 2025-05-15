import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import $api from "@/http";
import { Statuses } from "@/@types/enums";
import { AxiosResponse } from "axios";
import { Service } from "@prisma/client";



type ServicesSliceProps = {
    services:Service[]
    status: Statuses;
};

const initialState: ServicesSliceProps = {
    services: [],
    status: Statuses.LOADING,
};

export const fetchServices= createAsyncThunk("fetchServices", async () => {
    
    let res: AxiosResponse<Service[]> | null =
        await $api.get<Service[]>("/services");

    console.log(res.data);

    return {
        data: res.data,
    };
});

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
            state.services = action.payload.data
            state.status = Statuses.SUCCESS
        });
        builder.addCase(fetchServices.pending, state => {
			state.status = Statuses.LOADING
		})
		builder.addCase(fetchServices.rejected, state => {
			state.status = Statuses.ERROR
		})
    },
});
export const { setServicesArray } = servicesSlice.actions;
export default servicesSlice.reducer;

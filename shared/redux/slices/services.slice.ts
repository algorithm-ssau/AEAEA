import { FilterItems } from "@prisma/client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type ServicesType = {
    service: { title: string; id: string };
    item: FilterItems | null;
};
const initialState: ServicesType[] = [];

const servicesSlice = createSlice({
    name: "services",
    initialState,
    reducers: {
        setServices: (state, { payload }: PayloadAction<ServicesType[]>) => {
            state = payload;
        },
        addServices: (state, { payload }: PayloadAction<ServicesType>) => {
            const index = state.findIndex(
                (element) => element.service.id === payload.service.id
            );
            if (index === -1) {
                state.push(payload);
            }
            state[index] = payload;
        },
    },
});
export const { setServices, addServices } = servicesSlice.actions;
export default servicesSlice.reducer;

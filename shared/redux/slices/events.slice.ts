import { Event } from "@prisma/client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Event[] = [];

const eventsSlice = createSlice({
    name: "services",
    initialState,
    reducers: {
        setEvents: (_, { payload }: PayloadAction<Event[]>) => {
            return payload;
        },
        addEvent: (state, { payload }: PayloadAction<Event>) => {
            const index = state.findIndex(
                (element) => element.id === payload.id
            );

            if (index < 0) {
                state.push(payload);
            } else {
                state.splice(index, 1);
            }
        },
    },
});
export const { setEvents, addEvent } = eventsSlice.actions;
export default eventsSlice.reducer;

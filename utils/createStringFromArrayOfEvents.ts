import { Event } from "@prisma/client";

export default function createStringFromArrayOfEvents(events: Event[]): string {
    let string = "";
    for (let i = 0; i < events.length; i++) {
        if (i !== events.length) string += "&";

        string += `event=${events[i].id}`;
    }
    return string;
}

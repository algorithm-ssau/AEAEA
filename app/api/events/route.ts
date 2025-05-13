import { getAllEvents } from "@/services/events";
import { NextResponse } from "next/server";

type Events = {
    id: string;
    title: string;
    createdAt: Date;
    updatedAt: Date;
    serviceId: string;
};
export async function GET(): Promise<NextResponse<Events[]>> {
    const trends = await getAllEvents();
    return NextResponse.json(trends);
}

import { getAllEvents } from "@/services/events";
import { Event } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse<Event[]>> {
    const trends = await getAllEvents();
    return NextResponse.json(trends);
}

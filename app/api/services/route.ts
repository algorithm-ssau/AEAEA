import { getAllServices } from "@/services/services";
import { Service } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    request: NextRequest
): Promise<NextResponse<Service[]>> {
    const searchParams = request.nextUrl.searchParams;
    const eventIds = searchParams.getAll("event");
    let services = null;
    if (eventIds.length) services = await getAllServices(eventIds);
    else services = await getAllServices();
    return NextResponse.json(services);
}

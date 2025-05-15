import { getAllServices } from "@/services/services";
import { Service } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse<Service[]>> {
    const services = await getAllServices();
    return NextResponse.json(services);
}

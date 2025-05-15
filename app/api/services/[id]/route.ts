import { getAllServices, getServiceById } from "@/services/services";
import { Service } from "@prisma/client";
import { NextResponse } from "next/server";



export async function GET(
    request: Request
): Promise<NextResponse<Service> | null> {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const services = await getServiceById(id ? id : "0534534");
    if (services) {
        return NextResponse.json(services);
    } else {
        return null;
    }
}

import { getServiceById } from "@/services/services";
import { Service } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(
    request: Request
): Promise<NextResponse<Service | { error: string }>> {
    try {
        const url = request.url;
        const id = url.split('/').at(-1)
        console.log(id,request)
        if (!id) {
            return NextResponse.json(
                { error: "ID parameter is required" },
                { status: 400 }
            );
        }

        const service = await getServiceById(id);
        
        if (!service) {
            return NextResponse.json(
                { error: "Service not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(service);
    } catch (error) {
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
import { getAllFilters } from "@/services/filters";

import { NextResponse } from "next/server";

type Filters = {
    items: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        filtersId: string;
    }[];

    id: string;
    createdAt: Date;
    updatedAt: Date;
    serviceId: string;
};

export async function GET(): Promise<NextResponse<Filters[]>> {
    const trends = await getAllFilters();
    return NextResponse.json(trends);
}

import { getAllFilters } from "@/services/filters";
import { FilterItems, Filters } from "@prisma/client";

import { NextResponse } from "next/server";

type FiltersProp = Filters & { items: FilterItems[] };

export async function GET(): Promise<NextResponse<FiltersProp[]>> {
    const trends = await getAllFilters();
    return NextResponse.json(trends);
}

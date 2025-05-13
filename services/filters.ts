import { prisma } from "@/lib/prisma";
export function getAllFilters() {
    return prisma.filters.findMany({
        include: {
            items: true,
        },
    });
}

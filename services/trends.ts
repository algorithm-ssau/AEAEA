import { prisma } from "@/lib/prisma";
export function getAllTrends() {
    return prisma.trend.findMany({});
}

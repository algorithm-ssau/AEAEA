import { prisma } from "@/lib/prisma";
export function getAllEvents() {
    return prisma.trend.findMany({});
}

import { prisma } from "@/lib/prisma";
export function getAllServices() {
    return prisma.service.findMany({
        
    });
}

export function getServiceById(id: string) {
    return prisma.service.findUnique({
        where: {
            id: id.toString()
        },
        
    });
}

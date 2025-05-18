import { prisma } from "@/lib/prisma";
export function getAllServices(eventIds?: string[]) {
    if (eventIds) {
        return prisma.service.findMany({
            where: {
                events: {
                    some: {
                        eventId: {
                            in: eventIds, // Ищем сервисы, связанные с указанными событиями
                        },
                    },
                },
            },
            include: {
                events: {
                    include: {
                        event: true, // Включаем данные события
                    },
                },
            },
        });
    } else return prisma.service.findMany({});
}

export function getServiceById(id: string) {
    return prisma.service.findUnique({
        where: {
            id: id,
        },
    });
}

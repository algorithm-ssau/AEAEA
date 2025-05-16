import { prisma } from "@/lib/prisma";
export function getAllStories() {
    return prisma.story.findMany({
        include: {
            objects: true,
        },
    });
}

export function getStoryById(id: string) {
    return prisma.story.findUnique({
        where: {
            id: id,
        },
        include: {
            objects: true,
        },
    });
}

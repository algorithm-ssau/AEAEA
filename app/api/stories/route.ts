import { getAllStories } from "@/services/stories";
import { Story, StoryObject } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(): Promise<
    NextResponse<(Story & { objects: StoryObject[] })[]>
> {
    const stories = await getAllStories();
    return NextResponse.json(stories);
}


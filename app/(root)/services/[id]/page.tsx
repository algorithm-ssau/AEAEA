import $api from "@/http";
import ServicePage from "@/pages/ServicePage/ServicePage";
import { Service } from "@prisma/client";
import { Metadata, ResolvingMetadata } from "next";

type ComposerPageProps = {
    params: Promise<{ id: string }>;
};

export default async function Page({ params }: ComposerPageProps) {
    const { id } = await params;
    const { data } = await $api.get<Service>(`/services/${id}`);

    return <ServicePage data={data} />;
}

export async function generateMetadata(
    { params }: ComposerPageProps,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { id } = await params;
    const { data } = await $api.get<Service>(`/services/${id}`);
    if (data)
        return {
            title: `${data.title}`,
            description: data.description,
        };
    else {
        return {
            title: `Не найдено`,
        };
    }
}

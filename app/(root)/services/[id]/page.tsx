import $api from "@/http";
import ServicePage from "@/pages/ServicePage/ServicePage";
import { Service } from "@prisma/client";



export default async function Page({ params }: { params: { id: string } }) {
    const { id } = params;

    const service = await $api.get<Service>(`/services/${id}`);

    return (
        <>
            <ServicePage data={service.data} />
        </>
    );
}

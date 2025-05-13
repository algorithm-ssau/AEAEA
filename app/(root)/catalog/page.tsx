import $api from "@/http";
import { CatalogPage } from "@/pages/CatalogPage";
import { Event, FilterItems, Filters } from "@prisma/client";

export default async function Page() {
    const services = await $api.get<(Filters & { items: FilterItems[] })[]>(
        "/filters"
    );
    const events = await $api.get<Event[]>("/events");
   

    return <CatalogPage services={services.data} events={events.data} />;
}

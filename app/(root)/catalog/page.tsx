import $api from "@/http";
import { CatalogPage } from "@/pages/CatalogPage";
import { FilterItems, Filters } from "@prisma/client";

export default async function Page() {
    const data = await $api.get<(Filters & { items: FilterItems })[]>(
        "/filters"
    );

    return <CatalogPage services={data.data} />;
}

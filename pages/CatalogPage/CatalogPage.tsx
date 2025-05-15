import { BreadCrumbs } from "@/shared/components/ui/BreadCrumbs";
import styles from "./CatalogPage.module.scss";
import { Event, FilterItems, Filters } from "@prisma/client";

import { FilterElement } from "@/shared/components/ui/FilterElement";
import { EventsBlock } from "@/shared/components/shared/EventsBlock";
import { ServicesesList } from "@/shared/components/shared/ServicesesList/ServicesesList";

type Props = {
    services: (Filters & { items: FilterItems[] })[];
    events: Event[];
};
export default  function CatalogPage ({ services, events }:Props) {
    if(services &&events)
    return (
        <>
            <BreadCrumbs breadCrumbsArray={[{ title: "Услуги" }]} />
            <div className={styles.inner}>
                <div className={styles.leftBlock}>
                    <h1 className={styles.title}>УСЛУГИ</h1>
                    <nav>
                        <ul className={styles.list}>
                            {services.map((element, index) => (
                                <li key={element.id}>
                                    <FilterElement element={element} />
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className={styles.rightBlock}>
                    <EventsBlock events={events} />
                    <ServicesesList/>
                </div>
            </div>
        </>
    );
    else{
        return <></>
    }
};
export { CatalogPage };

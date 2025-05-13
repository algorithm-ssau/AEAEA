import { BreadCrumbs } from "@/shared/components/ui/BreadCrumbs";
import styles from "./CatalogPage.module.scss";
import { FilterItems, Filters } from "@prisma/client";

import { FilterElement } from "@/shared/components/ui/FilterElement";

type Props = {
    services: (Filters & { items: FilterItems[] })[];
};

const CatalogPage: React.FC<Props> = ({ services }) => {
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
                    
                </div>
            </div>
        </>
    );
};
export { CatalogPage };



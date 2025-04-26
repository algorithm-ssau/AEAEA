import { ContactsRequisites } from "@/shared/components/ui/ContactsRequisites";
import styles from "./RequisitesPage.module.scss";
import { AboutNavigations } from "@/@types/enums";
import { AboutNavigation } from "@/shared/components/ui/AboutNavigation";
import { BreadCrumbs } from "@/shared/components/ui/BreadCrumbs";

export default function RequisitesPage() {
    return (
        // <div className="container">
        //     <BreadCrumbs breadCrumbsArray={[{ title: "Реквизиты" }]} />
        //     <div className={styles.inner}>
        //         <AboutNavigation active={AboutNavigations.REQUISITES} />
                <ContactsRequisites />
        //     </div>
        // </div>
    );
}
export { RequisitesPage };

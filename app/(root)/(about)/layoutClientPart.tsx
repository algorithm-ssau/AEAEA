"use client";

import { AboutNavigation } from "@/shared/components/ui/AboutNavigation";
import { BreadCrumbs } from "@/shared/components/ui/BreadCrumbs";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./about.module.scss";
import findOutCurrentPage from "@/utils/findOutCurrentPage";
import { AboutNavigationsSlugs } from "@/@types/enums";

interface LayoutClientPartProps {
    children: React.ReactNode;
}
export default function LayoutClientPart({ children }: LayoutClientPartProps) {
    const pathname = usePathname();
    const [pageName, setPageName] = useState<string>(
        AboutNavigationsSlugs.ADDRESSES
    );

    useEffect(() => {
        setPageName(
            pathname?.split("/").filter(Boolean).at(-1) ||
                AboutNavigationsSlugs.ADDRESSES
        );
    }, [pathname]);

    const acivePageObject = findOutCurrentPage(pageName);
    return (
        <>
            <BreadCrumbs breadCrumbsArray={acivePageObject.array} />
            <div className={styles.inner}>
                <AboutNavigation active={acivePageObject.active} />
                {children}
            </div>
        </>
    );
}

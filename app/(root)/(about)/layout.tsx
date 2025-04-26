import { AboutNavigations } from "@/@types/enums";
import { AboutNavigation } from "@/shared/components/ui/AboutNavigation";
import { BreadCrumbs } from "@/shared/components/ui/BreadCrumbs";
import type { Metadata } from "next";
import styles from './about.module.scss'
export const metadata: Metadata = {
    title: "О компании",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    
    return (
        <div className="container">
            <BreadCrumbs breadCrumbsArray={[{ title: "Реквизиты" }]} />
            <div className={styles.inner}>
                <AboutNavigation active={AboutNavigations.REQUISITES} />
                {children}
            </div>
        </div>
    );
}

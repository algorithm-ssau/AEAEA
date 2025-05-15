import { BreadCrumbs } from "@/shared/components/ui/BreadCrumbs";
import styles from "./ServicePage.module.scss";
import { Service } from "@prisma/client";
import Link from "next/link";

export default function ServicePage({ data }: { data: Service }) {
    return (
        <div className="container">
            <div className={styles.inner}>
                <BreadCrumbs
                    breadCrumbsArray={[
                        { title: "Услуги", link: "/catalog" },
                        { title: data.title },
                    ]}
                />
                <div className={styles.container}>
                    <div className={styles.imageBlock}>
                        <img
                            src={data.imageUrl}
                            alt="изображение"
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.textBlock}>
                        <h1 className={styles.title}>{data.title}</h1>
                        <p className={styles.descripion}>{data.description}</p>
                        <Link className={styles.contact} href="/addresses">
                            Связаться
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

"use client";
import { servicesArray } from "@/constants/arrays/servicesArray";
import styles from "./ServicesBlock.module.scss";
import Link from "next/link";

const ServicesBlock: React.FC = () => {
    return (
        <div className="container">
            <div className={styles.inner}>
                <h3 className={styles.component_title}>
                    ЗАПУСТИМ ВАШИ ДЕНЬГИ КРАСИВО!
                </h3>
                <ul className={styles.list}>
                    {servicesArray.map(
                        (element: (typeof servicesArray)[0], index: number) => (
                            <li
                                className={styles.element}
                                key={element.url.src}
                            >
                                <img
                                    src={element.url.src}
                                    alt="изображение"
                                    className={styles.bgImage}
                                />
                                <div className={styles.textBlock}>
                                    <h6 className={styles.title}>
                                        {element.title}
                                    </h6>
                                    <Link
                                        href="/idgaf"
                                        className={styles.moreLink}
                                    >
                                        Подробнее
                                    </Link>
                                </div>
                            </li>
                        )
                    )}
                </ul>
            </div>
        </div>
    );
};
export { ServicesBlock };

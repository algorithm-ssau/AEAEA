"use client";
import useFetch from "@/shared/hooks/useFetch";
import styles from "./ServicesBlock.module.scss";
import Link from "next/link";

const ServicesBlock: React.FC = () => {
    const { data, loading, error } = useFetch("trends", true);
    return (
        <div className="container">
            <div className={styles.inner}>
                <h3 className={styles.component_title}>
                    ЗАПУСТИМ ВАШИ ДЕНЬГИ КРАСИВО!
                </h3>
                {!data || loading || error ? (
                    //TODO сделать склетоны
                    <></>
                ) : (
                    <ul className={styles.list}>
                        {data.map((element: any, index: number) => (
                            <li className={styles.element} key={element.url}>
                                <img
                                    src={element.url}
                                    alt="изображение"
                                    className={styles.bgImage}
                                />
                                <div className={styles.textBlock}>
                                    <h6 className={styles.title}>{element.title}</h6>
                                    <Link
                                        href="/idgaf"
                                        className={styles.moreLink}
                                    >
                                        Подробнее
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};
export { ServicesBlock };

"use client";
import useFetch from "@/shared/hooks/useFetch";
import styles from "./TrendsBlock.module.scss";
interface TrendsBlockProps {}
const TrendsBlock: React.FC<TrendsBlockProps> = () => {
    const { data, loading, error } = useFetch("trends", true);


    return (
        <div className="container">
            <div className={styles.inner}>
                <h3 className={styles.component_title}>ТРЕНДЫ 2025</h3>
                <ul className={styles.list}>
                    {!data || loading || error ? (
                        //TODO сделать склетоны
                        <></>
                    ) : (
                        data.map((element: any, index: number) => (
                            <li className={styles.element} key={index}>
                                <div className={styles.image_block}>
                                <img
                                    src={element.url}
                                    alt={""}
                                    className={styles.image}
                                /></div>
                                <p className={styles.title}>{element.title}</p>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
};
export { TrendsBlock };

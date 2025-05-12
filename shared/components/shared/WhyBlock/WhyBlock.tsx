"use client";

import styles from "./WhyBlock.module.scss";
import { whyAreWeArray } from "@/constants/arrays/whyAreWeArray";
import Link from "next/link";
import { useRef, useState } from "react";

const WhyBlock: React.FC = () => {
    const [active, setActive] = useState(0);
    const ref = useRef<HTMLLIElement | null>(null);

    return (
        <div className="container">
            <div className={styles.inner}>
                <div className={styles.upperBlock}>
                    <div className={styles.titles}>
                        <h3 className={styles.component_title}>ПОЧЕМУ МЫ?</h3>
                        <p className={styles.componentSubtitle}>
                            Мы создаем незабываемые мероприятия самого высокого
                            уровня!
                        </p>
                    </div>
                    <div>
                        <p className={styles.component_title}>30+</p>
                        <p className={styles.componentSubtitle}>лет на рынке</p>
                    </div>
                    <div>
                        <p className={styles.component_title}>4 500+</p>
                        <p className={styles.componentSubtitle}>
                            проведенных мероприятий
                        </p>
                    </div>
                </div>
                <ul className={styles.list}>
                    {whyAreWeArray.map((element, index) => (
                        <li
                            onMouseEnter={() => {
                                setActive(index);
                            }}
                            ref={ref}
                            key={element.description}
                            className={`${styles.element}${
                                active === index ? " " + styles.active : ""
                            }`}
                        >
                            <img
                                src={element.image.src}
                                className={styles.bgImage}
                                alt=""
                            />
                            <div className={styles.textBlock}>
                                <h6
                                    className={`${styles.title}${
                                        active === index
                                            ? " " + styles.active
                                            : ""
                                    }`}
                                >
                                    {element.title}
                                </h6>
                                <div
                                    className={`${styles.withoutTitle}${
                                        active === index
                                            ? " " + styles.active
                                            : ""
                                    }`}
                                >
                                    <p className={styles.description}>
                                        {element.description}
                                    </p>
                                    <Link
                                        href={"/idgaf"}
                                        className={styles.link}
                                    >
                                        Видео
                                    </Link>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export { WhyBlock };

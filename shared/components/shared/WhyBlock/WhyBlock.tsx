"use client";
import styles from "./WhyBlock.module.scss";

import image1 from "@/public/images/whyImage1.png";
import image2 from "@/public/images/whyImage2.png";
import image3 from "@/public/images/whyImage3.png";
import image4 from "@/public/images/whyImage4.png";

import Link from "next/link";
import { useRef, useState } from "react";

const array = [
    {
        image: image1,
        title: "ГОРОДСКИЕ САЛЮТЫ",
        description:
            "Наша команда организует фейерверки на День города, 9 мая и другие праздники в городе Самара.",
        link: "",
    },
    {
        image: image2,
        title: "ФЕСТИВАЛИ",
        description:
            "Пиротеатр участвовал в фестивалях «Большая Волга», «Серебряная ладья», «Сталинградская сирень».",
        link: "",
    },
    {
        image: image3,
        title: "КОНЦЕРТЫ",
        description:
            "Наши специалисты устанавливали спецэффекты на концертах группы Dabro, BigBaby Tape, Feduk и др.",
        link: "",
    },
    {
        image: image4,
        title: "СВАДЬБЫ",
        description:
            "Мы предоставляем широкий ассортимент услуг для свадеб - от тяжелого дыма до высотного фейерверка.",
        link: "",
    },
];

const WhyBlock: React.FC = () => {
    const [active, setActive] = useState(0);
    const ref = useRef<HTMLLIElement | null>(null);

    return (
        <div className="container">
            <div className={styles.inner}>
                <h3 className={styles.component_title}>ПОЧЕМУ МЫ?</h3>
                <ul className={styles.list}>
                    {array.map((element, index) => (
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
                                <h6 className={`${styles.title}${
                                        active === index
                                            ? " " + styles.active
                                            : ""
                                    }`}>
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

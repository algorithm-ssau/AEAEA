"use client";
import useFetch from "@/shared/hooks/useFetch";
import styles from "./TrendsBlock.module.scss";
import "swiper/swiper-bundle.css";

import useWindowSize from "@/shared/hooks/useWindowSize";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";

interface TrendsBlockProps {}
const TrendsBlock: React.FC<TrendsBlockProps> = () => {
    const { data, loading, error } = useFetch("trends", true);
    const [activeIndex, setActiveIndex] = useState(1);

    const handleClick = () => {};
    const width = useWindowSize();

    return (
        <div className="container">
            <div className={styles.inner}>
                <h3 className={styles.component_title}>ТРЕНДЫ 2025</h3>
                {width > 1000 ? (
                    <ul className={styles.list}>
                        {!data || loading || error ? (
                            //TODO сделать склетоны
                            <></>
                        ) : (
                            data.map((element: any, index: number) => (
                                <li
                                    className={styles.element}
                                    key={index}
                                    onClick={handleClick}
                                >
                                    <div className={styles.image_block}>
                                        <img
                                            src={element.url}
                                            alt={""}
                                            className={styles.image}
                                        />
                                    </div>
                                    <p className={styles.title}>
                                        {element.title}
                                    </p>
                                </li>
                            ))
                        )}
                    </ul>
                ) : (
                    <>
                        {!data || loading || error ? (
                            //TODO сделать склетоны
                            <></>
                        ) : (
                            <Swiper
                                spaceBetween={20}
                                slidesPerView={2}
                                // centeredSlides={true}
                                initialSlide={1}
                                onSlideChange={(swiper) =>
                                    setActiveIndex(swiper.activeIndex)
                                }
                                className={styles.slider}
                            >
                                {data.map((element: any, index: number) => (
                                    <SwiperSlide
                                        className={styles.element}
                                        key={index}
                                        onClick={handleClick}
                                    >
                                        <div className={styles.image_block}>
                                            <img
                                                src={element.url}
                                                alt={""}
                                                className={styles.image}
                                            />
                                        </div>
                                        <p className={styles.title}>
                                            {element.title}
                                        </p>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};
export { TrendsBlock };

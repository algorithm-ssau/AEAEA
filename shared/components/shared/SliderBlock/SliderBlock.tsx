"use client";
import styles from "./SliderBlock.module.scss";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import slide from "@/public/images/slide.png";
import slide2 from "@/public/images/slide2.png";
import slide3 from "@/public/images/slide3.png";

import { CarouselArrow } from "@/shared/components/ui/CarouselArrow";
import { CarouselDots } from "@/shared/components/ui/CarouselDots";

const array = [
    {
        id: 1,
        imageUrl: slide,
    },
    {
        id: 2,
        imageUrl: slide2,
    },
    {
        id: 3,
        imageUrl: slide3,
    }
];

const SliderBlock: React.FC = () => {
    return (
        <div className={styles.container}>
            <Carousel
                showArrows={true}
                showIndicators={true}
                infiniteLoop={true}
                dynamicHeight={false}
                className={styles.mySwiper}
                autoPlay={true}
                showStatus={false}
                showThumbs={false}
                renderArrowPrev={(clickHandler: () => void) => (
                    <CarouselArrow clickHandler={clickHandler} next={false} />
                )}
                renderArrowNext={(clickHandler: () => void) => (
                    <CarouselArrow clickHandler={clickHandler} next />
                )}
                renderIndicator={(
                    clickHandler: (
                        e: React.MouseEvent | React.KeyboardEvent
                    ) => void,
                    isSelected: boolean
                ) => (
                    <CarouselDots
                        clickHandler={clickHandler}
                        isSelected={isSelected}
                    />
                )}
            >
                {array.map((item) => (
                    <div key={item.id} className={styles.swipItem}>
                        <div className={styles.imgBox}>
                            <img src={item.imageUrl.src} alt="slides" />
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};
export { SliderBlock };

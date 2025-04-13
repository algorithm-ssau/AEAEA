import arrow from "@/public/images/arrow.svg";
import Image from "next/image";
import styles from "./CarouselArrow.module.scss";
interface CarouselArrowProps {
    clickHandler: () => void;
    next: boolean;
}
const CarouselArrow: React.FC<CarouselArrowProps> = ({
    clickHandler,
    next,
}) => {
    return (
        <button
            onClick={clickHandler}
            className={`${styles.arrow} ${next ? styles.next : styles.prev}`}
        >
            <Image width={20} height={39} src={arrow} alt={"arrow"} />
        </button>
    );
};
export { CarouselArrow };

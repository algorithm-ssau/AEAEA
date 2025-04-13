import carouselDot from "@/public/images/carousel_dot.svg";
import carouselSelect from "@/public/images/carousel_dot_select.svg";
import Image from "next/image";
import styles from "./CarouselDots.module.scss";
interface CarouselDotsProps {
    clickHandler: (e: React.MouseEvent | React.KeyboardEvent) => void;
    isSelected: boolean;
}
const CarouselDots: React.FC<CarouselDotsProps> = ({
    clickHandler,
    isSelected,
}) => {
    return (
        <li className={styles.element} onClick={clickHandler}>
            {isSelected ? (
                <Image width={15} height={15} alt="dot" src={carouselSelect} />
            ) : (
                <Image width={15} height={15} alt="dot" src={carouselDot} />
            )}
        </li>
    );
};
export { CarouselDots };

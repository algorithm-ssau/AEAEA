import styles from "./PlaceListItem.module.scss";

import arrow from "@/public/images/link_arrow.svg";
interface PlaceListItemProps {
    index: number;
    title: string;
    image: string;
    children: React.ReactNode;
}
const PlaceListItem: React.FC<PlaceListItemProps> = ({
    index,
    title,
    image,
    children,
}) => {
    return (
        <li className={styles.element}>
            <div className={styles.index}>{index}</div>
            <div className={styles.text_block}>
                <h6 className={styles.title}>{title}</h6>
                {children}
                <div className={styles.link_block}>
                    {image && <img src={image} alt="" />}
                    <img src={arrow} alt="" />
                </div>
            </div>
        </li>
    );
};
export { PlaceListItem };

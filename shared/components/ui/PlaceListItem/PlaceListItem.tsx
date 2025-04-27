"use client";
import { useState } from "react";
import { PlaceListImageModal } from "../PlaceListImageModal";
import styles from "./PlaceListItem.module.scss";

import arrow from "@/public/images/link_arrow.svg";
import Image, { StaticImageData } from "next/image";
interface PlaceListItemProps {
    index: number;
    title: string;
    image: StaticImageData;
    children: React.ReactNode;
}
const PlaceListItem: React.FC<PlaceListItemProps> = ({
    index,
    title,
    image,
    children,
}) => {
    const [open, setOpen] = useState<boolean>(false);

    const handleOpenModal = () => {
        setOpen(true);
    };

    return (
        <li className={styles.element}>
            <div className={styles.index}>{index}</div>
            <div className={styles.text_block}>
                <h6 className={styles.title}>{title}</h6>
                {children}
                <div className={styles.link_block}>
                    <button
                        className={styles.image_button}
                        onClick={handleOpenModal}
                    >
                        Как нас найти
                    </button>
                    <Image src={arrow} alt="" />
                </div>
            </div>

            <PlaceListImageModal setOpen={setOpen} open={open} image={image} />
        </li>
    );
};
export { PlaceListItem };

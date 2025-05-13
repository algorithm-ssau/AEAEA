"use client";
import { FilterItems, Filters } from "@prisma/client";
import styles from "./FilterElement.module.scss";
import toggleActive from "@/public/images/toggleON.svg";
import toggleDisabled from "@/public/images/toggleOFF.svg";
import Image from "next/image";
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import { AccordionDetails, AccordionSummary } from "@mui/material";
import { useReduxStates } from "@/shared/redux/hooks/useReduxStates";
import { useActions } from "@/shared/redux/hooks/useActions";

interface ElementProps {
    element: Filters & { items: FilterItems[] };
}
const FilterElement: React.FC<ElementProps> = ({ element }) => {
    const { filters } = useReduxStates();
    const { addServices } = useActions();

    const [active, setActive] = useState<{ title: string; id: string } | null>(
        null
    );
    const [expanded, setExpanded] = useState(false);

    const onClickFilterItems = (item: FilterItems | null) => {
        if (item) {
            setActive({ title: item.title, id: item.id });
            addServices({
                service: {
                    title: element.title,
                    id: element.id,
                },
                item: item,
            });
           
        } else {
            setActive(null); 
            addServices({service: {
                    title: element.title,
                    id: element.id,
                },
                item: null,});           
        }
    };
    return (
        <Accordion className={styles.block}>
            <AccordionSummary
                className={styles.title_block}
                onClick={() => {
                    setExpanded(!expanded);
                }}
            >
                <p className={styles.filterButton}>{element.title}</p>
                <p
                    className={`${styles.openButton}${
                        expanded ? " " + styles.active : ""
                    }`}
                >
                    <span></span>
                    <span></span>
                </p>
            </AccordionSummary>
            <AccordionDetails className={styles.list}>
                <button
                    className={styles.item}
                    key={"all"}
                    onClick={() => onClickFilterItems(null)}
                >
                    {active === null ? (
                        <Image
                            src={toggleActive}
                            alt=""
                            width={16}
                            height={16}
                            className={styles.toggleImage}
                        />
                    ) : (
                        <Image
                            src={toggleDisabled}
                            alt=""
                            width={16}
                            height={16}
                            className={styles.toggleImage}
                        />
                    )}
                    <p>Все</p>
                </button>
                {element.items.map((element: FilterItems, index: number) => (
                    <button
                        className={styles.item}
                        key={element.id}
                        onClick={() => onClickFilterItems(element)}
                    >
                        {active?.title === element.title ? (
                            <Image
                                src={toggleActive}
                                alt=""
                                width={16}
                                height={16}
                                className={styles.toggleImage}
                            />
                        ) : (
                            <Image
                                src={toggleDisabled}
                                alt=""
                                width={16}
                                height={16}
                                className={styles.toggleImage}
                            />
                        )}
                        <p>{element.title}</p>
                    </button>
                ))}
            </AccordionDetails>
        </Accordion>
    );
};
export { FilterElement };

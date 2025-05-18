"use client";
import { SocialsBlock } from "@/shared/components/ui/SocialsBlock";
import styles from "./AddressesPageComponent.module.scss";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { InnerContactForm } from "@/shared/components/shared/InnerContactForm";
import { Box } from "@mui/material";

import { addressesArray } from "@/constants/arrays/addressesArray";
import { PlaceListItem } from "@/shared/components/ui/PlaceListItem";

export default function AddressesPageComponent() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };
    return (
        <div className={styles.inner}>
            <h1 className={styles.title}>КОНТАКТЫ</h1>
            <div className={styles.secondBlock}>
                <h4 className={styles.text}>
                    Вы можете воспользоваться контактной формой для связи или
                    связаться с нами через социальные сети.
                </h4>
                <button className={styles.contact} onClick={toggleDrawer(true)}>
                    Связаться
                </button>
                <SocialsBlock />
            </div>
            <ul className={styles.list}>
                {addressesArray.map((element, index) => (
                    <PlaceListItem
                        title={element.title}
                        index={index + 1}
                        key={element.title}
                        image={element.image}
                    >
                        <div className={styles.item}>
                            {element.time.map((time, index) => (
                                <p key={time} className={styles.time}>
                                    {time}
                                </p>
                            ))}
                        </div>
                        <div className={styles.item}>
                            {element.tel.map((tel, index) => (
                                <p key={tel} className={styles.tel}>
                                    {tel}
                                </p>
                            ))}
                        </div>
                    </PlaceListItem>
                ))}
            </ul>
            <Drawer open={open} onClose={toggleDrawer(false)} anchor={"right"}>
                <Box
                    sx={{ width: 490 }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    className={styles.box}
                >
                    <InnerContactForm />
                </Box>
            </Drawer>
        </div>
    );
}

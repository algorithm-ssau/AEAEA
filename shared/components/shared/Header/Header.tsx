'use client'
import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";

import logo from "@/public/images/logo.svg";
import { useState } from "react";
import { ModalContacts } from "../ModalContacts";
import { AboutPopover } from "../../ui/AboutPopover";

const Header: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    //Якорный элемент для поповера О КОМПАНИИ
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleOpenModal = () => {
        setOpen(true);
    };
    const handleClickAboutButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
      };
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.inner}>
                    <nav className={styles.navigationList}>
                        <Link href={"./catalog"} className={styles.link}>
                            КАТАЛОГ
                        </Link>
                        <button  className={styles.link} onClick={handleClickAboutButton}>
                            О КОМПАНИИ
                        </button>
                    </nav>
                    <AboutPopover  setAnchorEl={setAnchorEl} anchorEl={anchorEl}/>
                    <Link href={"/"}>
                        <Image width={103} height={64} alt="logo" src={logo} />
                    </Link>
                    <button
                        className={styles.contacts}
                        onClick={handleOpenModal}
                    >
                        КОНТАКТЫ
                    </button>
                </div>
            </div>
            <ModalContacts open={open} setOpen={setOpen} />
        </header>
    );
};
export { Header };

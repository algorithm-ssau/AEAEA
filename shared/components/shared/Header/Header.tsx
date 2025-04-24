'use client'
import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";

import logo from "@/public/images/logo.svg";
import { useState } from "react";
import { ModalContacts } from "../ModalContacts";

const Header: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const handleOpenModal = () => {
        setOpen(true);
    };
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.inner}>
                    <nav className={styles.navigationList}>
                        <Link href={"./catalog"} className={styles.link}>
                            КАТАЛОГ
                        </Link>
                        <Link href={"./company"} className={styles.link}>
                            О КОМПАНИИ
                        </Link>
                    </nav>
                    <Link href={"#"}>
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

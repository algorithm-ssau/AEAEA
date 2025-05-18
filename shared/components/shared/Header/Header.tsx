'use client'
import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";

import logo from "@/public/images/logo.svg";
import { useState } from "react";
import { AboutPopover } from "../../ui/AboutPopover";

const Header: React.FC = () => {
    //Якорный элемент для поповера О КОМПАНИИ
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

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
                    <Link
                        className={styles.contacts}
                        href={'/addresses'}
                    >
                        КОНТАКТЫ
                    </Link>
                </div>
            </div>
        </header>
    );
};
export { Header };

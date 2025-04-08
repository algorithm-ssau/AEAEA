import { cn } from "@/utils/utils";
import styles from "./TheHeader.module.scss";
import Link from "next/link";
import Image from "next/image";

import logo from "@/public/images/logo.svg";
interface TheHeaderProps {}

const TheHeader: React.FC<TheHeaderProps> = (props) => {
    const {} = props;

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
                    <button className={styles.contacts}>КОНТАКТЫ</button>
                </div>
            </div>
        </header>
    );
};
export { TheHeader };

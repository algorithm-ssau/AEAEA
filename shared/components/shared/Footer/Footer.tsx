import Link from "next/link";
import styles from "./Footer.module.scss";

import { SocialsBlock } from "../../ui/SocialsBlock";
const Footer: React.FC = () => {
    const services = [
        { title: "Фейерверки" },
        { title: "Дымы" },
        { title: "Крио-пушки" },
        { title: "Пирошоу" },
        { title: "Конфетти" },
        { title: "Другое" },
    ];
    const about = [
        { title: "Реквизиты", link: "" },
        { title: "Сотрудники", link: "" },
        { title: "Адреса магазинов", link: "" },
        { title: "Лицензия", link: "" },
    ];
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.inner}>
                    <nav className={styles.navigation}>
                        <h4 className={styles.title}>УСЛУГИ</h4>
                        <ul className={styles.list}>
                            {services.map((element, index) => (
                                <li
                                    className={styles.element}
                                    key={element.title}
                                >
                                    {element.title}
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <nav className={styles.navigation}>
                        <h4 className={styles.title}>О КОМПАНИИ</h4>
                        <ul className={styles.list}>
                            {about.map((element, index) => (
                                <li
                                    className={styles.element}
                                    key={element.title}
                                >
                                    <Link href={element.link}>
                                        {element.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <nav className={styles.navigation}>
                        <h4 className={styles.title}>КОНТАКТЫ</h4>
                        <ul className={styles.list}>
                            <li className={styles.element} key={1}>
                                <Link href={"tel:+78463323707"}>
                                    +7 (846) 332-37-07
                                </Link>
                            </li>
                            <li className={styles.element} key={2}>
                                <Link href={"tel:+78463323706"}>
                                    +7 (846) 332-37-06
                                </Link>
                            </li>
                            <li className={styles.element} key={3}>
                                <Link href={"mailto:info@samara-salut.ru"}>
                                    info@samara-salut.ru
                                </Link>
                            </li>
                            <li
                                className={`${styles.element} ${styles.shop_link}`}
                                key={4}
                            >
                                <Link href={"https://krutsalut.ru/"}>
                                    Интернет-магазин
                                </Link>
                            </li>
                            <li
                                className={`${styles.element} ${styles.shop_link}`}
                                key={5}
                            >
                                <SocialsBlock/>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    );
};
export { Footer };

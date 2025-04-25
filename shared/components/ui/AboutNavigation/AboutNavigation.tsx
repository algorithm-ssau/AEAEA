import { AboutNavigations } from "@/@types/enums";
import styles from "./AboutNavigation.module.scss";
import Link from "next/link";
interface aboutNavigationProps {
    active: AboutNavigations;
}

const aboutNavigationArray = [
    {
        title: AboutNavigations.ADDRESSES,
        href: "/addresses",
    },
    {
        title: AboutNavigations.STAFF,
        href: "/staff",
    },
    {
        title: AboutNavigations.SHOPS,
        href: "/shops",
    },
    {
        title: AboutNavigations.LICENSE,
        href: "/license",
    },
    {
        title: AboutNavigations.REQUISITES,
        href: "/requisites",
    },
];
const AboutNavigation: React.FC<aboutNavigationProps> = ({ active }) => {
    return (
        <nav>
            <ul className={styles.list}>
                {aboutNavigationArray.map((element) => (
                    <li className={styles.element} key={element.title}>
                        <Link
                            href={element.href}
                            className={`${styles.link}${
                                active === element.title
                                    ? " " + styles.active
                                    : ""
                            }`}
                        >
                            {element.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
export { AboutNavigation };

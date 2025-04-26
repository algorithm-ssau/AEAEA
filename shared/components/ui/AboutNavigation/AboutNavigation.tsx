import { AboutNavigations, AboutNavigationsSlugs } from "@/@types/enums";
import styles from "./AboutNavigation.module.scss";
import Link from "next/link";
interface aboutNavigationProps {
    active: AboutNavigations;
}

const aboutNavigationArray = [
    {
        title: AboutNavigations.ADDRESSES,
        href: `/${AboutNavigationsSlugs.ADDRESSES}`,
    },
    {
        title: AboutNavigations.STAFF,
        href: `/${AboutNavigationsSlugs.STAFF}`,
    },
    {
        title: AboutNavigations.SHOPS,
        href: `/${AboutNavigationsSlugs.SHOPS}`,
    },
    {
        title: AboutNavigations.LICENSE,
        href: `/${AboutNavigationsSlugs.LICENSE}`,
    },
    {
        title: AboutNavigations.REQUISITES,
        href: `/${AboutNavigationsSlugs.REQUISITES}`,
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

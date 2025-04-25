import Link from "next/link";
import styles from "./BreadCrumbs.module.scss";
interface BreadCrumbsProps {
    breadCrumbsArray: {
        title: string;
        link?: string;
    }[];
}
const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ breadCrumbsArray }) => {
    return (
        <div className={styles.box}>
            <ul className={styles.list}>
                <li key="главная">
                    <Link href={"/"}>Главная</Link>
                </li>
                <li key="/">
                    <p>/</p>
                </li>
                {breadCrumbsArray.map((element, index) => (
                    <li key={element.title} className={styles.element}>
                        <>
                            {element.link ? (
                                <Link href={element.link}>{element.title}</Link>
                            ) : (
                                <p>{element.title}</p>
                            )}
                            {index !== breadCrumbsArray.length - 1 && <p>/</p>}
                        </>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export { BreadCrumbs };

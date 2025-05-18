import Link from "next/link";
import styles from "./SocialsBlock.module.scss";
import Image from "next/image";

import vk from "@/public/images/vk.svg";
import telegram from "@/public/images/tg.svg";
import rutube from "@/public/images/rutube.svg";

const SocialsBlock: React.FC = () => {
    return (
        <div className={styles.socials_block}>
            <Link href={""}>
                <Image width={30} height={30} alt="logo" src={telegram} />
            </Link>
            <Link href={""}>
                <Image width={30} height={30} alt="logo" src={rutube} />
            </Link>
            <Link href={""}>
                <Image width={30} height={30} alt="logo" src={vk} />
            </Link>
        </div>
    );
};
export { SocialsBlock };

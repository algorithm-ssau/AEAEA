import { ServicesBlock } from "@/shared/components/shared/ServicesBlock";
import styles from "./IndexPage.module.scss";

import { SliderBlock } from "@/shared/components/shared/SliderBlock";
import { TrendsBlock } from "@/shared/components/shared/TrendsBlock";
import { WhyBlock } from "@/shared/components/shared/WhyBlock";
export default function IndexPage() {
    return (
        <div className={styles.inner}>
            <SliderBlock />
            <TrendsBlock />
            <ServicesBlock/>
            <WhyBlock/>
        </div>
    );
}

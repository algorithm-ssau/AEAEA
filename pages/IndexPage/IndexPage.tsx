import { ServicesBlock } from "@/shared/components/shared/ServicesBlock";
import styles from "./IndexPage.module.scss";

import { SliderBlock } from "@/shared/components/shared/SliderBlock";
import { TrendsBlock } from "@/shared/components/shared/TrendsBlock";
import { WhyBlock } from "@/shared/components/shared/WhyBlock";
import { StoriesComponent } from "@/shared/components/shared/StoriesComponent";
export default function IndexPage() {
    return (
        <div className={styles.inner}>
            <SliderBlock />
            <StoriesComponent/>
            <TrendsBlock />
            <ServicesBlock/>
            <WhyBlock/>
        </div>
    );
}

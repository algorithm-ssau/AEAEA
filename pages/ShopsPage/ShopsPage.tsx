import { PlaceListItem } from "@/shared/components/ui/PlaceListItem";
import styles from "./ShopsPage.module.scss";
import {
    placesNovokuybyshevskArray,
    placesSamaraArray,
} from "@/constants/arrays/placesArray";

export default function ShopsPage() {
    return (
        <div className={styles.inner}>
            <h1 className={styles.title}>ГДЕ НАС НАЙТИ</h1>
            <h2 className={styles.subtitle}>г. Самара</h2>
            <ul className={styles.list}>
                {placesSamaraArray.map((element, index) => (
                    <PlaceListItem
                        title={element.title}
                        index={index + 1}
                        key={element.title}
                        image={element.image}
                    >
                        <p className={styles.time}>{element.time}</p>
                        <p className={styles.tel}>{element.tel}</p>
                    </PlaceListItem>
                ))}
            </ul>
            <h2 className={styles.subtitle}>г. Новокуйбышевск</h2>
            <ul className={styles.list}>
                {placesNovokuybyshevskArray.map((element, index) => (
                    <PlaceListItem
                        title={element.title}
                        index={index + 1}
                        key={element.title}
                        image={element.image}
                    >
                        <p className={styles.time}>{element.time}</p>
                        <p className={styles.tel}>{element.tel}</p>
                    </PlaceListItem>
                ))}
            </ul>
            <p className={styles.text}>
                Подарите себе и близким волшебство праздника с нашими
                пиротехническими услугами. Выбирайте и заказывайте шоу как
                онлайн, так и оффлайн — мы всегда готовы помочь сделать ваш день
                особенным!
            </p>
        </div>
    );
}

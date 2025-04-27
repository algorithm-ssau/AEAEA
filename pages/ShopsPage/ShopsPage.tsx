import { PlaceListItem } from "@/shared/components/ui/PlaceListItem";
import styles from "./ShopsPage.module.scss";

import image from '../../public/images/place.jpg'

const array = [
    {
        title: 'ул.Вилоновская, 138"Е"',
        time: "10.00 до 20.00, без выходных",
        tel: "+7(846)922-93-87 (сот.)",
        image: image ,
    },
    {
        title: "пл. им Кирова, павильон 21",
        time: "10.00 до 20.00, без выходных",
        tel: "+7(937)202-04-51",
        image: image,
    },
    {
        title: "Московское шоссе, д.205/1",
        time: "12:00 до 20:00, Выходной: Понедельник",
        tel: "+7(937)066-94-00",
        image: image,
    },
    {
        title: "Московское шоссе 18-й км, д.25А",
        time: "12:00 до 20:00 Выходной: Вторник",
        tel: "+7(927)607-21-15",
        image: image,
    },
    {
        title: 'Красноглинское шоссе, 3"Б"',
        time: "10.00 до 20.00, без выходных",
        tel: "+7(927)712-93-89",
        image: image,
    },
    {
        title: "ул.Тамбовская, 2 (116 км)",
        time: "Временно не работает",
        tel: "+7(846)989-31-74 (сот.)",
        image: image,
    },
];

const array2 = [
    {
        title: "проспект Победы, д.36",
        time: "10.00 до 22.00, без выходных",
        tel: "+7(937)062-70-11",
        image: image,
    },
    {
        title: 'проспект Победы, д. 1"Ж"',
        time: "10.00 до 22.00, без выходных",
        tel: "+7(995)933-63-63",
        image: image,
    },
];

export default function ShopsPage(){
    return (
        <div className={styles.inner}>
            <h1 className={styles.title}>ГДЕ НАС НАЙТИ</h1>
            <h2 className={styles.subtitle}>г. Самара</h2>
            <ul className={styles.list}>
                {array.map((element, index) => (
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
                {array2.map((element, index) => (
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
};

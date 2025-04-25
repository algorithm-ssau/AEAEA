import styles from "./ContactsRequisites.module.scss";

const ContactsRequisites: React.FC = () => {
    return (
        <div className={styles.requisites}>
          <h1 className={styles.title}>НАШИ РЕКВИЗИТЫ</h1>
          
          <div className={styles.requisitesBlock}>
            <div className={styles.requisiteItem}>
              <h2 className={styles.subtitle}>ПОЛНОЕ НАИМЕНОВАНИЕ</h2>
              <p className={styles.text}>Общество с ограниченной ответственностью «Пиротеатр ВС»</p>
            </div>
    
            <div className={styles.requisiteItem}>
              <h2 className={styles.subtitle}>СОКРАЩЕННОЕ НАИМЕНОВАНИЕ</h2>
              <p className={styles.text}>ООО «Пиротеатр ВС»</p>
            </div>
    
            <div className={styles.requisiteItem}>
              <h2 className={styles.subtitle}>ИНН/КПП</h2>
              <p className={styles.text}>6315572362/631501001</p>
            </div>
    
            <div className={styles.requisiteItem}>
              <h2 className={styles.subtitle}>ОГРН</h2>
              <p className={styles.text}>1046300457345</p>
            </div>
    
            <div className={styles.requisiteItem}>
              <h2 className={styles.subtitle}>ЮРИДИЧЕСКИЙ АДРЕС</h2>
              <p className={styles.text}>443096 Россия, г. Самара, ул. Дачная, д. 17, к.83</p>
            </div>
    
            <div className={styles.requisiteItem}>
              <h2 className={styles.subtitle}>ФАКТИЧЕСКИЙ АДРЕС</h2>
              <p className={styles.text}>443099 Россия, г. Самара, ул. Чапаевская, д. 79А</p>
            </div>
    
            <div className={styles.requisiteItem}>
              <h2 className={styles.subtitle}>ТЕЛЕФОН, ФАКС</h2>
              <p className={styles.text}>+7 (846) 332-37-07 или +7 (846) 332-37-06</p>
            </div>
    
            <div className={styles.requisiteItem}>
              <h2 className={styles.subtitle}>ЭЛЕКТРОННАЯ ПОЧТА</h2>
              <a href="mailto:info@samara-salut.ru" className={styles.link}>info@samara-salut.ru</a>
            </div>
    
            <div className={styles.requisiteItem}>
              <h2 className={styles.subtitle}>САЙТ</h2>
                <a href="https://samara-salut.ru" className={styles.link}>https://samara-salut.ru</a>
              
            </div>
    
            <div className={styles.requisite_item_last}>
              <h2 className={styles.last_subtitle}>БАНКОВСКИЕ РЕКВИЗИТЫ</h2>
              <p className={styles.last_text}>БИК 047308887</p>
              <p className={styles.last_text}>Р/с №40702810710100000659  филиал ПАО БИНБАНК В УЛЬЯНОВСКЕ</p>
              <p className={styles.last_text}>Кор/счет 30101810100000000887</p>
            </div>
          </div>
        </div>
    );
};
export { ContactsRequisites };

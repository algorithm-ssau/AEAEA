import { SubmitHandler, useForm } from "react-hook-form";
import { PrimaryInput } from "../../ui/PrimaryInput";
import styles from "./InnerContactForm.module.scss";
import $api from "@/http";

type ContactsType = {
    name: string;
    tel: string;
    email: string;
    question: string;
    message: string;
};
const InnerContactForm: React.FC = () => {
    const conactsForm = useForm<ContactsType>();

    const onSubmit: SubmitHandler<ContactsType> = async (data) => {
        const res = await $api.post("/***", data);
    };

    return (
        <div className={styles.inner}>
            <h2 className={styles.title}>СВЯЖИТЕСЬ С НАМИ</h2>
            <p className={styles.text}>
                Менеджеры компании помогут с ответами на ваши вопросы,
                рассчитают стоимость услуг и подготовят индивидуальное
                предложение специально для вас.
            </p>
            <form
                className={styles.form}
                onSubmit={conactsForm.handleSubmit(onSubmit)}
            >
                <PrimaryInput
                    register={conactsForm.register("name", {})}
                    placeholder={"Ваше имя"}
                />
                <PrimaryInput
                    register={conactsForm.register("tel", {})}
                    placeholder={"Телефон"}
                />
                <PrimaryInput
                    register={conactsForm.register("email", {})}
                    placeholder={"E-mail"}
                />
                <PrimaryInput
                    register={conactsForm.register("question", {})}
                    placeholder={"Интересующая услуга или вопрос"}
                />
                <PrimaryInput
                    register={conactsForm.register("message", {})}
                    placeholder={"Сообщение"}
                />
                <button className={styles.submit}>ОТПРАВИТЬ</button>
            </form>
            
        </div>
    );
};
export { InnerContactForm };

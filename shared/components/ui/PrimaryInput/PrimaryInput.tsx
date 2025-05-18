import styles from "./PrimaryInput.module.scss";
export type PrimaryinputType = {
    register: any;
    type?: "number" | "text";
    placeholder?: string;
};
const PrimaryInput: React.FC<PrimaryinputType> = ({
    register,
    placeholder,
    type,
}) => {
    return (
        <div className={styles.block}>
            <input
                {...register}
                type={type ? type : "text"}
                className={styles.input}
                placeholder={placeholder ? placeholder : ""}
            />
        </div>
    );
};
export { PrimaryInput };

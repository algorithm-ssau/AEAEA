import styles from "./AuthPage.module.scss";

const AuthPage: React.FC = () => {
    return (
        <div className={styles.inner}>
            <div className={styles.block}>
                <h1 className={styles.title}>Авторизация</h1>
                <div className={styles.form_block}>
                    <form action="" className={styles.form}>
                        <div className={styles.input_block}>
                            <p className={styles.label}>Логин</p>
                            <input
                                className={styles.input}
                                placeholder="Логин"
                            />
                        </div>
                        <div className={styles.input_block}>
                            <p className={styles.label}>Пароль</p>
                            <input
                                className={styles.input}
                                placeholder="Пароль"
                            />
                        </div>
                        <button className={styles.submit}>ВОЙТИ</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export { AuthPage };

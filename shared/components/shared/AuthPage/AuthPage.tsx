'use client'
import styles from "./AuthPage.module.scss";
import { signIn } from "next-auth/react";
import {  useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const AuthPage: React.FC = () => {
    const router = useRouter();
    const form = useForm<{ login: string; password: string }>({
        defaultValues: {
            login: "",
            password: "",
        },
    });
    const onSubmit = async (data: { login: string; password: string }) => {
        try {
            const res = await signIn("credentials", {
                ...data,
                redirect: false,
            });

            if (!res?.ok) {
                return console.error("не удалось войти");
            }
           router.push('/dashboard'); 
            

        } catch (error) {
            console.error("не удалось войти");
            console.log(error)
            
        }
    };
    return (
        <div className={styles.inner}>
            <div className={styles.block}>
                <h1 className={styles.title}>Авторизация</h1>
                <div className={styles.form_block}>
                    <form
                        className={styles.form}
                        onSubmit={form.handleSubmit(onSubmit)}
                    >
                        <div className={styles.input_block}>
                            <p className={styles.label}>Логин</p>
                            <input
                                className={styles.input}
                                placeholder="Логин"
                                {...form.register("login")}
                            />
                        </div>
                        <div className={styles.input_block}>
                            <p className={styles.label}>Пароль</p>
                            <input
                            {...form.register("password")}
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

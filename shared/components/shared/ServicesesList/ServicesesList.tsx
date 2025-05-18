'use client'
import $api from "@/http";
import styles from "./ServicesesList.module.scss";
import { Event, Service } from "@prisma/client";
import Link from "next/link";
import { useActions } from "@/shared/redux/hooks/useActions";
import { useReduxStates } from "@/shared/redux/hooks/useReduxStates";
import { useEffect, useState } from "react";
interface ServicesesListProps {}
const ServicesesList: React.FC<ServicesesListProps> = (props) => {
     const { fetchServices} = useActions();
     const { services,servicesStatus,activeEvents} = useReduxStates();

     
     useEffect(() => {
        fetchServices({
            events:activeEvents
        });
    }, [activeEvents]);

    return (
            <ul className={styles.list}>
                {services.map((service:Service, index) => (
                    <li key={service.id} className={styles.element}>
                        <Link href={`services/${service.id}`}>
                            <img
                                src={service.imageUrl}
                                className={styles.image}
                                alt=""
                            />
                            <p className={styles.title}>{service.title}</p>
                        </Link>
                    </li>
                ))}
            </ul>
    );
};
export { ServicesesList };

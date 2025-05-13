"use client";
import { Event } from "@prisma/client";
import styles from "./EventsBlock.module.scss";
import { useReduxStates } from "@/shared/redux/hooks/useReduxStates";
import { useActions } from "@/shared/redux/hooks/useActions";

const EventsBlock: React.FC<{ events: Event[] }> = ({ events }) => {
    const { activeEvents } = useReduxStates();
    const { addEvent, setEvents } = useActions();

    return (
        <ul className={styles.list}>
            <li
                key={"all"}
                className={`${styles.element}${
                    activeEvents.length === 0 ? " " + styles.active : ""
                }`}
            >
                <button
                    onClick={() => {
                        
                        setEvents([]);
                    }}
                >
                    Все
                </button>
            </li>
            {events.map((element, index) => (
                <li
                    key={element.id}
                    className={`${styles.element}${
                        activeEvents.find((item) => element.id === item.id)
                            ? " " + styles.active
                            : ""
                    }`}
                >
                    <button
                        onClick={() => {
                            addEvent(element);
                        }}
                    >
                        {element.title}
                    </button>
                </li>
            ))}
        </ul>
    );
};
export { EventsBlock };

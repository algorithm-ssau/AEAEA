import { Box, Popover } from "@mui/material";
import styles from "./AboutPopover.module.scss";
import Link from "next/link";
interface AboutPopoverProps {
    setAnchorEl: (anchorEl: HTMLButtonElement | null) => void;
    anchorEl: HTMLButtonElement | null;
}

const array = [
    {
        title: "Магазины",
        href: "/shops",
    },
    {
        title: "Реквизиты",
        href: "/requisites",
    },
    {
        title: "Лицензия",
        href: "/license",
    },
    {
        title: "Адреса",
        href: "/addresses",
    },
];
const AboutPopover: React.FC<AboutPopoverProps> = ({
    anchorEl,
    setAnchorEl,
}) => {
    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
            >
                <Box sx={{ bgcolor: "#000", borderRadius: "10px" }}>
                    <div className={styles.inner}>
                        <nav>
                            <ul className={styles.list}>
                                {array.map((element) => (
                                    <li className="" key={element.title}>
                                        <Link
                                            href={element.href}
                                            className={styles.link}
                                        >
                                            {element.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </Box>
            </Popover>
        </>
    );
};
export { AboutPopover };

import styles from "./ModalContacts.module.scss";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

interface ModalContactsProps {
    setOpen: (open: boolean) => void;
    open: boolean;
}
const ModalContacts: React.FC<ModalContactsProps> = (props) => {
    const { setOpen, open } = props;

    const handleClose = () => setOpen(false);

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={styles.box}>
                <div className={styles.inner}></div>
            </Box>
        </Modal>
    );
};
export { ModalContacts };

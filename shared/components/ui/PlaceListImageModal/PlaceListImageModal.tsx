import styles from "./PlaceListImageModal.module.scss";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Image, { StaticImageData } from "next/image";

interface PlaceListImageModalProps {
    setOpen: (open: boolean) => void;
    open: boolean;
    image: StaticImageData;
}
const PlaceListImageModal: React.FC<PlaceListImageModalProps> = (props) => {
    const { setOpen, open, image } = props;

    const handleClose = () => setOpen(false);

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={styles.box}>
                <div className={styles.inner}>
                    <Image
                        src={image}
                        className={styles.image}
                        alt="изображение с местонахождением"
                    />
                </div>
            </Box>
        </Modal>
    );
};
export { PlaceListImageModal };

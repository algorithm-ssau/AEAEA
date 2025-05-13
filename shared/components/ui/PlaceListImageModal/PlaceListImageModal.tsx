import styles from "./PlaceListImageModal.module.scss";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Image, { StaticImageData } from "next/image";
import close_icon from "@/public/images/cross_close.svg";
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
                    <button
                        className={styles.button_click}
                        onClick={() => setOpen(false)}
                    >
                        <Image
                            src={close_icon}
                            height={30}
                            width={33}
                            alt="close"
                        />
                    </button>
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

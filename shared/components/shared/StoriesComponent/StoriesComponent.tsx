"use client";
import { Box, Modal } from "@mui/material";
import styles from "./StoriesComponent.module.scss";
import Stories from "react-insta-stories";
import { useState } from "react";

import image1 from "@/public/images/place1.jpg";
import image2 from "@/public/images/place1.jpg";
import useFetch from "@/shared/hooks/useFetch";

interface StoriesComponentProps {}
const StoriesComponent: React.FC<StoriesComponentProps> = ({}) => {
    const [open, setOpen] = useState(false);
    const { data, loading, error } = useFetch("stories", true);

    const [stories, setStories] = useState<any[]>([]);

    const onClickStory = (element: any) => {
        console.log(element);

        setStories(
            element.objects.map((element: any, index: number) => {
                return {
                    url: element.imageUrl,
                    duration: 3000,
                };
            })
        );
        setOpen(true);
    };

    return (
        <div className={styles.inner}>
            <div className="container">
                {data ? (
                    <>
                        <ul className={styles.list}>
                            {data.map((element: any, index: number) => (
                                <li
                                    key={element.id}
                                    onClick={() => onClickStory(element)}
                                >
                                    <button className={styles.storyButton}>
                                        <img
                                            src={element.imageUrl}
                                            alt=""
                                            className={styles.Bgimg}
                                        />
                                        <p className={styles.storyTitle}>
                                            {element.title}
                                        </p>
                                    </button>
                                </li>
                            ))}
                        </ul>
                        {open && (
                            <ModalStory
                                open={open}
                                setOpen={setOpen}
                                stories={stories}
                            />
                        )}
                    </>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};
export { StoriesComponent };

const ModalStory = ({ stories, open, setOpen }: any) => {
    console.log(stories)
    
    const handleClose = () => setOpen(false);
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={styles.box}>
                <Stories
                    stories={stories}
                    defaultInterval={1500}
                    width={400}
                    height={600}
                />
            </Box>
        </Modal>
    );
};

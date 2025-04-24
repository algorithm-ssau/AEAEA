import { Popover } from "@mui/material";
interface AboutPopoverProps {
    setAnchorEl: (anchorEl: HTMLButtonElement | null) => void;
    anchorEl: HTMLButtonElement | null;
}
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
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
            >
                <ul>
                    <li>ddddd</li>
                    <li>ddddd</li>
                    <li>ddddd</li>
                    <li>ddddd</li>
                </ul>
            </Popover>
        </>
    );
};
export { AboutPopover };

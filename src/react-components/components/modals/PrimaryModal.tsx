import { Box, Modal } from '@mui/material';

export interface Props {
    children: JSX.Element[] | JSX.Element,
    show: boolean,
}

export default function PrimaryModal({ children, show }: Props) {
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <Modal open={show}>
            <Box sx={style}>
                {children}
            </Box>
        </Modal>
    );
}

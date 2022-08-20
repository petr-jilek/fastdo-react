import { CircularProgress } from '@mui/material';

export interface Props {
    size?: number,
    white?: boolean,
}

export default function PrimaryCircularProgress({ size = 120, white = false }: Props) {
    return <CircularProgress
        size={size}
        sx={{
            color: white ? "var(--primary-white-color)" : "var(--primary-color)"
        }}
    />;
}

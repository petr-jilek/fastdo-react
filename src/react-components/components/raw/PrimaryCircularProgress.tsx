import { CircularProgress } from '@mui/material';

export interface Props {
    size?: number,
}

export default function PrimaryCircularProgress({ size = 120 }: Props) {
    return <CircularProgress
        size={size}
        sx={{
            color: "var(--primary-color)"
        }}
    />;
}

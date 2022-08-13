import { Box, LinearProgress } from '@mui/material';

export interface Props {
    value?: number,
}

export default function PrimaryLinearProgress({ value }: Props) {
    return (
        <Box sx={{ width: '100%' }}>
            <LinearProgress
                variant="determinate"
                value={value}
                sx={{
                    backgroundColor: "var(--primary-black-color)",
                    "& .MuiLinearProgress-barColorPrimary": {
                        backgroundColor: "var(--primary-color)",
                    },
                }}
            />
        </Box>
    );
}

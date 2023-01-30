import { Box, LinearProgress } from "@mui/material"

export interface Props {
  value: number
  activeColor?: string
  passiveColor?: string
}

export default function PrimaryLinearProgress({
  value,
  activeColor = "var(--primary-color)",
  passiveColor = "var(--primary-black-color)",
}: Props) {
  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          backgroundColor: passiveColor,
          "& .MuiLinearProgress-barColorPrimary": {
            backgroundColor: activeColor,
          },
        }}
      />
    </Box>
  )
}

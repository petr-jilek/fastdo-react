import CircularProgress, { CircularProgressProps } from "@mui/material/CircularProgress"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

export interface Props {
  circularProgressProps?: CircularProgressProps
  value: number
  label?: string
}

export default function CircularProgressWithLabel({ circularProgressProps = {}, value, label = "" }: Props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        value={100}
        size={50}
        sx={{ color: "var(--fastdo-gray3-color)", position: "absolute" }}
        {...circularProgressProps}
      />
      <CircularProgress
        variant="determinate"
        value={value}
        size={50}
        sx={{ color: "var(--fastdo-primary-color)" }}
        {...circularProgressProps}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
          sx={{ fontSize: "14px", color: "var(--fastdo-primary-color)" }}
        >
          {label}
        </Typography>
      </Box>
    </Box>
  )
}

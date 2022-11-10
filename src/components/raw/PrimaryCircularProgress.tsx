import { CircularProgress } from "@mui/material"

export interface Props {
  size?: number
  color?: string
}

export default function PrimaryCircularProgress({ size = 120, color = "var(--primary-color)" }: Props) {
  return (
    <CircularProgress
      size={size}
      sx={{
        color: color,
      }}
    />
  )
}

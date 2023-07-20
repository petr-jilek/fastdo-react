import { CircularProgress, SxProps, Theme } from '@mui/material'

export interface Props {
  size?: number
  color?: string
  styles?: StyleProps
}

export interface StyleProps {
  circularProgress?: SxProps<Theme> | undefined
}

export default function PrimaryCircularProgress({ size = 120, color = 'var(--fd-primary-color)', styles = {} }: Props) {
  return <CircularProgress size={size} sx={{ color: color, ...styles.circularProgress }} />
}

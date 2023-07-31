import { Box, LinearProgress } from '@mui/material'

export interface Props {
  value: number
  activeColor?: string
  passiveColor?: string
}

export default function PrimaryLinearProgress({
  value,
  activeColor = 'var(--fd-primary-color)',
  passiveColor = 'var(--fd-dark-color)'
}: Props) {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          backgroundColor: passiveColor,
          '& .MuiLinearProgress-barColorPrimary': {
            backgroundColor: activeColor
          }
        }}
      />
    </Box>
  )
}

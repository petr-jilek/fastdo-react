import CircularProgress, { type CircularProgressProps } from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
import Box, { type BoxProps } from '@mui/material/Box'

export interface Props {
  value: number
  label?: string
  componentProps?: ComponentProps
}

export interface ComponentProps {
  circularProgress: CircularProgressProps
  box: BoxProps
  typography: any
}

const CircularStepper: React.FC<Props> = ({ value, label = '', componentProps }: Props) => {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress
        variant="determinate"
        value={100}
        size={50}
        sx={{ color: 'var(--fd-gray3-color)', position: 'absolute' }}
        {...componentProps?.circularProgress}
      />
      <CircularProgress
        variant="determinate"
        value={value}
        size={50}
        sx={{ color: 'var(--fd-primary-color)' }}
        {...componentProps?.circularProgress}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        {...componentProps?.box}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
          sx={{ fontSize: '14px', color: 'var(--fd-dark-color)' }}
          {...componentProps?.typography}
        >
          {label}
        </Typography>
      </Box>
    </Box>
  )
}

export default CircularStepper

import { Slider } from '@mui/material'

export interface Props {
  min: number
  max: number
  value: number | number[]
  onChange?: (value?: number | number[]) => void
  onChangeCommitted?: (value?: number | number[]) => void
  marks?: Mark[]
  thumbColor?: string
  trackColor?: string
  railColor?: string
  markColor?: string
  markActiveColor?: string
}

export interface Mark {
  value: number
  label?: React.ReactNode
}

export default function PrimarySlider({
  min,
  max,
  value = [min, max],
  onChange = () => {},
  onChangeCommitted = () => {},
  marks = [],
  thumbColor = 'var(--fd-primary-color)',
  trackColor = 'var(--fd-primary-color)',
  railColor = 'var(--fd-dark-color)',
  markColor = 'var(--fd-dark-color)',
  markActiveColor = 'var(--fd-primary-color)'
}: Props) {
  return (
    <Slider
      track="inverted"
      aria-labelledby="track-inverted-range-slider"
      value={value}
      min={min}
      max={max}
      valueLabelDisplay="auto"
      onChange={(_event, value) => onChange(value)}
      onChangeCommitted={(_event, value) => onChangeCommitted(value)}
      marks={marks}
      sx={{
        '& .MuiSlider-thumb': {
          color: thumbColor
        },
        '& .MuiSlider-track': {
          backgroundColor: trackColor,
          border: trackColor
        },
        '& .MuiSlider-rail': {
          color: railColor
        },
        '& .MuiSlider-mark': {
          backgroundColor: markColor
        },
        '& .MuiSlider-markActive': {
          backgroundColor: markActiveColor
        }
      }}
    />
  )
}

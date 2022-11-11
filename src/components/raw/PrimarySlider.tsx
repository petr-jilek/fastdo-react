import { Slider } from "@mui/material"
import { Mark } from "@mui/base/SliderUnstyled/useSlider.types"

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

export default function PrimarySlider({
  min,
  max,
  value = [min, max],
  onChange = () => {},
  onChangeCommitted = () => {},
  marks = [],
  thumbColor = "var(--primary-color)",
  trackColor = "var(--primary-color)",
  railColor = "var(--primary-black-color)",
  markColor = "var(--primary-black-color)",
  markActiveColor = "var(--primary-color)",
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
        "& .MuiSlider-thumb": {
          color: thumbColor,
        },
        "& .MuiSlider-track": {
          backgroundColor: trackColor,
          border: trackColor,
        },
        "& .MuiSlider-rail": {
          color: railColor,
        },
        "& .MuiSlider-mark": {
          backgroundColor: markColor,
        },
        "& .MuiSlider-markActive": {
          backgroundColor: markActiveColor,
        },
      }}
    />
  )
}

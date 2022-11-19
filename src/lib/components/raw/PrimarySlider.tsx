import { Slider } from "@mui/material"
import { Mark } from "@mui/base/SliderUnstyled/useSlider.types"

export interface Props {
  min: number
  max: number
  value: number | number[]
  onChange?: (value?: number | number[]) => void
  onChangeCommitted?: (value?: number | number[]) => void
  marks?: Mark[]
  light?: boolean
}

export default function PrimarySlider({
  min,
  max,
  value = [min, max],
  onChange = () => {},
  onChangeCommitted = () => {},
  marks = [],
  light = false,
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
          color: "var(--primary-color)",
        },
        "& .MuiSlider-track": {
          backgroundColor: "var(--primary-color)",
          border: "var(--primary-color)",
        },
        "& .MuiSlider-rail": {
          color: "var(--secondary-background-color)",
        },
        "& .MuiSlider-markLabel": {
          color: light ? "var(--primary-white-color)" : "var(--primary-black-color)",
        },
        "& .MuiSlider-markLabelActive": {
          color: light ? "var(--primary-white-color)" : "var(--primary-black-color)",
        },
      }}
    />
  )
}

import { Slider } from "@mui/material";
import { Mark } from "@mui/base/SliderUnstyled/useSlider.types"

export interface Props {
    min: number,
    max: number,
    value: number | number[],
    onChange?: ({ e, value }: OnChangeData) => void,
    onChangeCommitted?: ({ e, value }: OnChangeData) => void,
    marks?: Mark[],
    light?: boolean,
}

export interface OnChangeData {
    e?: any,
    value?: number | number[],
}

export default function PrimarySlider({
    min,
    max,
    value = [min, max],
    onChange = () => { },
    onChangeCommitted = () => { },
    marks = [],
    light = false
}: Props) {
    return (
        <Slider
            track="inverted"
            aria-labelledby="track-inverted-range-slider"
            value={value}
            min={min}
            max={max}
            valueLabelDisplay="auto"
            onChange={(event, value) => onChange({ e: event, value: value })}
            onChangeCommitted={(event, value) => onChangeCommitted({ e: event, value: value })}
            marks={marks}
        />
    );
}

import styles from "./TextFieldButtonRow.module.css"
import { Button, IButtonClickData } from "./buttons/Button";
import TextField, { IOnTextChangeData } from "./text/TextField";

export interface Props {
    buttonLabel: string,
    placeholder?: string,
    onButtonClick?: ({ e }: IButtonClickData) => void,
    onTextChange?: ({ e, value }: IOnTextChangeData) => void,
    onEnter?: () => void,
    light?: boolean
}

export default function TextFieldButtonRow({
    buttonLabel,
    placeholder = "",
    onButtonClick = () => { },
    onTextChange = () => { },
    onEnter = () => { },
    light = false,
}: Props) {
    return <div className={styles.component}>
        <TextField
            placeholder={placeholder}
            onTextChange={onTextChange}
            onEnter={onEnter}
            rightBorderRadius={false}
            light={light}
        />
        <Button
            label={buttonLabel}
            onClick={onButtonClick}
            leftBorderRadius={false}
        />
    </div>;
}

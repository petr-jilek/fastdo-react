import { useRef } from "react"
import styles from "./TextField.module.css"

export interface Props {
    label?: string,
    placeholder?: string,
    type?: string,
    min?: number,
    defaultValue?: string,
    onTextChange?: ({ e, value }: IOnTextChangeData) => void,
    onEnter?: ({ e, value }: IOnTextChangeData) => void,
    leftBorderRadius?: number,
    rightBorderRadius?: number,
    light?: boolean,
}

export interface IOnTextChangeData {
    e?: any,
    value?: any
}

export default function TextField({
    label = "",
    placeholder = "",
    type = "text",
    min = 0,
    defaultValue = "",
    onTextChange = () => { },
    onEnter = () => { },
    leftBorderRadius = 20,
    rightBorderRadius = 20,
    light = false,
}: Props) {
    const inputRef = useRef<null | HTMLInputElement>(null)

    const onChange = (e: React.InputHTMLAttributes<HTMLInputElement>) => {
        var value = (e as any).target.value

        if (type === "number" && parseInt(value) < min) {
            inputRef.current!.value = min.toString()
            return
        }

        onTextChange({ e: e, value: value });
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onEnter({ e: e, value: (e.target as any).value })
        }
    }

    return <div className={styles.component}>
        {label === "" ? <></> : <p>{label}</p>}
        <input
            ref={inputRef}
            type={type}
            min={min}
            className={[
                styles.input,
                light ? styles.inputLight : styles.inputDefault
            ].join(" ")}
            placeholder={placeholder}
            defaultValue={defaultValue}
            onChange={onChange}
            onKeyDown={handleKeyDown}
            style={{
                borderTopLeftRadius: leftBorderRadius + "rem",
                borderBottomLeftRadius: leftBorderRadius + "rem",
                borderTopRightRadius: rightBorderRadius + "rem",
                borderBottomRightRadius: rightBorderRadius + "rem",
            }}
        />
    </div>;
}

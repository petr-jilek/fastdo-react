import styles from "./TextField.module.css"

export interface Props {
    label?: string,
    placeholder?: string,
    hide?: boolean,
    number?: boolean,
    defaultValue?: string,
    onTextChange?: ({ e, value }: IOnTextChangeData) => void,
    onEnter?: ({ e, value }: IOnTextChangeData) => void,
    leftBorderRadius?: boolean,
    rightBorderRadius?: boolean,
    light?: boolean
}

export interface IOnTextChangeData {
    e?: any,
    value?: any
}

export default function TextField({
    label = "",
    placeholder = "",
    hide = false,
    number = false,
    defaultValue = "",
    onTextChange = () => { },
    onEnter = () => { },
    leftBorderRadius = true,
    rightBorderRadius = true,
    light = false
}: Props) {
    const onChange = (e: React.InputHTMLAttributes<HTMLInputElement>) => {
        onTextChange({ e: e, value: (e as any).target.value });
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onEnter({ e: e, value: (e.target as any).value })
        }
    }

    return <div className={styles.component}>
        {label === "" ? <></> : <p>{label}</p>}
        <input
            type={number ? "number" : hide ? "password" : "text"}
            className={[
                styles.input,
                light ? styles.inputLight : styles.inputDefault,
                leftBorderRadius ? styles.inputLeftBorderRadius : "",
                rightBorderRadius ? styles.inputRightBorderRadius : ""
            ].join(" ")}
            placeholder={placeholder}
            defaultValue={defaultValue}
            onChange={onChange}
            onKeyDown={handleKeyDown}
        />
    </div>;
}

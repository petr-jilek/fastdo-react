import styles from "./TextArea.module.css"

export interface Props {
    label?: string,
    placeholder?: string,
    defaultValue?: string,
    onTextChange?: ({ e, value }: IOnTextChangeData) => void,
    leftBorderRadius?: number,
    rightBorderRadius?: number,
    light?: boolean
    rows?: number,
}

export interface IOnTextChangeData {
    e?: any,
    value?: any
}

export default function TextArea({
    label = "",
    placeholder = "",
    defaultValue = "",
    onTextChange = () => { },
    leftBorderRadius = 2,
    rightBorderRadius = 2,
    light = false,
    rows = 5,
}: Props) {
    const onChange = (e: React.InputHTMLAttributes<HTMLInputElement>) => {
        onTextChange({ e: e, value: (e as any).target.value });
    }

    return <div className={styles.component}>
        {label === "" ? <></> : <p>{label}</p>}
        <textarea
            className={[
                styles.input,
                light ? styles.inputLight : styles.inputDefault
            ].join(" ")}
            placeholder={placeholder}
            defaultValue={defaultValue}
            onChange={onChange}
            rows={rows}
            style={{
                borderTopLeftRadius: leftBorderRadius + "rem",
                borderBottomLeftRadius: leftBorderRadius + "rem",
                borderTopRightRadius: rightBorderRadius + "rem",
                borderBottomRightRadius: rightBorderRadius + "rem"
            }}
        />
    </div>;
}

import { useRef, useState } from "react"
import { removeAllWhitespaces, splitNumberBy3Digits } from "../../../services/commonService"
import styles from "./TextField.module.css"

export interface Props {
  label?: string
  defaultValue?: number
  onTextChange?: ({ e, value }: IOnTextChangeData) => void
  onEnter?: ({ e, value }: IOnTextChangeData) => void
  leftBorderRadius?: number
  rightBorderRadius?: number
}

export interface IOnTextChangeData {
  e?: any
  value?: any
}

export default function CurrencyTextField({
  label = "",
  defaultValue = 0,
  onTextChange = () => {},
  onEnter = () => {},
  leftBorderRadius = 20,
  rightBorderRadius = 20,
}: Props) {
  const inputRef = useRef<null | HTMLInputElement>(null)

  const [value, setValue] = useState(splitNumberBy3Digits(defaultValue))

  const onChange = (e: React.InputHTMLAttributes<HTMLInputElement>) => {
    var value = removeAllWhitespaces((e as any).target.value)
    var numberValue = Number(value)
    if (isNaN(numberValue) === false) {
      setValue(splitNumberBy3Digits(numberValue))
      onTextChange({ e: e, value: numberValue })
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onEnter({ e: e, value: (e.target as any).value })
    }
  }

  return (
    <div className={styles.component}>
      {label === "" ? <></> : <p>{label}</p>}
      <input
        ref={inputRef}
        type={"text"}
        className={[styles.input, styles.inputDefault].join(" ")}
        placeholder={""}
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        inputMode="numeric"
        style={{
          borderTopLeftRadius: leftBorderRadius + "rem",
          borderBottomLeftRadius: leftBorderRadius + "rem",
          borderTopRightRadius: rightBorderRadius + "rem",
          borderBottomRightRadius: rightBorderRadius + "rem",
        }}
      />
    </div>
  )
}

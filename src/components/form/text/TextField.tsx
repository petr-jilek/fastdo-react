import styles from "./TextField.module.css"
import { useRef } from "react"

export interface Props {
  id?: string
  type?: string
  label?: string
  placeholder?: string
  value: string
  onTextChange: ({ e, value }: IOnTextChangeData) => void
  onEnter?: ({ e, value }: IOnTextChangeData) => void
  onInputClick?: () => void
  min?: any
  max?: any
  divStyle?: React.CSSProperties
  labelStyle?: React.CSSProperties
  inputStyle?: React.CSSProperties
}

export interface IOnTextChangeData {
  e?: any
  value?: any
}

export default function TextField({
  id = "",
  type = "text",
  label = "",
  placeholder = "",
  value,
  onTextChange,
  onEnter = () => {},
  onInputClick = () => {},
  min = 0,
  max = null,
  divStyle = {},
  labelStyle = {},
  inputStyle = {},
}: Props) {
  const inputRef = useRef<null | HTMLInputElement>(null)

  const onChange = (e: React.InputHTMLAttributes<HTMLInputElement>) => {
    const value = (e as any).target.value

    if (type === "number" && parseInt(value) < min) {
      inputRef.current!.value = min.toString()
      return
    }

    onTextChange({ e: e, value: value })
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onEnter({ e: e, value: (e.target as any).value })
    }
  }

  return (
    <div className={styles.component} style={divStyle}>
      {label ? (
        <label htmlFor={id} style={labelStyle}>
          {label}
        </label>
      ) : (
        <></>
      )}
      <input
        ref={inputRef}
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        onClick={onInputClick}
        min={min}
        max={max}
        style={inputStyle}
      />
    </div>
  )
}

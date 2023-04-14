import styles from "./TextField.module.css"
import { useRef } from "react"

export interface Props {
  id?: string
  type?: string
  label?: string
  placeholder?: string
  value: string
  onChange: (value: any, event: React.InputHTMLAttributes<HTMLInputElement>) => void
  onEnter?: (value: any, event: React.InputHTMLAttributes<HTMLInputElement>) => void
  onInputClick?: () => void
  min?: any
  max?: any
  divStyle?: React.CSSProperties
  labelStyle?: React.CSSProperties
  inputStyle?: React.CSSProperties
  errorText?: string
  hintText?: string
  successText?: string
  disabled?: boolean
}

export default function TextField({
  id = "",
  type = "text",
  label = "",
  placeholder = "",
  value,
  onChange,
  onEnter = () => {},
  onInputClick = () => {},
  min = 0,
  max = null,
  divStyle = {},
  labelStyle = {},
  inputStyle = {},
  errorText = "",
  hintText = "",
  successText = "",
  disabled = false,
}: Props) {
  const inputRef = useRef<null | HTMLInputElement>(null)

  const handleOnChange = (e: React.InputHTMLAttributes<HTMLInputElement>) => {
    if (disabled) return

    const value = (e as any).target.value

    if (type === "number" && parseInt(value) < min) {
      inputRef.current!.value = min.toString()
      return
    }

    onChange(value, e)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onEnter((e.target as any).value, e)
    }
  }

  const getComponentClass = () => {
    var classes = styles.component
    if (disabled) classes += " " + styles.componentDisabled
    return classes
  }

  return (
    <div className={getComponentClass()} style={divStyle}>
      {label && (
        <label htmlFor={id} style={labelStyle}>
          {label}
        </label>
      )}
      <input
        ref={inputRef}
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
        onClick={onInputClick}
        min={min}
        max={max}
        disabled={disabled}
        style={inputStyle}
      />
      {errorText && (
        <p className={styles.underText} style={{ color: "var(--fastdo-error-color)" }}>
          {errorText}
        </p>
      )}
      {hintText && (
        <p className={styles.underText} style={{ color: "var(--fastdo-info-color)" }}>
          {hintText}
        </p>
      )}
      {successText && (
        <p className={styles.underText} style={{ color: "var(--fastdo-success-color)" }}>
          {successText}
        </p>
      )}
    </div>
  )
}

import Button, { getButtonClass, Props as ButtonProps } from "./Button"
import styles from "./Button.module.css"

export interface Props extends ButtonProps {
  type?: "submit" | "reset" | "button"
}

export default function Input({
  label,
  type = "submit",
  onClick = () => {},
  onDoubleClick = () => {},
  loading = false,
  disabled = false,
  outlined = false,
  danger = false,
  style = {},
  children = null,
  loadingSize = 30,
  loadingColor = "var(--fastdo-button-loading-color)",
}: Props) {
  if (loading)
    return (
      <Button
        label={label}
        onClick={onClick}
        onDoubleClick={onDoubleClick}
        loading={loading}
        disabled={disabled}
        outlined={outlined}
        danger={danger}
        style={style}
        children={children}
        loadingSize={loadingSize}
        loadingColor={loadingColor}
      />
    )

  return (
    <input
      type={type}
      className={[styles.component, getButtonClass(disabled, outlined, danger)].join(" ")}
      style={style}
      value={label}
    />
  )
}

import PrimaryCircularProgress from "../../raw/PrimaryCircularProgress"

export interface Props {
  label: string
  onClick?: ({ e }: IButtonClickData) => void
  onDoubleClick?: ({ e }: IButtonClickData) => void
  loading?: boolean
  disabled?: boolean
  outlined?: boolean
  danger?: boolean
  style?: React.CSSProperties
  children?: JSX.Element | null
  loadingSize?: number
  loadingColor?: string
}

export interface IButtonClickData {
  e?: React.MouseEvent<HTMLElement>
}

export const getButtonClass = (disabled: boolean, outlined: boolean, danger: boolean) => {
  if (disabled && outlined) return "fastdo-button-disabled-outlined"
  if (outlined && danger) return "fastdo-button-danger-outlined"
  if (disabled) return "fastdo-button-disabled"
  if (outlined) return "fastdo-button-outlined"
  if (danger) return "fastdo-button-danger"
  return "fastdo-button-default"
}

export default function Button({
  label,
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
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    if (disabled || loading) return
    onClick({ e: e })
  }

  const handleDoubleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    if (disabled || loading) return
    onDoubleClick({ e: e })
  }

  if (loading)
    return (
      <button
        className={"fastdo-button " + getButtonClass(disabled, outlined, danger)}
        style={{ ...style, position: "relative" }}
      >
        <div style={{ visibility: "hidden" }}>{children ? children : label}</div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <PrimaryCircularProgress size={loadingSize} color={loadingColor} />
        </div>
      </button>
    )

  return (
    <button
      className={"fastdo-button " + getButtonClass(disabled, outlined, danger)}
      style={style}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
    >
      {children ? children : label}
    </button>
  )
}

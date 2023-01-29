import styles from "./Button.module.css"
import PrimaryCircularProgress from "../../raw/PrimaryCircularProgress"

export interface Props {
  label: string
  onClick?: ({ e }: IButtonClickData) => void
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

export default function Button({
  label,
  onClick = () => {},
  loading = false,
  disabled = false,
  outlined = false,
  danger = false,
  style = {},
  children = null,
  loadingSize = 30,
  loadingColor = "var(--fastdo-button-loading-color)",
}: Props) {
  const getButtonClass = () => {
    if (disabled && outlined) return styles.componentDisabledOutlined
    if (outlined && danger) return styles.componentDangerOutlined
    if (disabled) return styles.componentDisabled
    if (outlined) return styles.componentOutlined
    if (danger) return styles.componentDanger
    return styles.componentDefault
  }

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    if (disabled || loading) return
    onClick({ e: e })
  }

  if (loading)
    return (
      <button className={[styles.component, getButtonClass()].join(" ")} style={{ ...style, position: "relative" }}>
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
    <button className={[styles.component, getButtonClass()].join(" ")} style={style} onClick={handleClick}>
      {children ? children : label}
    </button>
  )
}

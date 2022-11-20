import PrimaryCircularProgress from "../../raw/PrimaryCircularProgress"

export interface Props {
  label: string
  onClick?: ({ e }: IButtonClickData) => void
  loading?: boolean
  disabled?: boolean
  outlined?: boolean
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
  style = {},
  children = null,
  loadingSize = 60,
  loadingColor = "var(--primary-color)",
}: Props) {
  const getButtonClass = () => {
    if (disabled && outlined) return "fastdo-Button-componentDisabledOutlined"
    if (disabled) return "fastdo-Button-componentDisabled"
    if (outlined) return "fastdo-Button-componentOutlined"
    return "fastdo-Button-componentDefault"
  }

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    if (disabled || loading) return
    onClick({ e: e })
  }

  if (loading) return <PrimaryCircularProgress size={loadingSize} color={loadingColor} />

  return (
    <button
      className={["fastdo-Button-component", getButtonClass()].join(" ")}
      style={style}
      onClick={handleClick}
    >
      {children ? children : label}
    </button>
  )
}

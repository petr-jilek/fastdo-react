import styles from "./CenterModal.module.css"
import Card from "../cards/Card"
import { AiOutlineClose } from "react-icons/ai"

export interface Props {
  children: JSX.Element[] | JSX.Element
  style?: React.CSSProperties
  cardStyle?: React.CSSProperties
  show?: boolean
  header?: string
  showCloseIcon?: boolean
  onCloseIcon?: () => void
  onShaderClick?: () => void
}

export default function CenterModal({
  children,
  style = {},
  cardStyle = {},
  show = false,
  header = "",
  showCloseIcon = false,
  onCloseIcon = () => {},
  onShaderClick = () => {},
}: Props) {
  if (show === false) return <></>

  return (
    <>
      <div className={styles.component} style={style}>
        <Card style={{ backgroundColor: "var(--fastdo-light-color)", ...cardStyle }}>
          <div className={styles.headerDiv}>
            {header ? <h4 className={styles.header}>{header}</h4> : <></>}
            {showCloseIcon ? <AiOutlineClose className={styles.closeIcon} onClick={onCloseIcon} /> : <></>}
          </div>
          <>{children}</>
        </Card>
      </div>
      <div className={styles.shader} onClick={onShaderClick}></div>
    </>
  )
}

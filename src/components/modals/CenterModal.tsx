import styles from "./CenterModal.module.css"
import { AiOutlineClose } from "react-icons/ai"

export interface Props {
  children: React.ReactNode
  style?: React.CSSProperties
  show?: boolean
  header?: string
  showCloseIcon?: boolean
  hideShader?: boolean
  onCloseIcon?: () => void
  onShaderClick?: () => void
}

export default function CenterModal({
  children,
  style = {},
  show = false,
  header = "",
  showCloseIcon = false,
  hideShader = false,
  onCloseIcon = () => {},
  onShaderClick = () => {},
}: Props) {
  if (show === false) return <></>

  return (
    <>
      <div className={styles.component} style={style}>
        <div className={styles.headerDiv}>
          {header ? <h4 className={styles.header}>{header}</h4> : <></>}
          {showCloseIcon ? <AiOutlineClose className={styles.closeIcon} onClick={onCloseIcon} /> : <></>}
        </div>
        <>{children}</>
      </div>
      {hideShader === false && <div className={styles.shader} onClick={onShaderClick}></div>}
    </>
  )
}

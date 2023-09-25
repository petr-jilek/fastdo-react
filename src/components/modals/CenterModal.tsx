import styles from './CenterModal.module.css'
import { AiOutlineClose } from 'react-icons/ai'

export interface Props {
  children: React.ReactNode
  style?: React.CSSProperties
  header?: string
  showCloseIcon?: boolean
  hideShader?: boolean
  onCloseIcon?: () => void
  onShaderClick?: () => void
}

export default function CenterModal({
  children,
  style = {},
  header = '',
  showCloseIcon = false,
  hideShader = false,
  onCloseIcon = () => {},
  onShaderClick = () => {}
}: Props) {
  return (
    <>
      <div className="fd-center-absolute" style={style}>
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

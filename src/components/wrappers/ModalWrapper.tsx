import modules from './ModalWrapper.module.css'
import { AiOutlineClose } from 'react-icons/ai'

export interface Props {
  showHeader?: boolean
  title?: string
  showCloseIcon?: boolean
  onCloseIconClick?: () => void
  children?: React.ReactNode
  styles?: StyleProps
}

export interface StyleProps {
  headerContainer?: React.CSSProperties
  headerText?: React.CSSProperties
  closeIcon?: React.CSSProperties
}

const ModalWrapper: React.FC<Props> = ({
  showHeader = true,
  title = '',
  showCloseIcon = true,
  onCloseIconClick = () => {},
  children,
  styles = {}
}: Props) => {
  return (
    <>
      {showHeader && (
        <div className={modules.headerContainer} style={styles.headerContainer}>
          {title ? <h3 style={styles.headerText}>{title}</h3> : <div />}
          {showCloseIcon && (
            <AiOutlineClose onClick={onCloseIconClick} className={modules.closeIcon} style={styles.closeIcon} />
          )}
        </div>
      )}
      {children}
    </>
  )
}

export default ModalWrapper

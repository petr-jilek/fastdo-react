import modules from './CenterCardModal.module.css'
import { Card, ColorType } from '../..'
import type { StyleProps as CardStyleProps } from '../cards/Card'
import { AiOutlineClose } from 'react-icons/ai'

export interface Props {
  colorType?: ColorType
  showHeader?: boolean
  title?: string
  showCloseIcon?: boolean
  onCloseIconClick?: () => void
  onShaderClick?: () => void
  children?: React.ReactNode
  styles?: StyleProps
}

export interface StyleProps {
  component?: React.CSSProperties
  card?: CardStyleProps
  shader?: React.CSSProperties
  headerContainer?: React.CSSProperties
  headerText?: React.CSSProperties
  closeIcon?: React.CSSProperties
}

const CenterCardModal: React.FC<Props> = ({
  colorType = ColorType.dark,
  showHeader = false,
  title = '',
  showCloseIcon = false,
  onCloseIconClick = () => {},
  onShaderClick = () => {},
  children,
  styles = {}
}: Props) => {
  return (
    <>
      <div className="fd-position-fixed fd-center-absolute fd-z-index-1" style={styles.component}>
        <Card colorType={colorType} styles={styles.card}>
          {showHeader && (
            <div className={modules.headerContainer} style={styles.headerContainer}>
              {title ? <h3 style={styles.headerText}>{title}</h3> : <div />}
              {showCloseIcon && (
                <AiOutlineClose onClick={onCloseIconClick} className={modules.closeIcon} style={styles.closeIcon} />
              )}
            </div>
          )}
          {children}
        </Card>
      </div>
      <div
        className="fd-position-fixed fd-expand-full-screen fd-z-index-2 fd-bg-color-gray2 fd-opacity-5"
        onClick={onShaderClick}
        style={{ top: 0, left: 0, ...styles.shader }}
      ></div>
    </>
  )
}

export default CenterCardModal

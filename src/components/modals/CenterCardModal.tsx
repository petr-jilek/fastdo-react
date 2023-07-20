import { Card, ColorType } from '../..'
import type { StyleProps as CardStyleProps } from '../cards/Card'
import ModalWrapper, { type Props as ModalWrapperProps } from '../wrappers/ModalWrapper'

export interface Props {
  colorType?: ColorType
  onShaderClick?: () => void
  children?: React.ReactNode
  modalWrapperProps?: ModalWrapperProps
  styles?: StyleProps
}

export interface StyleProps {
  component?: React.CSSProperties
  card?: CardStyleProps
  shader?: React.CSSProperties
}

const CenterCardModal: React.FC<Props> = ({
  colorType = ColorType.dark,
  onShaderClick = () => {},
  children,
  modalWrapperProps = {},
  styles = {}
}: Props) => {
  return (
    <>
      <div className="fd-position-fixed fd-center-absolute fd-z-index-1" style={styles.component}>
        <Card colorType={colorType} styles={styles.card}>
          <ModalWrapper {...modalWrapperProps}>
            <>{children}</>
          </ModalWrapper>
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

import { ColorType } from '../../common/enums/colorType'

export interface Props {
  colorType?: ColorType
  onClick?: () => void
  children: JSX.Element[] | JSX.Element
  styles?: StyleProps
}

export interface StyleProps {
  card?: React.CSSProperties
}

export default function Card({ colorType = ColorType.dark, onClick = () => {}, children, styles = {} }: Props) {
  return (
    <div className={'fd-card-' + colorType} onClick={onClick} style={styles.card}>
      {children}
    </div>
  )
}

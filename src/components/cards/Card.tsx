import React from 'react'
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
const Card: React.FC<Props> = ({ colorType = ColorType.dark, onClick = () => {}, children, styles = {} }) => {
  return (
    <div className={'fd-card-' + colorType} onClick={onClick} style={styles.card}>
      {children}
    </div>
  )
}

export default Card

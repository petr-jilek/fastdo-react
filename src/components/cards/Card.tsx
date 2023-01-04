import styles from "./Card.module.css"

export interface Props {
  children: JSX.Element[] | JSX.Element
  onClick?: () => void
  style?: React.CSSProperties
}

export default function Card({ children, onClick = () => {}, style = {} }: Props) {
  return (
    <div className={styles.component} style={style} onClick={onClick}>
      {children}
    </div>
  )
}

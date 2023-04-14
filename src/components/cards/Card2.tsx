import styles from "./Card2.module.css"

export interface Props {
  children: JSX.Element[] | JSX.Element
  onClick?: () => void
  style?: React.CSSProperties
}

export default function Card2({ children, onClick = () => {}, style = {} }: Props) {
  return (
    <div className={styles.component} style={style} onClick={onClick}>
      {children}
    </div>
  )
}

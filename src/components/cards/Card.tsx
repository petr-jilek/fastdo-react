import styles from "./Card.module.css"

export interface Props {
  children: JSX.Element[] | JSX.Element
  style?: React.CSSProperties
}

export default function Card({ children, style = {} }: Props) {
  return (
    <div className={styles.component} style={style}>
      {children}
    </div>
  )
}

import styles from "./AuthView.module.css"

export interface Props {
  children?: any
}

export default function AuthView({ children }: Props) {
  return (
    <div className={styles.component}>
      <div className={styles.contentDiv}>{children}</div>
    </div>
  )
}

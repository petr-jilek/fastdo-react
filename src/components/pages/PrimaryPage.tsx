import styles from "./PrimaryPage.module.css"

export interface Props {
  children: React.ReactNode
  title: string
  head?: any
}

export default function PrimaryPage({ children, title, head = null }: Props) {
  return (
    <div className={styles.component}>
      {head ? <head.element /> : <></>}
      <div className={styles.componentInnerDiv}>
        <h1 className={styles.header}>{title}</h1>
        <div className={styles.contentDiv}>{children}</div>
      </div>
    </div>
  )
}

import styles from "./LabelBadge.module.css"

export interface Props {
  label: string
  style?: React.CSSProperties
}

export default function LabelBadge({ label, style = {} }: Props) {
  return (
    <div className={styles.component} style={style}>
      {label}
    </div>
  )
}

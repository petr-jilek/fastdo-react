import styles from "./CircularProgressPage.module.css"
import PrimaryCircularProgress from "./PrimaryCircularProgress"

export interface Props {
  size?: number
  color?: string
}

export default function CircularProgressPage({ size = 120, color = "var(--fastdo-primary-color)" }: Props) {
  return (
    <div className={styles.component}>
      <PrimaryCircularProgress size={size} color={color} />
    </div>
  )
}

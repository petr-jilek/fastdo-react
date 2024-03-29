import styles from "./Switch.module.css"

export interface Props {
  value: boolean
  onChange?: () => void
  disabled?: boolean
}

export default function Switch({ value, onChange = () => {}, disabled = false }: Props) {
  return (
    <label className={styles.component}>
      <input type="checkbox" checked={value} onChange={() => onChange()} />
      <span
        className={styles.slider + " " + styles.round + " " + (disabled ? styles.sliderDisabled : styles.sliderDefault)}
      ></span>
    </label>
  )
}

import styles from "./Switch.module.css"

export interface Props {
  value: boolean
  onChange?: () => void
  diabled?: boolean
}

export default function Switch({ value, onChange = () => {}, diabled = false }: Props) {
  return (
    <label className={styles.component}>
      <input type="checkbox" checked={value} onChange={() => onChange()} />
      <span
        className={styles.slider + " " + styles.round + " " + (diabled ? styles.sliderDisabled : styles.sliderDefault)}
      ></span>
    </label>
  )
}

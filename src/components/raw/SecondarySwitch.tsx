import styles from "./SecondarySwitch.module.css"

export interface Props {
  value: boolean
  onChange: () => void
}

export default function SecondarySwitch({ value, onChange }: Props) {
  return (
    <label className={styles.switch}>
      <input type="checkbox" checked={value} onChange={() => onChange()} />
      <span className={styles.slider + " " + styles.round}></span>
    </label>
  )
}

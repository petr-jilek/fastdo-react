import styles from "./ThemeSwitch.module.css"

export interface Props {
  value: boolean
  onChange?: () => void
}

export default function ThemeSwitch({ value, onChange = () => {} }: Props) {
  return (
    <label className={styles.component}>
      <input type="checkbox" checked={value} onChange={() => onChange()} />
      <span className={styles.slider + " " + styles.round}></span>
    </label>
  )
}

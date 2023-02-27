import styles from "./TextFieldSelect.module.css"

export interface Props {
  id: string
  name?: string
  label?: string
  options: Option[]
  value: any
  onChange?: (value: any) => void
}

export interface Option {
  value: any
  label: string
}

export default function TextFieldSelect({ id, name = "", label = "", options, value, onChange = () => {} }: Props) {
  return (
    <div className={styles.component}>
      <label htmlFor={id}>{label}</label>
      <select name={name ? name : id} id={id} value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

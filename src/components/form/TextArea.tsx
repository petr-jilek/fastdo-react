import styles from "./TextArea.module.css"

export interface Props {
  id?: string
  label?: string
  placeholder?: string
  value: string
  onChange: (value: any, e: React.ChangeEvent<HTMLTextAreaElement>) => void
  divStyle?: React.CSSProperties
  labelStyle?: React.CSSProperties
  textareaStyle?: React.CSSProperties
}

export default function TextArea({
  id = "",
  label = "",
  placeholder = "",
  value,
  onChange,
  divStyle = {},
  labelStyle = {},
  textareaStyle = {},
}: Props) {
  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = (e as any).target.value
    onChange(value, e)
  }

  return (
    <div className={styles.component} style={divStyle}>
      {label ? (
        <label htmlFor={id} style={labelStyle}>
          {label}
        </label>
      ) : (
        <></>
      )}
      <textarea id={id} placeholder={placeholder} value={value} onChange={handleOnChange} style={textareaStyle} />
    </div>
  )
}

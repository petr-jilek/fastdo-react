import styles from "./TextArea.module.css"
import { IOnTextChangeData } from "./TextField"

export interface Props {
  id?: string
  label?: string
  placeholder?: string
  value: string
  onTextChange: ({ e, value }: IOnTextChangeData) => void
  divStyle?: React.CSSProperties
  labelStyle?: React.CSSProperties
  textareaStyle?: React.CSSProperties
}

export default function TextArea({
  id = "",
  label = "",
  placeholder = "",
  value,
  onTextChange,
  divStyle = {},
  labelStyle = {},
  textareaStyle = {},
}: Props) {
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    var value = (e as any).target.value
    onTextChange({ e: e, value: value })
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
      <textarea id={id} placeholder={placeholder} value={value} onChange={onChange} style={textareaStyle} />
    </div>
  )
}

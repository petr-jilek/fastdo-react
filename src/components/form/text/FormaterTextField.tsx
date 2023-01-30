import TextField, { IOnTextChangeData } from "./TextField"

export interface Props {
  id?: string
  label?: string
  placeholder?: string
  value: string
  onTextChange: ({ e, value }: IOnTextChangeData) => void
  onEnter?: ({ e, value }: IOnTextChangeData) => void
  divStyle?: React.CSSProperties
  labelStyle?: React.CSSProperties
  inputStyle?: React.CSSProperties
  formater: (value: any) => any
  inverseFormater: (value: any) => any
}

export default function FormaterTextField({
  id = "",
  label = "",
  placeholder = "",
  value,
  onTextChange,
  onEnter = () => {},
  divStyle = {},
  labelStyle = {},
  inputStyle = {},
  formater,
  inverseFormater,
}: Props) {
  const onChange = ({ e, value }: IOnTextChangeData) => {
    onTextChange({ e: e, value: inverseFormater(value) })
  }

  return (
    <TextField
      id={id}
      label={label}
      placeholder={placeholder}
      value={formater(value)}
      onTextChange={onChange}
      onEnter={onEnter}
      divStyle={divStyle}
      labelStyle={labelStyle}
      inputStyle={inputStyle}
    />
  )
}

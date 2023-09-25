import TextField, { Props as TextFieldProps } from "./TextField"

export interface Props {
  textFieldProps?: TextFieldProps
  value: any
  onChange: (value: any, event: any) => void
  formater: (value: any) => any
  inverseFormater: (value: any) => any
}

export default function FormaterTextField({ textFieldProps, value, onChange, formater, inverseFormater }: Props) {
  return (
    <TextField
      {...textFieldProps}
      value={formater(value)}
      onChange={(value, e) => {
        onChange(inverseFormater(value), e)
      }}
    />
  )
}

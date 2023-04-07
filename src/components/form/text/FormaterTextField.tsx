import TextField, { Props as TextFieldProps, IOnTextChangeData } from "./TextField"

export interface Props {
  textFieldProps: TextFieldProps
  formater: (value: any) => any
  inverseFormater: (value: any) => any
}

export default function FormaterTextField({ textFieldProps, formater, inverseFormater }: Props) {
  return (
    <TextField
      {...textFieldProps}
      value={formater(textFieldProps.value)}
      onTextChange={({ e, value }: IOnTextChangeData) => {
        textFieldProps.onTextChange({ e: e, value: inverseFormater(value) })
      }}
    />
  )
}

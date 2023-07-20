import styles from "./CurrencyTextField.module.css"
import { removeAllNotNumber, removeAllWhitespaces, splitNumberBy3Digits } from "../../services/commonService"
import FormaterTextField from "./FormaterTextField"

export interface Props {
  value: number
  onChange: (value: number) => void
  label?: string
  currencyLabel?: string
}

export default function CurrencyTextField({ value, onChange, label = "", currencyLabel = "Kč" }: Props) {
  const handleOnChange = (value: any) => {
    value = removeAllNotNumber(value)
    value = removeAllWhitespaces(value)
    var numberValue = Number(value)
    if (isNaN(numberValue) === false) onChange(numberValue)
  }

  return (
    <div className={styles.component}>
      <FormaterTextField
        value={value}
        onChange={(value) => handleOnChange(value)}
        formater={(value) => splitNumberBy3Digits(value)}
        inverseFormater={(value) => value}
        textFieldProps={{
          value: "",
          onChange: () => {},
          label: label,
          inputStyle: {
            borderTopRightRadius: "0",
            borderBottomRightRadius: "0",
          },
        }}
      />
      <div className={styles.currencyLabelDiv}>{currencyLabel}</div>
    </div>
  )
}

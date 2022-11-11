import styles from "./TextFieldButtonRow.module.css"
import Button, { IButtonClickData } from "./buttons/Button"
import TextField, { IOnTextChangeData } from "./text/TextField"
import useIsLessWidth from "../../hooks/windowWidth"

export interface Props {
  buttonLabel: string
  buttonDisabled?: boolean
  placeholder?: string
  value?: any
  onButtonClick?: ({ e }: IButtonClickData) => void
  onTextChange?: ({ e, value }: IOnTextChangeData) => void
  onEnter?: () => void
}

export default function TextFieldButtonRow({
  buttonLabel,
  placeholder = "",
  value = "",
  onButtonClick = () => {},
  onTextChange = () => {},
  onEnter = () => {},
  buttonDisabled = false,
}: Props) {
  const { isLessWidth } = useIsLessWidth(500)

  return (
    <div className={styles.component}>
      <TextField
        placeholder={placeholder}
        value={value}
        onTextChange={onTextChange}
        onEnter={onEnter}
        inputStyle={{
          borderTopRightRadius: isLessWidth ? "" : "0",
          borderBottomRightRadius: isLessWidth ? "" : "0",
          margin: "0",
        }}
      />
      <Button
        label={buttonLabel}
        disabled={buttonDisabled}
        onClick={onButtonClick}
        style={{
          borderTopLeftRadius: isLessWidth ? "" : "0",
          borderBottomLeftRadius: isLessWidth ? "" : "0",
          border: "0",
        }}
      />
    </div>
  )
}

import styles from './TextFieldButtonRow.module.css'
import Button from './Button'
import TextField from './TextField'
import useIsLessWidth from '../../hooks/useIsLessWidth'

export interface Props {
  buttonLabel: string
  buttonDisabled?: boolean
  placeholder?: string
  value?: any
  onButtonClick?: (e: React.MouseEvent<HTMLElement>) => void
  onTextChange?: (value: any, e: React.InputHTMLAttributes<HTMLInputElement>) => void
  onEnter?: () => void
}

export default function TextFieldButtonRow({
  buttonLabel,
  placeholder = '',
  value = '',
  onButtonClick = () => {},
  onTextChange = () => {},
  onEnter = () => {},
  buttonDisabled = false
}: Props) {
  const { isLessWidth } = useIsLessWidth(500)

  return (
    <div className={styles.component}>
      <TextField
        placeholder={placeholder}
        value={value}
        onChange={onTextChange}
        onEnter={onEnter}
        inputStyle={{
          borderTopRightRadius: isLessWidth ? '' : '0',
          borderBottomRightRadius: isLessWidth ? '' : '0',
          margin: '0'
        }}
      />
      <Button
        label={buttonLabel}
        disabled={buttonDisabled}
        onClick={onButtonClick}
        styles={{
          button: {
            borderTopLeftRadius: isLessWidth ? '' : '0',
            borderBottomLeftRadius: isLessWidth ? '' : '0',
            border: '0'
          }
        }}
      />
    </div>
  )
}

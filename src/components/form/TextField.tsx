import { ColorType } from '../../common/enums/colorType'
import { useRef } from 'react'

export interface Props {
  colorType?: ColorType
  id?: string
  type?: string
  name?: string
  label?: string
  placeholder?: string
  value: string
  min?: any
  max?: any
  disabled?: boolean
  hintText?: string
  hintColorType?: ColorType
  onChange: (value: any, event: React.InputHTMLAttributes<HTMLInputElement>) => void
  onEnter?: (value: any, event: React.InputHTMLAttributes<HTMLInputElement>) => void
  onInputClick?: () => void
  styles?: StyleProps
}

export interface StyleProps {
  component?: React.CSSProperties
  label?: React.CSSProperties
  input?: React.CSSProperties
  hint?: React.CSSProperties
}

const TextField: React.FC<Props> = ({
  colorType = ColorType.primary,
  id = '',
  type = 'text',
  name = '',
  label = '',
  placeholder = '',
  value,
  min = 0,
  max = null,
  disabled = false,
  hintText = '',
  hintColorType = ColorType.info,
  onChange,
  onEnter = () => {},
  onInputClick = () => {},
  styles = {}
}: Props) => {
  const inputRef = useRef<null | HTMLInputElement>(null)

  const handleOnChange = (e: React.InputHTMLAttributes<HTMLInputElement>): void => {
    if (disabled) return

    const value = (e as any).target.value

    if (type === 'number' && parseInt(value) < min) {
      if (inputRef.current) inputRef.current.value = min.toString()
      return
    }

    onChange(value, e)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (disabled) return

    if (e.key === 'Enter') {
      onEnter((e.target as any).value, e)
    }
  }

  return (
    <div className="fd-text-field-container" style={styles.component}>
      {label && (
        <label htmlFor={id} className="fd-text-field-label" style={styles.label}>
          {label}
        </label>
      )}
      <input
        ref={inputRef}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
        onClick={onInputClick}
        min={min}
        max={max}
        disabled={disabled}
        className={'fd-text-field-input ' + `fd-text-field-box-shadow-focus-${colorType}`}
        style={styles.input}
      />
      {hintText && (
        <p className={'fd-text-field-hint ' + `fd-color-${hintColorType}`} style={styles.hint}>
          {hintText}
        </p>
      )}
    </div>
  )
}

export default TextField

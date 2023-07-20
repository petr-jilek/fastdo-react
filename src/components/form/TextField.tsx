import { ColorType } from '../../common/enums/colorType'
import styles from './TextField.module.css'
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
  onInputClick = () => {}
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
    <div className="fd-text-field-container">
      {label && (
        <label htmlFor={id} className="fd-text-field-label">
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
      />
      {hintText && <p className={'fd-text-field-hint ' + `fd-color-${colorType}`}>{hintText}</p>}
    </div>
  )
}

export default TextField

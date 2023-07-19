import React, { useMemo } from 'react'
import PrimaryCircularProgress from '../../raw/PrimaryCircularProgress'

export interface Props {
  label: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  onDoubleClick?: (e: React.MouseEvent<HTMLElement>) => void
  disabled?: boolean
  danger?: boolean
  outlined?: boolean
  loading?: boolean
  style?: React.CSSProperties
  loadingSize?: number
  loadingColor?: string
  children?: JSX.Element | null
}

const Button: React.FC<Props> = ({
  label,
  type = 'button',
  onClick = () => {},
  onDoubleClick = () => {},
  disabled = false,
  danger = false,
  outlined = false,
  loading = false,
  style = {},
  loadingSize = 30,
  children = null
}: Props) => {
  const getBtnClass = (disabled: boolean, outlined: boolean, danger: boolean): string => {
    let str = 'fd-button'
    if (disabled) str += '-disabled'
    if (danger && !disabled) str += '-danger'
    if (outlined) str += '-outlined'
    if (str === 'fd-button') str += '-default'
    return str
  }

  const btnClass = useMemo(() => getBtnClass(disabled, outlined, danger), [disabled, outlined, danger])

  const loadingColor = useMemo(
    () => getBtnClass(disabled, outlined, danger) + '-loading-color',
    [disabled, outlined, danger]
  )

  const handleClick = (e: React.MouseEvent<HTMLElement>): void => {
    if (type !== 'submit') e.preventDefault()
    if (disabled || loading) return
    onClick(e)
  }

  const handleDoubleClick = (e: React.MouseEvent<HTMLElement>): void => {
    if (type !== 'submit') e.preventDefault()
    if (disabled || loading) return
    onDoubleClick(e)
  }

  if (loading)
    return (
      <button type={type} className={'fd-button ' + btnClass} style={{ ...style, position: 'relative' }}>
        <div style={{ visibility: 'hidden' }}>{children ?? label}</div>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <PrimaryCircularProgress size={loadingSize} color={loadingColor} />
        </div>
      </button>
    )

  return (
    <button
      type={type}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      className={'fastdo-button ' + btnClass}
      style={style}
    >
      {children ?? label}
    </button>
  )
}

export default Button

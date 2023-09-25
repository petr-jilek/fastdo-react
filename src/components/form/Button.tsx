import React, { useMemo, useState } from 'react'
import { ColorType, PrimaryCircularProgress } from '../..'
import type { StyleProps as PrimaryCircularProgressStyleProps } from '../raw/PrimaryCircularProgress'

export interface Props {
  label: string
  type?: 'button' | 'submit' | 'reset'
  colorType?: ColorType
  outlined?: boolean
  disabled?: boolean
  loading?: boolean
  loadingSize?: number
  loadingColor?: string
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  onDoubleClick?: (e: React.MouseEvent<HTMLElement>) => void
  onMouseOver?: (e: React.MouseEvent<HTMLElement>) => void
  onMouseLeave?: (e: React.MouseEvent<HTMLElement>) => void
  onFocus?: (e: React.FocusEvent<HTMLElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLElement>) => void
  children?: React.ReactNode
  styles?: StyleProps
}

export interface StyleProps {
  button?: React.CSSProperties
  loadingPlaceholder?: React.CSSProperties
  loadingContainer?: React.CSSProperties
  loadingCircuralProgress?: PrimaryCircularProgressStyleProps
}

const Button: React.FC<Props> = ({
  label,
  type = 'button',
  colorType = ColorType.primary,
  outlined = false,
  disabled = false,
  loading = false,
  loadingSize = 20,
  loadingColor = '',
  children = null,
  onClick = () => {},
  onDoubleClick = () => {},
  onMouseOver = () => {},
  onMouseLeave = () => {},
  onFocus = () => {},
  onBlur = () => {},
  styles = {}
}) => {
  const [hover, setHover] = useState(false)
  const [focus, setFocus] = useState(false)

  const btnClass = useMemo(() => {
    let str = 'fd-btn-' + colorType
    if (outlined) str += '-outlined'
    return 'fd-btn ' + str
  }, [colorType, outlined])

  const loadingColorMemo = useMemo(() => {
    if (loadingColor) return loadingColor
    if (outlined) {
      if (hover || focus) return 'var(--fd-light-color)'
      return `var(--fd-${colorType}-color)`
    }
    return 'var(--fd-light-color)'
  }, [colorType, focus, hover, loadingColor, outlined])

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

  const handleMouseOver = (e: React.MouseEvent<HTMLElement>): void => {
    setHover(true)
    onMouseOver(e)
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>): void => {
    setHover(false)
    onMouseLeave(e)
  }

  const handleFocus = (e: React.FocusEvent<HTMLElement>): void => {
    setFocus(true)
    onFocus(e)
  }

  const handleBlur = (e: React.FocusEvent<HTMLElement>): void => {
    setFocus(false)
    onBlur(e)
  }

  if (loading)
    return (
      <button
        type={type}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={btnClass}
        style={{ ...styles.button, position: 'relative' }}
      >
        <div style={{ ...styles.loadingPlaceholder, visibility: 'hidden' }}>{children ?? label}</div>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            alignItems: 'center',
            ...styles.loadingContainer
          }}
        >
          <PrimaryCircularProgress
            size={loadingSize}
            color={loadingColorMemo}
            styles={styles.loadingCircuralProgress}
          />
        </div>
      </button>
    )

  return (
    <button
      type={type}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      className={btnClass}
      style={styles.button}
    >
      {children ?? label}
    </button>
  )
}

export default Button

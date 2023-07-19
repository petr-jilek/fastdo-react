import React from 'react'
import Button, { Props as ButtonProps } from '../components/form/buttons/Button'
import Spacer from '../components/general/Spacer'

export interface Props {
  onSubmit: () => void
  buttonProps: ButtonProps
  children: React.ReactNode
  preventDefault?: boolean
  style?: React.CSSProperties
}

export default function FormLayout({ onSubmit, buttonProps, children, preventDefault = false, style }: Props) {
  const submit = (e: any): void => {
    if (preventDefault) e.preventDefault()
    if (buttonProps.loading) return
    onSubmit()
  }

  return (
    <form onSubmit={submit} style={style}>
      {children}
      <Spacer />
      <Button {...buttonProps} />
    </form>
  )
}

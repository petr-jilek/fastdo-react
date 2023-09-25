import React from 'react'
import Button, { type Props as ButtonProps } from '../form/Button'
import Spacer from '../general/Spacer'

export interface Props {
  preventDefault?: boolean
  method?: 'post' | 'get' | 'put' | 'delete'
  onSubmit?: () => Promise<void>
  children: React.ReactNode
  componentProps?: ComponentProps
  styles?: StyleProps
}

export interface ComponentProps {
  button: ButtonProps
}

export interface StyleProps {
  form?: React.CSSProperties
}

const FormLayout: React.FC<Props> = ({
  preventDefault = true,
  method = 'post',
  onSubmit = () => Promise.resolve(),
  children,
  componentProps,
  styles
}: Props) => {
  const [loading, setLoading] = React.useState(false)

  const submit = async (e: any): Promise<void> => {
    setLoading(true)
    if (preventDefault) e.preventDefault()
    await onSubmit()
    setLoading(false)
  }

  return (
    <form method={method} onSubmit={submit} style={styles?.form}>
      {children}
      <Spacer />
      <Button type="submit" label="Submit" {...componentProps?.button} loading={loading} />
    </form>
  )
}

export default FormLayout

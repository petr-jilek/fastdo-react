import { useState } from 'react'
import FormLayout from './FormLayout'

export interface Props {
  submitLabel?: string
  onSubmit: () => Promise<void>
  style?: React.CSSProperties
  children: JSX.Element[] | JSX.Element
}

export default function FormLayoutWrapper({ onSubmit, submitLabel = 'Submit', style, children }: Props) {
  const [loadingSubmit, setLoadingSubmit] = useState(false)

  const submit = async () => {
    setLoadingSubmit(true)
    await onSubmit()
    setLoadingSubmit(false)
  }

  return (
    <FormLayout buttonProps={{ label: submitLabel, loading: loadingSubmit }} onSubmit={() => submit()} style={style}>
      {children}
    </FormLayout>
  )
}

import { useState } from "react"
import Input from "../components/form/buttons/Input"
import Spacer from "../components/general/Spacer"

export interface Props {
  children: JSX.Element[] | JSX.Element
  submitLabel: string
  onSubmit: () => Promise<void>
  style?: React.CSSProperties
}

export default function FormLayout({ children, submitLabel, onSubmit, style = {} }: Props) {
  const [sending, setSending] = useState(false)

  const submit = async (e: any) => {
    e.preventDefault()
    if (sending) return
    setSending(true)
    await onSubmit()
    setSending(false)
  }

  return (
    <form onSubmit={submit} style={style}>
      {children}
      <Spacer height={40} />
      <Input label={submitLabel} style={{ width: "100%" }} loading={sending} />
    </form>
  )
}

import { useState } from "react"
import Button from "../components/form/buttons/Button"
import Spacer from "../components/general/Spacer"

export interface Props {
  children: JSX.Element[] | JSX.Element
  submitLabel: string
  onSubmit: () => Promise<void>
}

export default function FormLayout({ children, submitLabel, onSubmit }: Props) {
  const [sending, setSending] = useState(false)

  const submit = async () => {
    setSending(true)
    await onSubmit()
    setSending(false)
  }

  return (
    <form>
      {children}
      <Spacer height={40} />
      <Button label={submitLabel} style={{ width: "100%" }} onClick={submit} loading={sending} />
    </form>
  )
}

import { useState } from "react"
import TextField from "../components/form/text/TextField"
import Spacer from "../components/general/Spacer"
import AuthLayout from "../layouts/AuthLayout"
import FormLayout from "../layouts/FormLayout"

export interface Props {
  onSubmit: (email: string, password: string) => Promise<void>
  title?: string
  emailLabel?: string
  passwordLabel?: string
  submitButtonLabel?: string
}

export default function LoginAdminPage({
  onSubmit,
  title = "Přihlášení do administrace",
  emailLabel = "Email",
  passwordLabel = "Heslo",
  submitButtonLabel = "Přihlásit se",
}: Props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loadingSubmit, setLoadingSubmit] = useState(false)

  const submit = async () => {
    setLoadingSubmit(true)
    await onSubmit(email, password)
    setLoadingSubmit(false)
  }

  return (
    <AuthLayout title={title}>
      <FormLayout submitLabel={submitButtonLabel} loadingSubmit={loadingSubmit} onSubmit={submit}>
        <TextField id="email" label={emailLabel} value={email} onChange={(value) => setEmail(value)} onEnter={submit} />
        <Spacer />

        <TextField
          id="password"
          label={passwordLabel}
          type="password"
          value={password}
          onChange={(value) => setPassword(value)}
          onEnter={submit}
        />
        <Spacer />
      </FormLayout>
    </AuthLayout>
  )
}

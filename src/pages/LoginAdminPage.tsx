import styles from "./LoginAdminPage.module.css"
import { useState } from "react"
import Button from "../components/form/buttons/Button"
import TextField from "../components/form/text/TextField"
import Spacer from "../components/general/Spacer"

export interface Props {
  onSubmit?: (email: string, password: string) => void
  header?: string
  emailLabel?: string
  passwordLabel?: string
  submitButtonLabel?: string
}

export default function LoginAdminPage({
  onSubmit = () => {},
  header = "Přihlášení do administrace",
  emailLabel = "Email",
  passwordLabel = "Heslo",
  submitButtonLabel = "Přihlásit se",
}: Props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submit = () => {
    onSubmit(email, password)
  }

  return (
    <div className={styles.component}>
      <h1>{header}</h1>
      <Spacer height={10} />

      <div className={styles.textFieldsDiv}>
        <TextField label={emailLabel} value={email} onTextChange={({ value }) => setEmail(value)} onEnter={submit} />
        <Spacer height={20} />

        <TextField
          label={passwordLabel}
          type="password"
          value={password}
          onTextChange={({ value }) => setPassword(value)}
          onEnter={submit}
        />
      </div>
      <Spacer height={40} />

      <Button label={submitButtonLabel} onClick={submit} />
      <Spacer height={20} />
    </div>
  )
}

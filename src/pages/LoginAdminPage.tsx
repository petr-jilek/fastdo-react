import styles from "./LoginAdminPage.module.css"
import { useState } from "react"
import { Button } from "../components/form/buttons/Button"
import TextField from "../components/form/text/TextField"
import Spacer from "../components/general/Spacer"
import { toast } from "react-toastify"
import history from "../router/history"

export interface Props {
  onSubmit?: (email: string, password: string) => Promise<boolean>
  header?: string
  emailLabel?: string
  passwordLabel?: string
  submitButtonLabel?: string
  historyPush?: boolean
  pushRoute?: string
  showToast?: boolean
  toastText?: string
}

export default function LoginAdminPage({
  onSubmit = async () => Promise.resolve(true),
  header = "Přihlášení do administrace",
  emailLabel = "Email",
  passwordLabel = "Heslo",
  submitButtonLabel = "Přihlásit se",
  historyPush = true,
  pushRoute = "/admin",
  showToast = true,
  toastText = "Uspěšně přihlášen",
}: Props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submit = async () => {
    var ok = await onSubmit(email, password)

    if (ok) {
      if (historyPush) history.push(pushRoute)
      if (showToast) toast.success(toastText)
    }
  }

  return (
    <div className={styles.component}>
      <h1>{header}</h1>
      <Spacer height={10} />

      <div className={styles.textFieldsDiv}>
        <TextField label={emailLabel} onTextChange={({ value }) => setEmail(value)} onEnter={submit} />
        <Spacer height={20} />

        <TextField label={passwordLabel} type="password" onTextChange={({ value }) => setPassword(value)} onEnter={submit} />
      </div>
      <Spacer height={40} />

      <Button label={submitButtonLabel} outlined={true} onClick={submit} />
      <Spacer height={20} />
    </div>
  )
}

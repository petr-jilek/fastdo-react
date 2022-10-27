import styles from "./ChangePasswordAdminPage.module.css"
import { useState } from "react"
import { Button } from "../components/form/buttons/Button"
import TextField from "../components/form/text/TextField"
import Spacer from "../components/general/Spacer"
import history from "../router/history"
import { toast } from "react-toastify"

export interface Props {
  onSubmit?: (password: string, newPassword: string, newPasswordConfirmation: string) => Promise<boolean>
  header?: string
  passwordLabel?: string
  newPasswordLabel?: string
  newPasswordConfirmationLabel?: string
  submitButtonLabel?: string
  historyPush?: boolean
  pushRoute?: string
  showToast?: boolean
  toastText?: string
}

export default function ChangePasswordAdminPage({
  onSubmit = async () => Promise.resolve(true),
  header = "Změna hesla",
  passwordLabel = "Heslo",
  newPasswordLabel = "Nové heslo",
  newPasswordConfirmationLabel = "Potvrzení nového hesla",
  submitButtonLabel = "Změnit heslo",
  historyPush = true,
  pushRoute = "/logout",
  showToast = true,
  toastText = "Heslo změněno",
}: Props) {
  const [password, setPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState("")

  const submit = async () => {
    var ok = await onSubmit(password, newPassword, newPasswordConfirmation)

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
        <TextField label={passwordLabel} type="password" onTextChange={({ value }) => setPassword(value)} onEnter={submit} />
        <Spacer height={20} />

        <TextField label={newPasswordLabel} type="password" onTextChange={({ value }) => setNewPassword(value)} onEnter={submit} />
        <Spacer height={20} />

        <TextField label={newPasswordConfirmationLabel} type="password" onTextChange={({ value }) => setNewPasswordConfirmation(value)} onEnter={submit} />
      </div>
      <Spacer height={40} />

      <Button label={submitButtonLabel} outlined={true} onClick={submit} />
      <Spacer height={20} />
    </div>
  )
}

import styles from "./ChangePasswordAdminPage.module.css"
import { useState } from "react"
import Button from "../components/form/buttons/Button"
import TextField from "../components/form/text/TextField"
import Spacer from "../components/general/Spacer"

export interface Props {
  onSubmit?: (password: string, newPassword: string, newPasswordConfirmation: string) => void
  header?: string
  passwordLabel?: string
  newPasswordLabel?: string
  newPasswordConfirmationLabel?: string
  submitButtonLabel?: string
}

export default function ChangePasswordAdminPage({
  onSubmit = () => {},
  header = "Změna hesla",
  passwordLabel = "Heslo",
  newPasswordLabel = "Nové heslo",
  newPasswordConfirmationLabel = "Potvrzení nového hesla",
  submitButtonLabel = "Změnit heslo",
}: Props) {
  const [password, setPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState("")

  const submit = async () => {
    onSubmit(password, newPassword, newPasswordConfirmation)
  }

  return (
    <div className={styles.component}>
      <h1>{header}</h1>
      <Spacer size={10} />

      <div className={styles.textFieldsDiv}>
        <TextField
          label={passwordLabel}
          type="password"
          value={password}
          onTextChange={({ value }) => setPassword(value)}
          onEnter={submit}
        />
        <Spacer size={20} />

        <TextField
          label={newPasswordLabel}
          type="password"
          value={newPassword}
          onTextChange={({ value }) => setNewPassword(value)}
          onEnter={submit}
        />
        <Spacer size={20} />

        <TextField
          label={newPasswordConfirmationLabel}
          type="password"
          value={newPasswordConfirmation}
          onTextChange={({ value }) => setNewPasswordConfirmation(value)}
          onEnter={submit}
        />
      </div>
      <Spacer size={40} />

      <Button label={submitButtonLabel} outlined={true} onClick={submit} />
      <Spacer size={20} />
    </div>
  )
}

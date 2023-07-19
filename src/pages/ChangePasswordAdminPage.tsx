import { useState } from 'react'
import TextField from '../components/form/text/TextField'
import Spacer from '../components/general/Spacer'
import AuthLayout from '../layouts/AuthLayout'
import FormLayout from '../layouts/FormLayout'

export interface Props {
  onSubmit: (password: string, newPassword: string, newPasswordConfirmation: string) => Promise<void>
  title?: string
  passwordLabel?: string
  newPasswordLabel?: string
  newPasswordConfirmationLabel?: string
  submitButtonLabel?: string
}

export default function ChangePasswordAdminPage({
  onSubmit,
  title = 'Změna hesla',
  passwordLabel = 'Heslo',
  newPasswordLabel = 'Nové heslo',
  newPasswordConfirmationLabel = 'Potvrzení nového hesla',
  submitButtonLabel = 'Změnit heslo'
}: Props) {
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState('')
  const [loadingSubmit, setLoadingSubmit] = useState(false)

  const submit = async () => {
    setLoadingSubmit(true)
    await onSubmit(password, newPassword, newPasswordConfirmation)
    setLoadingSubmit(false)
  }

  return (
    <AuthLayout title={title}>
      <FormLayout buttonProps={{ label: submitButtonLabel, loading: loadingSubmit }} onSubmit={submit}>
        <TextField
          label={passwordLabel}
          type="password"
          value={password}
          onChange={(value) => setPassword(value)}
          onEnter={submit}
        />
        <Spacer />

        <TextField
          label={newPasswordLabel}
          type="password"
          value={newPassword}
          onChange={(value) => setNewPassword(value)}
          onEnter={submit}
        />
        <Spacer />

        <TextField
          label={newPasswordConfirmationLabel}
          type="password"
          value={newPasswordConfirmation}
          onChange={(value) => setNewPasswordConfirmation(value)}
          onEnter={submit}
        />
      </FormLayout>
    </AuthLayout>
  )
}

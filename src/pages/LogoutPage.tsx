import { useEffect } from "react"
import { clearUser } from "../services/identityService"

export interface Props {
  history: any
  historyPush?: boolean
  pushRoute?: string
  showToast?: boolean
  toastText?: string
  onLogout?: () => void
}

export default function LogoutPage({
  history,
  historyPush = true,
  pushRoute = "/login",
  showToast = true,
  toastText = "Uspěšně odhlášen",
  onLogout = () => {},
}: Props) {
  useEffect(() => {
    clearUser()

    if (historyPush) history.push(pushRoute)

    onLogout()
  })

  return <></>
}

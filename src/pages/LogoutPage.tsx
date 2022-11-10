import { useEffect } from "react"
import { clearUser } from "../services/identityService"
import history from "../router/history"
import { toast } from "react-toastify"
import React from "react"

export interface Props {
  historyPush?: boolean
  pushRoute?: string
  showToast?: boolean
  toastText?: string
  onLogout?: () => void
}

export default function LogoutPage({ historyPush = true, pushRoute = "/login", showToast = true, toastText = "Uspěšně odhlášen", onLogout = () => {} }: Props) {
  useEffect(() => {
    clearUser()

    if (historyPush) history.push(pushRoute)
    if (showToast) toast.success(toastText)

    onLogout()
  })

  return <></>
}

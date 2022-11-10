import { useEffect } from "react"
import { clearUser } from "../services/identityService"

export interface Props {
  onLogout?: () => void
}

export default function LogoutPage({ onLogout = () => {} }: Props) {
  useEffect(() => {
    clearUser()
    onLogout()
  })

  return <></>
}

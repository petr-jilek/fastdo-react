import { useEffect } from "react"
import { clearAll } from "../services/identityService"

export interface Props {
  onLogout?: () => void
  navigateComponent?: any
}

export default function LogoutPage({ onLogout = () => {}, navigateComponent = <></> }: Props) {
  useEffect(() => {
    clearAll()
    onLogout()
  })

  return navigateComponent
}

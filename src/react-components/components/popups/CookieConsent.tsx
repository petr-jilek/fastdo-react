import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Cookies from "universal-cookie"
import { Button } from "../form/buttons/Button"
import Spacer from "../general/Spacer"
import styles from "./CookieConsent.module.css"

export const cookieConsentKey = "cookie_consent"

export interface Props {
  header?: string
  text?: string
  textLinkToCookiePage?: string
  linkToCookiePage?: string
  acceptButtonLabel?: string
  declineButtonLabel?: string
  onAccept?: () => void
  onDecline?: () => void
  onCookieSetTrue?: () => void
}

export default function CookieConsent({
  header = "Používáme cookies",
  text = "Soubory cookie používáme k analýze údajů o našich návštěvnících, ke zlepšení našich webových stránek, zobrazení personalizovaného obsahu a k tomu, abychom vám poskytli skvělý zážitek z webu.",
  textLinkToCookiePage = "Zjistit více",
  linkToCookiePage = "/personaldataprotection",
  acceptButtonLabel = "Příjmout",
  declineButtonLabel = "Odmítnout",
  onAccept = () => {},
  onDecline = () => {},
  onCookieSetTrue = () => {},
}: Props) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const cookies = new Cookies()
    var cookieConsentString = cookies.get(cookieConsentKey)

    if (cookieConsentString) {
      var cookieConsent = cookieConsentString === "true"
      if (cookieConsent) {
        onCookieSetTrue()
      }
    } else {
      setShow(true)
    }
  }, [setShow, onCookieSetTrue])

  const accept = () => {
    const cookies = new Cookies()
    cookies.set(cookieConsentKey, "true", { path: "/" })
    setShow(false)
    onAccept()
  }

  const decline = () => {
    const cookies = new Cookies()
    cookies.set(cookieConsentKey, "false", { path: "/" })
    setShow(false)
    onDecline()
  }

  if (show === false) return <></>

  return (
    <div className={styles.component}>
      <h4>{header}</h4>
      <p className={styles.textP}>{text}</p>
      <div className={styles.actionsDiv}>
        <Link to={linkToCookiePage} className={styles.link}>
          {textLinkToCookiePage}
        </Link>
        <div className={styles.buttonDiv}>
          <Button label={acceptButtonLabel} smallPadding={true} onClick={accept} />
          <Spacer vertical={false} width={10} />
          <Button label={declineButtonLabel} outlined={true} smallPadding={true} onClick={decline} />
        </div>
      </div>
    </div>
  )
}

import { Link } from "react-router-dom"
import { acceptAllCookies } from "../../services/cookiesService"
import { Button } from "../form/buttons/Button"
import Spacer from "../general/Spacer"
import styles from "./CookieConsent.module.css"

export const cookieConsentKey = "cookie_consent"

export interface Props {
  header?: string
  text?: string
  textLinkToCookiePage?: string
  linkToCookiePage?: string
  showLinkToCookiePage?: boolean
  acceptAllButtonLabel?: string
  settingsButtonLabel?: string
  showSettingsButtonLabel?: boolean
  onAcceptAll?: () => void
  onSettings?: () => void
  show?: boolean
}

export default function CookieConsent({
  header = "Používáme cookies",
  text = "Soubory cookie používáme k analýze údajů o našich návštěvnících, ke zlepšení našich webových stránek, zobrazení personalizovaného obsahu a k tomu, abychom vám poskytli skvělý zážitek z webu.",
  textLinkToCookiePage = "Zjistit více",
  linkToCookiePage = "/cookies",
  showLinkToCookiePage = true,
  acceptAllButtonLabel = "Příjmout vše",
  settingsButtonLabel = "Nastavení cookies",
  showSettingsButtonLabel = true,
  onAcceptAll = () => {},
  onSettings = () => {},
  show = false,
}: Props) {
  if (show === false) return <></>

  return (
    <div className={styles.component}>
      <h4>{header}</h4>
      <p className={styles.textP}>{text}</p>
      <div className={styles.actionsDiv}>
        {showLinkToCookiePage ? (
          <Link to={linkToCookiePage} className={styles.link}>
            {textLinkToCookiePage}
          </Link>
        ) : (
          <></>
        )}
        <div className={styles.buttonDiv}>
          {showSettingsButtonLabel ? (
            <Button label={settingsButtonLabel} outlined={true} smallPadding={true} onClick={onSettings} />
          ) : (
            <></>
          )}
          <Spacer vertical={false} width={20} />
          <div className={styles.mobileSpacerDiv}></div>
          <Button
            label={acceptAllButtonLabel}
            smallPadding={true}
            onClick={() => {
              acceptAllCookies()
              onAcceptAll()
            }}
          />
        </div>
      </div>
    </div>
  )
}

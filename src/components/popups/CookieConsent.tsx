import Card from "../cards/Card"
import Button from "../form/buttons/Button"
import Spacer from "../general/Spacer"
import styles from "./CookieConsent.module.css"

export const cookieConsentKey = "cookie_consent"

export interface Props {
  header?: string
  text?: string
  link?: any
  acceptAllButtonLabel?: string
  settingsButtonLabel?: string
  onAcceptAll?: () => void
  onShowSettings?: () => void
  show?: boolean
}

export default function CookieConsent({
  header = "Používáme cookies",
  text = "Soubory cookie používáme k analýze údajů o našich návštěvnících, ke zlepšení našich webových stránek, zobrazení personalizovaného obsahu a k tomu, abychom vám poskytli skvělý zážitek z webu.",
  acceptAllButtonLabel = "Příjmout vše",
  link = null,
  settingsButtonLabel = "Nastavení cookies",
  onAcceptAll = () => {},
  onShowSettings = () => {},
  show = false,
}: Props) {
  const buttonStyle: React.CSSProperties = { padding: "0.6rem 1.4rem" }

  const buttons = (
    <>
      {settingsButtonLabel ? (
        <>
          <Button label={settingsButtonLabel} onClick={onShowSettings} outlined style={buttonStyle} />
        </>
      ) : (
        <></>
      )}
      <div className={styles.acceptAllButtonDiv}>
        <Button label={acceptAllButtonLabel} onClick={onAcceptAll} style={buttonStyle} />
      </div>
    </>
  )

  if (show === false) return <></>

  return (
    <div className={styles.component}>
      <Card style={{ backgroundColor: "var(--cookie-consent-background-color)" }}>
        <h4 className={styles.header}>{header}</h4>
        <p className={styles.text}>{text}</p>
        <Spacer height={20} />
        <div className={styles.actionsDiv}>
          {link ? link : <></>}
          {link ? <div className={styles.buttonsDiv}>{buttons}</div> : buttons}
        </div>
        <Spacer />
      </Card>
    </div>
  )
}

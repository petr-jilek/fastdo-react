import Card from '../cards/Card'
import Button from '../form/buttons/Button'
import Spacer from '../general/Spacer'
import styles from './CookieConsent.module.css'

export interface Props {
  title?: string
  text?: string
  acceptAllButtonLabel?: string
  settingsButtonLabel?: string
  onAcceptAll?: () => void
  onShowSettings?: () => void
  children?: JSX.Element[] | JSX.Element
}

export default function CookieConsent({
  title = 'Používáme cookies',
  text = 'Soubory cookie používáme k analýze údajů o našich návštěvnících, ke zlepšení našich webových stránek, zobrazení personalizovaného obsahu a k tomu, abychom vám poskytli skvělý zážitek z webu.',
  acceptAllButtonLabel = 'Příjmout vše',
  settingsButtonLabel = 'Nastavení cookies',
  onAcceptAll = () => {},
  onShowSettings = () => {},
  children = <></>
}: Props) {
  const buttonStyle: React.CSSProperties = { padding: '0.6rem 1.4rem' }

  const buttons = (
    <>
      {settingsButtonLabel && (
        <>
          <Button label={settingsButtonLabel} onClick={onShowSettings} outlined styles={{ button: buttonStyle }} />
          <div className={styles.buttonSpacer}></div>
        </>
      )}
      {acceptAllButtonLabel && (
        <Button label={acceptAllButtonLabel} onClick={onAcceptAll} styles={{ button: buttonStyle }} />
      )}
    </>
  )

  return (
    <div className={styles.component}>
      <Card>
        <h3>{title}</h3>
        <Spacer />
        <p style={{ textAlign: 'start' }}>{text}</p>
        <Spacer size={20} />
        <div className={styles.buttonsContainer}>{buttons}</div>
        <>{children}</>
        <Spacer />
      </Card>
    </div>
  )
}

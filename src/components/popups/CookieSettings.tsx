import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { useState } from "react"
import Button from "../form/buttons/Button"
import Spacer from "../general/Spacer"
import styles from "./CookieSettings.module.css"
import { AiOutlineClose } from "react-icons/ai"
import PrimarySwitch from "../raw/PrimarySwitch"
import {
  acceptAllCookies,

} from "../../services/cookiesService"

export const cookieConsentKey = "cookie_consent"

export interface Props {
  show?: boolean
  onAcceptAll?: () => void
  onClose?: () => void
  onSaveSettings?: () => void
}

export default function CookieSettings({
  show = false,
  onAcceptAll = () => {},
  onClose = () => {},
  onSaveSettings = () => {},
}: Props) {
 // const [analyticalCookies, setAnalyticalCookies] = useState(getAnalyticalCookiesConsent())

  const saveSettings = () => {
   // setAnalyticalCookiesConsent(analyticalCookies)
    onSaveSettings()
  }

  const accordionElevation = 6

  const [analyticExpand, setAnalyticExpand] = useState(false)

  if (show === false) return <></>

  return (
    <div style={{ display: show ? "block" : "none" }} className={styles.component}>
      <div className={styles.headerDiv}>
        <p>Nastavení cookies</p>
        <AiOutlineClose
          style={{ height: "26px", width: "26px", cursor: "pointer", color: "var(--primary-black-color)" }}
          onClick={onClose}
        />
      </div>
      <div className={styles.contentDiv}>
        <p>
          Při návštěvě jakékoli webové stránky je pravděpodobné, že stránka získá nebo uloží informace na vašem
          prohlížeči, a to většinou ve formě souborů cookie. Můžou to být informace týkající se vás, vašich preferencí a
          zařízení, které používáte. Většinou to slouží k vylepšování stránky, aby fungovala podle vašich očekávání.
          Informace vás zpravidla neidentifikují jako jednotlivce, ale celkově mohou pomoci přizpůsobovat prostředí
          vašim potřebám. Respektujeme vaše právo na soukromí, a proto se můžete rozhodnout, že některé soubory cookie
          nebudete akceptovat. Když kliknete na různé tituly, dozvíte se více a budete moci nastavení změnit.
          Nezapomínejte ale na to, že zablokováním některých souborů cookie můžete ovlivnit, jak stránka funguje a jaké
          služby jsou vám nabízeny.
        </p>
        <Spacer height={20} />

        <div>
          <Accordion elevation={accordionElevation}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <div className={styles.accordionHeaderDiv}>
                <p>Nezbytné soubory cookies (vždy aktivní)</p>
                <PrimarySwitch value={true} disabled={true} />
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Tyto soubory cookie jsou nezbytné pro fungování webových stránek, není tedy možné je zakázat. Obvykle se
                nastavují v reakci na akci, kterou na webu sami provedete, jako je nastavení zabezpečení, přihlášení a
                vyplňování formulářů. Svůj prohlížeč můžete nastavit tak, aby blokoval soubory cookie nebo o nich
                zasílal upozornění. Mějte na paměti, že stránky nebudou bez těchto souborů fungovat správně. Tyto
                soubory cookie neukládají žádné informace, které lze přiřadit konkrétní osobě. Tyto soubory cookie
                můžeme nastavit my nebo poskytovatelé třetích stran, jejichž služby na webu využíváme.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* <Accordion expanded={analyticExpand} elevation={accordionElevation}>
            <AccordionSummary expandIcon={<ExpandMoreIcon onClick={() => setAnalyticExpand((_) => !_)} />}>
              <div className={styles.accordionHeaderDiv}>
                <p onClick={() => setAnalyticExpand((_) => !_)}>Analytické cookies</p>
                <PrimarySwitch
                  value={analyticalCookies}
                  onChange={() => {
                    setAnalyticalCookies((_) => !_)
                  }}
                />
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Tyto soubory cookie se používají ke zlepšení fungování webových stránek. Umožňují nám rozpoznat a
                sledovat počet návštěvníků a sledovat, jak návštěvníci web používají. Pomáhají nám zlepšovat způsob,
                jakým webové stránky fungují, například tím, že uživatelům umožňují snadno najít to, co hledají. Tyto
                soubory cookie neshromažďují informace, které by vás mohly přímo identifikovat. Pomocí těchto nástrojů
                analyzujeme a pravidelně zlepšujeme funkčnost našich webových stránek. Získané statistiky můžeme využít
                ke zlepšení uživatelského komfortu a k tomu, aby byla návštěva pro vás jako uživatele zajímavější.
                <br />
                <br />
                <span style={{ fontWeight: "700" }}>Google Analytics</span>
              </Typography>
            </AccordionDetails>
          </Accordion> */}
        </div>
        <Spacer height={40} />

        {/* <div className={styles.buttonsDiv}>
          <Button label="Uložit nastavení" smallPadding={true} outlined={true} onClick={saveSettings} />
          <Spacer vertical={false} width={20} />
          <div className={styles.mobileSpacerDiv}></div>
          <Button
            label="Příjmout vše"
            smallPadding={true}
            onClick={() => {
              setAnalyticalCookies(true)
              acceptAllCookies()
              onAcceptAll()
            }}
          />
        </div> */}
      </div>
    </div>
  )
}

import styles from "./NotFoundView.module.css"
import { AiOutlineSearch } from "react-icons/ai"
import { Button } from "../components/form/buttons/Button"
import Spacer from "../components/general/Spacer"

export interface Props {
  logo?: string | null
}

export default function NotFoundView({ logo = null }: Props) {
  return (
    <div className={styles.component}>
      {logo ? <img src={logo} alt="img" className={styles.logo} /> : <></>}

      <h1>Nenalezeno</h1>
      <AiOutlineSearch className={styles.icon} />

      <p>Požadovaná stránka nebyla nalezena</p>
      <Spacer height={40} />

      <Button label="Zpět na web" link="/" />
    </div>
  )
}

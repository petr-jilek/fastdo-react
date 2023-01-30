import styles from "./NotFoundView.module.css"
import { AiOutlineSearch } from "react-icons/ai"
import Spacer from "../components/general/Spacer"

export interface Props {
  logo?: string | null
  header?: string
  text?: string
  actionComponent?: any
}

export default function NotFoundView({
  logo = null,
  header = "Nenalezeno",
  text = "Požadovaná stránka nebyla nalezena",
  actionComponent = <></>,
}: Props) {
  return (
    <div className={styles.component}>
      {logo ? <img src={logo} alt="img" className={styles.logo} /> : <></>}

      <h1>{header}</h1>
      <AiOutlineSearch className={styles.icon} />

      <p>{text}</p>
      <Spacer height={40} />

      {actionComponent}
      <Spacer height={20} />
    </div>
  )
}

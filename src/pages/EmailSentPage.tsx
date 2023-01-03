import styles from "./EmailSentPage.module.css"
import { AiOutlineMail } from "react-icons/ai"
import { useParams } from "react-router-dom"
import Spacer from "../components/general/Spacer"

export interface Props {
  header?: string
  getTextComponent?: (email: string) => any
  actionComponent?: any
}

export default function EmailSentPage({
  header = "Email odeslán",
  getTextComponent = () => <></>,
  actionComponent = <></>,
}: Props) {
  const { email } = useParams()

  return (
    <div className={styles.component}>
      <h1>{header}</h1>

      <AiOutlineMail className={styles.emailIcon} />
      {getTextComponent(email ?? "")}
      <Spacer height={20} />

      {actionComponent}
    </div>
  )
}

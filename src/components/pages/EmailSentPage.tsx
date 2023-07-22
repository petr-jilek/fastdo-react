import styles from './EmailSentPage.module.css'
import { AiOutlineMail } from 'react-icons/ai'
import Spacer from '../general/Spacer'

export interface Props {
  header?: string
  getTextComponent?: (email: string) => any
  actionComponent?: any
}

export default function EmailSentPage({
  header = 'Email odeslán',
  getTextComponent = () => <></>,
  actionComponent = <></>
}: Props) {
  const searchParams = new URLSearchParams(document.location.search)
  const email = searchParams.get('email')

  return (
    <div className={styles.component}>
      <h1>{header}</h1>

      <AiOutlineMail className={styles.emailIcon} />
      {getTextComponent(email ?? '')}
      <Spacer size={20} />

      {actionComponent}
    </div>
  )
}

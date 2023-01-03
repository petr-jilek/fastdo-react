import styles from "./VerificationResultPage.module.css"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { AiOutlineCheckCircle } from "react-icons/ai"
import { BiErrorCircle } from "react-icons/bi"
import CircularProgressPage from "../components/raw/CircularProgressPage"
import Spacer from "../components/general/Spacer"

export interface Props {
  header?: string
  getResult: (email: string, token: string) => Promise<boolean>
  successText?: string
  errorText?: string
  getActionComponent?: (success: boolean) => any
}

export default function VerificationResultPage({
  header = "Ověření",
  getResult,
  successText = "Ověřeno",
  errorText = "Chyba",
  getActionComponent = (_) => <></>,
}: Props) {
  const { email, token } = useParams()

  const [loading, setLoading] = useState(true)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    const verify = async () => {
      setSuccess(await getResult(email ?? "", token ?? ""))
      setLoading(false)
    }

    verify()
  }, [email, token, getResult])

  if (loading) return <CircularProgressPage />

  return (
    <div className={styles.component}>
      <h1>{header}</h1>
      {success ? (
        <>
          <AiOutlineCheckCircle className={styles.successIcon} />
          <h2>{successText}</h2>
        </>
      ) : (
        <>
          <BiErrorCircle className={styles.errorIcon} />
          <h2>{errorText}</h2>
        </>
      )}
      <Spacer height={20} />

      {getActionComponent(success)}
    </div>
  )
}

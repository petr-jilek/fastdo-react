import { AiOutlineFilePdf } from "react-icons/ai"
import styles from "./PdfDownloadRowItem.module.css"

export interface Props {
  name: string
  pdfUrl: string
}

export default function PdfDownloadRowItem({ name, pdfUrl }: Props) {
  return (
    <div className={styles.component}>
      <p className={styles.label}>{name}</p>
      <AiOutlineFilePdf className={styles.icon} onClick={() => window.open(pdfUrl)} />
    </div>
  )
}

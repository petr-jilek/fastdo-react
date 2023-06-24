import { AiOutlineClose } from "react-icons/ai"
import styles from "./FullImageModal.module.css"

export interface Props {
  imgSrc: string
  imgAlt: string
  imgTitle: string
  imgLoading?: "lazy" | "eager"
  onClose: () => void
}

export default function FullImageModal({ imgSrc, imgAlt, imgTitle, imgLoading = "lazy", onClose }: Props) {
  return (
    <div className={styles.component}>
      <AiOutlineClose className={styles.closeIcon} onClick={onClose} />
      <img src={imgSrc} alt={imgAlt} loading={imgLoading} title={imgTitle} />
    </div>
  )
}

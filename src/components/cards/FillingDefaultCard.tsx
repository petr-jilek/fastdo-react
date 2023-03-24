import Spacer from "../general/Spacer"
import styles from "./FillingDefaultCard.module.css"

export interface Props {
  imgSrc?: string
  imgAlt?: string
  header?: string
  body?: any
  action?: any
}

export default function FillingDefaultCard({
  imgSrc = "",
  imgAlt = "",
  header = "",
  body = <></>,
  action = <></>,
}: Props) {
  return (
    <div className={styles.component}>
      {imgSrc && <img src={imgSrc} alt={imgAlt ? imgAlt : "img"} />}
      {header && <h2>{header}</h2>}
      <Spacer size={20} />
      {body}
      <Spacer size={20} />
      {action}
    </div>
  )
}

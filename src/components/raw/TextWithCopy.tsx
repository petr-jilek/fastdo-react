import styles from "./TextWithCopy.module.css"
import { AiOutlineCopy } from "react-icons/ai"

export interface Props {
  text: string
  style?: React.CSSProperties
  textStyle?: React.CSSProperties
  copyIconStyle?: React.CSSProperties
  onCopyClick?: () => void
}

export default function TextWithCopy({
  text,
  style = {},
  textStyle = {},
  copyIconStyle = {},
  onCopyClick = () => {},
}: Props) {
  return (
    <div className={styles.component} style={style}>
      <p className={styles.text} style={textStyle}>
        {text}
      </p>
      <AiOutlineCopy
        className={styles.copyIcon}
        style={copyIconStyle}
        onClick={() => {
          navigator.clipboard.writeText(text)
          onCopyClick()
        }}
      />
    </div>
  )
}

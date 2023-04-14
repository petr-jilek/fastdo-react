import styles from "./TextWithCopy.module.css"
import { AiOutlineCheck, AiOutlineCopy } from "react-icons/ai"
import { useState } from "react"

export interface Props {
  text: string
  style?: React.CSSProperties
  textStyle?: React.CSSProperties
  copyIconStyle?: React.CSSProperties
  doneIconStyle?: React.CSSProperties
  onCopyClick?: () => void
}

export default function TextWithCopy({
  text,
  style = {},
  textStyle = {},
  copyIconStyle = {},
  doneIconStyle = {},
  onCopyClick = () => {},
}: Props) {
  const [copied, setCopied] = useState(false)

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    onCopyClick()
  }

  return (
    <div className={styles.component} style={style} onMouseLeave={() => setCopied(false)}>
      <p className={styles.text} style={textStyle}>
        {text}
      </p>
      <div className={styles.iconDiv}>
        {copied ? (
          <AiOutlineCheck className={styles.icon + " " + styles.iconDone} style={doneIconStyle} />
        ) : (
          <AiOutlineCopy
            className={styles.icon + " " + styles.iconCopy}
            style={copyIconStyle}
            onClick={handleCopyClick}
          />
        )}
      </div>
    </div>
  )
}

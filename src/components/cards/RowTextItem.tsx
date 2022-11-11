import HrSpacer from "../general/HrSpacer"
import styles from "./RowTextItem.module.css"

export interface Props {
  leftText: string
  rightText: string
  leftTextStyle?: React.CSSProperties
  rightTextStyle?: React.CSSProperties
}

export default function RowTextItem({ leftText, rightText, leftTextStyle = {}, rightTextStyle = {} }: Props) {
  return (
    <div className={styles.component}>
      <div className={styles.contentDiv}>
        <p style={leftTextStyle}>{leftText}</p>
        <p style={rightTextStyle}>{rightText}</p>
      </div>
      <HrSpacer />
    </div>
  )
}

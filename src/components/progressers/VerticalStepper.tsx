import { Fragment } from "react"
import styles from "./VerticalStepper.module.css"

export interface Props {
  items: StepperItem[]
}

export interface StepperItem {
  label: string
  isDone: boolean
}

export default function VerticalStepper({ items }: Props) {
  return (
    <div>
      {items.map((item, index) => (
        <Fragment key={index}>
          <div className={styles.row}>
            <div className={item.isDone ? styles.circleDone : styles.circle}></div>
            <p className={item.isDone ? styles.labelDone : styles.label}>{item.label}</p>
          </div>
          {index !== items.length - 1 && <div className={item.isDone ? styles.lineDivDone : styles.lineDiv}></div>}
        </Fragment>
      ))}
    </div>
  )
}

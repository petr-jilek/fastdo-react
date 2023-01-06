import { Fragment } from "react"
import styles from "./VerticalStepper.module.css"

export interface Props {
  items: StepperItem[]
  onItemClick?: (id: string) => void
}

export interface StepperItem {
  id: string
  label: string
  status: StepperItemStatus
}

export enum StepperItemStatus {
  todo = 0,
  focused = 1,
  done = 2,
}

export default function VerticalStepper({ items, onItemClick = () => {} }: Props) {
  const getCircleClass = (status: StepperItemStatus) => {
    switch (status) {
      case StepperItemStatus.todo:
        return styles.circle
      case StepperItemStatus.focused:
        return styles.circleFocused
      case StepperItemStatus.done:
        return styles.circleDone
    }
  }

  const getLabelClass = (status: StepperItemStatus) => {
    switch (status) {
      case StepperItemStatus.todo:
        return styles.label
      case StepperItemStatus.focused:
        return styles.labelDone
      case StepperItemStatus.done:
        return styles.labelDone
    }
  }

  const getLineElement = (status: StepperItemStatus, index: number) => {
    if (index === items.length - 1) return <></>
    switch (status) {
      case StepperItemStatus.todo:
        return index < items.length - 1 ? <div className={styles.lineDiv}></div> : <></>
      case StepperItemStatus.focused:
        return <div className={styles.lineDiv}></div>
      case StepperItemStatus.done:
        return <div className={styles.lineDivDone}></div>
    }
  }

  return (
    <div>
      {items.map((item, index) => (
        <Fragment key={item.id}>
          <div className={styles.row} onClick={() => onItemClick(item.id)}>
            <div className={getCircleClass(item.status)}></div>
            <p className={getLabelClass(item.status)}>{item.label}</p>
          </div>
          {getLineElement(item.status, index)}
        </Fragment>
      ))}
    </div>
  )
}

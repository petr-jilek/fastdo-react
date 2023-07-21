import { Fragment } from 'react'
import styles from './VerticalStepper.module.css'
import { IoMdDoneAll, IoMdBuild } from 'react-icons/io'

export const getStepperItems = (
  items: StepperRawItem[],
  focusedId: string,
  doneId?: string | undefined
): StepperItem[] => {
  console.log(focusedId, doneId)

  let doneIdIndex = -1
  for (let i = 0; i < items.length; i++) {
    if (items[i].id === doneId) {
      doneIdIndex = i
      break
    }
  }

  const newItems: StepperItem[] = []
  let done = true
  for (let i = 0; i < items.length; i++) {
    if (items[i].id === focusedId) {
      newItems.push({
        ...items[i],
        status: StepperItemStatus.focused,
        iconStatus: doneIdIndex >= i ? StepperItemStatus.done : StepperItemStatus.focused
      })
      done = false
    } else if (done) {
      newItems.push({
        ...items[i],
        status: StepperItemStatus.done,
        iconStatus: doneIdIndex >= i ? StepperItemStatus.done : StepperItemStatus.todo
      })
    } else {
      newItems.push({
        ...items[i],
        status: StepperItemStatus.todo,
        iconStatus: doneIdIndex >= i ? StepperItemStatus.done : StepperItemStatus.todo
      })
    }
  }

  return newItems
}

export interface Props {
  items: StepperItem[]
  onItemClick?: (id: string) => void
}

export interface StepperRawItem {
  id: string
  label: string
}

export interface StepperItem extends StepperRawItem {
  status: StepperItemStatus
  iconStatus: StepperItemStatus
}

export enum StepperItemStatus {
  todo = 0,
  focused = 1,
  done = 2
}

const VerticalStepper: React.FC<Props> = ({ items, onItemClick = () => {} }: Props) => {
  const getCircleClass = (status: StepperItemStatus): string => {
    switch (status) {
      case StepperItemStatus.todo:
        return styles.circle
      case StepperItemStatus.focused:
        return styles.circleFocused
      case StepperItemStatus.done:
        return styles.circleDone
    }
  }

  const getLabelClass = (status: StepperItemStatus): string => {
    switch (status) {
      case StepperItemStatus.todo:
        return styles.label
      case StepperItemStatus.focused:
        return styles.labelDone
      case StepperItemStatus.done:
        return styles.labelDone
    }
  }

  const getLineElement = (status: StepperItemStatus, index: number): React.ReactNode => {
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

  const getIconElement = (status: StepperItemStatus): React.ReactNode => {
    switch (status) {
      case StepperItemStatus.todo:
        return <></>
      case StepperItemStatus.focused:
        return <IoMdBuild className={styles.focusedIcon} />
      case StepperItemStatus.done:
        return <IoMdDoneAll className={styles.doneIcon} />
    }
  }

  return (
    <div>
      {items.map((item, index) => (
        <Fragment key={item.id}>
          <div className={styles.row} onClick={() => onItemClick(item.id)}>
            <div className={getCircleClass(item.status)}></div>
            <p className={getLabelClass(item.status)}>{item.label}</p>
            {getIconElement(item.iconStatus)}
          </div>
          {getLineElement(item.status, index)}
        </Fragment>
      ))}
    </div>
  )
}

export default VerticalStepper

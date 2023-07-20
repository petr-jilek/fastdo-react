import styles from './Expandable.module.css'
import { useState } from 'react'
import Card from '../cards/Card'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'

export interface Props {
  title: string
  children: JSX.Element[] | JSX.Element
  defaultExpanded?: boolean
}

export default function Expandable({ title, children, defaultExpanded = false }: Props) {
  const [expanded, setExpanded] = useState(defaultExpanded)

  return (
    <Card styles={{ card: { backgroundColor: expanded ? '#FFFFFF' : '#EFEFEF', transition: '.3s' } }}>
      <div className={styles.componentDiv}>
        <div className={styles.headerDiv}>
          <p className={styles.headerText}>{title}</p>
          {expanded ? (
            <BsChevronUp className={styles.expandIcon} onClick={() => setExpanded(false)} />
          ) : (
            <BsChevronDown className={styles.expandIcon} onClick={() => setExpanded(true)} />
          )}
        </div>
        {expanded && <div className={styles.childrenDiv}>{children}</div>}
      </div>
    </Card>
  )
}

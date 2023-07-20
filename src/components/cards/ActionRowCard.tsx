import React from 'react'
import styles from './ActionRowCard.module.css'
import PrimaryCircularProgress from '../raw/PrimaryCircularProgress'
import Card from './Card'

export interface Props {
  id: any
  label?: string
  labelComponent?: any
  actionItems?: ActionItem[]
  actionComponent?: any
}

export interface ActionItem {
  icon: any
  onClick: (id: string) => void
  loading?: boolean
}

export default function ActionRowCard({
  id,
  label = '',
  labelComponent = null,
  actionItems = [],
  actionComponent = <></>
}: Props) {
  return (
    <Card>
      <div className={styles.containerDiv}>
        {labelComponent ? labelComponent : <p>{label}</p>}
        <div className={styles.mobileSpacerDiv}></div>
        <div className={styles.actionsDiv}>
          {actionComponent}
          {actionItems.map((item, index) => (
            <React.Fragment key={index}>
              {item.loading ? (
                <div className={styles.loadingContainer}>
                  <PrimaryCircularProgress size={20} />
                </div>
              ) : (
                <item.icon
                  className={styles.actionIcon}
                  onClick={() => item.onClick(id)}
                  style={{ marginLeft: '10px' }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </Card>
  )
}

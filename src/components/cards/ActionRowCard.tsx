import React from "react"
import styles from "./ActionRowCard.module.css"
import Card2 from "./Card2"
import PrimaryCircularProgress from "../raw/PrimaryCircularProgress"

export interface Props {
  id: string
  label: string
  actionItems?: ActionItem[]
}

export interface ActionItem {
  icon: any
  onClick: (id: string) => void
  loading?: boolean
}

export default function ActionRowCard({ id, label, actionItems = [] }: Props) {
  return (
    <Card2>
      <div className={styles.containerDiv}>
        <p>{label}</p>
        <div className={styles.actionsDiv}>
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
                  style={{ marginLeft: "10px" }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </Card2>
  )
}

import React from "react"
import styles from "./ActionRowCard.module.css"
import Card from "./Card"

export interface Props {
  id: string
  label: string
  actionItems?: ActionItem[]
}

export interface ActionItem {
  icon: any
  onClick: (id: string) => void
}

export default function ActionRowCard({ id, label, actionItems = [] }: Props) {
  return (
    <Card>
      <div className={styles.containerDiv}>
        <p>{label}</p>
        <div className={styles.actionsDiv}>
          {actionItems.map((item, index) => (
            <React.Fragment key={index}>
              <item.icon
                className={styles.actionIcon}
                onClick={() => item.onClick(id)}
                style={{ marginLeft: "10px" }}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </Card>
  )
}

import React from "react"
import HrSpacer from "../general/HrSpacer"
import styles from "./Radio.module.css"

export interface Props {
  options: RadioOption[]
  value: string
  onClick: (value: string) => void
}

export interface RadioOption {
  id: string
  value: string
  label: string
}

export default function Radio({ options, value, onClick }: Props) {
  return (
    <div className={styles.component}>
      {options.map((option, index) => (
        <React.Fragment key={option.id}>
          <div className={styles.option}>
            <input
              type="radio"
              id={option.id}
              value={option.value}
              checked={option.value === value}
              onChange={() => onClick(option.value)}
            />
            <label htmlFor={option.value}>{option.label}</label>
          </div>
          {index !== options.length - 1 && <HrSpacer />}
        </React.Fragment>
      ))}
    </div>
  )
}

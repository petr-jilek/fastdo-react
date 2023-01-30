import React from "react"
import HrSpacer from "../general/HrSpacer"
import styles from "./Radio.module.css"

export interface Props {
  options: RadioOption[]
  value: any
  onChange: (value: any) => void
}

export interface RadioOption {
  id: string
  value: any
  label: string
}

export default function Radio({ options, value, onChange }: Props) {
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
              onChange={() => onChange(option.value)}
            />
            <label htmlFor={option.id}>{option.label}</label>
          </div>
          {index !== options.length - 1 && <HrSpacer />}
        </React.Fragment>
      ))}
    </div>
  )
}

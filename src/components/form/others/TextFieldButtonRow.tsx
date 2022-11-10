import styles from "./TextFieldButtonRow.module.css"
import Button, { IButtonClickData } from "../buttons/Button"
import TextField, { IOnTextChangeData } from "../text/TextField"
import { useEffect, useState } from "react"

export interface Props {
  buttonLabel: string
  placeholder?: string
  onButtonClick?: ({ e }: IButtonClickData) => void
  onTextChange?: ({ e, value }: IOnTextChangeData) => void
  onEnter?: () => void
  light?: boolean
}

export default function TextFieldButtonRow({
  buttonLabel,
  placeholder = "",
  onButtonClick = () => {},
  onTextChange = () => {},
  onEnter = () => {},
  light = false,
}: Props) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    handleResize()
  })

  const handleResize = () => {
    if (window.innerWidth < 500) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  return (
    <div className={styles.component}>
      {/* <TextField
            placeholder={placeholder}
            onTextChange={onTextChange}
            onEnter={onEnter}
            rightBorderRadius={isMobile ? 20 : 0}
            light={light}
        /> */}
      {/* <Button
            label={buttonLabel}
            onClick={onButtonClick}
            leftBorderRadius={isMobile}
        /> */}
    </div>
  )
}

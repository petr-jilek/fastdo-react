import styles from "./PrimaryHomeLayout.module.css"
import Spacer from "../components/general/Spacer"

export interface Props {
  header?: string
  centerItems?: boolean
  children: JSX.Element[] | JSX.Element
}

export default function PrimaryHomeLayout({ header = "", centerItems = false, children }: Props) {
  const getComponentClass = () => {
    let className = styles.component
    if (centerItems) className += " " + styles.centerItems
    return className
  }

  return (
    <div className={getComponentClass()}>
      {header && (
        <>
          <h1>{header}</h1>
          <Spacer size={20} />
        </>
      )}
      {children}
    </div>
  )
}
